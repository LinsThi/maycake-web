import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

import { AuthProvider } from './hooks/auth';
import { ProductProvider } from './hooks/product';

const App: React.FC = () => (
  <>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <Routes />
        </ProductProvider>
      </AuthProvider>

      <GlobalStyle />
    </Router>
  </>
);

export default App;
