import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import { KubernetesReport2026 } from './pages/KubernetesReport2026.tsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kubernetes-report-2026" element={<KubernetesReport2026 />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>,
)
