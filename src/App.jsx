import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Suggestions from "./components/Suggestions";
import Footer from "./components/Footer";
import ChatPage from "./components/ChatPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="text-white min-h-screen max-w-7xl m-auto flex flex-col items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={
            <>
              <Header />
              <SearchBox />
              <Suggestions />
              <Footer />
            </>
        } />
        <Route path="/playground" element={<ChatPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
