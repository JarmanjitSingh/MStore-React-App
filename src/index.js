import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider>
      <ColorModeSwitcher theme={theme}/>
      <Provider store={store}>
      <App />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
