import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { ChakraProvider } from '@chakra-ui/react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  VStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Heading
} from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import homepage1 from "./images/homepage1.jpeg";
import ngo1 from "./images/ngo1.jpeg";
import ngo2 from "./images/ngo2.jpeg";
import ngo3 from "./images/ngo3.jpeg";
import ngo4 from "./images/ngo4.jpeg";
import ngo5 from "./images/ngo5.jpeg";
import corosoul1 from "./images/corosoul1.jpeg";
import corosoul2 from "./images/corosoul2.jpeg";
import corosoul3 from "./images/corosoul3.jpeg";
import corosoul4 from "./images/corosoul4.jpeg";
import corosoul5 from "./images/corosoul5.jpeg";
import corosoul6 from "./images/corosoul6.jpeg";
import corosoul7 from "./images/corosoul7.jpeg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";




function App() {
  return (
   
   <ChakraProvider>
     <Navbar/>
     <>
    <Flex justify={'center'}>
     <Box bg='#BACEC1' w='100%' px={40} justifyContent={'center'}>
      <HStack spacing={20}>
        <VStack spacing={10}>
     <Text as='i' fontSize='5xl' color='white' textAlign={'center'}>" Mental heatlh at <br></br>it's eaze "</Text>
     <Box
  as='button'
  height='60px'
  width='200px'
  lineHeight='1.2'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='20px'
  fontSize='20px'
  fontWeight='semibold'
  bg='#1D3124'
  borderColor='#ccd0d5'
  color='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}
>
  Book a Demo
</Box>
</VStack>
<Box px={50}>
<img src={homepage1} alt="first img" height="400px" width="500px"/>
</Box>
</HStack>
    </Box>
    </Flex> 
    <Box bg='#F6F4E8' w='100%' p={10}>
    <Heading as='h2' size='xl' color='red' fontWeight={'semibold'}>
    NGO's Associated
  </Heading>
  <br></br>
  <br></br>
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem p={5} bg='#1D3124' px={8}>
  <img src={ngo1} alt="first img" height="200px" width="200px"/>
  </GridItem>
  <GridItem p={5} bg='#1D3124' px={8}>
  <img src={ngo2} alt="first img" height="200px" width="200px"/>
  </GridItem>
  <GridItem p={5} bg='#1D3124' px={8}>
  <img src={ngo3} alt="first img" height="200px" width="200px"/>
  </GridItem>
  <GridItem p={5} bg='#1D3124' px={8}>
  <img src={ngo4} alt="first img" height="200px" width="200px"/>
  </GridItem>
  <GridItem p={5} bg='#1D3124' px={8}>
  <img src={ngo5} alt="first img" height="200px" width="200px"/>
  </GridItem>
</Grid>
    </Box>
    <Flex justify={'center'}>
      <Box w='100%'bg='#BACEC1' justifyContent={'center'}>
      <VStack>
      <Heading as='h2' size='xl' color='white' p={1} py={10}>
      Out of a working population
of 500 million+ people
  </Heading>
  
  
    <HStack columnGap={20}>
      <HStack gap={10}>
      <CircularProgress value={68} color='#1D3124' size='100px'>
  <CircularProgressLabel>68%</CircularProgressLabel>
</CircularProgress> 
    <Text fontSize='2xl' color={'white'}>of all millennials struggle to<br></br> make friends at work</Text>
    </HStack>
    <HStack gap={10}>
    <CircularProgress value={68} color='#1D3124' size='100px'>
  <CircularProgressLabel>68%</CircularProgressLabel>
</CircularProgress>
    <Text fontSize='2xl' color={'white'}>are stressed at work</Text>
    </HStack>
    </HStack>
  </VStack>
    <br></br>
    <br></br>
   
   
      </Box>
      </Flex>
      <Flex>
        <Box w='100%' bg='#F6F4E8' p={20}>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={corosoul1} alt="first img" height="50px" width="50px"/></SwiperSlide>
        <SwiperSlide><img src={corosoul2} alt="first img" height="50px" width="50px"/></SwiperSlide>
        <SwiperSlide><img src={corosoul3} alt="first img" height="50px" width="50px"/></SwiperSlide>
        <SwiperSlide><img src={corosoul4} alt="first img" height="50px" width="50px"/></SwiperSlide>
        <SwiperSlide><img src={corosoul5} alt="first img" height="50px" width="50px"/></SwiperSlide>
        <SwiperSlide><img src={corosoul6} alt="first img" height="50px" width="50px"/></SwiperSlide>
        <SwiperSlide><img src={corosoul7} alt="first img" height="50px" width="50px"/></SwiperSlide>
       
      </Swiper>
        </Box>
      </Flex>
      <Flex justify={'center'}  w='100%'bg='#BACEC1' p={10} align='center'>
        
          <HStack gap={20}>
          <Heading as='h2' size='2xl' color={'1D3124'} >
          
People Impacted<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;350+
  </Heading>
  <Heading as='h2' size='2xl' color={'1D3124'}>
  
Therapists on board<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;48+
  </Heading> 
          </HStack>

        
      </Flex>
     </>
     </ChakraProvider>
  );
}

export default App;
