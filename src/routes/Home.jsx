import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/69Logo.png";

function Home() {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-2/4 h-3/4 gap-2">
        <img src={Logo} alt="" className="h-2/4 w-2/4" />
        <div className="h-2/4 w-full flex flex-col justify-center items-center gap-10">
          <h1 className="font-sans text-6xl text-richB font-black">
            W E L C O M E
          </h1>
          <button className="bg-richB w-40 h-10 flex justify-center items-center rounded-xl hover:bg-orange">
            <Link
              to={"/catalogue"}
              className="font-sans font-bold text-lg text-richW "
            >
              Let's Go
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
