import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import App from './App.tsx'
import BioLink from './pages/BioLink.tsx'
import ProjectDetails from './pages/ProjectDetails.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Adicione o basename aqui 👇 */}
<BrowserRouter basename="/">
      <Routes>
        {/* A rota "/" agora vai responder em / */}
        <Route path="/" element={<App />} />

        {/* A rota "/parcerias" agora vai responder em /parcerias */}
        <Route path="/parcerias" element={<BioLink />} />
        
        {/* A rota "/projeto/:id" agora vai responder em /projeto/:id */}
        <Route
          path="/projeto/:id"
          element={<ProjectDetails />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)