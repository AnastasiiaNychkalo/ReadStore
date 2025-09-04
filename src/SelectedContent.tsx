import  { createContext, useContext, useEffect, useState} from "react";
import type { Book, SelectedItem, SelectedContextType } from "./interfaces.ts";
import type { ReactNode } from "react";

interface SelectedProviderProps {
  children: ReactNode;
}

const SelectedContext = createContext<SelectedContextType | null>(null);

export const useSelected = () => {
  const context = useContext(SelectedContext);
  if(!context) throw new Error("Selected provider is missing");
  return context;
}

const SelectedProvider = ({children}: SelectedProviderProps) => {
  const [selected, setSelected] = useState<SelectedItem[]>(() => {
    const saved = localStorage.getItem("selected");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selected));
  },[selected]);

  const addToSelected = (book: Book) => {
    setSelected(prev => {
      const existing = prev.find(item => item.book.id === book.id);
      if(existing) {
        return prev.map(item => item.book.id === book.id ? {...item, quantity: item.quantity + 1} : item);
      }
      return [...prev, {book, quantity: 1}];
    });
  }

  const removeFromSelected = (bookId: number) => {
    setSelected(prev => prev.filter(item => item.book.id !==bookId));
  };

  const updateQuantity = (bookId: number, quantity: number) => {
    setSelected(prev => prev.map(item => item.book.id === bookId ? {...item, quantity: Math.max(1, quantity)} : item)
  );
  }

  const total = selected.reduce((sum, item) => sum + item.quantity * 9.99, 0);

  return (
    <SelectedContext.Provider value={{ selected, addToSelected, removeFromSelected, updateQuantity, total }}>
      {children}
    </SelectedContext.Provider>
  )
}

export default SelectedProvider;