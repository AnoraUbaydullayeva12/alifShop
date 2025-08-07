import React, { useState } from "react";

const AddCardForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !image || !newPrice) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    const newCard = {
      id: Date.now(),
      title,
      image,
      oldPrice,
      newPrice,
    };

    // Получаем текущие сохранённые карточки
    const savedCards = JSON.parse(localStorage.getItem("savedCards")) || [];

    // Добавляем новую карточку
    const updatedCards = [...savedCards, newCard];

    // Сохраняем в localStorage
    localStorage.setItem("savedCards", JSON.stringify(updatedCards));

    alert("Карточка добавлена!");

    onClose();

    // Сброс формы (по желанию)
    setTitle("");
    setImage("");
    setOldPrice("");
    setNewPrice("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl p-6 w-96 flex flex-col gap-4 shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4">Добавить новую карточку</h2>

        <input
          type="text"
          placeholder="Название товара *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="URL изображения *"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Старая цена"
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value)}
          className="border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Новая цена *"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />

        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded border hover:bg-gray-100"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-amber-400 hover:bg-amber-300 text-white font-bold"
          >
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCardForm;
