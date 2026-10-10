import {
  VStack,
  Button,
  FormControl,
  Input,
  InputGroup,
  FormErrorMessage,
  FormErrorIcon,
  InputLeftElement,
  InputRightElement,
  Textarea,
  HStack,
  Heading,
  Text,
  Flex,
  Divider,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { MdPhoneCallback, MdMessage, MdEmail, MdPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";

import { BsPerson, BsPhone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function MsgForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef1 = useRef(null);
  const toast = useToast();

  function onSubmit() {
    const PromiseToast = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycby8TFhXLoPiio2Tpc9jGoi3dxKDso0Tf30WZjRzMbe-kFc0JfzygSbQK1dAOt9x79FDWw/exec",
          { method: "POST", body: new FormData(formRef1.current) }
        );
        if (!response.ok) throw new Error("Network response was not ok");
        formRef1.current.reset();
        resolve();
      } catch (error) {
        console.error("Fetch failed:", error);
        reject(error);
      }
    });
    toast.promise(PromiseToast, {
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
    return PromiseToast;
  }

  return (
    <VStack
      as="form"
      rounded={"1rem"}
      spacing={"1.25rem"}
      w={"full"}
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef1}
      align="center"
      justify="center"
      py="5rem"
      gap="1.2rem"
      sx={{
        input: {
          py: "0.75rem",
          px: "1.88rem",
          boxShadow: "0px 2px 5px 0px rgba(38, 51, 77, 0.03)",
          borderColor: "transparent",
          w: "full",
          height: "3.75rem",
        },
        "input::placeholder": {
          color: "#7D8FB3",
        },
        textarea: {
          boxShadow: "0px 2px 5px 0px rgba(38, 51, 77, 0.03)",
        },
        "textarea::placeholder": {
          color: "#7D8FB3",
        },
      }}
    >
      <VStack spacing={"0"} align={"center"} w="full">
        <Heading
          textTransform={"uppercase"}
          fontSize={"2.12rem"}
          as="h2"
          fontWeight={"700"}
          color={"prim"}
          letterSpacing={"0.25rem"}
          sx={{
            fontStretch: "condensed",
          }}
        >
          Send A Message
        </Heading>
      </VStack>
      <VStack spacing={"2.2rem"} w="full" align={"center"}>
        <FormControl isInvalid={errors.name}>
          <InputGroup>
            <Input
              id="name"
              placeholder="Full Name"
              type="text"
              rounded="2rem"
              {...register("name", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            <InputRightElement h="full" right={"0.8rem"}>
              <IoPersonCircleSharp color="#7D8FB3" size="24px" />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.mail}>
          <InputGroup>
            <Input
              id="mail"
              type="email"
              size="md"
              placeholder="Email Address"
              rounded="2rem"
              {...register("mail", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be a valid address",
                },
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            <InputRightElement h="full" right={"0.8rem"}>
              <MdEmail color="#7D8FB3" size="24px" />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.mail && errors.mail.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.phone}>
          <InputGroup>
            <Input
              id="phone"
              type="number"
              size="md"
              rounded="2rem"
              placeholder="Phone Number"
              {...register("phone", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
                pattern: {
                  value:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  message: "Phone number must be in correct format",
                },
              })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
            <InputRightElement h="full" right={"0.8rem"}>
              <MdPhone color="#7D8FB3" size="24px" />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.msg}>
          <InputGroup>
            <Textarea
              id="msg"
              borderColor="transparent"
              minH="8.7rem"
              rounded="1.875rem"
              py="1.25rem"
              px="1.88rem"
              _hover={{
                borderRadius: "gray.300",
              }}
              placeholder="Your Message"
              {...register("msg", {
                required: "Can't be empty",
                minLength: {
                  value: 10,
                  message: "Minimum length should be 10",
                },
              })}
            />
            <InputRightElement h="4rem" right={"0.8rem"}>
              <MdMessage color="#7D8FB3" size="24px" />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            <FormErrorIcon />
            {errors.msg && errors.msg.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button
            h={"3.75rem"}
            w="full"
            maxW="11rem"
            variant={"none"}
            bg="prim"
            color="white"
            rounded={"full"}
            type="submit"
            isLoading={isSubmitting}
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
          >
            Submit
          </Button>
        </FormControl>
      </VStack>
    </VStack>
  );
}
