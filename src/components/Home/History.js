import {
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Center,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { TbCircleArrowRight } from "react-icons/tb";
import { MBox, MImg } from "@/styles/Motion";

export default function History() {
  return (
    <Center w="full">
      <VStack
        bg="prim"
        color="white"
        className="mainPX"
        w="full"
        px="mainPX"
        py="4.8rem"
        spacing={"2.5rem"}
      >
        <Flex w="full">
          <Heading
            alignSelf={["center", "center", "center", "center", "start"]}
            pos="relative"
            fontSize={"3rem"}
            fontWeight={"700"}
            letterSpacing={"0.25rem"}
            sx={{
              fontStretch: "condensed",
            }}
          >
            WHAT WE DO
          </Heading>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexDir={["column", "column", "column", "column", "row"]}
          gap={["4rem", "4rem", "6.5rem"]}
        >
          <MImg
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            src="1.svg"
            alt="logo"
            w="full"
            maxW={"27.5rem"}
          />
          <MBox
            flex="1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <VStack spacing={"1.2rem"}>
              <Text fontSize={["1.5rem", "1.8rem", "1.8rem"]} fontWeight="600">
                Welcome to The Green Innovation, a leading company specializing
                in sustainable solutions for waste management, alternative raw
                materials, and energy production.
              </Text>
              <Text
                fontSize={["1.2rem", "1.2rem", "1.2rem"]}
                fontWeight={"400"}
                lineHeight={"2.5rem"}
              >
                As the holding company of Bio Energy For Alternative Fuels and
                Estidama, based in Egypt, our mission is to create a better
                future for our planet and communities by providing innovative,
                environmentally friendly solutions for industrial activities.
              </Text>
              <IconButton
                alignSelf={"start"}
                variant={"none"}
                color="white"
                as={NextLink}
                icon={<TbCircleArrowRight size={"2.5rem"} />}
                sx={{
                  p: 0,
                }}
                href="/about"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </VStack>
          </MBox>
        </Flex>
      </VStack>
    </Center>
  );
}
