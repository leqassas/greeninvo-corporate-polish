import { Flex, VStack, Heading, Text, Link, Avatar } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import NextLink from "next/link";
import { MBox } from "@/styles/Motion";

export default function Card({ img, bg, heading, text, email, link }) {
  return (
    <VStack 
      spacing="1.5rem" 
      align={"center"} 
      h="23.125rem" 
      w={"23.125rem"}
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-10px)" }}
    >
      <MBox
        w="full"
        h="23.125rem"
        boxShadow="none"
        bgImage={img}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPos={"center"}
        rounded={text ? "1.875rem" : "0.625rem"}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      />

      <VStack align={"center"} spacing={"0.5rem"}>
        <Heading
          fontSize={"1.2rem"}
          textAlign={"center"}
          fontWeight={"700"}
          color={"black"}
          whiteSpace={"pre"}
        >
          {heading}
        </Heading>
        {text && <Text fontSize={"1rem"}>{text}</Text>}
        {email && (
          <Flex align={"center"} justifyContent={"center"} gap="0.5rem">
            <MdEmail />
            <Text fontSize={"0.875rem"} as={Link} href={`mailto:${email}`}>
              {email}
            </Text>
          </Flex>
        )}
        {/* {link && (
          <Link
            color={"prim"}
            fontSize={"1rem"}
            as={NextLink}
            href={`/products/${link}`}
          >
            Learn more
          </Link>
        )} */}
      </VStack>
    </VStack>
  );
}
