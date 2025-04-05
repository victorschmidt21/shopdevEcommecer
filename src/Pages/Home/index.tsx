import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/cartcontext";

export interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const { addCartItem } = useContext(CartContext);
  const [products, setProducts] = useState<ProductsProps[]>([]);
  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");

      setProducts(response.data);
    }
    getProducts();
  }, []);
  return (
    <main className="flex flex-col items-center mt-5 w-full mb-10">
      <h1 className="font-bold text-2xl">Produtos em alta</h1>
      <section className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl mt-10">
        {products.map((item) => (
          <div className="w-full h-70" key={item.id}>
            <img src={item.cover} alt="Foto do produto" />
            <p>{item.title}</p>
            <div className="flex justify-between mt-1">
              <strong>
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
              <button
                className="cursor-pointer"
                onClick={() => addCartItem(item)}
              >
                <BsCartPlus size={18} />
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
