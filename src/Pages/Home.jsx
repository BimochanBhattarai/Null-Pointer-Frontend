import React from "react";
import { FaArrowUp, FaPhoneAlt, FaTruck, FaMoneyBillWave, FaCalendarCheck, FaShieldAlt, FaRecycle } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container font-sans">
      <section className="hero-section text-center py-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-green-700">Got SCRAP?</h1>
        <h2 className="text-3xl font-bold mt-2">Sell It Now</h2>
        <p className="mt-2 text-gray-600">
          Sell us your recyclable waste. <strong>Paper - Plastics - Metals - Appliances</strong>
        </p>
        <p className="mt-2 font-semibold">
          Sell us your recyclable wastes and help contribute to the circular economy.
        </p>
      </section>

      <section className="how-it-works text-center py-10">
        <h2 className="text-3xl font-bold">How We Work</h2>
        <p className="mt-2 text-gray-600">
          Simple and one-click order booking. You can place your order using our website or call directly.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
          <div className="step text-center p-4 bg-white shadow-md rounded-lg">
            <FaArrowUp className="text-4xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Place Order</h3>
            <p className="text-gray-600">Place your order in less than 30 seconds using our website.</p>
          </div>
          <div className="step text-center p-4 bg-white shadow-md rounded-lg">
            <FaPhoneAlt className="text-4xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Confirm Order on Call</h3>
            <p className="text-gray-600">Our call center representative will call you and confirm the order.</p>
          </div>
          <div className="step text-center p-4 bg-white shadow-md rounded-lg">
            <FaTruck className="text-4xl text-green-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Pickup Partner Arrival</h3>
            <p className="text-gray-600">Our pickup partner will arrive at your doorstep to collect your scraps.</p>
          </div>
        </div>
      </section>

      <section className="why-us bg-green-700 text-white py-10 text-center">
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