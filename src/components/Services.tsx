import React from 'react';
import { Box, SimpleGrid, Heading, Text, Icon, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const ServiceCard = ({ title, description, icon }) => (
  <MotionBox
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    padding={6}
    borderRadius="lg"
    bg="rgba(255, 255, 255, 0.05)"
    backdropFilter="blur(10px)"
    boxShadow="xl"
    transition="all 0.3s"
    _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
  >
    <VStack spacing={4} align="start">
      <Icon as={icon} w={10} h={10} color="brand.500" />
      <Heading as="h3" size="md" fontFamily="heading">
        {title}
      </Heading>
      <Text>{description}</Text>
    </VStack>
  </MotionBox>
);

const Services = () => {
  const services = [
    {
      title: 'Machine Learning',
      description: 'Develop custom ML models to solve complex business problems.',
      icon: FaBrain,
    },
    {
      title: 'Robotic Process Automation',
      description: 'Automate repetitive tasks to increase efficiency and reduce errors.',
      icon: FaRobot,
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage data to forecast trends and make informed decisions.',
      icon: FaChartLine,
    },
    {
      title: 'AI Security',
      description: 'Implement AI-driven security solutions to protect your digital assets.',
      icon: FaShieldAlt,
    },
  ];

  return (
    <Box id="services" py={20} bg="black">
      <VStack spacing={12}>
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          fontFamily="heading"
          bgGradient="linear(to-r, brand.500, purple.500)"
          bgClip="text"
        >
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} px={8}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Services;