import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: '"Orbitron", sans-serif',
    body: '"Roboto", sans-serif',
  },
  colors: {
    brand: {
      50: '#e0f7ff',
      100: '#b8e4ff',
      200: '#8dd1ff',
      300: '#61beff',
      400: '#36abff',
      500: '#0d97ff',
      600: '#0076e6',
      700: '#0058b3',
      800: '#003b80',
      900: '#001e4d',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.500',
            color: 'white',
          },
        },
      },
    },
  },
});

export default theme;