import { Center, VStack, Flex, chakra, Box, Text } from "@chakra-ui/react";
import MsgForm from "./MsgForm";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { MBox } from "@/styles/Motion";
import { EASE } from "@/styles/tokens";

export default function Contactus() {
  const contactCards = [
    {
      title: "Phone",
      val: "+49 1523 5838091",
      href: "tel:+201200006211",
      icon: MdPhone,
    },
    {
      title: "Email",
      val: "info@tgi-bv.com",
      href: "mailto:info@tgi-bv.com",
      icon: MdEmail,
    },
    {
      title: "Address",
      val: "Weena 690, 3012 CN Rotterdam, Netherlands",
      href: "https://goo.gl/maps/jhy8Lhd29gK82TAN8?coh=178572&entry=tt",
      icon: MdLocationPin,
    },
  ];

  return (
    <Box as="section" w="full" bg="#F7F9FA" color="textPrim" pos="relative" overflow="hidden">
      <Box
        w="full"
        maxW="82rem"
        mx="auto"
        px={["1.5rem", "3rem", "6rem"]}
        py={["5rem", "6rem", "7.5rem"]}
      >
        <Flex
          w="full"
          align="stretch"
          justify="space-between"
          gap={["3rem", "3.5rem", "4.5rem"]}
          flexDir={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
        >
          {/* Contact Form Column */}
          <Box flex="1" w="full" maxW={["full", "full", "36rem"]}>
            <MsgForm />
          </Box>

          {/* Map and Details Column */}
          <VStack
            flex="1"
            w="full"
            spacing="2rem"
            align="stretch"
            justify="space-between"
          >
            {/* Map iframe frame */}
            <MBox
              w="full"
              h={["22rem", "25rem", "28rem"]}
              rounded="2rem"
              overflow="hidden"
              border="1px solid"
              borderColor="blackAlpha.100"
              boxShadow="0 10px 30px rgba(0,0,0,0.04)"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.625956918188!2d4.4717287!3d51.9225351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c435114eca0039%3A0x2c90d0ca584cf757!2sWorkspot!5e0!3m2!1sen!2seg!4v1683907916833!5m2!1sen!2seg"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
              />
            </MBox>

            {/* Quick Contact Info Cards */}
            <VStack spacing="1rem" w="full">
              {contactCards.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Box
                    key={item.title}
                    as="a"
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    w="full"
                    p={["1.25rem", "1.5rem"]}
                    rounded="1.5rem"
                    bg="white"
                    border="1px solid"
                    borderColor="blackAlpha.100"
                    boxShadow="0 4px 15px rgba(0,0,0,0.02)"
                    transition="all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
                    _hover={{
                      transform: "translateY(-4px)",
                      borderColor: "rgba(3, 152, 158, 0.35)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
                    }}
                  >
                    <Flex align="center" gap="1.25rem">
                      <Flex
                        boxSize={["3rem", "3.25rem"]}
                        rounded="1rem"
                        bg="rgba(3, 152, 158, 0.1)"
                        color="prim"
                        align="center"
                        justify="center"
                        flexShrink={0}
                      >
                        <IconComponent size="1.6rem" />
                      </Flex>

                      <VStack align="start" spacing="0.1rem">
                        <Text
                          fontSize="0.85rem"
                          fontWeight="600"
                          textTransform="uppercase"
                          letterSpacing="0.08em"
                          color="prim"
                        >
                          {item.title}
                        </Text>
                        <Text
                          fontSize={["0.95rem", "1.05rem"]}
                          fontWeight="500"
                          color="textPrim"
                          lineHeight="1.4"
                        >
                          {item.val}
                        </Text>
                      </VStack>
                    </Flex>
                  </Box>
                );
              })}
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}
