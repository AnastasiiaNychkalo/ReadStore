import { useBasket } from "../context/BasketContext";
import { FiTrash } from "react-icons/fi";

const Basket: React.FC = () => {
  const { basket, updateQuantity, removeFromBasket, total } = useBasket();

  if (basket.length === 0) return <p className="text-center mt-60">Your basket is empty.</p>

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 pt-54">
      <div className="ml-custom">
    {basket.map(({ book, quantity }) => (
      <div key={book.id} className="flex items-center gap-4 border-b pb-4">
        <img src={book.formats["image/jpeg"] || "https://placehold.co/80x120"} className="w-20 h-28 object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold">{book.title}</h3>
          <p className="text-sm text-gray-600">{book.authors.map(a => a.name).join(", ")}</p>
          <p className="mt-2 text-amber-600 font-bold">${(9.99 * quantity).toFixed(2)}</p>
          <div className="flex items-center gap-2 mt-2">
            <button onClick={() => updateQuantity(book.id, quantity - 1)} disabled={quantity <= 1} className="px-2 py-1 border rounded">-</button>
            <span>{quantity}</span>
            <button onClick={() => updateQuantity(book.id, quantity + 1)} className="px-2 py-1 border rounded">+</button>
          </div>
        </div>
        <button onClick={() => removeFromBasket(book.id)} className={"text-red-500 hover:text-red-700 text-xl"}>
          <FiTrash />
        </button>
      </div>
    ))}

    <div className="text-right font-semibold text-xl">
      Total: ${total.toFixed(2)}
    </div>

    <button className={"mt-4 px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"}>
      Checkout
    </button>
    </div>
  </div>
  );
};

export default Basket;