import { VStack, Flex, Text, Heading, Center, Button } from "@chakra-ui/react";
import { TbCircleArrowRight } from "react-icons/tb";
import NextLink from "next/link";
import { MBox, MImg } from "@/styles/Motion";
import localFont from "next/font/local";

export default function Company() {
  return (
    <Center w="full">
      <VStack
        color="white"
        className="mainPX"
        w="full"
        px="mainPX"
        py="4.8rem"
        spacing={"2.5rem"}
      >
        <Flex w="full">
          <Heading
            alignSelf={["center", "center", "center", "center", "start"]}
            pos="relative"
            color="prim"
            fontSize={"3rem"}
            fontWeight={"700"}
            letterSpacing={"0.25rem"}
            sx={{
              fontStretch: "condensed",
            }}
          >
            OUR COMPANIES
          </Heading>
        </Flex>
        <VStack w="full" spacing={"6.25rem"}>
          <Center
            flexDir={["column", "column", "column", "column", "row"]}
            gap={["4rem", "4rem", "9rem"]}
            w="full"
          >
            <MImg
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              src="bio.svg"
              alt="bioenergy"
              w="full"
              maxW="20.5rem"
            />
            <MBox
              flex="1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <VStack spacing={"1.2rem"} color={"black"}>
                <Text fontSize={"1.2rem"} fontWeight={"400"}>
                  Bio Energy converts waste into Refuse-Derived Fuel (RDF),
                  delivering a renewable energy solution. As a cost-effective
                  and eco-friendly alternative to fossil fuels, RDF is more
                  sustainable. By utilizing its industry expertise, Bio Energy
                  fosters innovation throughout the waste management process,
                  including RDF production, to promote a circular economy.
                </Text>
                <Button
                  alignSelf={"start"}
                  variant={"none"}
                  color="black"
                  fontSize={"1.5rem"}
                  textTransform={"uppercase"}
                  fontWeight={"400"}
                  as={NextLink}
                  leftIcon={<TbCircleArrowRight size={"2.2rem"} />}
                  sx={{
                    p: 0,
                  }}
                  href="https://bioenergyegy.com/"
                  target="_blank"
                  _hover={{
                    color: "prim",
                  }}
                >
                  Learn More
                </Button>
              </VStack>
            </MBox>
          </Center>
          {/* 2 */}
          <Center
            flexDir={["column", "column", "column", "column", "row"]}
            gap={["4rem", "4rem", "9rem"]}
            w="full"
          >
            <MImg
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              src="estidama.svg"
              alt="estidama"
              w="full"
              maxW="20.5rem"
            />
            <MBox
              flex="1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <VStack spacing={"1.2rem"} color={"black"}>
                <Text fontSize={"1.2rem"} fontWeight={"400"}>
                  Estidama specializes in environmental consulting and waste
                  management. Estidama's mission is to deliver innovative,
                  sustainable solutions that enhance environmental performance
                  and support a circular economy. With our expertise, we help
                  clients optimize waste management practices and develop
                  effective projects, contributing to a greener future.
                </Text>
                <Button
                  alignSelf={"start"}
                  variant={"none"}
                  color="black"
                  fontSize={"1.5rem"}
                  fontWeight={"400"}
                  textTransform={"uppercase"}
                  as={NextLink}
                  href="/"
                  leftIcon={<TbCircleArrowRight size={"2.2rem"} />}
                  sx={{
                    p: 0,
                  }}
                  _hover={{
                    color: "prim",
                  }}
                >
                  Learn More
                </Button>
              </VStack>
            </MBox>
          </Center>
        </VStack>
      </VStack>
    </Center>
  );
}
