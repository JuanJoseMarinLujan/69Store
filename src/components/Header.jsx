import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../components/cart/CartWidget";
import Logo from "../assets/69Logo.png";

import { Categorys } from "../data/Data";

function Header() {
  return (
    <header className="w-full h-16 fixed top-0 left-0 z-100 flex justify-center items-center bg-richW shadow shadow-silver">
      <div className="flex justify-between items-center w-11/12">
        <nav className="w-2/5 gap-0">
          <ul className="flex justify-start items-center">
            {Categorys.map((item, index) => {
              return (
                <li key={index} className="text-richB w-auto flex justify-center items-center hover:bg-orange hover:text-richW rounded-lg">
                  <Link to={`/catalogue/${item.name}`}
                    className="px-4"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="w-1/5 flex justify-center items-center">
          <Link to="/">
            <img src={Logo} alt="" width={50} />
          </Link>
        </div>

        <CartWidget />
      </div>
    </header>
  );
}

export default Header;
