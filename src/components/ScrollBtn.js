import { useState } from "react";
import { TbArrowUp } from "react-icons/tb";
import { Box, Icon } from "@chakra-ui/react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useExperience } from "@/components/motion/Experience";

/** Back-to-top button wrapped in a ring that fills with scroll progress. */
export default function ScrollBtn() {
  const [visible, setVisible] = useState(false);
  const { lenis } = useExperience();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 300));

  const scrollToTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      as="button"
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      pos="fixed"
      zIndex="tooltip"
      bottom={["1.5rem", "2rem", "3rem"]}
      right={["1.5rem", "2rem", "3rem"]}
      boxSize="3.25rem"
      rounded="full"
      bg="prim"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      opacity={visible ? 1 : 0}
      transform={visible ? "translateY(0)" : "translateY(1rem)"}
      pointerEvents={visible ? "auto" : "none"}
      transition="opacity 0.4s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease"
      _hover={{
        transform: "translateY(-4px) scale(1.05)",
        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      }}
    >
      <svg
        viewBox="0 0 52 52"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)" }}
        aria-hidden="true"
      >
        <circle cx="26" cy="26" r="24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <motion.circle
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <Icon as={TbArrowUp} boxSize="1.25rem" />
    </Box>
  );
}
