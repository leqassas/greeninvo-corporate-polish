import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label, .swiper";

/**
 * Subtle 20px follower. Expands into an outline ring over interactive
 * elements. Only mounts on devices with a fine pointer that can hover, so it
 * never gets stuck in a corner on phones/tablets.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduce) return;
    setEnabled(true);

    const show = (v) => {
      if (visibleRef.current !== v) {
        visibleRef.current = v;
        setVisible(v);
      }
    };
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      show(true);
    };
    const over = (e) => setHovering(Boolean(e.target.closest?.(INTERACTIVE)));
    const leave = () => show(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: sx,
        y: sy,
        zIndex: 2100,
        pointerEvents: "none",
      }}
    >
      <motion.div
        initial={false}
        animate={{
          width: hovering ? 48 : 20,
          height: hovering ? 48 : 20,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering ? "rgba(3, 152, 158, 0)" : "rgba(3, 152, 158, 0.5)",
          borderColor: hovering ? "rgba(3, 152, 158, 0.8)" : "rgba(3, 152, 158, 0)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{
          borderRadius: "50%",
          borderWidth: 1,
          borderStyle: "solid",
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.div>
  );
}
