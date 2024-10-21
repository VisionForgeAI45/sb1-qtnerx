import React from 'react';
import { Box, Flex, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" color="white" py={10}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW="1200px"
        mx="auto"
        px={8}
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack align="start" mb={{ base: 8, md: 0 }}>
          <Text fontSize="2xl" fontWeight="bold" fontFamily="heading">
            AI AGENCY
          </Text>
          <Text fontSize="sm" color="gray.400">
            Empowering the future with AI
          </Text>
        </VStack>
        <HStack spacing={6}>
          <Icon as={FaFacebook} w={6} h={6} color="brand.500" cursor="pointer" />
          <Icon as={FaTwitter} w={6} h={6} color="brand.500" cursor="pointer" />
          <Icon as={FaLinkedin} w={6} h={6} color="brand.500" cursor="pointer" />
          <Icon as={FaGithub} w={6} h={6} color="brand.500" cursor="pointer" />
        </HStack>
      </Flex>
      <Text textAlign="center" fontSize="sm" color="gray.500" mt={8}>
        © 2024 AI Agency. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;