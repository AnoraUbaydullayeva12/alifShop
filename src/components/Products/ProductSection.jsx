import React, { useState, useEffect } from "react";

const ProductSection = () => {
  // Состояние для списка товаров
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("allProducts");
    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          // Начальные товары
          {
            id: 1,
            image:
              "https://via.placeholder.com/150?text=Товар+1",
            title: "Пример товара 1",
            monthly: "1000",
            oldPrice: "1500",
            newPrice: "1200",
          },
          {
            id: 2,
            image:
              "https://via.placeholder.com/150?text=Товар+2",
            title: "Пример товара 2",
            monthly: "2000",
            oldPrice: "2500",
            newPrice: "2200",
          },
        ];
  });

  // Состояние для показа формы добавления
  const [isAddingCard, setIsAddingCard] = useState(false);

  // Состояние для новой карточки
  const [newCard, setNewCard] = useState({
    image: "",
    title: "",
    monthly: "",
    oldPrice: "",
    newPrice: "",
  });

  // Сохраняем продукты в localStorage при изменениях
  useEffect(() => {
    localStorage.setItem("allProducts", JSON.stringify(products));
  }, [products]);

  // Открыть форму добавления
  const openAddCardForm = () => {
    setNewCard({
      image: "",
      title: "",
      monthly: "",
      oldPrice: "",
      newPrice: "",
    });
    setIsAddingCard(true);
  };

  // Обработчик добавления новой карточки
  const addNewCard = () => {
    if (!newCard.title.trim()) {
      alert("Введите название товара");
      return;
    }

    const newId = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    const cardToAdd = { ...newCard, id: newId };

    setProducts([...products, cardToAdd]);
    setIsAddingCard(false);
    alert("Новая карточка добавлена!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Кнопка "Добавить карточку" вместо "Войти" */}
      <button
        onClick={openAddCardForm}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Добавить карточку
      </button>

      {/* Список карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow flex flex-col items-center"
          >
            <img
              src={product.image || "https://via.placeholder.com/150"}
              alt={product.title}
              className="w-40 h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
            <p>от {product.monthly} сум/мес</p>
            <p className="line-through text-gray-500">{product.oldPrice} сум</p>
            <p className="font-bold">{product.newPrice} сум</p>
          </div>
        ))}
      </div>

      {/* Модальное окно для добавления карточки */}
      {isAddingCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-xl mb-4">Добавить новую карточку</h2>

            <input
              type="text"
              placeholder="Название"
              value={newCard.title}
              onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
              className="border p-2 mb-3 w-full"
            />
            <input
              type="text"
              placeholder="URL картинки"
              value={newCard.image}
              onChange={(e) => setNewCard({ ...newCard, image: e.target.value })}
              className="border p-2 mb-3 w-full"
            />
            <input
              type="text"
              placeholder="Цена в месяц"
              value={newCard.monthly}
              onChange={(e) => setNewCard({ ...newCard, monthly: e.target.value })}
              className="border p-2 mb-3 w-full"
            />
            <input
              type="text"
              placeholder="Старая цена"
              value={newCard.oldPrice}
              onChange={(e) => setNewCard({ ...newCard, oldPrice: e.target.value })}
              className="border p-2 mb-3 w-full"
            />
            <input
              type="text"
              placeholder="Новая цена"
              value={newCard.newPrice}
              onChange={(e) => setNewCard({ ...newCard, newPrice: e.target.value })}
              className="border p-2 mb-3 w-full"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setIsAddingCard(false)}
                className="bg-gray-400 px-4 py-2 rounded"
              >
                Отмена
              </button>
              <button
                onClick={addNewCard}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
