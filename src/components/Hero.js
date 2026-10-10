import { Flex, Heading, Text, Button, Box, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Open_Sans, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { TbArrowDown, TbArrowRight } from "react-icons/tb";
import { useExperience, TLink } from "@/components/motion/Experience";
import { Magnetic } from "@/components/motion/primitives";
import { EASE } from "@/styles/tokens";

const pop = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

const local = localFont({
  src: "../styles/fonts/OpenSans_Condensed-Regular.ttf",
});

export default function Hero({ page, bg, heading, text }) {
  const containerRef = useRef(null);
  const { ready, lenis } = useExperience();
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
      h={[
        page !== "home" && page !== "product" ? "75svh" : "100svh",
        page !== "home" && page !== "product" ? "80svh" : "100svh",
      ]}
      w="full"
      overflow="hidden"
      color="white"
      bg="#0a0f12"
    >
      {/* Parallax background with smooth zoom */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-10%",
          backgroundImage: `url(${cleanBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          y: reduce ? 0 : bgY,
          scale: 1.05,
        }}
        initial={{ scale: 1.15, opacity: 0.6 }}
        animate={ready ? { scale: 1.05, opacity: 1 } : { scale: 1.15, opacity: 0.6 }}
        transition={{ duration: 1.6, ease: EASE }}
      />

      {/* Sophisticated multi-stop dark gradient overlay for optimal legibility */}
      <Box
        pos="absolute"
        inset="0"
        bg="linear-gradient(180deg, rgba(10, 15, 18, 0.75) 0%, rgba(10, 15, 18, 0.55) 50%, rgba(10, 15, 18, 0.85) 100%)"
        pointerEvents="none"
      />

      {/* Subtle organic radial vignette */}
      <Box
        pos="absolute"
        inset="0"
        bg="radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)"
        pointerEvents="none"
      />

      {/* Main hero content container */}
      <motion.div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          y: reduce ? 0 : contentY,
          opacity: reduce ? 1 : contentOpacity,
        }}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="full"
          maxW="72rem"
          px={["1.5rem", "3rem", "6rem"]}
          textAlign="center"
          gap={["1.25rem", "1.5rem", "1.75rem"]}
        >
          {/* Eyebrow badge */}
          {page === "home" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            >
              <Flex
                align="center"
                gap="0.5rem"
                px="1rem"
                py="0.35rem"
                rounded="full"
                border="1px solid"
                borderColor="whiteAlpha.300"
                bg="whiteAlpha.100"
                backdropFilter="blur(8px)"
                fontSize={["0.75rem", "0.85rem"]}
                letterSpacing="0.15em"
                textTransform="uppercase"
                fontWeight="500"
              >
                <Box boxSize="6px" rounded="full" bg="prim" />
                Sustainable Industrial Solutions
              </Flex>
            </motion.div>
          )}

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.0, delay: 0.35, ease: EASE }}
          >
            <Heading
              as="h1"
              fontFamily={page !== "home" ? pop.style.fontFamily : local.style.fontFamily}
              fontWeight={page === "home" ? "400" : "500"}
              fontSize={["2.4rem", "3.2rem", "4.5rem", "5.2rem"]}
              lineHeight={["1.15", "1.15", "1.1"]}
              letterSpacing={page === "home" ? "0.02em" : "-0.01em"}
              textShadow="0 4px 30px rgba(0,0,0,0.4)"
            >
              {heading}
            </Heading>
          </motion.div>

          {/* Subtitle text */}
          {text && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 1.0, delay: 0.5, ease: EASE }}
            >
              <Text
                fontSize={["1rem", "1.15rem", "1.35rem"]}
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
          {page === "home" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.9, delay: 0.65, ease: EASE }}
            >
              <Magnetic strength={0.25}>
                <Button
                  as={TLink}
                  href="/contact"
                  h={["3.25rem", "3.5rem", "3.75rem"]}
                  px={["2rem", "2.5rem", "3rem"]}
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
      {page === "home" && (
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
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
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
