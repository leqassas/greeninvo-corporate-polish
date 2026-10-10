import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    }
  }

  return (
    <motion.div
      variants={variants}
      animate="default"
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "20px",
        height: "20px",
        backgroundColor: "rgba(3,153,158,0.5)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999
      }}
    />
  );
}
