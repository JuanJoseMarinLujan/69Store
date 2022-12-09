import React from "react";
import { Link } from "react-router-dom";

function CheckOut() {
  return (
    <section>
      <div>
        <div>
          <h2>Complete your data</h2>
          <span>To be able to finalize your purchase</span>
          <form action="">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="nameInput" />
              <label htmlFor="surname">Last name</label>
              <input type="text" name="surname" id="surnameInput" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="emailInput" />
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="addressInput" />
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="cityInput" />
              <label htmlFor="city">Country</label>
              <input type="text" name="country" id="countryInput" />
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" id="phoneInput" />
            </div>
            <div>
              <Link to={"/cart"}>
                <i class="uil uil-arrow-left"></i> Back
              </Link>
              <input type="submit" value="Confirm purchase" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CheckOut;
