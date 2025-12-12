import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Root } from './Layout/Root';
import { Home } from './Pages/Home/Home';
import { Product } from './Pages/Products/Product';
import { About } from './Pages/About/About';
import { Blog } from './Pages/Blog/Blog';
import { Contact } from './Pages/Contact/Contact';
import Auth from './Pages/Auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home>},
      { path: "/product", element: <Product></Product> },
      { path: "/about", element: <About></About>},
      { path: "/blog", element: <Blog></Blog> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/auth", element: <Auth></Auth> },
      

    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);

