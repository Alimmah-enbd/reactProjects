import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import App from "./App";
import AllProperties from "./PropertiesPage/AllProperties";
import AllDetails from "./DetialsPage/AllDetails";
import AllContact from "./ContactPage/AllContact";
import AllProduct from "./ProductsPage/AllProduct";
import AllShoping from "./ShopingPage/AllShoping";
import AllCart from "./Cart/AllCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "ahmed",
    element: <AllProperties/>,
  },
  {
    path: "detials",
    element: <AllDetails/>,
  },
  {
    path: "contact",
    element: <AllContact/>,
  },
  {
    path: "product",
    element: <AllProduct/>,
  },
  {
    path: "shoping",
    element: <AllShoping/>,
  },
  {
    path: "cart",
    element: <AllCart/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);