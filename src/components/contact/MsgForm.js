import {
  VStack,
  Button,
  FormControl,
  Input,
  InputGroup,
  FormErrorMessage,
  FormErrorIcon,
  InputRightElement,
  Textarea,
  Heading,
  useToast,
  Box,
} from "@chakra-ui/react";
import { MdEmail, MdMessage, MdPhone } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { postForm } from "@/lib/postForm";
import { Magnetic } from "@/components/motion/primitives";

export default function MsgForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef1 = useRef(null);
  const toast = useToast();

  async function onSubmit() {
    const promise = postForm(
      "https://script.google.com/macros/s/AKfycby8TFhXLoPiio2Tpc9jGoi3dxKDso0Tf30WZjRzMbe-kFc0JfzygSbQK1dAOt9x79FDWw/exec",
      formRef1.current,
      12000
    ).then(() => {
      formRef1.current?.reset();
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

  const inputStyle = {
    bg: "white",
    borderColor: "blackAlpha.150",
    borderWidth: "1px",
    color: "textPrim",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    _placeholder: { color: "#8E9BB0" },
    _hover: { borderColor: "blackAlpha.300" },
    _focus: {
      borderColor: "prim",
      boxShadow: "0 0 0 2px rgba(3, 152, 158, 0.25)",
      bg: "white",
    },
  };

  return (
    <VStack
      as="form"
      rounded="2rem"
      w="full"
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef1}
      align="start"
      justify="center"
      p={["2rem", "2.75rem", "3.25rem"]}
      bg="white"
      border="1px solid"
      borderColor="blackAlpha.100"
      boxShadow="0 10px 30px rgba(0,0,0,0.04)"
      spacing="1.5rem"
    >
      <VStack spacing="0.4rem" align="start" w="full" mb="0.5rem">
        <Heading
          textTransform="uppercase"
          fontSize={["1.8rem", "2.12rem"]}
          as="h2"
          fontWeight="700"
          color="prim"
          letterSpacing="0.15rem"
          sx={{
            fontStretch: "condensed",
          }}
        >
          Send A Message
        </Heading>
      </VStack>

      {/* Name */}
      <FormControl isInvalid={errors.name}>
        <InputGroup>
          <Input
            id="name"
            placeholder="Full Name"
            type="text"
            rounded="1.25rem"
            h="3.75rem"
            px="1.5rem"
            {...inputStyle}
            {...register("name", {
              required: "This is required",
              minLength: {
                value: 4,
                message: "Minimum length should be 4",
              },
            })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          <InputRightElement h="full" right="0.8rem">
            <IoPersonCircleSharp color="#7D8FB3" size="24px" />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>
          <FormErrorIcon />
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      {/* Email */}
      <FormControl isInvalid={errors.mail}>
        <InputGroup>
          <Input
            id="mail"
            type="email"
            placeholder="Email Address"
            rounded="1.25rem"
            h="3.75rem"
            px="1.5rem"
            {...inputStyle}
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
          <InputRightElement h="full" right="0.8rem">
            <MdEmail color="#7D8FB3" size="24px" />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>
          <FormErrorIcon />
          {errors.mail && errors.mail.message}
        </FormErrorMessage>
      </FormControl>

      {/* Phone */}
      <FormControl isInvalid={errors.phone}>
        <InputGroup>
          <Input
            id="phone"
            type="number"
            rounded="1.25rem"
            h="3.75rem"
            px="1.5rem"
            placeholder="Phone Number"
            {...inputStyle}
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
          <InputRightElement h="full" right="0.8rem">
            <MdPhone color="#7D8FB3" size="24px" />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>
          <FormErrorIcon />
          {errors.phone && errors.phone.message}
        </FormErrorMessage>
      </FormControl>

      {/* Message */}
      <FormControl isInvalid={errors.msg}>
        <InputGroup>
          <Textarea
            id="msg"
            minH="8.7rem"
            rounded="1.25rem"
            py="1.25rem"
            px="1.5rem"
            placeholder="Your Message"
            {...inputStyle}
            {...register("msg", {
              required: "Can't be empty",
              minLength: {
                value: 10,
                message: "Minimum length should be 10",
              },
            })}
          />
          <InputRightElement h="4rem" right="0.8rem">
            <MdMessage color="#7D8FB3" size="24px" />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>
          <FormErrorIcon />
          {errors.msg && errors.msg.message}
        </FormErrorMessage>
      </FormControl>

      {/* Submit button */}
      <Box pt="0.5rem" w="full">
        <Magnetic strength={0.2}>
          <Button
            h="3.75rem"
            w="full"
            maxW={["full", "12rem"]}
            bg="prim"
            color="white"
            rounded="full"
            type="submit"
            isLoading={isSubmitting}
            fontSize="1.05rem"
            fontWeight="600"
            letterSpacing="0.05em"
            transition="all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
            boxShadow="0 10px 20px -5px rgba(3, 152, 158, 0.4)"
            _hover={{
              bg: "primDark",
              transform: "scale(1.05)",
              boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
            }}
          >
            Submit
          </Button>
        </Magnetic>
      </Box>
    </VStack>
  );
}
