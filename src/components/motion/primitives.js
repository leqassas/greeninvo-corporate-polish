import { Fragment, useRef } from "react";
import { Box } from "@chakra-ui/react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { MBox, MImg } from "@/styles/Motion";
import { EASE, EASE_IN_OUT } from "@/styles/tokens";

/**
 * Masked, word-by-word slide-up reveal. "\n" in `text` forces a line break.
 * Pass `play` to control it manually (e.g. hero waits for the intro curtain);
 * otherwise it plays when scrolled into view.
 */
export function RevealText({
  text,
  play,
  delay = 0,
  stagger = 0.045,
  duration = 0.9,
  amount = 0.5,
}) {
  const lines = String(text).split("\n");
  const controlled = typeof play === "boolean";
  const trigger = controlled
    ? { animate: play ? "visible" : "hidden" }
    : { whileInView: "visible", viewport: { once: true, amount } };

  return (
    <motion.span
      style={{ display: "inline" }}
      initial="hidden"
      {...trigger}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {lines.map((line, li) => (
        <span key={li} style={{ display: lines.length > 1 ? "block" : "inline" }}>
          {line.split(" ").map((word, wi, arr) => (
            <Fragment key={wi}>
              <span
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  verticalAlign: "top",
                  paddingBottom: "0.12em",
                  marginBottom: "-0.12em",
                }}
              >
                <motion.span
                  style={{ display: "inline-block", willChange: "transform" }}
                  variants={{
                    hidden: { y: "115%" },
                    visible: { y: "0%", transition: { duration, ease: EASE } },
                  }}
                >
                  {word}
                </motion.span>
              </span>
              {wi < arr.length - 1 && " "}
            </Fragment>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

/** Soft fade + rise for blocks of content. */
export function Reveal({ children, delay = 0, y = 30, duration = 0.9, amount = 0.2, ...rest }) {
  return (
    <MBox
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MBox>
  );
}

/** Thin rule that draws itself in from the left. */
export function DrawLine({ color = "blackAlpha.200", delay = 0, ...rest }) {
  return (
    <MBox
      h="1px"
      w="full"
      bg={color}
      style={{ transformOrigin: "left center" }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.4, delay, ease: EASE_IN_OUT }}
      {...rest}
    />
  );
}

/**
 * Image that wipes in from the bottom, settles from a slight zoom, and then
 * drifts with a gentle parallax while scrolling.
 */
export function ImageReveal({ src, alt, delay = 0, parallax = true, rounded, ...rest }) {
  const ref = useRef(null);

  return (
    <MBox
      ref={ref}
      pos="relative"
      overflow="hidden"
      rounded={rounded}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      <MImg
        src={src}
        alt={alt}
        w="full"
        h="full"
        objectFit="cover"
      />
    </MBox>
  );
}

/** Words brighten one by one as the block scrolls through the viewport. */
export function ScrollWords({ text, from = 0.2 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.5"] });
  if (reduce) return <>{text}</>;

  const words = text.split(" ");
  return (
    <Box as="span" ref={ref} display="block">
      {words.map((word, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          from={from}
          last={i === words.length - 1}
        >
          {word}
        </Word>
      ))}
    </Box>
  );
}

function Word({ children, progress, range, from, last }) {
  const opacity = useTransform(progress, range, [from, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>
      {!last && " "}
    </>
  );
}

/** Element gently follows the cursor while hovered (desktop only by nature). */
export function Magnetic({ children, strength = 0.25 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}

/** Hover affordance for "arrow + label" links: arrow nudges forward. */
export const arrowLinkSx = {
  p: 0,
  ".chakra-button__icon": {
    transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  "&:hover .chakra-button__icon": {
    transform: "translateX(6px)",
  },
};
