import { useEffect, useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import type { Book } from "../interfaces";
import { useParams } from "react-router-dom";

const PageBook:React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}`)
      .then(res => res.json())
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>
  if (!book) return <p className="text-center mt-10">Book not found.</p>

  return (<>
    <div className={"max-w-7xl mx-auto p-4 space-y-12 pt-54"}>
      <div className={"flex gap-6 max-h-[500px]  ml-custom ml-custom-two"}>
        <div className={"w-[150px] shrink-0 sticky top-0 self-start"}>
          <img src={book.formats["image/jpeg"] || "https://placehold.co/150x220?text=No+Image"} alt={book.title} className={"w-full h-[220px] object-cover mb-2"} />
          <p className="text-lg font-semibold text-amber-600 mb-2">$9.99</p>
          <div className="flex space-x-2">
            <button className={"text-red-500 hover:text-red-600 text-xl"} title="Selected"><FiHeart /></button>
            <button className={"bg-amber-500 text-white text-sm px-2 py-1 rounded hover:bg-amber-600 transition"} title="Add to basket"><FiShoppingCart /></button>
          </div>
        </div>
        <div className="overflow-y-auto pr-4" style={{ maxHeight: "500px" }}>
          <h3 className="text-xl font-bold mb-1">{book.title}</h3>
          <h4 className="text-md font-medium mb-1">{book.authors.map(a => a.name).join(", ") || "Unknown Author"}</h4>
          <h4 className="font-semibold mt-2">Book Language</h4>
          <div className={"inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2"}>{book.languages[0] === "en" ? "English" : "other"}</div>
          <h4 className="font-semibold mt-2">Books Sold</h4>
          <p className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">{book.download_count}</p>
          <h4 className="font-semibold mt-2">Book description</h4>
          <p>{book.summaries || "No description available."}</p>
        </div>
      </div>
    </div>
  </>)
}

export default PageBook;