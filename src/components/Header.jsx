import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../components/cart/CartWidget";
import Logo from "../assets/69Logo.png";

import { Categorys } from "../data/Data";

function Header() {
  return (
    <header className="w-full h-16 fixed top-0 left-0 z-100 flex justify-center items-center bg-richW shadow shadow-silver">
      <div className="flex justify-between items-center w-full px-14">
        <nav className="w-1/3">
          <ul className="flex justify-start items-center">
            {Categorys.map((item, index) => {
              return (
                <li key={index} className="text-richB w-auto h-8 flex justify-center items-center hover:bg-sunglow hover:text-richB rounded-lg hover:shadow hover:shadow-richB">
                  <Link to={`/69Store/catalogue/${item.name}`}
                    className="px-4"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="w-1/3 flex justify-center items-center">
          <Link to="/69Store/">
            <img src={Logo} alt="" width={50} />
          </Link>
        </div>
        <CartWidget />
      </div>
    </header>
  );
}

export default Header;
