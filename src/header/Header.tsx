import React from "react";
import { useNavigate } from "react-router-dom"
import logo from "../../public/logo.png"
import { FaSearch } from "react-icons/fa"
import { FiHeart, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi"
import { FaTimes } from "react-icons/fa";
import { useBasket } from "../context/BasketContext";
import { useSelected } from "../SelectedContent";

interface HeaderProps {
  isSidebarOpen: boolean;
  onBurgerClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, onBurgerClick }) => {
  const navigate = useNavigate();
  const { basket } = useBasket();
  const { selected } = useSelected();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className={"max-w-7xl mx-auto flex items-center justify-around gap-4 px-4 py-2 xl:h-50"}>
        <img
          src={logo}
          alt="Logo"
          className={"h-30 sm:h-40 md:h-45 lg:h-50 xl:h-60 hover:cursor-alias"}
          onClick={() => navigate("/")}
        />
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className={"w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"}
          />
          <FaSearch className={"absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl"} />
        </div>
        <div className={"hidden sm:flex items-center gap-8 text-2xl text-gray-600 relative"}>
          <div className="relative cursor-pointer" onClick={() => navigate("/selected")}>
            <FiHeart />
            <span className={"absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full"}>
            {selected.length}
            </span>
          </div>

          <div className="relative cursor-pointer" onClick={() => navigate("/basket")}>
            <FiShoppingCart />
            <span className={"absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full"}>
              {basket.length}
            </span>
          </div>
          <div className="cursor-pointer">
            <FiUser />
          </div>
        </div>
        <div className={"sm:hidden text-3xl cursor-pointer"} onClick={onBurgerClick}>
          {isSidebarOpen ? <FaTimes /> : <FiMenu />}
        </div>
      </div>
    </div>
  )
}

export default Header;