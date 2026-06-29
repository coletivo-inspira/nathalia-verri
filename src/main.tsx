import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import ReactGA from 'react-ga4';

import App from './App.tsx'
import BioLink from './pages/BioLink.tsx'
import ProjectDetails from './pages/ProjectDetails.tsx'
import BrandManual from './pages/BrandManual.tsx'
import ScrollRestoration from './components/ScrollRestoration.tsx';
import MidiaKit from './pages/MidiaKit'; 

// INICIALIZA O GOOGLE ANALYTICS
// IMPORTANTE: Substitua "G-XXXXXXXXXX" pelo seu ID de Acompanhamento do Google Analytics 4.
const GA_MEASUREMENT_ID = "G-JCBS3X5XTC";
ReactGA.initialize(GA_MEASUREMENT_ID);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Adicione o basename aqui 👇 */}
    <BrowserRouter basename="/">
      <ScrollRestoration />
      <Routes>
        {/* A rota "/" agora vai responder em / */}
        <Route path="/" element={<App />} />

        {/* A rota "/parcerias" agora vai responder em /parcerias */}
        <Route path="/nanathsday" element={<BioLink />} />
        <Route path="/cupons" element={<BioLink />} />

        {/* A rota "/parcerias" agora vai responder em /parcerias */}
        <Route path="/identidade-visual" element={<BrandManual />} />

        <Route path="/midia-kit-nanathsday" element={<MidiaKit />} />

        {/* A rota "/projeto/:id" agora vai responder em /projeto/:id */}
        <Route
          path="/projeto/:id"
          element={<ProjectDetails />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)