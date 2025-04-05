import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartcontext";
export function Header() {
  const { cartAmount } = useContext(CartContext);
  return (
    <header className="w-full bg-indigo-200 pt-2 px-1">
      <nav className="flex justify-between p-4 items-center mx-auto w-full max-w-5xl">
        <Link to="/" className="font-bold text-xl">
          SHOPDEV
        </Link>
        <Link to="/cart" className="relative">
          <FiShoppingCart size={26} />
          {cartAmount > 0 && (
            <span className="absolute -top-4 -right-3 bg-indigo-600 rounded-full h-6 w-6 flex justify-center items-center text-sm font-medium text-white">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
