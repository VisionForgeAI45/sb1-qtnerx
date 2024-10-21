import React from 'react';
import { Box, Flex, Button, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="header" position="fixed" top={0} left={0} right={0} zIndex={10}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="rgba(0, 0, 0, 0.8)"
        color="white"
        backdropFilter="blur(5px)"
      >
        <Flex align="center" mr={5}>
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            fontSize="2xl"
            fontWeight="bold"
            fontFamily="heading"
          >
            AI AGENCY
          </MotionBox>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }} onClick={onToggle}>
          <Button variant="outline">Menu</Button>
        </Box>

        <Box
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <MotionBox
            as="a"
            href="#services"
            px={2}
            py={1}
            rounded="md"
            _hover={{ bg: 'brand.500' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Services
          </MotionBox>
          <MotionBox
            as="a"
            href="#case-studies"
            px={2}
            py={1}
            rounded="md"
            _hover={{ bg: 'brand.500' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Case Studies
          </MotionBox>
          <MotionBox
            as="a"
            href="#team"
            px={2}
            py={1}
            rounded="md"
            _hover={{ bg: 'brand.500' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Team
          </MotionBox>
        </Box>

        <Box>
          <Button as={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} variant="solid">
            Contact Us
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;