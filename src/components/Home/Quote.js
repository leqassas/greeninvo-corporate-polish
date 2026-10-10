import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { DM_Sans } from "next/font/google";
import { FaQuoteLeft } from "react-icons/fa";
import { EASE } from "@/styles/tokens";

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

export default function Quote() {
  const containerRef = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <Box
      ref={containerRef}
      pos="relative"
      w="full"
      overflow="hidden"
      color="white"
    >
      {/* Parallax background image */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-15%",
          backgroundImage: "url(/quote.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          y: reduce ? 0 : bgY,
        }}
      />

      {/* Brand teal gradient wash overlay */}
      <Box
        pos="absolute"
        inset="0"
        bg="linear-gradient(135deg, rgba(3, 152, 158, 0.88) 0%, rgba(0, 74, 173, 0.82) 100%)"
        backdropFilter="blur(2px)"
      />

      <Center
        pos="relative"
        zIndex={2}
        w="full"
        maxW="72rem"
        mx="auto"
        px={["1.5rem", "3rem", "6rem"]}
        py={["5rem", "6.5rem", "8.5rem"]}
      >
        <VStack spacing={["2rem", "2.5rem"]} align="center" textAlign="center" w="full">
          {/* Subtle floating quote icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.35, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Box
              as={FaQuoteLeft}
              boxSize={["2.5rem", "3.25rem", "4rem"]}
              color="white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <Heading
              as="blockquote"
              fontWeight="600"
              fontSize={["1.5rem", "2rem", "2.4rem", "2.8rem"]}
              lineHeight={["1.3", "1.35", "1.35"]}
              letterSpacing="-0.01em"
              textWrap="balance"
              maxW="62rem"
            >
              At The Green Innovations, we are committed to sustainability and
              innovation. We believe that by working together with our partners
              and stakeholders, we can create a more sustainable future for
              everyone.
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          >
            <Text
              fontSize={["1.05rem", "1.2rem", "1.45rem"]}
              fontWeight="400"
              color="whiteAlpha.900"
              fontFamily={dm.style.fontFamily}
              maxW="48rem"
              textWrap="balance"
              lineHeight="1.6"
            >
              Explore our website to learn more about our services and how we can
              help you achieve your sustainability goals.
            </Text>
          </motion.div>
        </VStack>
      </Center>
    </Box>
  );
}
