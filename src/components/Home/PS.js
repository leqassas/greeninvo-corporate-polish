import {
  Heading,
  Button,
  VStack,
  chakra,
  Flex,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { TbArrowRight, TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { TLink } from "@/components/motion/Experience";
import { Magnetic, DrawLine } from "@/components/motion/primitives";
import Card from "../Card";
import { SECTION_PX, SECTION_PY } from "@/styles/tokens";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const ChakraSwiper = chakra(Swiper);

export default function PS() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const data = [
    { heading: "Alternative Fuels", link: "alternative-fuels", img: "/rdf-min.webp" },
    {
      heading: "Waste Management & Disposal",
      link: "waste-management",
      img: "/waste-management.webp",
    },
    { heading: "Steel Slag Treatment", link: "steel", img: "/steel-min.webp" },
    { heading: "Fly Ash and Bottom Ash", link: "fly-ash", img: "/fly.webp" },
    { heading: "r-PET", link: "r-pet", img: "/rpet-min.webp" },
    { heading: "Others", link: "others", img: "/others.webp" },
  ];

  return (
    <Box as="section" w="full" bg="white" color="textPrim" pos="relative" overflow="hidden">
      <Box
        w="full"
        maxW="82rem"
        mx="auto"
        px={SECTION_PX}
        py={SECTION_PY}
      >
        {/* Header with Title and See All Link */}
        <VStack align="start" spacing="1rem" mb={{ base: "2rem", sm: "3rem", md: "4rem" }} w="full">
          <Flex
            w="full"
            align={{ base: "start", md: "center" }}
            justify="space-between"
            flexDir={{ base: "column", md: "row" }}
            gap="1.5rem"
          >
            <Heading
              as="h2"
              fontSize={{ base: "2.2rem", sm: "2.8rem", md: "3.4rem", lg: "4rem" }}
              fontWeight="700"
              color="prim"
              letterSpacing="0.15rem"
              lineHeight="1.1"
              sx={{
                fontStretch: "condensed",
              }}
            >
              PRODUCTS & SERVICES
            </Heading>

            {/* Navigation and See All controls */}
            <Flex align="center" gap="1rem" flexWrap="wrap">
              {/* Prev / Next controls */}
              <Flex gap="0.5rem" display={{ base: "none", sm: "flex" }}>
                <IconButton
                  aria-label="Previous slide"
                  icon={<TbChevronLeft size="1.25rem" />}
                  rounded="full"
                  variant="outline"
                  borderColor="blackAlpha.200"
                  color="textPrim"
                  _hover={{ bg: "prim", color: "white", borderColor: "prim" }}
                  onClick={() => swiperInstance?.slidePrev()}
                />
                <IconButton
                  aria-label="Next slide"
                  icon={<TbChevronRight size="1.25rem" />}
                  rounded="full"
                  variant="outline"
                  borderColor="blackAlpha.200"
                  color="textPrim"
                  _hover={{ bg: "prim", color: "white", borderColor: "prim" }}
                  onClick={() => swiperInstance?.slideNext()}
                />
              </Flex>

              <Magnetic strength={0.2}>
                <Button
                  as={TLink}
                  href="/products&services"
                  variant="none"
                  color="textPrim"
                  fontSize={{ base: "0.95rem", sm: "1.05rem", md: "1.15rem", lg: "1.25rem" }}
                  textTransform="uppercase"
                  fontWeight="600"
                  letterSpacing="0.05em"
                  p="0"
                  rightIcon={<TbArrowRight size="1.5rem" />}
                  transition="all 0.3s ease"
                  _hover={{
                    color: "prim",
                    transform: "translateX(4px)",
                    ".chakra-button__icon": {
                      transform: "translateX(4px)",
                    },
                  }}
                  sx={{
                    ".chakra-button__icon": {
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  SEE ALL PRODUCTS & SERVICES
                </Button>
              </Magnetic>
            </Flex>
          </Flex>

          <DrawLine color="blackAlpha.200" />
        </VStack>

        {/* Swiper Carousel */}
        <ChakraSwiper
          onSwiper={setSwiperInstance}
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          w="full"
          spaceBetween={28}
          slidesPerView={1.15}
          breakpoints={{
            540: {
              slidesPerView: 1.6,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
            1400: {
              slidesPerView: 3.5,
              spaceBetween: 32,
            },
          }}
          py="1rem"
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          sx={{
            ".swiper-slide": {
              height: "auto",
              display: "flex",
              alignItems: "stretch",
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.heading}>
              <Card heading={item.heading} img={item.img} link={item.link} />
            </SwiperSlide>
          ))}
        </ChakraSwiper>
      </Box>
    </Box>
  );
}
