import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// 1 - configurando router
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './routes/Home.tsx';
import Contact from './routes/Contact.tsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "contact",
    element: <Contact/>
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
