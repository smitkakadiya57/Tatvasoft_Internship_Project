import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Book from "./pages/Book";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AppWrapper from "./components/global/AppWrapper";
import Navbar from "./components/global/Navbar";
import SearchBar from "./components/global/SearchBar";
import Footer from "./components/global/Footer";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
