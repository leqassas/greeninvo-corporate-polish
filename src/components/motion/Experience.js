import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { EASE, EASE_IN_OUT } from "@/styles/tokens";

const ExperienceContext = createContext({ lenis: null, navigate: null, ready: true });
export const useExperience = () => useContext(ExperienceContext);

// Curtain states. "instant" covers without animating (first paint / back button).
const curtain = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", transition: { duration: 0 } },
  instant: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0 } },
  cover: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.7, ease: EASE_IN_OUT } },
  reveal: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.9, delay: 0.15, ease: EASE_IN_OUT },
  },
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Owns smooth scrolling (Lenis) and the branded page-transition curtain.
 * The curtain doubles as the intro/preloader on first load.
 */
export function ExperienceProvider({ children }) {
  const router = useRouter();
  const [lenis, setLenis] = useState(null);
  const [phase, setPhase] = useState("instant");
  const pendingHref = useRef(null);

  // Smooth scroll — skipped entirely for users who prefer reduced motion.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const instance = new Lenis({ lerp: 0.1, smoothWheel: true });
    let frame;
    const raf = (time) => {
      instance.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    setLenis(instance);
    return () => {
      cancelAnimationFrame(frame);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  // Intro: hold the brand curtain briefly, then lift it.
  useEffect(() => {
    const t = setTimeout(() => setPhase("reveal"), prefersReducedMotion() ? 0 : 450);
    return () => clearTimeout(t);
  }, []);

  // Freeze scrolling while the curtain is up.
  useEffect(() => {
    if (!lenis) return;
    if (phase === "cover" || phase === "instant") lenis.stop();
    else lenis.start();
  }, [phase, lenis]);

  useEffect(() => {
    const onStart = () => {
      // Browser back/forward doesn't go through navigate(): cover instantly.
      if (!pendingHref.current) setPhase((p) => (p === "cover" ? p : "instant"));
    };
    const onDone = () => {
      pendingHref.current = null;
      if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
      setPhase("reveal");
    };
    router.events.on("routeChangeStart", onStart);
    router.events.on("routeChangeComplete", onDone);
    router.events.on("routeChangeError", onDone);
    return () => {
      router.events.off("routeChangeStart", onStart);
      router.events.off("routeChangeComplete", onDone);
      router.events.off("routeChangeError", onDone);
    };
  }, [router, lenis]);

  const navigate = useCallback(
    (href) => {
      const clean = (p) => decodeURI(p.split("#")[0].split("?")[0]) || "/";
      if (clean(href) === clean(router.asPath)) {
        lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (prefersReducedMotion()) {
        router.push(href);
        return;
      }
      pendingHref.current = href;
      setPhase("cover");
    },
    [router, lenis]
  );

  const onCurtainDone = (definition) => {
    if (definition === "cover" && pendingHref.current) {
      router.push(pendingHref.current, undefined, { scroll: false });
    }
    if (definition === "reveal") setPhase("hidden");
  };

  const ready = phase === "reveal" || phase === "hidden";

  return (
    <ExperienceContext.Provider value={{ lenis, navigate, ready }}>
      {children}
      <motion.div
        aria-hidden="true"
        initial="instant"
        animate={phase}
        variants={curtain}
        onAnimationComplete={onCurtainDone}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2000,
          background: "#03989e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: ready ? "none" : "auto",
        }}
      >
        <motion.img
          src="/1.svg"
          alt=""
          initial={{ opacity: 1, y: 0 }}
          animate={ready ? { opacity: 0, y: -24 } : { opacity: 1, y: 0 }}
          transition={{ duration: ready ? 0.5 : 0.6, ease: EASE }}
          style={{ width: "min(15rem, 55vw)" }}
        />
      </motion.div>
    </ExperienceContext.Provider>
  );
}

/**
 * Drop-in replacement for next/link that plays the curtain before routing.
 * External links, new-tab clicks and modifier-clicks behave natively.
 */
export const TLink = forwardRef(function TLink({ href, onClick, target, children, ...rest }, ref) {
  const { navigate } = useExperience();
  const handleClick = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || !navigate) return;
    const external = /^(https?:|mailto:|tel:)/.test(href) || target === "_blank";
    if (external || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(href);
  };
  return (
    <NextLink ref={ref} href={href} target={target} onClick={handleClick} {...rest}>
      {children}
    </NextLink>
  );
});
