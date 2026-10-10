import { VStack, Heading, Text, Box, Flex } from "@chakra-ui/react";

export default function SPHeader({ head, txt, headColor, txtColor }) {
  return (
    <VStack spacing="1.25rem" align="start" w="full">
      <Heading
        as="h2"
        fontSize={["2rem", "2.4rem", "2.8rem"]}
        color={headColor}
        fontWeight="700"
        lineHeight="1.15"
        textAlign="left"
        letterSpacing="-0.01em"
        w="full"
        sx={{
          fontStretch: "condensed",
        }}
      >
        {head}
      </Heading>
      {txt && (
        <Text
          fontSize={["1.1rem", "1.2rem", "1.25rem"]}
          color={txtColor}
          w="full"
          fontWeight="500"
          lineHeight={["1.6", "1.7"]}
          opacity={0.95}
        >
          {txt}
        </Text>
      )}
    </VStack>
  );
}
