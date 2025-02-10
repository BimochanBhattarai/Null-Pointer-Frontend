import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowUp,
  FaTruck,
  FaMoneyBillWave,
  FaArrowDown,
  FaShieldAlt,
  FaRecycle,
} from "react-icons/fa";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Buy");

  return (
    <div className="home-container font-sans">
      {/* Hero Section */}
      <section className="hero-section text-center py-12 bg-gray-100 rounded-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
          Got Scrap?
        </h1>
        <h2 className="text-3xl sm:text-2xl font-bold mt-3 text-gray-900">
          Turn It Into Cash Today!
        </h2>
        <p className="mt-4 text-md text-gray-600 max-w-2xl mx-auto px-4">
          Sell your recyclable waste—be it paper, plastics, metals, or appliances—and contribute to a sustainable future.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <p className="mt-3 text-md text-gray-600 max-w-2xl mx-auto px-4">
          List your scrap, receive bids, and get the best value effortlessly!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          <div className="step text-center p-6 bg-white shadow-lg rounded-xl transition-all hover:shadow-2xl">
            <FaArrowUp className="text-5xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Post Your Scrap</h3>
            <p className="text-gray-600 mt-2">Describe your waste items and put them up for sale.</p>
          </div>
          <div className="step text-center p-6 bg-white shadow-lg rounded-xl transition-all hover:shadow-2xl">
            <FaArrowDown className="text-5xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Get Competitive Bids</h3>
            <p className="text-gray-600 mt-2">Buyers place bids—choose the best offer.</p>
          </div>
          <div className="step text-center p-6 bg-white shadow-lg rounded-xl transition-all hover:shadow-2xl">
            <FaTruck className="text-5xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Seal the Deal</h3>
            <p className="text-gray-600 mt-2">Sell to the highest bidder and get paid instantly!</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us bg-green-700 text-white py-12 text-center mb-10 rounded-xl">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 px-6">
          <div className="feature p-6 bg-white text-black rounded-lg shadow-lg transition-all hover:shadow-2xl">
            <FaMoneyBillWave className="text-5xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Top Payouts</h3>
            <p className="text-gray-600 mt-2">Get the best value for your scrap with trusted recyclers.</p>
          </div>

          <div className="feature p-6 bg-white text-black rounded-lg shadow-lg transition-all hover:shadow-2xl">
            <FaShieldAlt className="text-5xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Secure & Reliable</h3>
            <p className="text-gray-600 mt-2">Trusted transactions with verified professionals.</p>
          </div>

          <div className="feature p-6 bg-white text-black rounded-lg shadow-lg transition-all hover:shadow-2xl">
            <FaRecycle className="text-5xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">Eco-Friendly</h3>
            <p className="text-gray-600 mt-2">Be a part of responsible recycling and sustainability.</p>
          </div>
        </div>

        {/* Buy & Sell Buttons */}
        
      </section>
      <div className="flex gap-10 mt-8 justify-evenly mb-8">
      {/* Buy Button */}
      <Link
        to="/buy"
        className={`px-6 py-3 text-white font-bold rounded-lg transition-all ${
          selectedOption === "Buy"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-gray-600 hover:bg-gray-700"
        }`}
        onClick={() => setSelectedOption("Buy")}
      >
        Buy
      </Link>

      {/* Sell Button */}
      <Link
        to="/sell"
        className={`px-6 py-3 text-white font-bold rounded-lg transition-all ${
          selectedOption === "Sell"
            ? "bg-red-600 hover:bg-red-700"
            : "bg-gray-600 hover:bg-gray-700"
        }`}
        onClick={() => setSelectedOption("Sell")}
      >
        Sell
      </Link>
    </div>
    </div>
  );
};

export default Home;