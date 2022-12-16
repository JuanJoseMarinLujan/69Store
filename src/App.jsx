import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  });
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center bg-richW">
      <Header />
      <main className="w-11/12 h-full mt-16 flex justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
