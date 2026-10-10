import { Flex, Image, VStack, Box } from "@chakra-ui/react";
import SPHeader from "./SPHeader";

export default function SPSection({
  head,
  txt,
  children,
  img,
  link,
  reverse,
  whiteBg,
}) {
  return (
    <Flex
      align={"stretch"}
      justify={"center"}
      w="full"
      bg={whiteBg ? "white" : "prim"}
      id={link}
      flexDir={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "column-reverse",
        reverse ? "row-reverse" : "row",
      ]}
    >
      <VStack
        spacing={reverse ? "3.12rem" : "1.8rem"}
        px={["1.5rem", "3rem", "6rem"]}
        py="5.2rem"
        align="center"
        justify="center"
        w="full"
      >
        <SPHeader
          txtColor={whiteBg ? "black" : "white"}
          headColor={whiteBg ? "black" : "white"}
          head={head}
          txt={txt}
        />
        {children}
      </VStack>
      <Box
        h={["20rem", "20rem", "25rem", "25rem", "auto"]}
        w="full"
        maxW={["full", "full", "full", "full", "43.5rem"]}
      >
        <Image alt={head} src={img} objectFit="cover" w="full" h="full" />
      </Box>
    </Flex>
  );
}
