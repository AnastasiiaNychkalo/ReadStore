import Header from "./header/Header"
import Sidebar from "./Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./footer"
import Catalog from "./pages/Catalog"
import PageBook from "./pages/PageBook"

import Basket from "./pages/Basket"

function App() {


  return (
    <>
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />
      <div className="flex-1">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/book/:id" element={<PageBook />} />
      </Routes>
      <Footer />
    </div>
  </div>
</BrowserRouter>

    </>
  )
}

export default App
