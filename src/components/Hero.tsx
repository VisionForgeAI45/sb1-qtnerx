import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Hero = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        textAlign="center"
        zIndex={1}
      >
        <VStack spacing={6}>
          <Heading
            as="h1"
            size="4xl"
            fontWeight="bold"
            fontFamily="heading"
            bgGradient="linear(to-r, brand.500, purple.500)"
            bgClip="text"
          >
            Innovate with AI
          </Heading>
          <Text fontSize="xl" maxWidth="600px">
            Empowering businesses with cutting-edge artificial intelligence solutions to transform industries and drive growth.
          </Text>
          <Button
            size="lg"
            colorScheme="brand"
          >
            Explore Our Services
          </Button>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default Hero;