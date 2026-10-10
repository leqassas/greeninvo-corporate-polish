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
  Image,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { SiLinkedin } from "react-icons/si";
import { Divide as Hamburger } from "hamburger-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { TLink, useExperience } from "@/components/motion/Experience";
import { MBox } from "@/styles/Motion";
import { EASE } from "@/styles/tokens";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products&services", label: "Products & Services" },
  { href: "/contact", label: "Contact Us" },
];
const LINKEDIN = "https://www.linkedin.com/company/the-green-innovation-company-tgi/about/";

// Underline that grows from the left on hover and stays on the active page.
const underline = (active) => ({
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "-6px",
    height: "1px",
    bg: "prim",
    transform: active ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: active ? "left" : "right",
    transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "left",
  },
});

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [isNotMobile] = useMediaQuery("(min-width: 1150px)");
  const router = useRouter();
  const { lenis } = useExperience();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // Frosted bar once scrolled; tuck away while scrolling down, return on scroll up.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 50);
    setIsHidden(latest > previous && latest > 400);
  });

  useEffect(() => {
    if (!lenis) return;
    if (isOpen) lenis.stop();
    else lenis.start();
  }, [isOpen, lenis]);

  const isActive = (href) => decodeURI(router.asPath.split("#")[0]) === href;

  return (
    <MBox
      pos="fixed"
      top="0"
      left="0"
      w="full"
      zIndex={1000}
      initial={false}
      animate={{ y: isHidden && !isOpen ? "-110%" : "0%" }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <Flex
        color="white"
        fontSize={"1.2rem"}
        fontWeight={"normal"}
        w="full"
        px={["1.5rem", "3rem", "6rem"]}
        alignItems={"center"}
        justifyContent={"space-between"}
        h={isScrolled ? "4.75rem" : ["5.5rem", "5.75rem", "6.75rem"]}
        bg={isScrolled ? "rgba(0, 0, 0, 0.5)" : "transparent"}
        backdropFilter={isScrolled ? "blur(12px)" : "none"}
        borderBottom="1px solid"
        borderColor={isScrolled ? "whiteAlpha.100" : "transparent"}
        transition="height 0.5s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease"
      >
        <Box as={TLink} href={"/"} aria-label="The Green Innovation — Home">
          <Image
            src="/1.svg"
            alt="logo"
            w="full"
            maxW={isScrolled ? "8.5rem" : "10rem"}
            transition="max-width 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
          />
        </Box>
        {!isNotMobile ? (
          <>
            <Box>
              <Hamburger
                size={22}
                toggled={isOpen}
                toggle={isOpen ? onClose : onOpen}
                color={"white"}
                label="Open menu"
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
              <DrawerContent data-lenis-prevent>
                <DrawerCloseButton
                  transform={"scale(1.3)"}
                  color="white"
                  top="2rem"
                  right="2rem"
                />
                <DrawerBody
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg="prim"
                  color="white"
                >
                  <Stack
                    as={motion.div}
                    direction={"column"}
                    spacing="1.25rem"
                    alignItems={"start"}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
                    }}
                  >
                    {LINKS.map((l) => (
                      <Box key={l.href} overflow="hidden">
                        <motion.div
                          variants={{
                            hidden: { y: "110%" },
                            visible: { y: "0%", transition: { duration: 0.8, ease: EASE } },
                          }}
                        >
                          <Box
                            as={TLink}
                            href={l.href}
                            onClick={onClose}
                            display="inline-block"
                            fontSize={["2rem", "2.5rem"]}
                            fontWeight="500"
                            lineHeight="1.2"
                            opacity={isActive(l.href) ? 1 : 0.85}
                            sx={underline(isActive(l.href))}
                          >
                            {l.label}
                          </Box>
                        </motion.div>
                      </Box>
                    ))}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
                      }}
                    >
                      <Link href={LINKEDIN} isExternal _hover={{ textDecoration: "none" }}>
                        <Button
                          mt="1rem"
                          variant="outline"
                          color="white"
                          borderColor="whiteAlpha.600"
                          borderWidth="1px"
                          rounded={"full"}
                          leftIcon={<SiLinkedin />}
                          transition="transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease"
                          _hover={{
                            bg: "whiteAlpha.200",
                            transform: "scale(1.05)",
                            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                          }}
                        >
                          LinkedIn
                        </Button>
                      </Link>
                    </motion.div>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <MBox
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          >
          <HStack fontSize={"1rem"} spacing={"2.5rem"}>
            {LINKS.map((l) => (
              <Box
                key={l.href}
                as={TLink}
                href={l.href}
                fontWeight="normal"
                color={isActive(l.href) ? "white" : "whiteAlpha.900"}
                transition="color 0.3s ease"
                _hover={{ color: "prim" }}
                sx={underline(isActive(l.href))}
              >
                {l.label}
              </Box>
            ))}
            <IconButton
              size={"lg"}
              variant="ghost"
              color={"white"}
              rounded={"full"}
              as="a"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              border="1px solid"
              borderColor="whiteAlpha.500"
              icon={<SiLinkedin />}
              transition="transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease"
              _hover={{
                bg: "white",
                color: "prim",
                transform: "scale(1.05)",
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
            />
          </HStack>
          </MBox>
        )}
      </Flex>
    </MBox>
  );
}
