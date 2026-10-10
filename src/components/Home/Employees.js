import { Flex, VStack, Heading} from "@chakra-ui/react";
import Card from "../Card";



export default function Employees() {
  return (
    <VStack my='5rem'
    px={["1.5rem", "3rem", "6rem"]}
    gap='2rem'
    >
      <VStack>
      <Heading fontSize={'2.5rem'} textAlign={'center'} textTransform={'uppercase'}>Our Team </Heading>
      </VStack>
      <Flex
        alignItems={"center"}
        justifyContent={'center'}
        flexWrap={"wrap"}
        w='full'
        gap='3rem'
      >
        <Card img={'galal.webp'} bg={'prim3'} heading={'Mahmoud Galal'}  text='CEO' />
        <Card img={'magdy.webp'} bg={'prim4'} heading={'Ahmed Magdi'} text='Senior Business Development Officer' email={'Ahmed.magdy@bioenergyegy.com'}/>
        <Card img={'tala.webp'} bg={'prim3'} heading={'Tala Bassam'} text='Business Development Specialist' email={'Tala@bioenergyegy.com '}/>
        <Card img={'.png'} bg={'prim4'} heading={'Thuraya Mohamed'} text='Business Development Specialist ' email={'Thurya@bioenergyegy.com'}/>
      </Flex>
    </VStack>
  );
}
