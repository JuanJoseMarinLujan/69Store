import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/69Store/") {
      navigate("/69Store/home");
    }
  });
  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center bg-white">
      <Header />
      <main className="w-full mt-16 flex justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
