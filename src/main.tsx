import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import ReactGA from 'react-ga4';

import ScrollRestoration from './components/ScrollRestoration.tsx';

// --- Code Splitting com React.lazy ---
const App = lazy(() => import('./App.tsx'));
const BioLink = lazy(() => import('./pages/BioLink.tsx'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails.tsx'));
const BrandManual = lazy(() => import('./pages/BrandManual.tsx'));
const MidiaKit = lazy(() => import('./pages/MidiaKit.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

// INICIALIZA O GOOGLE ANALYTICS
// IMPORTANTE: Substitua "G-XXXXXXXXXX" pelo seu ID de Acompanhamento do Google Analytics 4.
const GA_MEASUREMENT_ID = "G-JCBS3X5XTC";
ReactGA.initialize(GA_MEASUREMENT_ID);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Adicione o basename aqui 👇 */}
    <BrowserRouter basename="/">
      <ScrollRestoration />
      {/* Suspense é necessário para o React.lazy funcionar, mostrando um fallback enquanto a página carrega */}
      <Suspense fallback={<div className="w-full h-screen bg-[#F7F5F2]" />}>
        <Routes>
          {/* A rota "/" agora vai responder em / */}
          <Route path="/" element={<App />} />

          {/* A rota "/parcerias" agora vai responder em /parcerias */}
          <Route path="/nanathsday" element={<BioLink />} />
          <Route path="/cupons" element={<BioLink />} />

          {/* A rota "/parcerias" agora vai responder em /parcerias */}
          <Route path="/identidade-visual" element={<BrandManual />} />

          <Route path="/nanathsday/midia-kit" element={<MidiaKit />} />

          {/* A rota "/projeto/:id" agora vai responder em /projeto/:id */}
          <Route
            path="/projeto/:id"
            element={<ProjectDetails />}
          />

          {/* Rota para página não encontrada (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)