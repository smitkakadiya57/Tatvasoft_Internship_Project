import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Book from "./pages/Book";
import Login from "./pages/Login";


import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
