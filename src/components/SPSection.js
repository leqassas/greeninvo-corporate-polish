import { Box, Flex, VStack, Image } from "@chakra-ui/react";
import SPHeader from "./SPHeader";
import { MBox } from "@/styles/Motion";
import { EASE, SECTION_PX, SECTION_PY } from "@/styles/tokens";

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
        px={SECTION_PX}
        py={SECTION_PY}
        gap={{ base: "2.5rem", sm: "3rem", lg: "4.5rem", xl: "5.5rem" }}
        flexDir={{
          base: "column-reverse",
          lg: reverse ? "row-reverse" : "row",
        }}
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
          maxW={{ base: "full", lg: "28rem", xl: "34rem" }}
          pos="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          flexShrink={0}
        >
          <Image
            src={cleanImg}
            alt={head}
            rounded="2rem"
            w="full"
            h={{ base: "16rem", sm: "20rem", md: "24rem", lg: "28rem" }}
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
