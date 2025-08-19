import { useState } from "react";
import Header from "./header/Header"
import Sidebar from "./Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./footer"
import Catalog from "./pages/Catalog"
import PageBook from "./pages/PageBook"
import Basket from "./pages/Basket"
import Selected from "./pages/Selected";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
    <BrowserRouter>
    <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar}  />
        <div className="flex-1">
          <Header isSidebarOpen={isSidebarOpen} onBurgerClick={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/selected" element={<Selected />} />
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