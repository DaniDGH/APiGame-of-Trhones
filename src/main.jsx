import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { FavoritosProvider } from './context/FavoritosContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <FavoritosProvider> {/* 👈 este es el que faltaría */}
        <App />
      </FavoritosProvider>
    </AuthProvider>
  </StrictMode>
);
