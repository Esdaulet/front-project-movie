import React from "react";
import HomeAlone from "./home/HomeAlone";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./components/watch/SinglePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Pricing from "./components/Pricing/PricingBox";
import Contact from "./components/Contact/Contact";
import "./App.css";
import DisplayData from "./components/Contact/DisplayData";
import Profile from "./components/Login/Profile";
import ImdbSearch from "./components/Imdb/ImdbSearch";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<HomeAlone />} />
          <Route path="/singlepage/:id" element={<SinglePage />} exact />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/displaydata" element={<DisplayData />} />
          <Route path="/login" element={<Profile />} />
          <Route path="/imdb" element={<ImdbSearch />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
