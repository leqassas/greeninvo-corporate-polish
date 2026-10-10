import { Flex, VStack, Heading, Box } from "@chakra-ui/react";
import Card from "../Card";
import { MBox } from "@/styles/Motion";
import { EASE } from "@/styles/tokens";

export default function Employees() {
  return (
    <Box as="section" w="full" py={["4rem", "5rem", "6.5rem"]}>
      <VStack
        w="full"
        maxW="80rem"
        mx="auto"
        px={["1.5rem", "3rem", "6rem"]}
        spacing="3.5rem"
      >
        <MBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Heading
            fontSize={["2.2rem", "2.8rem"]}
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
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          w="full"
          gap={["2rem", "2.5rem", "3rem"]}
        >
          <Card
            img="/galal.webp"
            bg="prim3"
            heading="Mahmoud Galal"
            text="CEO"
          />
          <Card
            img="/magdy.webp"
            bg="prim4"
            heading="Ahmed Magdi"
            text="Senior Business Development Officer"
            email="Ahmed.magdy@bioenergyegy.com"
          />
          <Card
            img="/tala.webp"
            bg="prim3"
            heading="Tala Bassam"
            text="Business Development Specialist"
            email="Tala@bioenergyegy.com"
          />
          <Card
            img=""
            bg="prim4"
            heading="Thuraya Mohamed"
            text="Business Development Specialist"
            email="Thurya@bioenergyegy.com"
          />
        </Flex>
      </VStack>
    </Box>
  );
}
