import {
  Heading,
  VStack,
  Text,
  Flex,
  Box,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import { MBox } from "@/styles/Motion";
import { ImageReveal, DrawLine } from "@/components/motion/primitives";
import { EASE } from "@/styles/tokens";

const pillars = [
  {
    num: "01",
    title: "Our Mission",
    text: "Deliver innovative, alternative, clean, and efficient energy solutions alongside comprehensive waste management services, to our customers.",
  },
  {
    num: "02",
    title: "Our Vision",
    text: "Increase the commercial value of wastes with its environment friendly approach by developing innovative, creative and effective solutions.",
    highlight: true,
  },
  {
    num: "03",
    title: "Our Philosophy",
    text: "There’s a big difference between being in a community, and being part of it. That’s why focus on making a positive impact on the planet and places we call home.",
  },
];

export default function AboutUs() {
  return (
    <VStack w="full" spacing={["4rem", "6rem", "8rem"]} py={["4rem", "5.5rem", "7rem"]}>
      {/* 1. Why Us */}
      <Box w="full" maxW="80rem" mx="auto" px={["1.5rem", "3rem", "6rem"]}>
        <MBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <VStack align="start" spacing="1.5rem" maxW="58rem">
            <Flex align="center" gap="0.75rem">
              <Box w="2rem" h="2px" bg="prim" />
              <Text
                fontSize="0.8rem"
                letterSpacing="0.25em"
                textTransform="uppercase"
                fontWeight="600"
                color="prim"
              >
                Why Us
              </Text>
            </Flex>

            <Heading
              as="h2"
              fontSize={["1.75rem", "2.25rem", "2.8rem"]}
              fontWeight="600"
              color="textPrim"
              lineHeight="1.25"
              letterSpacing="-0.01em"
            >
              As the holding company for Bio Energy For Alternative Fuels and
              Estidama, both based in Egypt, The Green Innovation is committed to
              driving sustainability and innovation across the industry.
            </Heading>

            <Text
              fontSize={["1.1rem", "1.25rem", "1.35rem"]}
              fontWeight="400"
              color="#5A5B64"
              lineHeight="1.8"
            >
              Our leadership team and key personnel have extensive experience in
              the industry and are passionate about sustainability and
              innovation.
            </Text>
          </VStack>
        </MBox>
      </Box>

      {/* 2. CEO'S MESSAGE */}
      <Box w="full" maxW="80rem" mx="auto" px={["1.5rem", "3rem", "6rem"]}>
        <MBox
          p={["2rem", "3rem", "4rem"]}
          rounded="2.5rem"
          bg="#FAFAFA"
          border="1px solid"
          borderColor="blackAlpha.100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Flex
            align="center"
            justify="space-between"
            direction={["column", "column", "row"]}
            gap={["2.5rem", "3.5rem", "5rem"]}
          >
            {/* CEO Portrait */}
            <Box w={["full", "full", "24rem", "26rem"]} flexShrink={0}>
              <ImageReveal
                src="/galal.webp"
                alt="Mahmoud Galal - CEO"
                rounded="2rem"
                w="full"
                h={["22rem", "26rem", "28rem"]}
                boxShadow="0 20px 40px rgba(0,0,0,0.12)"
              />
            </Box>

            {/* CEO Quote & Info */}
            <VStack align="start" spacing="1.75rem" flex="1">
              <Icon
                as={FaQuoteLeft}
                color="prim"
                boxSize={["2rem", "2.5rem"]}
                opacity={0.4}
              />

              <Heading
                as="h3"
                textTransform="uppercase"
                fontSize={["2rem", "2.5rem"]}
                fontWeight="700"
                color="prim"
                letterSpacing="0.15rem"
                sx={{
                  fontStretch: "condensed",
                }}
              >
                CEO’S MESSAGE
              </Heading>

              <Text
                fontSize={["1.15rem", "1.25rem", "1.35rem"]}
                fontWeight="400"
                color="#202020"
                lineHeight="1.75"
              >
                At The Green Innovation, we’re committed to transforming waste into
                opportunity, creating a cleaner, greener future. Together with our
                partners, we’re proving that sustainability and innovation can leave
                a lasting, positive impact on the planet. Let’s build a better world
                for the generations to come.
              </Text>

              <VStack align="start" spacing="0.4rem" pt="0.5rem">
                <Box w="3rem" h="2px" bg="prim" mb="0.5rem" />
                <Heading as="h4" fontWeight="700" fontSize="1.35rem" color="textPrim">
                  Mahmoud Galal
                </Heading>
                <Text color="#707070" fontWeight="500" fontSize="0.95rem">
                  The Green Innovations, CEO
                </Text>
              </VStack>
            </VStack>
          </Flex>
        </MBox>
      </Box>

      {/* 3. Three Pillars: Mission, Vision, Philosophy */}
      <Box w="full" bg="#0D1619" py={["5rem", "6.5rem", "7.5rem"]} color="white" pos="relative">
        <Box w="full" maxW="80rem" mx="auto" px={["1.5rem", "3rem", "6rem"]}>
          <Flex
            direction={["column", "column", "row"]}
            gap={["2rem", "2rem", "2rem"]}
            justify="space-between"
          >
            {pillars.map((pillar, i) => (
              <MBox
                key={pillar.num}
                flex="1"
                p={["2.5rem", "3rem"]}
                rounded="2rem"
                bg={pillar.highlight ? "rgba(3, 152, 158, 0.15)" : "whiteAlpha.50"}
                border="1px solid"
                borderColor={pillar.highlight ? "rgba(3, 152, 158, 0.4)" : "whiteAlpha.100"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(3, 152, 158, 0.6)",
                  bg: "rgba(3, 152, 158, 0.2)",
                }}
              >
                <VStack align="start" spacing="2rem" h="full" justify="space-between">
                  <VStack align="start" spacing="1rem" w="full">
                    <Text
                      fontSize="1.1rem"
                      fontWeight="700"
                      color="prim"
                      fontFamily="mono"
                    >
                      {pillar.num}
                    </Text>

                    <Heading
                      as="h3"
                      fontSize={["2rem", "2.4rem"]}
                      fontWeight="600"
                      sx={{
                        fontStretch: "condensed",
                      }}
                    >
                      {pillar.title}
                    </Heading>
                  </VStack>

                  <Text
                    fontSize={["1.05rem", "1.1rem"]}
                    fontWeight="300"
                    color="whiteAlpha.900"
                    lineHeight="1.75"
                  >
                    {pillar.text}
                  </Text>
                </VStack>
              </MBox>
            ))}
          </Flex>
        </Box>
      </Box>

      {/* 4. Core Values */}
      <Box w="full" maxW="80rem" mx="auto" px={["1.5rem", "3rem", "6rem"]}>
        <MBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <VStack align="start" spacing="1.5rem" maxW="58rem">
            <Flex align="center" gap="0.75rem">
              <Box w="2rem" h="2px" bg="prim" />
              <Text
                fontSize="0.8rem"
                letterSpacing="0.25em"
                textTransform="uppercase"
                fontWeight="600"
                color="prim"
              >
                Principles
              </Text>
            </Flex>

            <Heading
              as="h2"
              textTransform="uppercase"
              fontSize={["2.2rem", "2.8rem"]}
              fontWeight="700"
              color="prim"
              letterSpacing="0.15rem"
              sx={{
                fontStretch: "condensed",
              }}
            >
              CORE VALUES
            </Heading>

            <Text
              fontSize={["1.35rem", "1.6rem", "1.85rem"]}
              fontWeight="400"
              color="textPrim"
              lineHeight="1.5"
            >
              We are guided by a set of core values, including a commitment to
              ethical business practices, environmental responsibility, and
              social accountability.
            </Text>
            <DrawLine color="blackAlpha.200" />
          </VStack>
        </MBox>
      </Box>
    </VStack>
  );
}
