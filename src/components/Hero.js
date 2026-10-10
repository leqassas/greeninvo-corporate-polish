import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import NextLink from "next/link";
import { Open_Sans, Poppins } from "next/font/google";
import localFont from "next/font/local";

const pop = Poppins({ subsets: ["latin"], weight: ["500"] });

const local = localFont({
  src: "../styles/fonts/OpenSans_Condensed-Regular.ttf",
});

export default function Hero({ page, bg, heading, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Flex
      pos={"relative"}
      bgImage={bg}
      h={[
        page !== "home" && page !== "product" ? "80svh" : "110svh",
        page !== "home" && page !== "product" ? "80svh" : "100svh",
      ]}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      bgSize={"cover"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"white"}
      zIndex="docked"
    >
      <Flex
        pos={"relative"}
        bg="linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.60) 100%)"
        top="0"
        w={"full"}
        h={[
          page !== "home" && page !== "product" ? "80svh" : "110svh",
          page !== "home" && page !== "product" ? "80svh" : "100svh",
        ]}
        alignItems={"center"}
        justifyContent={"center"}
        px={["1.5rem", "3rem", "6rem"]}
      >
        <Flex flexDir={"column"} align={"center"} justify={"center"} gap="1rem">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              fontFamily={
                page !== "home" ? pop.style.fontFamily : local.style.fontFamily
              }
              fontWeight={page === "home" ? "400" : "500"}
              textAlign={"center"}
              fontSize={["2.4rem", "2.4rem", "4rem"]}
            >
              {heading}
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {text && (
              <Text
                textAlign={[
                  page === "product" ? "justify" : "center",
                  page === "product" ? "justify" : "center",
                  page === "product" ? "justify" : "center",
                  "center",
                  "center",
                ]}
                fontSize={["1.2rem", "1.2rem", "1.5rem"]}
                fontWeight={"300"}
                textTransform={"capitalize"}
                w="full"
                maxW={"91.25rem"}
              >
                {text}
              </Text>
            )}
          </motion.div>

          {page === "home" && (
            <Button
              w={["9.75rem", "9.75rem", "11.75rem"]}
              h={["3rem", "3rem", "3.5rem"]}
              border="0px solid #03989e"
              variant={"none"}
              bg="prim"
              color="white"
              rounded={"full"}
              as={NextLink}
              href="/contact"
              transition={"background color box-shadow 0.2s ease"}
              _hover={{
                border: "3px solid #03989e",
                bg: "whiteAlpha.200",
                boxShadow: "none",
              }}
            >
              Contact Us
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
