import App from "./App";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Allfeatures from "./Features/Allfeatures";
import Alldownload from "./Downloadpage/Alldownload";
import Allproducts from "./Products/Allproducts";
import ScrollToTop from "react-scroll-to-top";
import Allshopping from "./AllShopping/Allshopping";
import Allcart from "./CartPage/Allcart";
import { CartProvider } from "react-use-cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "features",
    element: <Allfeatures />,
  },
  {
    path: "download",
    element: <Alldownload />,
  },
  {
    path: "allproducts",
    element: <Allproducts />,
  },
  {
    path: "Allshopping",
    element: <Allshopping />,
  },
  {
    path: "Allcart",
    element: <Allcart />,
  },
  
  
]);

createRoot(document.getElementById("root")).render(
  
    <CartProvider>
    <RouterProvider router={router} />
    <ScrollToTop
      smooth
      viewBox="0 0 384 512"
      svgPath="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"
    />
  </CartProvider>
  
);
