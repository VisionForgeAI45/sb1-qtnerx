import React, { useState } from 'react';
import { Box, Button, VStack, Text, Input, IconButton } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes } from 'react-icons/fa';

const MotionBox = motion(Box);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for your message! Our AI is processing your request.", sender: 'bot' }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <>
      <IconButton
        icon={<FaRobot />}
        position="fixed"
        bottom="20px"
        right="20px"
        borderRadius="full"
        size="lg"
        colorScheme="brand"
        onClick={() => setIsOpen(true)}
        zIndex={1000}
      />
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            position="fixed"
            bottom="80px"
            right="20px"
            width="300px"
            height="400px"
            bg="gray.800"
            borderRadius="md"
            boxShadow="xl"
            zIndex={1000}
          >
            <VStack h="100%" p={4}>
              <Box w="100%" textAlign="right">
                <IconButton
                  icon={<FaTimes />}
                  size="sm"
                  onClick={() => setIsOpen(false)}
                />
              </Box>
              <VStack flex={1} w="100%" overflowY="auto" spacing={4}>
                {messages.map((msg, index) => (
                  <Box
                    key={index}
                    alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
                    bg={msg.sender === 'user' ? 'brand.500' : 'gray.600'}
                    color="white"
                    borderRadius="lg"
                    p={2}
                    maxW="80%"
                  >
                    <Text fontSize="sm">{msg.text}</Text>
                  </Box>
                ))}
              </VStack>
              <Box w="100%">
                <Input
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button mt={2} w="100%" onClick={handleSend} colorScheme="brand">
                  Send
                </Button>
              </Box>
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;