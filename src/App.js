import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./Components/Categories/Categories";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import Navagation from "./Components/Navigation";
import ToDos from "./Components/ToDos/ToDos";
import AuthProvider from "./contexts/AuthContext";
import Menu from "./Components/Menu";
import ProtectedRoute from "./Components/ProtectedRoute";
import Footer from "./Components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navagation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todos" element={<ProtectedRoute><ToDos /></ProtectedRoute>} />
            <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
          </Routes>
          {/* <Menu/> */}
        </Router>
        <Footer/>
      </AuthProvider>
    </div>
  );
}
