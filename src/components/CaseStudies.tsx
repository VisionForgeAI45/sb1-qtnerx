import React from 'react';
import { Box, Heading, Text, SimpleGrid, Image, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const CaseStudyCard = ({ title, description, imageUrl }) => (
  <MotionBox
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    borderRadius="lg"
    overflow="hidden"
    bg="rgba(255, 255, 255, 0.05)"
    backdropFilter="blur(10px)"
    boxShadow="xl"
    transition="all 0.3s"
  >
    <Image src={imageUrl} alt={title} objectFit="cover" height="200px" width="100%" />
    <Box p={6}>
      <Heading as="h3" size="md" mb={2} fontFamily="heading">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  </MotionBox>
);

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'AI-Driven Supply Chain Optimization',
      description: 'Reduced logistics costs by 30% for a global retailer using predictive AI models.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Intelligent Customer Service Chatbot',
      description: 'Improved customer satisfaction by 40% with an AI-powered chatbot for a telecom giant.',
      imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Fraud Detection in Financial Services',
      description: 'Implemented an AI system that reduced fraudulent transactions by 85% for a major bank.',
      imageUrl: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'AI-Enhanced Drug Discovery',
      description: 'Accelerated drug discovery process by 50% for a pharmaceutical company using machine learning.',
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <Box id="case-studies" py={20} bg="black">
      <VStack spacing={12}>
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          fontFamily="heading"
          bgGradient="linear(to-r, brand.500, purple.500)"
          bgClip="text"
        >
          Case Studies
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} px={8}>
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default CaseStudies;