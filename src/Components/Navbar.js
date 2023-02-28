import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
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
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import logo from "../images/logo.jpeg";


const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

function withAction() {
  

  return (
    <>
      <Box bg={'#F6F4E8'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box><img src={logo} alt="first img" height="60px" width="60px"/></Box>
            
              <Text fontSize='2xl' color={'black'}>NGO's</Text>
              <Text fontSize='2xl' color={'black'}>Let's Begin</Text>
              <Text fontSize='2xl' color={'black'}>Blogs</Text>
           
          </HStack>
          </Flex>
         </Box>
    </>
  );
}

export default withAction;