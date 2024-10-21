import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <Team />
      <Footer />
      <ChatBot />
    </Box>
  );
}

export default App;