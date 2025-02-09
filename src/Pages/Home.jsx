import React from "react";
import { FaArrowUp, FaTruck, FaMoneyBillWave, FaCalendarCheck, FaShieldAlt, FaRecycle, FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container font-sans">
      <section className="hero-section text-center py-10 bg-gray-100 rounded-2xl">
        <h1 className="text-4xl font-bold text-green-700">Got SCRAP?</h1>
        <h2 className="text-3xl font-bold mt-2">Sell It Now</h2>
        <p className="mt-2 text-gray-600">
        Sell us your recyclable waste, including paper, plastics, metals, and appliances, and contribute to the circular economy.
        </p>
      </section>

      <section className="how-it-works text-center py-10">
        <h2 className="text-3xl font-bold">How We Work</h2>
        <p className="mt-2 text-gray-600">
          Sell your recyclable waste items through a bidding process. The
          highest bidder gets the item!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
          <div className="step text-center p-4 bg-white shadow-md rounded-lg">
            <FaArrowUp className="text-4xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">List Your Items</h3>
            <p className="text-gray-600">
              Provide details of the waste items you wish to sell.
            </p>
          </div>
          <div className="step text-center p-4 bg-white shadow-md rounded-lg">
            <FaArrowDown className="text-4xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Receive Bids</h3>
            <p className="text-gray-600">
              Interested buyers will place their bids for your listed items.
            </p>
          </div>
          <div className="step text-center p-4 bg-white shadow-md rounded-lg">
            <FaTruck className="text-4xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Highest Bidder Wins</h3>
            <p className="text-gray-600">
              The highest bidder secures the item and arranges their own
              transport.
            </p>
          </div>
        </div>
      </section>
      <section className="why-us bg-green-700 text-white py-10 text-center mb-10 rounded-xl">
        <h2 className="text-3xl font-bold">Why Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 px-6">
          <div className="feature p-6 bg-white text-black rounded-lg shadow-md">
            <FaMoneyBillWave className="text-4xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Best Rates</h3>
            <p>We provide the best value for your scrap from our network of recyclers.</p>
          </div>
          <div className="feature p-6 bg-white text-black rounded-lg shadow-md">
            <FaCalendarCheck className="text-4xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Convenience</h3>
            <p>Doorstep pickup according to user’s convenient date & time.</p>
          </div>
          <div className="feature p-6 bg-white text-black rounded-lg shadow-md">
            <FaShieldAlt className="text-4xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Trust</h3>
            <p>Trained & verified pickup staff with Swapeco Smart Weighing Scale.</p>
          </div>
          <div className="feature p-6 bg-white text-black rounded-lg shadow-md">
            <FaRecycle className="text-4xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Eco-friendly</h3>
            <p>We ensure responsible recycling of your scrap items.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;