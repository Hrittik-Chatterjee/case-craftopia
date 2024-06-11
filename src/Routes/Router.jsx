import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./private/PrivateRoute";

import CreateCase from "../pages/CreateCase";
import ProductDemos from "../pages/ProductDemos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "productdemos",
        element: <ProductDemos />,
      },
      // {
      //   path: "/createcase",
      //   element: (
      //     <PrivateRoute>
      //       <CreateCase />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/createcase",
        element: (
          <PrivateRoute>
            <CreateCase />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
