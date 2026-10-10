import {
  Button,
  Flex,
  HStack,
  Stack,
  Box,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Link,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState, useEffect, useRef } from "react";
import { SiLinkedin } from "react-icons/si";
import { Divide as Hamburger } from "hamburger-react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isNotMobile] = useMediaQuery("(min-width: 1150px)");
  
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      color="white"
      fontSize={"1.2rem"}
      fontWeight={"normal"}
      pos={"fixed"}
      zIndex={1000}
      bg={isScrolled ? "rgba(0, 0, 0, 0.5)" : "transparent"}
      backdropFilter={isScrolled ? "blur(12px)" : "none"}
      transition="all 0.3s ease"
      w="full"
      px={["1.5rem", "3rem", "6rem"]}
      alignItems={"center"}
      mt={["0.8rem", "1rem", "2rem"]}
      sx={{
        "@media screen and (max-height:620px)": {
          mt: "0.8rem",
        },
      }}
      h="4.75rem"
      top="0"
      justifyContent={"space-between"}
    >
      <Box as={NextLink} href={"/"} sx={{ svg: { fill: "prim" } }}>
        <Image src="../1.svg" alt="logo" w="full" maxW="10rem" />
      </Box>
      {!isNotMobile ? (
        <>
          <Box display={isNotMobile ? "none" : "block"}>
            <Hamburger
              size={"22"}
              toggled={isOpen}
              toggle={isOpen ? onClose : onOpen}
              color={"white"}
            />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            blockScrollOnMount
            size="full"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton
                transform={"scale(1.3)"}
                color="white"
                top="4rem"
                right="2rem"
              />
              <DrawerBody
                display={"flex"}
                flexDirection={"column"}
                gap={"1rem"}
                alignItems={"center"}
                justifyContent={"center"}
                bg="prim"
                color="white"
              >
                <Stack
                  direction={"column"}
                  gap="1rem"
                  textAlign={"start"}
                  alignItems={"start"}
                  justifyContent={"center"}
                >
                  <Button
                    fontWeight={"normal"}
                    as={NextLink}
                    variant="none"
                    href="/"
                    onClick={onClose}
                  >
                    Home
                  </Button>
                  <Button
                    m="0"
                    fontWeight={"normal"}
                    as={NextLink}
                    variant="none"
                    href="/about"
                    onClick={onClose}
                  >
                    About Us
                  </Button>
                  <Button
                    m="0"
                    fontWeight={"normal"}
                    as={NextLink}
                    variant="none"
                    href="/products&services"
                    onClick={onClose}
                  >
                    Products & Services
                  </Button>
                  <Button
                    m="0"
                    fontWeight={"normal"}
                    as={NextLink}
                    variant="none"
                    href="/contact"
                    onClick={onClose}
                  >
                    Contact Us
                  </Button>
                  <Link
                    href="https://www.linkedin.com/company/the-green-innovation-company-tgi/about/"
                    target="_blank"
                    as={NextLink}
                  >
                    <Button
                      _hover={{
                        background: "blue.200",
                      }}
                      w="full"
                      variant="outline"
                      rounded={"full"}
                      leftIcon={<SiLinkedin />}
                    >
                      LinkedIn
                    </Button>
                  </Link>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <>
          <HStack
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 100 }}
            display={!isNotMobile ? "none" : "block"}
            fontSize={"1rem"}
            spacing={"2.2rem"}
            fontWeight={"600"}
            sx={{
              a: {
                p: 0,
              },
            }}
          >
            <Button
              fontWeight={"normal"}
              as={NextLink}
              variant="none"
              href="/"
              transition={"color 0.2s ease"}
              _hover={{
                color: "prim",
              }}
            >
              Home
            </Button>
            <Button
              m="0"
              fontWeight={"normal"}
              as={NextLink}
              variant="none"
              href="/about"
              transition={"color 0.2s ease"}
              _hover={{
                color: "prim",
              }}
            >
              About Us
            </Button>
            <Button
              m="0"
              fontWeight={"normal"}
              as={NextLink}
              variant="none"
              href="/products&services"
              transition={"color 0.2s ease"}
              _hover={{
                color: "prim",
              }}
            >
              Products & Services
            </Button>
            <Button
              m="0"
              fontWeight={"normal"}
              as={NextLink}
              variant="none"
              href="/contact"
              transition={"color 0.2s ease"}
              _hover={{
                color: "prim",
              }}
            >
              Contact Us
            </Button>
            <IconButton
              size={"lg"}
              variant="ghost"
              color={"white"}
              rounded={"full"}
              _hover={{
                background: "blue.200",
              }}
              colorScheme="whiteAlpha"
              as={NextLink}
              border="2px solid white"
              href={
                "https://www.linkedin.com/company/the-green-innovation-company-tgi/about/"
              }
              icon={<SiLinkedin />}
            />
          </HStack>
        </>
      )}
    </Flex>
  );
}
