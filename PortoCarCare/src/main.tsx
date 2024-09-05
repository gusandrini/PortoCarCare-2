import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// 1 - configurando router
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import Sobre from './routes/SObre.tsx';
import Ajuda from './routes/Ajuda.tsx';
import Area from './routes/Area.tsx';
import Saiba from './routes/Saiba.tsx';
import Medidas from './routes/Medidas.tsx';
import Participantes from './routes/Participantes.tsx';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "sobre",
    element: <Sobre/>
  },
  {
    path: "ajuda",
    element: <Ajuda/>
  },
  {
    path: "area",
    element: <Area/>
  },
  {
    path: "saiba",
    element: <Saiba/>
  },
  {
    path: "medidas",
    element: <Medidas/>
  },
  {
    path: "participantes",
    element: <Participantes/>
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
