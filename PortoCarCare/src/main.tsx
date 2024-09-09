import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// 1 - configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sobre from './routes/Sobre-nos/Sobre.tsx';
import Ajuda from './routes/Ajuda/Ajuda.tsx';
import Saiba from './routes/Saiba/Saiba.tsx';
import Medidas from './routes/Medidas/Medidas.tsx';
import Participantes from './routes/Participantes/Participantes.tsx';
import Cadastro from './routes/CadastroLogin/Cadastro.tsx';
import Login from './routes/CadastroLogin/Login.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "sobre",
    element: <Sobre />
  },
  {
    path: "ajuda",
    element: <Ajuda />
  },
  {
    path: "cadastro",
    element: <Cadastro />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "saiba",
    element: <Saiba />
  },
  {
    path: "medidas",
    element: <Medidas />
  },
  {
    path: "participantes",
    element: <Participantes />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
