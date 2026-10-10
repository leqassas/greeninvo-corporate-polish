import { Center, VStack, Button, Flex, chakra } from "@chakra-ui/react";
import MsgForm from "./MsgForm";
import { BsPerson, BsPhone } from "react-icons/bs";
import {
  MdEmail,
  MdLocationPin,
  MdOutlineEmail,
  MdPhone,
} from "react-icons/md";
import NextLink from "next/link";

export default function Contactus() {
  return (
    <Center
      w="full"
      px={["1.5rem", "3rem", "6rem"]}
      py="4.8rem"
    >
      <Flex
        w="full"
        align={"center"}
        py="5.12rem"
        px={["1.5rem", "3rem", "6rem"]}
        bg="#F2F3F5"
        gap="3.12rem"
        justify={["center", "center", "center", "center", "space-between"]}
        flexDir={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
        h={["auto", "auto", "auto", "auto", "53rem"]}
      >
        <MsgForm />
        <VStack
          w={"full"}
          maxW={["full", "full", "full", "full", "50.5rem", "63.5rem"]}
          h={"37rem"}
          rounded={"1.875rem"}
          spacing={"3.12rem"}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.625956918188!2d4.4717287!3d51.9225351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c435114eca0039%3A0x2c90d0ca584cf757!2sWorkspot!5e0!3m2!1sen!2seg!4v1683907916833!5m2!1sen!2seg"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
          />
          <Flex
            alignItems={["start", "start", "start", "center"]}
            gap="1.5rem"
            flexDir={["column", "column", "column", "row"]}
            w="full"
          >
            <Button
              rounded="1rem"
              color="prim"
              as="a"
              variant={"none"}
              href={"tel:+20 120 000 6211"}
              leftIcon={<MdPhone size="2rem" color="prim" />}
              _hover={{ transform: "scale(1.05)" }}
              lineHeight={"1.5rem"}
              gap="0.5rem"
            >
              <chakra.span>
                Phone
                <chakra.span color="initial" fontWeight={"light"}>
                  <br />
                  +49 1523 5838091
                </chakra.span>
              </chakra.span>
            </Button>
            <Button
              rounded="1rem"
              color="prim"
              as="a"
              variant={"none"}
              href={"mailto:info@tgi-bv.com"}
              leftIcon={<MdEmail size="2rem" color="prim" />}
              _hover={{ transform: "scale(1.05)" }}
              lineHeight={"1.5rem"}
              gap="0.5rem"
            >
              <chakra.span>
                Email
                <chakra.span color="initial" fontWeight={"light"}>
                  <br />
                  info@tgi-bv.com
                </chakra.span>
              </chakra.span>
            </Button>
            <Button
              rounded="1rem"
              color="prim"
              as="a"
              variant={"none"}
              leftIcon={<MdLocationPin size="2rem" color="prim" />}
              _hover={{ transform: "scale(1.05)" }}
              lineHeight={"1.5rem"}
              href="https://goo.gl/maps/jhy8Lhd29gK82TAN8?coh=178572&entry=tt"
              gap="0.5rem"
            >
              <chakra.span>
                Address
                <chakra.span
                  color="initial"
                  fontWeight={"light"}
                  whiteSpace={["pre-wrap", "pre-wrap", "pre"]}
                >
                  <br />
                  Weena 690, 3012 CN Rotterdam, Netherlands
                </chakra.span>
              </chakra.span>
            </Button>
          </Flex>
        </VStack>
      </Flex>
    </Center>
  );
}
