import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FeedbackForm from "./components/FeedbackForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}





