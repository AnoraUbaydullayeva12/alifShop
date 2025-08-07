import React from "react";
import { useParams } from "react-router-dom";
import CardImg from "../assets/card.png";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Search = () => {
  const { q } = useParams(); // get query from URL

  const products = [
    {
      id: 1,
      image: CardImg,
      title: "Кондиционер Shivaki Elegant 12 INV, белый",
      monthly: "277 010",
      oldPrice: "5 250 000",
      newPrice: "3 799 001",
    },
    {
      id: 2,
      image: CardImg,
      title: "Смартфон Samsung Galaxy A54",
      monthly: "320 000",
      oldPrice: "6 200 000",
      newPrice: "4 999 000",
    },
    {
      id: 3,
      image: CardImg,
      title: "Ноутбук ASUS VivoBook 15",
      monthly: "410 000",
      oldPrice: "7 500 000",
      newPrice: "6 100 000",
    },
    {
      id: 4,
      image: CardImg,
      title: "Телевизор LG 50 дюймов 4K",
      monthly: "380 000",
      oldPrice: "8 000 000",
      newPrice: "6 990 000",
    },

    {
      id: 5,
      image: CardImg,
      title: "Кондиционер Shivaki Elegant 13 INV, белый",
      monthly: "277 010",
      oldPrice: "5 250 000",
      newPrice: "3 799 001",
    },{
      id: 6,
      image: CardImg,
      title: "Кондиционер Shivaki Elegant 14 INV, белый",
      monthly: "277 010",
      oldPrice: "5 250 000",
      newPrice: "3 799 001",
    },

  ];

  // Case-insensitive filtering
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Результаты поиска по: <span className="text-blue-500">{q}</span>
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">Ничего не найдено.</p>
      ) : (
        <div className="flex flex-wrap gap-5">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded shadow-2xl p-3 w-50 max-w-xs flex-shrink-0"
            >
              <img src={product.image} alt={product.title} className="w-45" />
              <h3 className="text-xs">{product.title}</h3>
              <span className="text-xs font-bold border border-amber-400 rounded-2xl py-1 px-2 inline-block mt-1">
                от {product.monthly} сум/мес
              </span>
              <p className="mt-3">{product.oldPrice} сум</p>
              <p className="mb-3">{product.newPrice} сум</p>
              <button className="flex gap-3 items-center mb-3 border border-amber-300 bg-amber-400 hover:bg-amber-300 duration-300 font-bold rounded-xl p-1.5">
                <HiOutlineShoppingCart size={20} />
                В корзину
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
