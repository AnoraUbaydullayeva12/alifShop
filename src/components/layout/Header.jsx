import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/alifshop-logo.svg";
import { IoMenu, IoSearch } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { PiAirplaneTilt } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import AddCardForm from "../../pages/AddCardForm"; // путь к форме — поправь, если нужно

const Header = () => {
  const [query, setQuery] = useState("");
  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (q) => {
    if (q.trim()) {
      navigate(`/search/${encodeURIComponent(q.trim())}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div>
      <header className="flex justify-between items-center p-4 gap-4">
        {/* Логотип */}
        <Link to="/">
          <div>
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
          </div>
        </Link>

        {/* Кнопка каталога */}
        <span className="flex justify-center items-center font-bold text-white gap-2 py-1 px-3 rounded bg-[#ffbe1f]">
          <IoMenu size={25} />
          Каталог товаров
        </span>

        {/* Поисковая строка */}
        <form
          onSubmit={handleSubmit}
          className="flex rounded-md overflow-hidden border border-amber-400 w-[300px] h-[40px]"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Искать товары"
            className="flex-1 px-3 outline-none text-gray-800 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-[#ffbe1f] px-4 flex items-center justify-center"
          >
            <IoSearch size={24} />
          </button>
        </form>

        {/* Иконки навигации */}
        <nav className="flex gap-8 items-center text-sm">
          <Link to="/cart">
            <span className="flex flex-col items-center">
              <HiOutlineShoppingCart size={24} />
              Корзина
            </span>
          </Link>
          <span className="flex flex-col items-center">
            <PiAirplaneTilt size={24} />
            Авиабилеты
          </span>
          <Link to="/saved">
            <span className="flex flex-col items-center">
              <FaRegHeart size={20} />
              Избранное
            </span>
          </Link>
        </nav>

        {/* Кнопка добавления карточки */}
        <button
          onClick={() => setShowAddCardForm(true)}
          className="py-1 px-4 rounded-xl border border-amber-300 font-bold hover:bg-amber-100 transition duration-200"
        >
          Добавить карточку
        </button>
      </header>

      {/* Меню категорий */}
      <div className="flex gap-5 py-5">
        {[
          "Смартфоны и гаджеты",
          "Ноутбуки и компьютеры",
          "ТВ и проекторы",
          "Аудиотехника",
          "Транспорт",
          "Техника для дома",
          "Техника для кухни",
        ].map((category, idx) => (
          <p
            key={idx}
            className="text-gray-400 font-semibold w-full hover:border-b-2 hover:border-black hover:text-black transition duration-200 cursor-pointer"
          >
            {category}
          </p>
        ))}
      </div>

      {/* Модальное окно с формой */}
      {showAddCardForm && <AddCardForm onClose={() => setShowAddCardForm(false)} />}
    </div>
  );
};

export default Header;
