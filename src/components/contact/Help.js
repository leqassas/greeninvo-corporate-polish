import { Heading, VStack, Text, Box, Link, Flex } from "@chakra-ui/react";
import React from "react";
import { MdEmail } from "react-icons/md";
import { MBox } from "@/styles/Motion";
import { ImageReveal } from "@/components/motion/primitives";
import { EASE } from "@/styles/tokens";

export default function Help() {
  return (
    <Box as="section" w="full" bg="white" color="textPrim" pos="relative" overflow="hidden">
      <Box
        w="full"
        maxW="80rem"
        mx="auto"
        px={["1.5rem", "3rem", "6rem"]}
        py={["4.5rem", "5.5rem", "7rem"]}
      >
        <VStack spacing={["2.5rem", "3.5rem"]} align="center" w="full">
          {/* Header */}
          <VStack spacing="0.75rem" align="center" textAlign="center" w="full">
            <Text
              fontSize="0.8rem"
              letterSpacing="0.25em"
              textTransform="uppercase"
              fontWeight="600"
              color="prim"
            >
              Direct Support
            </Text>

            <Heading
              as="h2"
              color="prim"
              fontSize={["2rem", "2.5rem"]}
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="0.15rem"
              sx={{
                fontStretch: "condensed",
              }}
            >
              NEED HELP?
            </Heading>

            <Text
              color="textPrim"
              fontSize={["1.2rem", "1.35rem", "1.5rem"]}
              fontWeight="400"
              maxW="36rem"
            >
              Reach out to our Business Development Manager:
            </Text>
          </VStack>

          {/* Profile Card */}
          <MBox
            w="full"
            maxW="22rem"
            p="1.5rem"
            rounded="2.25rem"
            bg="#FAFAFA"
            border="1px solid"
            borderColor="blackAlpha.100"
            boxShadow="0 10px 30px rgba(0,0,0,0.04)"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE }}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              borderColor: "rgba(3, 152, 158, 0.35)",
            }}
          >
            <VStack spacing="1.25rem" align="center" w="full">
              <ImageReveal
                src="/magdy.webp"
                alt="Ahmed Magdi"
                rounded="1.75rem"
                w="full"
                h="18.75rem"
                boxShadow="0 8px 25px rgba(0,0,0,0.08)"
              />

              <VStack align="center" spacing="0.4rem" pt="0.5rem">
                <Heading
                  as="h3"
                  fontSize="1.6rem"
                  textAlign="center"
                  fontWeight="700"
                  color="black"
                >
                  Ahmed Magdi
                </Heading>

                <Flex
                  align="center"
                  gap="0.4rem"
                  color="prim"
                  fontSize="1.05rem"
                  fontWeight="500"
                >
                  <MdEmail size="1.2rem" />
                  <Link
                    href="mailto:info@tgi-bv.com"
                    _hover={{ textDecoration: "underline" }}
                  >
                    info@tgi-bv.com
                  </Link>
                </Flex>
              </VStack>
            </VStack>
          </MBox>
        </VStack>
      </Box>
    </Box>
  );
}
