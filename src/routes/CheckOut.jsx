import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SpinnerLoad from "../components/SpinnerLoad";

function CheckOut() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  })

  function Form() {
    return (<div className="h-full flex flex-col justify-center items-center">
    <h2 className="text-2xl font-bold">COMPLETE YOUR DATA</h2>
    <span className="text-sm pt-1 pb-5">To be able to finalize your purchase</span>

    <form action="" className=" h-5/6 flex flex-col justify-around items-center">

      <div className="flex flex-col w-full p-1 gap-2">
        <label htmlFor="name">Name<span className="text-tart text-xl">*</span></label>
        <input type="text" name="name" id="nameInput" placeholder="Full name" className="border border-silver h-8 p-2" />

        <label htmlFor="email">Email<span className="text-tart text-xl">*</span></label>
        <input type="email" name="email" id="emailInput" placeholder="Email" className="border border-silver h-8 p-2" />

        <label htmlFor="address">Address<span className="text-tart text-xl">*</span></label>
        <input type="text" name="address" id="addressInput" placeholder="Address" className="border border-silver h-8 p-2" />

        <label htmlFor="city">City<span className="text-tart text-xl">*</span></label>
        <input type="text" name="city" id="cityInput" placeholder="City" className="border border-silver h-8 p-2" />

        <label htmlFor="city">Country<span className="text-tart text-xl">*</span></label>
        <input type="text" name="country" id="countryInput" placeholder="Country" className="border border-silver h-8 p-2" />

        <label htmlFor="phone">Phone<span className="text-tart text-xl">*</span></label>
        <input type="number" name="phone" id="phoneInput" placeholder="Phone" className="border border-silver h-8 p-2" />
      </div>

      <div className="flex justify-center items-center gap-5">
        <button className="bg-richB w-24 h-9 flex justify-start items-center rounded-xl hover:bg-orange shadow shadow-richB pl-3">
          <Link to={"/69Store/cart"} className="font-sans font-bold text-lg text-richW">
            <i className="uil uil-arrow-left"></i> Back
          </Link>
        </button>
        <button type="submit" className="font-sans font-bold text-lg text-richW bg-richB w-48 h-9 flex justify-center items-center rounded-xl hover:bg-sunglow shadow shadow-richB">Confirm purchase</button>
      </div>

    </form>

  </div>)
  }
  return (
    <section className="w-full h-full flex justify-center items-center m-32">
      <div className="w-1/3 h-5/6 flex justify-center items-center">
        {loading ? <SpinnerLoad loading={loading}/> : <Form />}
      </div>
    </section>
  );
}

export default CheckOut;
