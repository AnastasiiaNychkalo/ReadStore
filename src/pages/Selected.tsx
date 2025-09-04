import { useSelected } from "../SelectedContent";
import { FiTrash, FiShoppingCart } from "react-icons/fi";
import { useBasket } from "../context/BasketContext";

const Selected: React.FC = () => {
  const { selected, updateQuantity, removeFromSelected, total } = useSelected();
  const { addToBasket } = useBasket();

  if (selected.length === 0) return <p className="text-center mt-60">Your selected is empty.</p>

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6 pt-54">
      <div className="ml-custom">
    {selected.map(({ book, quantity }) => (
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
        <button onClick={() => removeFromSelected(book.id)} className={"text-red-500 hover:text-red-700 text-xl"}>
          <FiTrash />
        </button>
        <button onClick={() => addToBasket(book)} className={"bg-amber-500 text-white text-sm px-2 py-1 rounded hover:bg-amber-600 transition"} title="Add basket"><FiShoppingCart /></button>
      </div>
    ))}

    <div className="text-right font-semibold text-xl">
      Total: ${total.toFixed(2)}
    </div>

    </div>
  </div>
  );
};

export default Selected;