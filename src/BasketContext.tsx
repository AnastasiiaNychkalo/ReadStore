import  { createContext, useContext, useEffect, useState} from "react";
import type { Book, BasketItem, BasketContextType } from "./interfaces.ts";
import type { ReactNode } from "react";

interface BasketProviderProps {
  children: ReactNode;
}

const BasketContext = createContext<BasketContextType | null>(null);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) throw new Error("Basket provider is missing");
  return context;
}

const BasketProvider = ({children}: BasketProviderProps) => {

  const [basket, setBasket] = useState<BasketItem[]>(() => {
    const saved = localStorage.getItem("basket");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (book: Book) => {
    setBasket(prev => {
      const existing = prev.find(item => item.book.id === book.id);
      if (existing) {
        return prev.map(item => item.book.id === book.id ? {...item, quantity: item.quantity + 1} : item);
      }
      return [...prev, {book, quantity: 1 }];
    });
  };

  const removeFromBasket = (bookId: number) => {
    setBasket(prev => prev.filter(item => item.book.id !== bookId));
  };

  const updateQuantity = (bookId: number, quantity: number) => {
    setBasket(prev => prev.map(item => item.book.id === bookId ? {...item, quantity: Math.max(1, quantity)} : item)
    );
  }

  const total = basket.reduce((sum, item) => sum + item.quantity * 9.99, 0);

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, updateQuantity, total }}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider;