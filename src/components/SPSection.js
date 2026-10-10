import { Box, Flex, VStack, Image } from "@chakra-ui/react";
import SPHeader from "./SPHeader";
import { MBox } from "@/styles/Motion";
import { EASE } from "@/styles/tokens";

export default function SPSection({
  head,
  txt,
  children,
  img,
  link,
  reverse,
  whiteBg,
}) {
  // Normalize image path safely
  let cleanImg = img?.startsWith("..") ? img.replace(/^\.\.\/+/, "/") : img;
  if (cleanImg && !cleanImg.startsWith("/")) {
    cleanImg = `/${cleanImg}`;
  }

  return (
    <Box
      as="section"
      id={link}
      w="full"
      bg={whiteBg ? "white" : "prim"}
      color={whiteBg ? "textPrim" : "white"}
      pos="relative"
      overflow="hidden"
      scrollMarginTop="5rem"
    >
      <Flex
        w="full"
        maxW="82rem"
        mx="auto"
        align="center"
        justify="space-between"
        px={["1.5rem", "3rem", "6rem"]}
        py={["4.5rem", "5.5rem", "7rem"]}
        gap={["3rem", "3.5rem", "5rem"]}
        flexDir={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          reverse ? "row-reverse" : "row",
        ]}
      >
        {/* Text Content Column */}
        <MBox
          flex="1"
          w="full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <VStack spacing={["1.75rem", "2rem", "2.25rem"]} align="start" w="full">
            <SPHeader
              txtColor={whiteBg ? "textPrim" : "white"}
              headColor={whiteBg ? "prim" : "white"}
              head={head}
              txt={txt}
            />
            {children}
          </VStack>
        </MBox>

        {/* Visual Media Column */}
        <MBox
          w="full"
          maxW={["full", "full", "28rem", "34rem"]}
          pos="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Image
            src={cleanImg}
            alt={head}
            rounded="2rem"
            w="full"
            h={["18rem", "22rem", "26rem", "28rem"]}
            objectFit="cover"
            boxShadow={
              whiteBg
                ? "0 20px 40px rgba(0,0,0,0.08)"
                : "0 20px 40px rgba(0,0,0,0.25)"
            }
          />
        </MBox>
      </Flex>
    </Box>
  );
}
