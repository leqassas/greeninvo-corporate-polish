import { Center, Heading, chakra, Text, Box } from "@chakra-ui/react";
import { DM_Sans } from "next/font/google";
const dm = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Quote() {
  return (
    <Center
      spacing={"0"}
      bgImage="../../quote.webp"
      bgPos={"100% 60%"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      boxShadow="none"
      w="full"
    >
      <Center
        bg="rgba(3, 152, 158, 0.30)"
        className="mainPX"
        flexDir={"column"}
        py="4.2rem"
        w="full"
        gap="2rem"
      >
        <Heading
          fontWeight={"700"}
          color="white"
          letterSpacing={"normal"}
          w="full"
          fontSize={["1.5rem", "2rem", "2rem", "2.25rem", "2.5rem"]}
        >
          At The Green Innovations, we are committed to sustainability and
          innovation. We believe that by working together with our partners and
          stakeholders, we can create a more sustainable future for everyone.
        </Heading>

        <Text
          fontSize={["1rem", "1.2rem", "1.2rem", "1.5rem", "2rem"]}
          fontWeight={"400"}
          color="white"
          w="full"
          fontFamily={dm.style.fontFamily}
        >
          {
            "Explore our website to learn more about our services and how we can help you achieve your sustainability goals."
          }
        </Text>
      </Center>
    </Center>
  );
}
