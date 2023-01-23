import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import theme from './components/chakra/theme';
import { Route, Switch } from 'wouter';
import NotFound from './pages/404';
import About from './pages/About';
import Products from './pages/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='dark' />
        <Switch>
          <Route path="/"><App /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/products"><Products /></Route>
          <Route><NotFound /></Route>
        </Switch>
    </ChakraProvider>
  </React.StrictMode>
);
