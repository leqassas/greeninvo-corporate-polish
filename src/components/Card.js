import { Flex, VStack, Heading, Text, Link, Box } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { TbArrowUpRight } from "react-icons/tb";
import { MBox, MImg } from "@/styles/Motion";
import { TLink } from "@/components/motion/Experience";
import { EASE } from "@/styles/tokens";

export default function Card({ img, bg, heading, text, email, link }) {
  // Normalize image path safely
  let cleanImg = img?.startsWith("..") ? img.replace(/^\.\.\/+/, "/") : img;
  if (cleanImg && !cleanImg.startsWith("/")) {
    cleanImg = `/${cleanImg}`;
  }
  const isBrokenOrMissing = !cleanImg || cleanImg === "/.png" || cleanImg === "/";

  // If link is provided, create the anchor URL
  const destination = link
    ? link.startsWith("/")
      ? link
      : `/products&services#${link}`
    : null;

  const CardWrapper = destination ? TLink : Box;

  return (
    <CardWrapper
      href={destination || undefined}
      style={{ textDecoration: "none", width: "100%", display: "block" }}
    >
      <VStack
        spacing="1.25rem"
        align="start"
        w="full"
        maxW="23.5rem"
        mx="auto"
        role="group"
        cursor={destination ? "pointer" : "default"}
        transition="all 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
        _hover={{
          transform: "translateY(-8px)",
        }}
      >
        {/* Image Frame with hover zoom */}
        <Box
          pos="relative"
          w="full"
          h={["18rem", "20rem", "21rem"]}
          rounded="1.75rem"
          overflow="hidden"
          bg={bg ? bg : "#EAEAEA"}
          border="1px solid"
          borderColor="blackAlpha.100"
          boxShadow="0 4px 20px rgba(0,0,0,0.04)"
          transition="box-shadow 0.4s ease, border-color 0.4s ease"
          _groupHover={{
            boxShadow: "0 20px 35px rgba(0,0,0,0.12)",
            borderColor: "rgba(3, 152, 158, 0.35)",
          }}
        >
          {!isBrokenOrMissing ? (
            <MImg
              src={cleanImg}
              alt={heading}
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="center"
              transition={{ duration: 0.6, ease: EASE }}
              _groupHover={{
                transform: "scale(1.06)",
              }}
            />
          ) : (
            <Flex
              w="full"
              h="full"
              align="center"
              justify="center"
              bg="prim3"
              color="text"
            >
              <Text fontSize="1.1rem" fontWeight="600">
                {heading?.charAt(0)}
              </Text>
            </Flex>
          )}

          {/* Subtle gradient vignette at bottom */}
          <Box
            pos="absolute"
            inset="0"
            bg="linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.25) 100%)"
            pointerEvents="none"
          />

          {/* Interactive top-right arrow badge for product cards */}
          {destination && (
            <Flex
              pos="absolute"
              top="1rem"
              right="1rem"
              boxSize="2.5rem"
              rounded="full"
              bg="whiteAlpha.900"
              color="textPrim"
              backdropFilter="blur(8px)"
              align="center"
              justify="center"
              boxShadow="0 4px 12px rgba(0,0,0,0.1)"
              transition="all 0.3s ease"
              _groupHover={{
                bg: "prim",
                color: "white",
                transform: "scale(1.08)",
              }}
            >
              <TbArrowUpRight size="1.25rem" />
            </Flex>
          )}
        </Box>

        {/* Card Metadata */}
        <VStack align="start" spacing="0.35rem" w="full" px="0.25rem">
          <Heading
            as="h3"
            fontSize={["1.15rem", "1.25rem"]}
            fontWeight="700"
            color="black"
            lineHeight="1.3"
            transition="color 0.3s ease"
            _groupHover={{ color: "prim" }}
          >
            {heading}
          </Heading>

          {text && (
            <Text fontSize="0.95rem" color="text" fontWeight="400">
              {text}
            </Text>
          )}

          {email && (
            <Flex
              align="center"
              gap="0.4rem"
              color="prim"
              fontSize="0.875rem"
              pt="0.2rem"
            >
              <MdEmail />
              <Text
                as={Link}
                href={`mailto:${email.trim()}`}
                _hover={{ textDecoration: "underline" }}
              >
                {email.trim()}
              </Text>
            </Flex>
          )}
        </VStack>
      </VStack>
    </CardWrapper>
  );
}
