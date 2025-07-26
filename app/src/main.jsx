import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import HomeRoutes from './Routes/routes';
import ErrorBoundary from './Components/ErrorBoundary';
import { PlayerContextProvider } from './context/playerContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <ErrorBoundary>
        <PlayerContextProvider>
          <HomeRoutes></HomeRoutes>
        </PlayerContextProvider>
      </ErrorBoundary>
    </>
  </StrictMode>,
)
