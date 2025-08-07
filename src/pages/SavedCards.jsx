import React, { useEffect, useState } from "react";
import { HiOutlineTrash, HiOutlineShoppingCart } from "react-icons/hi";

const SavedCards = () => {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("savedCards")) || [];
    setSavedCards(storedCards);
  }, []);

  const removeFromSaved = (id) => {
    const updatedCards = savedCards.filter((item) => item.id !== id);
    setSavedCards(updatedCards);
    localStorage.setItem("savedCards", JSON.stringify(updatedCards));
  };

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isAlreadyInCart = existingCart.find((item) => item.id === product.id);

    if (!isAlreadyInCart) {
      const updatedCart = [...existingCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Товар добавлен в корзину!");
    } else {
      alert("Этот товар уже в корзине.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Сохранённые товары</h2>

      {savedCards.length === 0 ? (
        <p className="text-gray-500">Список сохранённых товаров пуст.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedCards.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-4 shadow-sm flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-30 object-contain mb-4"
              />
              <h3 className="font-semibold">{item.title}</h3>
              {item.oldPrice && (
                <p className="text-gray-500 line-through">{item.oldPrice} сум</p>
              )}
              {item.newPrice && (
                <p className="font-bold">{item.newPrice} сум</p>
              )}

              <div className="flex justify-between items-center mt-auto pt-4">
                <button
                  onClick={() => addToCart(item)}
                  className="flex gap-2 items-center text-sm border border-amber-300 bg-amber-400 hover:bg-amber-300 duration-300 font-bold rounded-xl px-3 py-1.5"
                >
                  <HiOutlineShoppingCart size={18} />
                  В корзину
                </button>

                <button
                  onClick={() => removeFromSaved(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <HiOutlineTrash size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedCards;
