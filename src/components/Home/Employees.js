import { Flex, VStack, Heading, Box } from "@chakra-ui/react";
import Card from "../Card";
import { MBox } from "@/styles/Motion";
import { EASE, SECTION_PX, SECTION_PY } from "@/styles/tokens";

export default function Employees() {
  return (
    <Box as="section" w="full" py={SECTION_PY}>
      <VStack
        w="full"
        maxW="80rem"
        mx="auto"
        px={SECTION_PX}
        spacing={{ base: "2.5rem", sm: "3rem", md: "4rem" }}
      >
        <MBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Heading
            fontSize={{ base: "2.2rem", sm: "2.8rem" }}
            textAlign="center"
            textTransform="uppercase"
            color="prim"
            fontWeight="700"
            letterSpacing="0.25rem"
            sx={{
              fontStretch: "condensed",
            }}
          >
            Our Team
          </Heading>
        </MBox>

        <Flex
          alignItems="stretch"
          justifyContent="center"
          flexWrap="wrap"
          w="full"
          gap={{ base: "2rem", sm: "2.25rem", md: "2.5rem", lg: "3rem" }}
        >
          <Box w={{ base: "full", sm: "17rem", md: "17.5rem", lg: "17rem", xl: "17.5rem" }}>
            <Card
              img="/galal.webp"
              bg="prim3"
              heading="Mahmoud Galal"
              text="CEO"
            />
          </Box>
          <Box w={{ base: "full", sm: "17rem", md: "17.5rem", lg: "17rem", xl: "17.5rem" }}>
            <Card
              img="/magdy.webp"
              bg="prim4"
              heading="Ahmed Magdi"
              text="Senior Business Development Officer"
              email="Ahmed.magdy@bioenergyegy.com"
            />
          </Box>
          <Box w={{ base: "full", sm: "17rem", md: "17.5rem", lg: "17rem", xl: "17.5rem" }}>
            <Card
              img="/tala.webp"
              bg="prim3"
              heading="Tala Bassam"
              text="Business Development Specialist"
              email="Tala@bioenergyegy.com"
            />
          </Box>
          <Box w={{ base: "full", sm: "17rem", md: "17.5rem", lg: "17rem", xl: "17.5rem" }}>
            <Card
              img=""
              bg="prim4"
              heading="Thuraya Mohamed"
              text="Business Development Specialist"
              email="Thurya@bioenergyegy.com"
            />
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
}
