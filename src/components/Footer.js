import {
  SimpleGrid,
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
} from "@chakra-ui/react";
import { MdPhoneCallback, MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function Footer() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef2 = useRef(null);
  const toast = useToast();

  function onSubmit() {
    const PromiseToast = new Promise(async (resolve) => {
      fetch(
        "https://script.google.com/macros/s/AKfycbwo7dp77y0TFEYjScjCcI_oVWXnM7zJb9Q8DE-LoDZaAqX7w2Avfj0zQtL1I1LZhMxfZg/exec",
        { method: "POST", body: new FormData(formRef2.current) }
      ).then(() => resolve());
    });
    toast.promise(PromiseToast, {
      success: {
        title: "Sent!",
        description: "Your Message has been sent!",
        duration: 3000,
        isClosable: true,
      },
      error: {
        title: "Faild",
        description: "Something wrong",
        duration: 3000,
        isClosable: true,
      },
      loading: {
        title: "Submitting",
        description: "Please wait",
        duration: 3000,
      },
    });
    return PromiseToast;
  }
  return (
    <>
      {/*footer*/}
      <Center bg="prim" color="white" flexDir={"column"} w="full">
        <Center
          px={["1.5rem", "3rem", "6rem"]}
          py="5.25rem"
          w="full"
        >
          <Flex
            flexDir={["column", "column", "column", "column", "row"]}
            align={["start", "start", "start", "start", "center"]}
            justify={"space-between"}
            gap={["4rem", "4rem", "4rem", "4rem", "4rem", "0"]}
            w="full"
          >
            <Stack
              alignItems={"start"}
              justifyContent={"start"}
              spacing={"1.8rem"}
              position={"relative"}
              w="full"
              maxW="28.5rem"
            >
              <Image
                src="../1.svg"
                alt="logo"
                w="full"
                pos="relative"
                maxW="17.3rem"
              />

              <Stack
                spacing={"1rem"}
                w="full"
                as="form"
                onSubmit={handleSubmit(onSubmit)}
                ref={formRef2}
              >
                <Heading fontSize={"1.5rem"} fontWeight={"700"}>
                  Innovation is the key to stay relevant.
                </Heading>
                <FormControl
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
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
                    sx={{
                      "::placeholder": {
                        color: "white",
                      },
                    }}
                    color="white"
                    roundedLeft="0.625rem"
                    roundedRight="0"
                    borderColor="white"
                    borderWidth="3px"
                    h="3.125rem"
                  />
                  <Button
                    p="0.875rem 2.625rem"
                    variant={"none"}
                    bg="white"
                    color="#1E1E1E"
                    h="3.125rem"
                    type="submit"
                    isLoading={isSubmitting}
                    roundedRight="0.625rem"
                    roundedLeft={"0"}
                    _hover={{
                      color: "prim",
                    }}
                  >
                    Get Updates
                  </Button>
                </FormControl>
              </Stack>
            </Stack>

            <Stack
              alignItems={"start"}
              justifyContent={"space-between"}
              w="full"
              maxW="fit-content"
              h="13.75rem"
              spacing={"0"}
              sx={{
                p: {
                  fontSize: "1.25rem",
                  fontWeight: "400",
                },
              }}
            >
              <Heading
                fontSize={"1.7rem"}
                fontWeight={"600"}
                letterSpacing={"0.25rem"}
                textTransform={"uppercase"}
              >
                Contact Info
              </Heading>
              <HStack spacing={"2rem"} h="2ch">
                <Icon as={MdPhoneCallback} boxSize={"1.75rem"} color="white" />
                <Text fontSize="1.25rem">+49 1523 5838091</Text>
              </HStack>
              <HStack spacing={"2rem"} h="2ch">
                <Icon as={IoIosMail} boxSize={"1.75rem"} color="white" />
                <Text fontSize="1.25rem">info@tgi-bv.com</Text>
              </HStack>
              <HStack spacing={"2rem"} h="2ch">
                <Icon as={MdLocationPin} boxSize={"1.75rem"} color="white" />
                <Text fontSize="1.25rem">
                  Weena 690, 3012 CN Rotterdam, Netherlands
                </Text>
              </HStack>
            </Stack>
            <Stack
              alignItems={"start"}
              justifyContent={"space-between"}
              w="full"
              maxW="fit-content"
              h="13.75rem"
              spacing={"0"}
              sx={{
                a: {
                  p: 0,
                  fontSize: "1.25rem",
                  fontWeight: "400",
                  h: "2ch",
                },
              }}
            >
              <Heading
                fontSize={"1.7rem"}
                fontWeight={"600"}
                letterSpacing={"0.25rem"}
                textTransform={"uppercase"}
              >
                Discover
              </Heading>

              <Button
                fontWeight={"normal"}
                as={NextLink}
                variant="none"
                href="/"
              >
                Home
              </Button>
              <Button
                m="0"
                fontWeight={"normal"}
                as={NextLink}
                variant="none"
                href="/about"
              >
                About Us
              </Button>
              <Button
                m="0"
                fontWeight={"normal"}
                as={NextLink}
                variant="none"
                href="/products&services"
              >
                Products & Services
              </Button>
              <Button
                m="0"
                fontWeight={"normal"}
                as={NextLink}
                variant="none"
                href="/contact"
              >
                Contact Us
              </Button>
            </Stack>
          </Flex>
        </Center>
        <Divider borderColor="white" opacity="1" />
        <Center w="full" fontSize={["1rem", "1rem", "1.25rem"]}>
          <Text textAlign="center" w="full" py="2.25rem" px="2rem">
            Copyrights © 2023 Bio Energy | Powered by{" "}
            <chakra.span
              as={"a"}
              transition={"all 0.3s ease-in-out"}
              _hover={{
                color: "prim2",
              }}
              href="https://vuedigitalsolutions.com"
              target="_blank"
            >
              VUE Digital Solutions
            </chakra.span>
          </Text>
        </Center>
      </Center>
    </>
  );
}
