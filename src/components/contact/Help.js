import { Heading, VStack, Text, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { MBox } from "@/styles/Motion";

export default function Help() {
  return (
    <VStack
      spacing={"3.12rem"}
      align={"center"}
      className="mainPX"
      w="full"
      pb="4.8rem"
    >
      <VStack spacing={"1.56rem"} align={"center"} w="full">
        <Heading
          color="prim"
          fontSize={"2rem"}
          fontWeight={"700"}
          textTransform={"uppercase"}
        >
          Need help?
        </Heading>
        <Heading
          color="black"
          fontSize={["1.5rem", "1.5rem", "2rem"]}
          textTransform={"capitalize"}
          fontWeight={"400"}
          textAlign={"center"}
        >
          Reach out to our Business Development Manager:
        </Heading>
      </VStack>
      <VStack spacing="1.5rem" align={"center"} w="full" maxW={"18.75rem"}>
        <MBox
          w="full"
          h="18.75rem"
          boxShadow="none"
          bgImage={"../../magdy.webp"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          rounded={"1.875rem"}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        />

        <VStack align={"center"} spacing={"0.5rem"}>
          <Heading
            fontSize={"1.875rem"}
            textAlign={"center"}
            fontWeight={"600"}
            color={"black"}
          >
            Ahmed Magdi
          </Heading>
          <Text
            fontSize={"1.25rem"}
            textAlign={"center"}
            fontWeight={"600"}
            color="#676767"
            as={Link}
            href={`mailto:info@tgi-bv.com`}
          >
            info@tgi-bv.com
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}
