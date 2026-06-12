import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import '@fontsource-variable/archivo';
import './index.css';

import { Layout } from '@/components/Layout';
import { Home } from '@/pages/Home';
import { Tjenester } from '@/pages/Tjenester';
import { TjenesteDetalj } from '@/pages/TjenesteDetalj';
import { Delebutikk } from '@/pages/Delebutikk';
import { Kontakt } from '@/pages/Kontakt';
import { OmOss } from '@/pages/OmOss';
import { Artikler } from '@/pages/Artikler';
import { Artikkel } from '@/pages/Artikkel';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/tjenester', element: <Tjenester /> },
      { path: '/tjenester/:slug', element: <TjenesteDetalj /> },
      { path: '/delebutikk', element: <Delebutikk /> },
      { path: '/kontakt', element: <Kontakt /> },
      { path: '/om-oss', element: <OmOss /> },
      { path: '/artikler', element: <Artikler /> },
      { path: '/artikler/:slug', element: <Artikkel /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
], { basename: '/Nylunds' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
