import React, { useEffect, useState } from "react";
import banner from "../../public/banner.jpg";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import type { Book } from "../interfaces";
import { useBasket } from "../BasketContext";

const Home: React.FC = () => {
  const [popular, setPopular] = useState<Book[]>([]);
  const [newArrivals, setNewArrivals] = useState<Book[]>([]);
  const { addToBasket } = useBasket();

  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then(res => res.json())
      .then(data => {
        setPopular(data.results.slice(0, 8));
        setNewArrivals(data.results.slice(8, 14));
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);


  return (
    <main className="max-w-7xl mx-auto p-4 space-y-12 pt-52">

      <div className={"bg-gradient-to-r from-amber-100 to-white rounded-lg overflow-hidden flex flex-col md:flex-row h-64 shadow-md"}>
        <div className={"flex flex-col justify-center px-6 py-4 w-full md:w-1/2"}>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Promotions and new products</h2>
          <p className="text-gray-600 mb-4">Find out about special offers</p>
          <button className={"w-fit px-5 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition"}>Move</button>
        </div>
        <div className={"hidden md:block w-full md:w-1/2"}>
          <img src={banner} alt="Banner" className="w-full h-full object-cover" />
        </div>
      </div>

      <section>
      <h2 className="text-2xl font-semibold mb-4">Popular books</h2>
        <div className={"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4"}>
          {popular.map((book) => {
            const imageUrl =
              book.formats["image/jpeg"] ||
              "https://via.placeholder.com/150x220?text=No+Image";
            const authorName = book.authors.length > 0 ? book.authors[0].name : "Unknown";

            return (
              <div key={book.id} className="bg-white shadow rounded p-2 flex flex-col">
                <div className={"aspect-[2/3] bg-gray-100 rounded overflow-hidden mb-2"}>
                  <img
                    src={imageUrl}
                    alt={book.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold line-clamp-2 h-10">{book.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{authorName}</p>
                <p className="text-sm text-gray-500 mt-1 capitalize">
                  {book.subjects.slice(0, 3).join(", ")}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-lg font-semibold mt-2 text-amber-600">$9.99</p>
                  <div className="flex space-x-2">
                    <button className={"text-red-500 hover:text-red-600 text-xl"} title="selected">
                      <FiHeart />
                    </button>
                    <button onClick={() => addToBasket(book)} className={"bg-amber-500 text-white text-sm px-2 py-1 rounded hover:bg-amber-600 transition"} title="Add basket">
                      <FiShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
      <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">News</h2>
          <a href="/catalog?sort=new" className={"w-fit px-5 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition"} >
            Show All
          </a>
        </div>
        <div className={"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"}>
          {newArrivals.map((book) => {
            const imageUrl =
              book.formats["image/jpeg"] ||
              "https://via.placeholder.com/150x220?text=No+Image";
            const authorName = book.authors.length > 0 ? book.authors[0].name : "Unknown";
            return (
              <div key={book.id} className="bg-white shadow rounded p-2 flex flex-col">
                <div className={"aspect-[2/3] bg-gray-100 rounded overflow-hidden mb-2"}>
                  <img
                    src={imageUrl}
                    alt={book.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold line-clamp-2 h-10">{book.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{authorName}</p>
                <p className="text-sm text-gray-500 mt-1 capitalize">
                  {book.subjects.slice(0, 3).join(", ")}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-lg font-semibold mt-2 text-amber-600">$9.99</p>
                  <div className="flex space-x-2">
                    <button className={"text-red-500 hover:text-red-600 text-xl"} title="selected">
                      <FiHeart />
                    </button>
                    <button
                      onClick={() => addToBasket(book)} className={"bg-amber-500 text-white text-sm px-2 py-1 rounded hover:bg-amber-600 transition"}
                      title="Add basket"
                    >
                      <FiShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-amber-100 p-6 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold mb-2">Ukrainian Book Week 🇺🇦</h2>
        <p className="text-gray-700 mb-4">A special selection of Ukrainian authors with discounts up to -40%</p>
        <a href="/catalog?tag=ukrainian-week" className={"inline-block px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition"}>
        View selection
        </a>
      </section>
    </main>
  );
};

export default Home;
