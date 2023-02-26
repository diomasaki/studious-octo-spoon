import React, { useState } from "react";
import { Link } from "react-router-dom";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import "./shippingScreen.css";

const ShippingScreen = () => {
  window.scrollTo(0, 0);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <Announcement />
      <div className="singin">
        <form className="signin form input" onSubmit={submitHandler}>
          <h1 style={{ padding: "20px 20px" }}>DELIVERY ADDRESS</h1>
          <input
            style={{ fontSize: "20px", margin: "10px 10px" }}
            className="singin form "
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            style={{ fontSize: "20px", margin: "10px 10px" }}
            className="singin form "
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            style={{ fontSize: "20px", margin: "10px 10px" }}
            className="singin form "
            type="text"
            placeholder="Enter postal code"
            value={postCode}
            required
            onChange={(e) => setPostCode(e.target.value)}
          />
          <input
            style={{ fontSize: "20px", margin: "10px 10px" }}
            className="singin form "
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <button style={{ marginTop: "10px" }} type="submit">
            <Link
              to="/payment"
              style={{ textDecoration: "none", color: "black" }}
            >
              Continue
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
