import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import HomeRoutes from './Routes/routes';
import ErrorBoundary from './Components/ErrorBoundary';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <ErrorBoundary>
          <HomeRoutes></HomeRoutes>
      </ErrorBoundary>
    </>
  </StrictMode>,
)
