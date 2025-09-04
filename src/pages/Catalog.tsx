import { useEffect, useState, useMemo } from "react";
import type { Book } from "../interfaces";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useBasket } from "../BasketContext";
import { Link } from "react-router-dom";
import { useSelected } from "../SelectedContent";

const CATALOG_URL = "https://gutendex.com/books";

const  Catalog: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { addToBasket } = useBasket();
  const { addToSelected } = useSelected();

  useEffect(() => {
    setLoading(true);
    fetch(`${CATALOG_URL}?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setBooks(prev => [...prev, ...data.results]);
        setHasMore(Boolean(data.next));
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  const filteredBooks = useMemo(() => {
    let result = books;

    if (search.trim() !== "") {
      const query = search.toLowerCase();
      result = result.filter(
        book =>
          book.title.toLowerCase().includes(query) ||
          book.authors.some(author =>
            author.name.toLowerCase().includes(query)
          )
      );
    }

    if (sortAlphabetically) {
      result = [...result].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return result;
  }, [books, search, sortAlphabetically]);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-12 pt-56">
      <div className={"ml-custom ml-custom-two"}>
        <div className={"flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4"}>
          <input type="text" placeholder="Search by title or author" className={"border p-2 rounded w-full sm:w-1/2"} value={search} onChange={e => {setSearch(e.target.value);}}/>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={sortAlphabetically} onChange={() => setSortAlphabetically(prev => !prev)}/>Sort A-Z
          </label>
        </div>

        <div className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"}>
          {filteredBooks.map(book => (
            <div key={book.id} className="border p-2 rounded shadow flex flex-col h-full">
              <Link to={`/book/${book.id}`}>
                <img src={book.formats["image/jpeg"] || "https://placehold.co/150x220?text=No+Image"} alt={book.title} className={"w-full h-[220px] object-cover mb-2"}/>
              </Link>
              <Link to={`/book/${book.id}`}>
                <h3 className="text-lg font-bold line-clamp-2 mb-1">{book.title}</h3>
              </Link>
              <p className="text-sm text-gray-600 mb-2">{book.authors.map(a => a.name).join(", ") || "Unknown Author"}</p>
              <div className="mt-auto pt-2 flex items-center justify-between">
                <p className="text-lg font-semibold text-amber-600">$9.99</p>
                <div className="flex space-x-2">
                  <button onClick={() => addToSelected(book)} className={"text-red-500 hover:text-red-600 text-xl"} title="Selected"><FiHeart /></button>
                  <button onClick={() => addToBasket(book)} className={"bg-amber-500 text-white text-sm px-2 py-1 rounded hover:bg-amber-600 transition"} title="Add to basket"><FiShoppingCart /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-6">
            <button onClick={loadMore} className={"inline-block px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition"}>
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalog;