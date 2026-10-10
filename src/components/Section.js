import { MHeading, MText } from "@/styles/Motion";
import { Flex } from "@chakra-ui/react";

export default function Section({ align, color, heading, text, btn }) {
  return (
    <Flex
      bg="prim3"
      p="1rem"
      gap="0.5rem"
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minH="25rem"
      maxH="30rem"
      borderRadius={"1rem"}
      borderLeftRadius={[
        "1rem",
        "1rem",
        "1rem",
        "1rem",
        `${align === "end" && "none"}`,
      ]}
      borderRightRadius={[
        "1rem",
        "1rem",
        "1rem",
        "1rem",
        `${align === "start" && "none"}`,
      ]}
      flex="1"
    >
      <MHeading
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{duration:0.5}}
        my="2rem"
        textAlign={"center"}
        fontSize={['3xl','3xl','5xl']}

      >
        {heading}
      </MHeading>
      <MText
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{duration:0.5}}
        noOfLines={3}
        px={["1.5rem", "3rem", "6rem"]}
        textAlign={"center"}
        fontSize={["1rem", "1rem", "1.2rem"]}
        color="text"
        w={["full", "full", "full", "80%"]}
      >
        {text}
      </MText>
      {btn}
    </Flex>
  );
}
