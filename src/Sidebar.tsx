import { Link } from "react-router-dom";
import { categories } from "./data/categories";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ( {isOpen, onClose} ) => {

  return (
    <div
    className={`fixed top-0 left-0 h-screen w-50 bg-white shadow-lg z-51 p-4 flex flex-col transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:fixed`}
  >

    <nav className="space-y-4">
      <Link to="/" onClick={onClose} className="block text-lg text-gray-700 hover:text-amber-600">Home</Link>
      <Link to="/catalog" onClick={onClose} className="block text-lg text-gray-700 hover:text-amber-600">Catalog</Link>
      <Link to="/favorites" onClick={onClose} className="block text-lg text-gray-700 hover:text-amber-600">Favorites</Link>
      <Link to="/account" onClick={onClose} className="block text-lg text-gray-700 hover:text-amber-600">My Account</Link>
      <Link to="/basket" onClick={onClose} className="block text-lg text-gray-700 hover:text-amber-600">Basket</Link>

      <div className="mt-4 border-t pt-4">
        <h3 className="font-semibold text-gray-800 mb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat, idx) => (
            <li
              key={idx}
              className="text-gray-600 hover:text-amber-500 cursor-pointer"
              onClick={onClose}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </div>

  );
};

export default Sidebar;
