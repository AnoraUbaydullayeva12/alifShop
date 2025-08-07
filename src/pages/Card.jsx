import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

const CartItems	 = () => {
  const [savedCards, setSavedCards] = useState([]);

  // Load saved cards from localStorage
  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("savedCards")) || [];
    setSavedCards(storedCards);
  }, []);

  // Remove card from saved list
  const removeFromSaved = (id) => {
    const updatedCards = savedCards.filter((item) => item.id !== id);
    setSavedCards(updatedCards);
    localStorage.setItem("savedCards", JSON.stringify(updatedCards));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Сохранённые товары</h2>

      {savedCards.length === 0 ? (
        <p className="text-gray-500">Список сохранённых товаров пуст.</p>
      ) : (
        <div className="space-y-4">
          {savedCards.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-5 border rounded-xl p-4 shadow-sm"
            >
              <img src={item.image} alt={item.title} className="w-24 h-24" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                {item.oldPrice && (
                  <p className="text-gray-500 line-through">{item.oldPrice} сум</p>
                )}
                {item.newPrice && (
                  <p className="font-bold">{item.newPrice} сум</p>
                )}
              </div>
              <button
                onClick={() => removeFromSaved(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <HiOutlineTrash size={24} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItems	;
