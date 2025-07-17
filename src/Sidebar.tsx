import React, { useState } from "react";
import { BiFoodMenu } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { categories } from "./data/categories";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {!isOpen && (
        <div className={"sm:hidden fixed top-4 left-4 z-50"}>
          <button onClick={toggleMenu} className="text-3xl text-gray-700 bg-white p-2 rounded shadow"><BiFoodMenu /></button>
        </div>
      )}

      <div className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-40 p-4 flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:fixed`}>
        <div className={"flex justify-end sm:hidden mb-6"}>
          <button onClick={toggleMenu} className="text-2xl text-gray-700"><FaWindowClose /></button>
        </div>

        <nav className="space-y-4">
          <Link to="/" onClick={closeMenu} className={"block text-lg text-gray-700 hover:text-amber-600"}>Home</Link>
          <Link to="/catalog" onClick={closeMenu} className={"block text-lg text-gray-700 hover:text-amber-600"}>Catalog</Link>
          <Link to="/favorites" onClick={closeMenu} className={"block text-lg text-gray-700 hover:text-amber-600"}>Favorites</Link>
          <Link to="/account" onClick={closeMenu} className={"block text-lg text-gray-700 hover:text-amber-600"}>My Account</Link>
          <Link to="/basket" onClick={closeMenu} className={"block text-lg text-gray-700 hover:text-amber-600"}>Basket</Link>

          <div className="mt-4 border-t pt-4">
            <h3 className="font-semibold text-gray-800 mb-2">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li key={idx} className={"text-gray-600 hover:text-amber-500 cursor-pointer"} onClick={closeMenu}>{cat}</li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
