import { MBox } from "@/styles/Motion";
import {
  Heading,
  VStack,
  Text,
  Flex,
  Image,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";

export default function AboutUs() {
  return (
    <VStack w="full" py="4.5rem" gap="4.5rem">
      <MBox
        display={"flex"}
        flexDir={"column"}
        bg="white"
        className="mainPX"
        gap="1.56rem"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Heading
          textTransform={"uppercase"}
          fontSize={"2rem"}
          as="h2"
          fontWeight={"700"}
          color="prim"
          letterSpacing={"0.25rem"}
          sx={{
            fontStretch: "condensed",
          }}
        >
          Why Us
        </Heading>
        <Heading
          fontSize={["1.5rem", "1.5rem", "2.25rem"]}
          fontWeight={"400"}
          color="black"
          as="h3"
          textAlign={["left", "left", "left", "left", "justify"]}
          lineHeight={"normal"}
        >
          As the holding company for Bio Energy For Alternative Fuels and
          Estidama, both based in Egypt, The Green Innovation is committed to
          driving sustainability and innovation across the industry.
        </Heading>
        <Text
          fontSize={["1rem", "1rem", "1.5rem"]}
          fontWeight={"700"}
          color={"#424242"}
          lineHeight={["normal", "normal", "normal", "normal", "3.125rem"]}
        >
          Our leadership team and key personnel have extensive experience in the
          industry and are passionate about sustainability and innovation.
        </Text>
      </MBox>
      <MBox
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={["wrap", "wrap", "wrap", "wrap", "nowrap"]}
        bg="white"
        className="mainPX"
        gap="5rem"
        w="full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src="galal.webp"
          alt="CEO"
          objectFit={"cover"}
          boxSize={"28rem"}
          rounded={"3rem"}
        />
        <VStack align={"start"} justify={"center"} spacing={"1.8rem"}>
          <Icon
            as={FaQuoteLeft}
            color="rgba(3, 152, 158, 0.30)"
            boxSize="2rem"
          />
          <Heading
            textTransform={"uppercase"}
            fontSize={"2.2rem"}
            as="h2"
            fontWeight={"700"}
            color="prim"
            letterSpacing={"0.25rem"}
            sx={{
              fontStretch: "condensed",
            }}
          >
            CEO’S MESSAGE
          </Heading>
          <Text
            fontSize={"1.5rem"}
            fontWeight={"400"}
            color="#202020"
            lineHeight={"normal"}
          >
            At The Green Innovation, we’re committed to transforming waste into
            opportunity, creating a cleaner, greener future. Together with our
            partners, we’re proving that sustainability and innovation can leave
            a lasting, positive impact on the planet. Let’s build a better world
            for the generations to come.
          </Text>
          <VStack color="black" align={"start"} spacing={"0.62rem"}>
            <Divider
              borderColor="prim"
              borderWidth={"2px"}
              w="12.6ch"
              opacity={"1"}
            />
            <Heading as="h4" fontWeight={"600"} fontSize={"1.5rem"}>
              Mahmoud Galal
            </Heading>
            <Text color="#808080" fontWeight={"400"} fontSize={"1rem"}>
              The Green Innovations, CEO
            </Text>
          </VStack>
        </VStack>
      </MBox>
      <Flex
        alignItems="center"
        justifyContent={"center"}
        flexDir={["column", "column", "column", "column", "row"]}
      >
        <MBox
          flex="1"
          bg="prim"
          pb="7rem"
          pt="5rem"
          h="35rem"
          gap="3.8rem"
          color="white"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"start"}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <VStack spacing={"3.8rem"}>
            <Heading
              fontSize="3rem"
              fontWeight={"600"}
              sx={{
                fontStretch: "condensed",
              }}
            >
              Our Mission
            </Heading>
            <Text
              fontWeight={"light"}
              w={["full", "full", "80%"]}
              p="1rem"
              fontSize={["4vw", "1rem", "1rem", "1.5vw"]}
              textAlign={"center"}
            >
              Deliver innovative, alternative, clean, and efficient energy
              solutions alongside comprehensive waste management services, to
              our customers.
            </Text>
          </VStack>
        </MBox>
        <VStack
          flex="1"
          bg="rgba(3, 152, 158, 0.1)"
          pb="7rem"
          pt="5rem"
          gap="3.8rem"
          h="35rem"
          justifyContent={"start"}
        >
          <VStack spacing={"3.8rem"}>
            <Heading
              fontSize="3rem"
              fontWeight={"600"}
              sx={{
                fontStretch: "condensed",
              }}
            >
              Our Vision
            </Heading>
            <Text
              fontWeight={"light"}
              w={["full", "full", "80%"]}
              p="1rem"
              fontSize={["4vw", "1rem", "1rem", "1.5vw"]}
              textAlign={"center"}
            >
              Increase the commercial value of wastes with its environment
              friendly approach by developing innovative, creative and effective
              solutions.
            </Text>
          </VStack>
        </VStack>
        <MBox
          flex="1"
          bg="prim"
          pb="7rem"
          pt="5rem"
          h="35rem"
          color="white"
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"start"}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <VStack spacing={"3.8rem"}>
            <Heading
              fontSize="3rem"
              fontWeight={"600"}
              sx={{
                fontStretch: "condensed",
              }}
            >
              Our Philosophy
            </Heading>
            <Text
              fontWeight={"light"}
              w={["full", "full", "80%"]}
              p="1rem"
              fontSize={["4vw", "1rem", "1rem", "1.5vw"]}
              textAlign={"center"}
            >
              There’s a big difference between being in a community, and being
              part of it. That’s why focus on making a positive impact on the
              planet and places we call home.
            </Text>
          </VStack>
        </MBox>
      </Flex>
      <MBox
        display={"flex"}
        flexDir={"column"}
        bg="white"
        className="mainPX"
        gap="1.56rem"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Heading
          textTransform={"uppercase"}
          fontSize={"2rem"}
          as="h2"
          fontWeight={"700"}
          color="prim"
          letterSpacing={"0.25rem"}
          sx={{
            fontStretch: "condensed",
          }}
        >
          CORE VALUES
        </Heading>
        <Text
          fontSize={["1.5rem", "1.5rem", "2.25rem"]}
          fontWeight={"400"}
          color="black"
          as="h3"
          textAlign={["left", "left", "left", "left", "justify"]}
          lineHeight={"normal"}
        >
          We are guided by a set of core values, including a commitment to
          ethical business practices, environmental responsibility, and social
          accountability.
        </Text>
      </MBox>
    </VStack>
  );
}
