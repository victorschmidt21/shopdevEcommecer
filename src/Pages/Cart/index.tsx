import { useContext } from "react";
import { CartContext } from "../../contexts/cartcontext";
export function Cart() {
  const { cart, addCartItem, totalPrice, removeItem } = useContext(CartContext);
  return (
    <main className="w-full mx-auto max-w-6xl">
      <h1 className="font-bold text-center text-xl mt-4">Meu carinho</h1>
      <section>
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-around border-b-2 w-full mt-4"
          >
            <img src={item.cover} alt="Logo produto" className="w-28" />
            <strong>
              {item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => removeItem(item)}
                className="bg-slate-600 rounded h-6 w-6 text-white cursor-pointer"
              >
                -
              </button>
              <span>{item.amount}</span>
              <button
                onClick={() => addCartItem(item)}
                className="bg-slate-600 rounded h-6 w-6 text-white cursor-pointer"
              >
                +
              </button>
            </div>
            <strong>
              Sub-total:{" "}
              {item.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>
        ))}
      </section>
      <strong>Total: {totalPrice(cart)}</strong>
    </main>
  );
}
