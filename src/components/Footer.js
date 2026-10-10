import {
  Text,
  Heading,
  Center,
  Divider,
  Image,
  Stack,
  HStack,
  Icon,
  Input,
  FormControl,
  Button,
  chakra,
  Flex,
  VStack,
  useToast,
  Box,
} from "@chakra-ui/react";
import { MdPhoneCallback, MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { postForm } from "@/lib/postForm";
import { TLink } from "@/components/motion/Experience";
import { Magnetic } from "@/components/motion/primitives";

export default function Footer() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef2 = useRef(null);
  const toast = useToast();

  async function onSubmit() {
    const promise = postForm(
      "https://script.google.com/macros/s/AKfycbwo7dp77y0TFEYjScjCcI_oVWXnM7zJb9Q8DE-LoDZaAqX7w2Avfj0zQtL1I1LZhMxfZg/exec",
      formRef2.current,
      12000
    ).then(() => {
      formRef2.current?.reset();
    });

    toast.promise(promise, {
      success: {
        title: "Sent!",
        description: "Your Message has been sent!",
        duration: 3000,
        isClosable: true,
      },
      error: {
        title: "Failed",
        description: "Something went wrong. Please try again.",
        duration: 3000,
        isClosable: true,
      },
      loading: {
        title: "Submitting",
        description: "Please wait",
        duration: 3000,
      },
    });

    return promise;
  }

  return (
    <Box as="footer" bg="prim" color="white" w="full" pos="relative" overflow="hidden">
      {/* Ambient background glow */}
      <Box
        pos="absolute"
        bottom="-10%"
        left="-10%"
        w="40rem"
        h="40rem"
        rounded="full"
        bg="blackAlpha.200"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Box
        w="full"
        maxW="82rem"
        mx="auto"
        px={["1.5rem", "3rem", "6rem"]}
        pt={["4.5rem", "5.5rem", "6.5rem"]}
        pb={["3rem", "4rem", "4.5rem"]}
      >
        <Flex
          flexDir={["column", "column", "column", "row"]}
          align={["start", "start", "start", "start"]}
          justify="space-between"
          gap={["3.5rem", "4rem", "4.5rem"]}
          w="full"
        >
          {/* Brand & Newsletter Column */}
          <Stack
            spacing="1.75rem"
            w="full"
            maxW={["full", "full", "28.5rem"]}
          >
            <Box as={TLink} href="/">
              <Image
                src="/1.svg"
                alt="logo"
                w="full"
                maxW="14rem"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.03)" }}
              />
            </Box>

            <Stack
              spacing="1rem"
              w="full"
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              ref={formRef2}
            >
              <Heading fontSize="1.35rem" fontWeight="600" lineHeight="1.3">
                Innovation is the key to stay relevant.
              </Heading>

              <FormControl isInvalid={errors.email}>
                <Flex
                  align="center"
                  w="full"
                  bg="whiteAlpha.150"
                  border="1px solid"
                  borderColor="whiteAlpha.400"
                  rounded="full"
                  p="0.35rem"
                  transition="border-color 0.3s ease, box-shadow 0.3s ease"
                  _focusWithin={{
                    borderColor: "white",
                    boxShadow: "0 0 0 2px rgba(255,255,255,0.3)",
                  }}
                >
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    {...register("email", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                    border="none"
                    outline="none"
                    boxShadow="none"
                    color="white"
                    px="1.25rem"
                    fontSize="0.95rem"
                    _placeholder={{ color: "whiteAlpha.700" }}
                    _focus={{ boxShadow: "none" }}
                  />

                  <Button
                    px="1.75rem"
                    h="2.85rem"
                    bg="white"
                    color="primDark"
                    fontWeight="600"
                    fontSize="0.9rem"
                    rounded="full"
                    type="submit"
                    isLoading={isSubmitting}
                    flexShrink={0}
                    transition="all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
                    _hover={{
                      bg: "whiteAlpha.900",
                      transform: "scale(1.04)",
                      boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
                    }}
                  >
                    Get Updates
                  </Button>
                </Flex>
              </FormControl>
            </Stack>
          </Stack>

          {/* Contact Info Column */}
          <Stack
            spacing="1.5rem"
            w="full"
            maxW={["full", "full", "22rem"]}
          >
            <Heading
              fontSize="1.35rem"
              fontWeight="700"
              letterSpacing="0.15rem"
              textTransform="uppercase"
              sx={{
                fontStretch: "condensed",
              }}
            >
              Contact Info
            </Heading>

            <VStack spacing="1.15rem" align="start">
              <HStack spacing="1rem" align="center">
                <Flex
                  boxSize="2.25rem"
                  rounded="full"
                  bg="whiteAlpha.200"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Icon as={MdPhoneCallback} boxSize="1.15rem" color="white" />
                </Flex>
                <Text
                  as="a"
                  href="tel:+201200006211"
                  fontSize="1.05rem"
                  fontWeight="400"
                  _hover={{ textDecoration: "underline" }}
                >
                  +49 1523 5838091
                </Text>
              </HStack>

              <HStack spacing="1rem" align="center">
                <Flex
                  boxSize="2.25rem"
                  rounded="full"
                  bg="whiteAlpha.200"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Icon as={IoIosMail} boxSize="1.15rem" color="white" />
                </Flex>
                <Text
                  as="a"
                  href="mailto:info@tgi-bv.com"
                  fontSize="1.05rem"
                  fontWeight="400"
                  _hover={{ textDecoration: "underline" }}
                >
                  info@tgi-bv.com
                </Text>
              </HStack>

              <HStack spacing="1rem" align="start">
                <Flex
                  boxSize="2.25rem"
                  rounded="full"
                  bg="whiteAlpha.200"
                  align="center"
                  justify="center"
                  flexShrink={0}
                  mt="0.2rem"
                >
                  <Icon as={MdLocationPin} boxSize="1.15rem" color="white" />
                </Flex>
                <Text
                  as="a"
                  href="https://goo.gl/maps/jhy8Lhd29gK82TAN8?coh=178572&entry=tt"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="1.05rem"
                  fontWeight="400"
                  lineHeight="1.5"
                  _hover={{ textDecoration: "underline" }}
                >
                  Weena 690, 3012 CN Rotterdam, Netherlands
                </Text>
              </HStack>
            </VStack>
          </Stack>

          {/* Discover Links Column */}
          <Stack
            spacing="1.5rem"
            w="full"
            maxW={["full", "full", "16rem"]}
          >
            <Heading
              fontSize="1.35rem"
              fontWeight="700"
              letterSpacing="0.15rem"
              textTransform="uppercase"
              sx={{
                fontStretch: "condensed",
              }}
            >
              Discover
            </Heading>

            <VStack spacing="0.85rem" align="start">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products & Services", href: "/products&services" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <Box
                  key={item.href}
                  as={TLink}
                  href={item.href}
                  fontSize="1.05rem"
                  fontWeight="400"
                  color="whiteAlpha.900"
                  transition="all 0.2s ease"
                  _hover={{ color: "white", transform: "translateX(4px)" }}
                >
                  {item.label}
                </Box>
              ))}
            </VStack>
          </Stack>
        </Flex>
      </Box>

      {/* Bottom Copyright bar */}
      <Box borderTop="1px solid" borderColor="whiteAlpha.200" w="full">
        <Center w="full" maxW="82rem" mx="auto" px={["1.5rem", "3rem", "6rem"]} py="2rem">
          <Text textAlign="center" fontSize={["0.85rem", "0.95rem"]} color="whiteAlpha.800">
            Copyrights © 2023 Bio Energy | Powered by{" "}
            <chakra.span
              as="a"
              transition="all 0.3s ease"
              _hover={{ color: "white", textDecoration: "underline" }}
              href="https://vuedigitalsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              color="white"
              fontWeight="600"
            >
              VUE Digital Solutions
            </chakra.span>
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
