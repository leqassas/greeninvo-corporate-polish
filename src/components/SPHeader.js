import { VStack, Heading, Text } from "@chakra-ui/react";

export default function SPHeader({ head, txt, headColor, txtColor }) {
  return (
    <VStack spacing={"1.25rem"} align={"start"} w="full">
      <Heading
        fontSize={["2rem", "2rem", "2rem", "2.5rem", "2.8rem", "2.5rem"]}
        color={headColor}
        as="h2"
        fontWeight={"700"}
        lineHeight={"normal"}
        textAlign={"left"}
        w="full"
      >
        {head}
      </Heading>
      {txt && (
        <Text
          fontSize={["1rem", "1.2rem", "1.2rem", "1.2rem", "1.2rem", "1.2rem"]}
          color={txtColor}
          w={"full"}
          fontWeight={"700"}
          lineHeight={["normal", "normal", "normal", "normal", "2.5rem"]}
        >
          {txt}
        </Text>
      )}
    </VStack>
  );
}
