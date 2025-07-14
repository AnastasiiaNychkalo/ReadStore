import React from "react";
import { useNavigate } from "react-router-dom"
import logo from "../../public/logo.png"
import { FaSearch } from "react-icons/fa"
import { FiHeart, FiShoppingCart, FiUser, FiMenu } from "react-icons/fi"


const Header: React.FC = () => {
  const navigate = useNavigate();


  return (
    <div className={"max-w-7xl mx-auto flex items-center justify-around gap-4 px-4 py-2"}>
      <img src={logo} alt="Logo" className={"h-30 sm:h-40 md:h-45 lg:h-50 xl:h-60 hover:cursor-alias"} onClick={() => navigate("/")}/>
      <div className="relative w-full max-w-sm">
        <input
          type="text"
          placeholder="Search..."
          className={"w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"}
        />
        <FaSearch className={"absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl"} />
      </div>
      <div className={"hidden sm:flex items-center gap-8 text-2xl text-gray-600 relative"}>
    {/* selected */}
      <div className="relative cursor-pointer">
        <FiHeart />
        <span className={"absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full"}>
          2
        </span>
      </div>

      {/* basket */}
      <div className="relative cursor-pointer">
        <FiShoppingCart />
        <span className={"absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full"}>
          3
        </span>
      </div>

      {/* profile */}
      <div className="cursor-pointer">
        <FiUser />
      </div>
    </div>

      {/* burger-menu */}
      <div className={"sm:hidden text-3xl cursor-pointer"}>
        <FiMenu />
      </div>
    </div>
  )
}

export default Header;