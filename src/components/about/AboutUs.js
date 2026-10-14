import {
  Heading,
  VStack,
  Text,
  Flex,
  Box,
  Icon,
  Divider,
  Image,
} from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import { MBox } from "@/styles/Motion";
import { EASE, SECTION_PX, SECTION_PY } from "@/styles/tokens";

export default function AboutUs() {
  return (
    <VStack w="full" spacing={{ base: "3.5rem", md: "5rem", lg: "6.5rem" }} py={SECTION_PY}>
      {/* 1. Why Us */}
      <Box w="full" maxW="80rem" mx="auto" px={SECTION_PX}>
        <MBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          w="full"
        >
          <VStack align="start" spacing="1.5rem" maxW="72rem">
            <Heading
              textTransform="uppercase"
              fontSize={{ base: "2rem", sm: "2.2rem" }}
              as="h2"
              fontWeight="700"
              color="prim"
              letterSpacing="0.25rem"
              sx={{
                fontStretch: "condensed",
              }}
            >
              Why Us
            </Heading>
            <Heading
              fontSize={{ base: "1.35rem", sm: "1.65rem", md: "2rem", lg: "2.25rem" }}
              fontWeight="400"
              color="black"
              as="h3"
              textAlign="left"
              lineHeight="1.3"
            >
              As the holding company for Bio Energy For Alternative Fuels and
              Estidama, both based in Egypt, The Green Innovation is committed to
              driving sustainability and innovation across the industry.
            </Heading>
            <Text
              fontSize={{ base: "1.05rem", sm: "1.15rem", md: "1.35rem", lg: "1.5rem" }}
              fontWeight="700"
              color="#424242"
              lineHeight={{ base: "1.6", md: "2.2", lg: "2.8" }}
            >
              Our leadership team and key personnel have extensive experience in the
              industry and are passionate about sustainability and innovation.
            </Text>
          </VStack>
        </MBox>
      </Box>

      {/* 2. CEO'S MESSAGE */}
      <Box w="full" maxW="80rem" mx="auto" px={SECTION_PX}>
        <MBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: "2.5rem", sm: "3.5rem", lg: "5rem" }}
          w="full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Box
            w={{ base: "full", sm: "18rem", md: "22rem", lg: "26rem" }}
            h={{ base: "18rem", sm: "20rem", md: "24rem", lg: "28rem" }}
            maxW="full"
            flexShrink={0}
          >
            <Image
              src="/galal.webp"
              alt="CEO"
              objectFit="cover"
              w="full"
              h="full"
              rounded="3rem"
              boxShadow="0 20px 40px rgba(0,0,0,0.12)"
            />
          </Box>
          <VStack align="start" justify="center" spacing="1.8rem" flex="1">
            <Icon
              as={FaQuoteLeft}
              color="rgba(3, 152, 158, 0.30)"
              boxSize="2rem"
            />
            <Heading
              textTransform="uppercase"
              fontSize={{ base: "1.8rem", sm: "2rem", md: "2.2rem" }}
              as="h2"
              fontWeight="700"
              color="prim"
              letterSpacing="0.25rem"
              sx={{
                fontStretch: "condensed",
              }}
            >
              CEO&apos;S MESSAGE
            </Heading>
            <Text
              fontSize={{ base: "1.1rem", sm: "1.25rem", md: "1.35rem", lg: "1.5rem" }}
              fontWeight="400"
              color="#202020"
              lineHeight="1.6"
            >
              At The Green Innovation, we&apos;re committed to transforming waste into
              opportunity, creating a cleaner, greener future. Together with our
              partners, we&apos;re proving that sustainability and innovation can leave
              a lasting, positive impact on the planet. Let&apos;s build a better world
              for the generations to come.
            </Text>
            <VStack color="black" align="start" spacing="0.62rem">
              <Divider
                borderColor="prim"
                borderWidth="2px"
                w="12.6ch"
                opacity="1"
              />
              <Heading as="h4" fontWeight="600" fontSize="1.5rem">
                Mahmoud Galal
              </Heading>
              <Text color="#808080" fontWeight="400" fontSize="1rem">
                The Green Innovations, CEO
              </Text>
            </VStack>
          </VStack>
        </MBox>
      </Box>

      {/* 3. Three Pillars: Mission, Vision, Philosophy */}
      <Flex
        alignItems="stretch"
        justifyContent="center"
        w="full"
        flexDir={{ base: "column", lg: "row" }}
      >
        <MBox
          flex="1"
          bg="prim"
          py={{ base: "3.5rem", sm: "4rem", md: "4.5rem", lg: "6rem" }}
          px={{ base: "1.5rem", sm: "2rem", md: "3rem" }}
          minH={{ base: "auto", lg: "32rem", xl: "35rem" }}
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <VStack spacing={{ base: "2rem", md: "3rem" }} maxW="28rem">
            <Heading
              fontSize={{ base: "2.2rem", sm: "2.6rem", md: "3rem" }}
              fontWeight="600"
              sx={{
                fontStretch: "condensed",
              }}
            >
              Our Mission
            </Heading>
            <Text
              fontWeight="300"
              fontSize={{ base: "1.05rem", sm: "1.1rem", md: "1.2rem" }}
              textAlign="center"
              lineHeight="1.8"
            >
              Deliver innovative, alternative, clean, and efficient energy
              solutions alongside comprehensive waste management services, to
              our customers.
            </Text>
          </VStack>
        </MBox>

        <MBox
          flex="1"
          bg="rgba(3, 152, 158, 0.1)"
          color="textPrim"
          py={{ base: "3.5rem", sm: "4rem", md: "4.5rem", lg: "6rem" }}
          px={{ base: "1.5rem", sm: "2rem", md: "3rem" }}
          minH={{ base: "auto", lg: "32rem", xl: "35rem" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          <VStack spacing={{ base: "2rem", md: "3rem" }} maxW="28rem">
            <Heading
              fontSize={{ base: "2.2rem", sm: "2.6rem", md: "3rem" }}
              fontWeight="600"
              color="textPrim"
              sx={{
                fontStretch: "condensed",
              }}
            >
              Our Vision
            </Heading>
            <Text
              fontWeight="300"
              fontSize={{ base: "1.05rem", sm: "1.1rem", md: "1.2rem" }}
              textAlign="center"
              lineHeight="1.8"
            >
              Increase the commercial value of wastes with its environment
              friendly approach by developing innovative, creative and effective
              solutions.
            </Text>
          </VStack>
        </MBox>

        <MBox
          flex="1"
          bg="prim"
          py={{ base: "3.5rem", sm: "4rem", md: "4.5rem", lg: "6rem" }}
          px={{ base: "1.5rem", sm: "2rem", md: "3rem" }}
          minH={{ base: "auto", lg: "32rem", xl: "35rem" }}
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <VStack spacing={{ base: "2rem", md: "3rem" }} maxW="28rem">
            <Heading
              fontSize={{ base: "2.2rem", sm: "2.6rem", md: "3rem" }}
              fontWeight="600"
              sx={{
                fontStretch: "condensed",
              }}
            >
              Our Philosophy
            </Heading>
            <Text
              fontWeight="300"
              fontSize={{ base: "1.05rem", sm: "1.1rem", md: "1.2rem" }}
              textAlign="center"
              lineHeight="1.8"
            >
              There&apos;s a big difference between being in a community, and being
              part of it. That&apos;s why focus on making a positive impact on the
              planet and places we call home.
            </Text>
          </VStack>
        </MBox>
      </Flex>

      {/* 4. Core Values */}
      <Box w="full" maxW="80rem" mx="auto" px={SECTION_PX}>
        <MBox
          display="flex"
          flexDir="column"
          bg="white"
          gap="1.56rem"
          w="full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Heading
            textTransform="uppercase"
            fontSize={{ base: "2rem", sm: "2.2rem" }}
            as="h2"
            fontWeight="700"
            color="prim"
            letterSpacing="0.25rem"
            sx={{
              fontStretch: "condensed",
            }}
          >
            CORE VALUES
          </Heading>
          <Text
            fontSize={{ base: "1.35rem", sm: "1.65rem", md: "2rem", lg: "2.25rem" }}
            fontWeight="400"
            color="black"
            as="h3"
            textAlign="left"
            lineHeight="1.3"
          >
            We are guided by a set of core values, including a commitment to
            ethical business practices, environmental responsibility, and social
            accountability.
          </Text>
        </MBox>
      </Box>
    </VStack>
  );
}
