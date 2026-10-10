import {
  Divider,
  Heading,
  Text,
  Button,
  VStack,
  chakra,
  Circle,
  Center,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { TbCircleArrowRight } from "react-icons/tb";
import NextLink from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Card from "../Card";

export default function PS() {
  const ChakraSwiper = chakra(Swiper);

  const data = [
    { heading: "Alternative Fuels", link: "/", img: "../../rdf-min.webp" },
    {
      heading: "Waste Management & Disposal",
      link: "/",
      img: "../../waste-management.webp",
    },
    { heading: "Steel Slag Treatment", link: "/", img: "../../steel-min.webp" },
    { heading: "Fly Ash and Bottom Ash", link: "/", img: "../../fly.webp" },
    { heading: "r-PET", link: "/", img: "../../rpet-min.webp" },
    { heading: "Others", link: "/", img: "../../others.webp" },
  ];

  return (
    <Center w="full">
      <VStack color="white" className="mainPX" w="full" px="mainPX" py="4.8rem">
        <Flex
          w="full"
          align={"center"}
          justify={["center", "center", "center", "center", "space-between"]}
          flexDir={["column", "column", "column", "column", "row"]}
          gap="2rem"
        >
          <Heading
            alignSelf={["center", "center", "center", "center", "start"]}
            pos="relative"
            fontSize={"3rem"}
            textAlign={"center"}
            fontWeight={"700"}
            color={"prim"}
            letterSpacing={"0.25rem"}
            sx={{
              fontStretch: "condensed",
              a: {
                p: 0,
              },
            }}
          >
            PRODUCTS & SERVICES
          </Heading>
          <Button
            variant={"none"}
            color="black"
            fontSize={["1.2rem", "1.4rem", "1.75rem"]}
            textTransform={"uppercase"}
            fontWeight={"400"}
            as={NextLink}
            leftIcon={<TbCircleArrowRight size={"2.5rem"} />}
            sx={{
              p: 0,
            }}
            href="/products&services"
            _hover={{
              color: "prim",
            }}
          >
            SEE ALL PRODUCTS & SERVICES
          </Button>
        </Flex>
        <ChakraSwiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          w="full"
          h="34rem"
          maxH="34rem"
          spaceBetween={30}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
            1150: {
              slidesPerView: 3,
            },
            1650: {
              slidesPerView: 4,
            },
          }}
          my="3.12rem"
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          sx={{
            ".swiper-pagination-bullet-active": {
              backgroundColor: "prim",
            },
            ".swiper-slide": {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            ".swiper-scrollbar-drag": {
              backgroundColor: "prim",
              rounded: "full",
              border: "4px solid white",
            },
            ".swiper-scrollbar": {
              backgroundColor: "#E8E5E5",
              rounded: "full",
              overflow: "hidden",
              transform: "translateX(-50%)",
              left: "50%",
              maxW: "25vh",
              h: "1.2rem",
            },

            ".swiper-button-prev": {
              color: "prim",
            },
            ".swiper-button-next": {
              color: "prim",
            },
          }}
        >
          {data.map((i, index) => (
            <SwiperSlide key={i.heading}>
              <Card heading={i.heading} img={i.img} link={i.link} />
            </SwiperSlide>
          ))}
        </ChakraSwiper>
      </VStack>
    </Center>
  );
}
