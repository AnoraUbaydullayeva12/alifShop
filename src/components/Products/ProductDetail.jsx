// components/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("savedCards")) || [];
    setSaved(savedCards);

    const allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];
    const selected = allProducts.find((item) => item.id === parseInt(id));
    if (selected) {
      setProduct(selected);
    }
  }, [id]);

  const toggleSaved = () => {
    let updated;
    const isSaved = saved.find((item) => item.id === product.id);
    if (isSaved) {
      updated = saved.filter((item) => item.id !== product.id);
    } else {
      updated = [...saved, product];
    }
    setSaved(updated);
    localStorage.setItem("savedCards", JSON.stringify(updated));
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      alert("Добавлено в корзину!");
    } else {
      alert("Этот товар уже в корзине.");
    }
  };

  if (!product) return <p className="p-6">Загрузка...</p>;

  const isSaved = saved.some((item) => item.id === product.id);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg shadow"
          />
          {/* You can add thumbnail gallery here */}
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <div className="text-sm text-red-600 font-semibold">-{Math.round(
            ((parseFloat(product.oldPrice.replace(/\s/g, "")) - parseFloat(product.newPrice.replace(/\s/g, ""))) /
              parseFloat(product.oldPrice.replace(/\s/g, ""))) * 100
          )}% скидка</div>

          <div className="space-y-1">
            <p className="text-gray-500 line-through">{product.oldPrice} сум</p>
            <p className="text-2xl font-bold text-red-600">{product.newPrice} сум</p>
            <p className="text-sm text-gray-600">от {product.monthly} сум/мес</p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={addToCart}
              className="flex gap-3 items-center border border-amber-300 bg-amber-400 hover:bg-amber-300 duration-300 font-bold rounded-xl p-2"
            >
              <HiOutlineShoppingCart size={20} />
              Добавить в корзину
            </button>

            <button onClick={toggleSaved}>
              {isSaved ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
