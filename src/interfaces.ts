export interface Book {
  id: number;
  title: string;
  authors: { name: string }[];
  formats: { [key: string]: string };
  subjects: string[];
}

export interface BasketItem {
  book: Book;
  quantity: number;
}

export interface BasketContextType {
  basket: BasketItem[];
  addToBasket: (book: Book) => void;
  removeFromBasket: (bookId: number) => void;
  updateQuantity: (bookId: number, quantity: number) => void;
  total: number;
}