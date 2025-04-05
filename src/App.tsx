import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";

export const routerApp = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Cart />,
        path: "/cart",
      },
    ],
  },
]);
