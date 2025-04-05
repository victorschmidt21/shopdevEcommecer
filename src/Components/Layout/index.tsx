import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { CartProvider } from "../../contexts/cartcontext";

export function Layout() {
  return (
    <>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </>
  );
}
