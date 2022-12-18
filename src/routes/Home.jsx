import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-2/4 h-3/4 gap-2">
        <div className="h-2/4 w-full flex flex-col justify-center items-center gap-10">
          <h1 className="font-sans text-6xl text-richB font-black">
            W E L C O M E
          </h1>
          <button className="bg-richB w-40 h-10 flex justify-center items-center rounded-xl hover:bg-orange shadow shadow-richB">
            <Link
              to={"/catalogue/all"}
              className="font-sans font-bold text-lg text-richW"
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
