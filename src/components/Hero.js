import { Flex, Heading, Text, Button, Box, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Open_Sans, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { TbArrowDown, TbArrowRight } from "react-icons/tb";
import { useExperience, TLink } from "@/components/motion/Experience";
import { Magnetic } from "@/components/motion/primitives";
import { EASE, SECTION_PX } from "@/styles/tokens";

const pop = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

const local = localFont({
  src: "../styles/fonts/OpenSans_Condensed-Regular.ttf",
});

export default function Hero({ page, bg, heading, text }) {
  const containerRef = useRef(null);
  const { ready, lenis } = useExperience();
  const reduce = useReducedMotion();
  const isHome = page === "home";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Clean relative path prefix to absolute root
  const cleanBg = bg?.startsWith("..")
    ? bg.replace(/^\.\.\/+/, "/")
    : bg?.startsWith("/")
    ? bg
    : `/${bg}`;

  const scrollToContent = () => {
    if (lenis) {
      lenis.scrollTo(window.innerHeight * 0.9, { duration: 1.2 });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
    }
  };

  return (
    <Box
      ref={containerRef}
      pos="relative"
      minH={isHome ? "100svh" : { base: "70svh", md: "75svh", lg: "80svh" }}
      h="full"
      w="full"
      overflow="hidden"
      color="white"
      bg="#0a0f12"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Background with subtle parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-10%",
          backgroundImage: `url(${cleanBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          y: reduce ? 0 : bgY,
          scale: 1.04,
        }}
        initial={{ scale: 1.1, opacity: 0.7 }}
        animate={ready ? { scale: 1.04, opacity: 1 } : { scale: 1.1, opacity: 0.7 }}
        transition={{ duration: 1.4, ease: EASE }}
      />

      {/* Corporate dark gradient overlay */}
      <Box
        pos="absolute"
        inset="0"
        bg="linear-gradient(180deg, rgba(10, 15, 18, 0.75) 0%, rgba(10, 15, 18, 0.52) 50%, rgba(10, 15, 18, 0.85) 100%)"
        pointerEvents="none"
      />

      {/* Main hero content */}
      <motion.div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          y: reduce ? 0 : contentY,
          opacity: reduce ? 1 : contentOpacity,
          paddingTop: isHome ? "4rem" : "6rem",
          paddingBottom: isHome ? "5rem" : "4rem",
        }}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="full"
          maxW="72rem"
          px={SECTION_PX}
          textAlign="center"
          gap={["1.5rem", "1.75rem", "2rem"]}
        >
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          >
            <Heading
              as="h1"
              fontFamily={!isHome ? pop.style.fontFamily : local.style.fontFamily}
              fontWeight={isHome ? "400" : "500"}
              fontSize={{ base: "2.1rem", sm: "2.7rem", md: "3.6rem", lg: "4.5rem", xl: "5.2rem" }}
              lineHeight={["1.15", "1.15", "1.1"]}
              letterSpacing={isHome ? "0.02em" : "-0.01em"}
              textShadow="0 4px 30px rgba(0,0,0,0.35)"
            >
              {heading}
            </Heading>
          </motion.div>

          {/* Subtitle text */}
          {text && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
            >
              <Text
                fontSize={{ base: "1rem", sm: "1.1rem", md: "1.25rem", lg: "1.35rem" }}
                fontWeight="300"
                lineHeight={["1.6", "1.7"]}
                color="whiteAlpha.900"
                maxW="54rem"
                textWrap="balance"
              >
                {text}
              </Text>
            </motion.div>
          )}

          {/* CTA on home page */}
          {isHome && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
            >
              <Magnetic strength={0.25}>
                <Button
                  as={TLink}
                  href="/contact"
                  h={["3.25rem", "3.5rem", "3.75rem"]}
                  px={["2.25rem", "2.75rem", "3.25rem"]}
                  bg="prim"
                  color="white"
                  rounded="full"
                  fontSize={["1rem", "1.05rem"]}
                  fontWeight="500"
                  letterSpacing="0.05em"
                  rightIcon={<TbArrowRight size="1.25rem" />}
                  transition="all 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
                  boxShadow="0 10px 25px -5px rgba(3, 152, 158, 0.4)"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "0px 14px 28px rgba(0, 0, 0, 0.25)",
                    bg: "primDark",
                    ".chakra-button__icon": {
                      transform: "translateX(4px)",
                    },
                  }}
                  sx={{
                    ".chakra-button__icon": {
                      transition: "transform 0.4s ease",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Magnetic>
            </motion.div>
          )}
        </Flex>
      </motion.div>

      {/* Floating scroll cue indicator */}
      {isHome && (
        <Box
          pos="absolute"
          bottom={["1.5rem", "2rem", "2.5rem"]}
          left="50%"
          transform="translateX(-50%)"
          zIndex={3}
          cursor="pointer"
          onClick={scrollToContent}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={ready ? { opacity: 0.75, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
            whileHover={{ opacity: 1, y: 3 }}
          >
            <Flex direction="column" align="center" gap="0.4rem">
              <Text
                fontSize="0.7rem"
                letterSpacing="0.25em"
                textTransform="uppercase"
                fontWeight="500"
                color="whiteAlpha.700"
              >
                Scroll
              </Text>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon as={TbArrowDown} boxSize="1.1rem" color="whiteAlpha.800" />
              </motion.div>
            </Flex>
          </motion.div>
        </Box>
      )}
    </Box>
  );
}
