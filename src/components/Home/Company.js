import { VStack, Flex, Text, Heading, Box, Button } from "@chakra-ui/react";
import { TbArrowRight } from "react-icons/tb";
import { MBox, MImg } from "@/styles/Motion";
import { DrawLine, Magnetic } from "@/components/motion/primitives";
import { TLink } from "@/components/motion/Experience";
import { EASE } from "@/styles/tokens";

const companies = [
  {
    num: "01",
    name: "Bio Energy",
    logo: "/Bio.svg",
    alt: "Bio Energy logo",
    text: "Bio Energy converts waste into Refuse-Derived Fuel (RDF), delivering a renewable energy solution. As a cost-effective and eco-friendly alternative to fossil fuels, RDF is more sustainable. By utilizing its industry expertise, Bio Energy fosters innovation throughout the waste management process, including RDF production, to promote a circular economy.",
    href: "https://bioenergyegy.com/",
    isExternal: true,
  },
  {
    num: "02",
    name: "Estidama",
    logo: "/estidama.svg",
    alt: "Estidama logo",
    text: "Estidama specializes in environmental consulting and waste management. Estidama's mission is to deliver innovative, sustainable solutions that enhance environmental performance and support a circular economy. With our expertise, we help clients optimize waste management practices and develop effective projects, contributing to a greener future.",
    href: "/products&services",
    isExternal: false,
  },
];

export default function Company() {
  return (
    <Box as="section" w="full" bg="#FAFAFA" color="textPrim" pos="relative" overflow="hidden">
      <Box
        w="full"
        maxW="80rem"
        mx="auto"
        px={["1.5rem", "3rem", "6rem"]}
        py={["5rem", "6rem", "7.5rem"]}
      >
        {/* Section Header */}
        <VStack align="start" spacing="1rem" mb={["3.5rem", "4.5rem", "6rem"]}>
          <Heading
            as="h2"
            color="prim"
            fontSize={["2.5rem", "3.2rem", "4rem"]}
            fontWeight="700"
            letterSpacing="0.15rem"
            lineHeight="1.1"
            sx={{
              fontStretch: "condensed",
            }}
          >
            OUR COMPANIES
          </Heading>
          <DrawLine color="blackAlpha.200" />
        </VStack>

        {/* Company Cards List */}
        <VStack spacing={["3.5rem", "4.5rem", "5.5rem"]} w="full">
          {companies.map((company, index) => (
            <MBox
              key={company.num}
              w="full"
              p={["2rem", "2.75rem", "3.5rem"]}
              rounded="2rem"
              bg="white"
              border="1px solid"
              borderColor="blackAlpha.100"
              boxShadow="0 4px 20px rgba(0,0,0,0.03)"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: index * 0.15, ease: EASE }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                borderColor: "rgba(3, 152, 158, 0.3)",
              }}
            >
              <Flex
                direction={["column", "column", "row"]}
                align={["start", "start", "center"]}
                justify="space-between"
                gap={["2rem", "3rem", "5rem"]}
                w="full"
              >
                {/* Logo Frame with Number */}
                <Box pos="relative" w={["full", "full", "22rem"]}>
                  <Flex
                    w="full"
                    h={["10rem", "12rem", "13rem"]}
                    p="2rem"
                    rounded="1.5rem"
                    bg="#F5F7F8"
                    border="1px solid"
                    borderColor="blackAlpha.50"
                    align="center"
                    justify="center"
                    pos="relative"
                    overflow="hidden"
                  >
                    {/* Index Number watermark */}
                    <Text
                      pos="absolute"
                      top="0.75rem"
                      left="1.25rem"
                      fontSize="1.1rem"
                      fontWeight="700"
                      color="blackAlpha.300"
                      fontFamily="mono"
                    >
                      {company.num}
                    </Text>

                    <MImg
                      src={company.logo}
                      alt={company.alt}
                      maxW={["13rem", "15rem", "16rem"]}
                      maxH="6.5rem"
                      objectFit="contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Flex>
                </Box>

                {/* Company Description and CTA */}
                <VStack flex="1" align="start" spacing="1.5rem">
                  <Text
                    fontSize={["1.1rem", "1.18rem", "1.25rem"]}
                    fontWeight="400"
                    lineHeight={["1.7", "1.8"]}
                    color="textPrim"
                  >
                    {company.text}
                  </Text>

                  <Magnetic strength={0.2}>
                    <Button
                      as={company.isExternal ? "a" : TLink}
                      href={company.href}
                      target={company.isExternal ? "_blank" : undefined}
                      rel={company.isExternal ? "noopener noreferrer" : undefined}
                      variant="none"
                      color="prim"
                      p="0"
                      fontSize={["1.15rem", "1.25rem", "1.35rem"]}
                      fontWeight="600"
                      letterSpacing="0.05em"
                      textTransform="uppercase"
                      rightIcon={<TbArrowRight size="1.5rem" />}
                      transition="all 0.3s ease"
                      _hover={{
                        color: "primDark",
                        transform: "translateX(4px)",
                        ".chakra-button__icon": {
                          transform: "translateX(4px)",
                        },
                      }}
                      sx={{
                        ".chakra-button__icon": {
                          transition: "transform 0.3s ease",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Magnetic>
                </VStack>
              </Flex>
            </MBox>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
