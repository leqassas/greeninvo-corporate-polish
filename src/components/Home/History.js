import {
  Flex,
  Heading,
  Text,
  VStack,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { TbArrowRight } from "react-icons/tb";
import { MBox, MImg } from "@/styles/Motion";
import { TLink } from "@/components/motion/Experience";
import { Magnetic, DrawLine } from "@/components/motion/primitives";
import { EASE } from "@/styles/tokens";

export default function History() {
  return (
    <Box as="section" w="full" bg="prim" color="white" pos="relative" overflow="hidden">
      {/* Decorative ambient gradient backdrop */}
      <Box
        pos="absolute"
        top="-20%"
        right="-10%"
        w="40rem"
        h="40rem"
        rounded="full"
        bg="whiteAlpha.100"
        filter="blur(90px)"
        pointerEvents="none"
      />

      <Box
        w="full"
        maxW="80rem"
        mx="auto"
        px={["1.5rem", "3rem", "6rem"]}
        py={["5rem", "6rem", "7.5rem"]}
      >
        {/* Section Header */}
        <VStack align="start" spacing="1rem" mb={["3rem", "4rem", "5rem"]}>
          <Heading
            as="h2"
            fontSize={["2.5rem", "3.2rem", "4rem"]}
            fontWeight="700"
            letterSpacing="0.15rem"
            lineHeight="1.1"
            sx={{
              fontStretch: "condensed",
            }}
          >
            WHAT WE DO
          </Heading>
          <DrawLine color="whiteAlpha.300" />
        </VStack>

        {/* Content Grid */}
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDir={["column", "column", "column", "row"]}
          gap={["3rem", "4rem", "6rem"]}
        >
          {/* Visual Logo / Graphic card */}
          <MBox
            pos="relative"
            w="full"
            maxW={["20rem", "24rem", "27.5rem"]}
            p={["2rem", "2.5rem", "3rem"]}
            rounded="2rem"
            bg="whiteAlpha.100"
            border="1px solid"
            borderColor="whiteAlpha.200"
            backdropFilter="blur(16px)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.4)" }}
          >
            <MImg
              src="/1.svg"
              alt="logo"
              w="full"
              maxW="22rem"
              filter="drop-shadow(0 15px 30px rgba(0,0,0,0.2))"
              transition={{ duration: 0.4 }}
            />
          </MBox>

          {/* Text Description */}
          <MBox
            flex="1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <VStack spacing={["1.5rem", "1.75rem"]} align="start">
              <Text
                fontSize={["1.35rem", "1.6rem", "1.75rem"]}
                fontWeight="600"
                lineHeight="1.4"
                color="white"
                textWrap="balance"
              >
                Welcome to The Green Innovation, a leading company specializing
                in sustainable solutions for waste management, alternative raw
                materials, and energy production.
              </Text>

              <Text
                fontSize={["1.05rem", "1.15rem", "1.2rem"]}
                fontWeight="400"
                lineHeight={["1.8", "2.0"]}
                color="whiteAlpha.900"
              >
                As the holding company of Bio Energy For Alternative Fuels and
                Estidama, based in Egypt, our mission is to create a better
                future for our planet and communities by providing innovative,
                environmentally friendly solutions for industrial activities.
              </Text>

              {/* Magnetic explore link */}
              <Box pt="0.5rem">
                <Magnetic strength={0.3}>
                  <IconButton
                    as={TLink}
                    href="/about"
                    aria-label="Learn more about The Green Innovation"
                    rounded="full"
                    boxSize={["3.5rem", "4rem"]}
                    bg="white"
                    color="prim"
                    icon={<TbArrowRight size="1.75rem" />}
                    boxShadow="0 10px 25px rgba(0,0,0,0.15)"
                    transition="all 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
                    _hover={{
                      transform: "scale(1.1)",
                      bg: "white",
                      color: "primDark",
                      boxShadow: "0px 14px 28px rgba(0,0,0,0.25)",
                    }}
                  />
                </Magnetic>
              </Box>
            </VStack>
          </MBox>
        </Flex>
      </Box>
    </Box>
  );
}
