import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import HomeRoutes from './Routes/routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <HomeRoutes></HomeRoutes>
    </>
  </StrictMode>,
)
