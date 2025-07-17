
import Header from "./header/Header"
import Sidebar from "./Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./footer"

function App() {


  return (
    <>
    <BrowserRouter>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
