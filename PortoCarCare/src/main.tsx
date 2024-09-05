import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// 1 - configurando router
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import Sobre from './routes/SObre.tsx';


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
    element: <Sobre/>
  },
  {
    path: "area",
    element: <Sobre/>
  },
  {
    path: "saiba",
    element: <Sobre/>
  },
  {
    path: "medidas",
    element: <Sobre/>
  },
  {
    path: "participantes",
    element: <Sobre/>
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
