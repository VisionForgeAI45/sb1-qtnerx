import React from 'react';
import { Box, Heading, Text, SimpleGrid, Image, VStack, HStack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const MotionBox = motion(Box);

const TeamMember = ({ name, role, imageUrl, linkedin, twitter }) => (
  <MotionBox
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    borderRadius="lg"
    overflow="hidden"
    bg="rgba(255, 255, 255, 0.05)"
    backdropFilter="blur(10px)"
    boxShadow="xl"
    transition="all 0.3s"
    textAlign="center"
  >
    <Image src={imageUrl} alt={name} objectFit="cover" height="200px" width="100%" />
    <Box p={6}>
      <Heading as="h3" size="md" mb={2} fontFamily="heading">
        {name}
      </Heading>
      <Text color="gray.400" mb={4}>{role}</Text>
      <HStack justifyContent="center" spacing={4}>
        <Icon as={FaLinkedin} w={6} h={6} color="brand.500" cursor="pointer" />
        <Icon as={FaTwitter} w={6} h={6} color="brand.500" cursor="pointer" />
      </HStack>
    </Box>
  </MotionBox>
);

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sophia Chen',
      role: 'Chief AI Scientist',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      name: 'Alex Rodriguez',
      role: 'Machine Learning Engineer',
      imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Emma Watson',
      role: 'Data Science Lead',
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      name: 'Michael Chang',
      role: 'AI Ethics Specialist',
      imageUrl: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <Box id="team" py={20} bg="black">
      <VStack spacing={12}>
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          fontFamily="heading"
          bgGradient="linear(to-r, brand.500, purple.500)"
          bgClip="text"
        >
          Our Team
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} px={8}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Team;