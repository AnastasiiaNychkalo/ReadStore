import Header from "./header/Header"
import Sidebar from "./Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./footer"

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
      </Routes>
      <Footer />
    </div>
  </div>
</BrowserRouter>

    </>
  )
}

export default App
