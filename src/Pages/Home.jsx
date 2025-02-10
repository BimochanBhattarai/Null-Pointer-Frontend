import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowUp,
  FaTruck,
  FaMoneyBillWave,
  FaArrowDown,
  FaShieldAlt,
  FaRecycle,
  FaHandsHelping,
  FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Buy");

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="home-container font-sans">
      {/* Hero Section */}
      <section className="relative text-center py-20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-[url('/waste.png')] bg-cover bg-center opacity-30"></div>

        {/* Content Section */}
        <div className="relative z-10">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-extrabold text-green-900"
          >
            Got Scrap?
          </motion.h1>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mt-4 text-green-900"
          >
            Turn It Into Cash Today!
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-6 text-lg text-green-900 max-w-2xl mx-auto px-4"
          >
            Sell your recyclable waste—be it paper, plastics, metals, or appliances—and contribute to a sustainable future.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mt-8">
            <Link
              to="/sell"
              className="px-8 py-3 bg-white text-green-700 font-bold rounded-full hover:bg-green-100 transition-all shadow-lg"
            >
              Start Selling Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works text-center py-16">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-900"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto px-4"
        >
          List your scrap, receive bids, and get the best value effortlessly!
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleUp}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12"
        >
          <div className="step text-center p-8 bg-white shadow-2xl rounded-2xl transition-all hover:scale-105 hover:shadow-3xl">
            <FaArrowUp className="text-6xl text-green-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">Post Your Scrap</h3>
            <p className="text-gray-600 mt-3">Describe your waste items and put them up for sale.</p>
          </div>
          <div className="step text-center p-8 bg-white shadow-2xl rounded-2xl transition-all hover:scale-105 hover:shadow-3xl">
            <FaArrowDown className="text-6xl text-green-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">Get Competitive Bids</h3>
            <p className="text-gray-600 mt-3">Buyers place bids—choose the best offer.</p>
          </div>
          <div className="step text-center p-8 bg-white shadow-2xl rounded-2xl transition-all hover:scale-105 hover:shadow-3xl">
            <FaTruck className="text-6xl text-green-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">Seal the Deal</h3>
            <p className="text-gray-600 mt-3">Sell to the highest bidder and get paid instantly!</p>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us bg-gradient-to-r from-green-700 via-green-500 to-green-400 text-white py-16 text-center rounded-2xl shadow-2xl">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl font-bold"
        >
          Why Choose Us?
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleUp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 px-8"
        >
          <div className="feature p-8 bg-white text-black rounded-2xl shadow-2xl transition-all hover:scale-105 hover:shadow-3xl">
            <FaMoneyBillWave className="text-6xl text-green-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">Top Payouts</h3>
            <p className="text-gray-600 mt-3">Get the best value for your scrap with trusted recyclers.</p>
          </div>

          <div className="feature p-8 bg-white text-black rounded-2xl shadow-2xl transition-all hover:scale-105 hover:shadow-3xl">
            <FaShieldAlt className="text-6xl text-green-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">Secure & Reliable</h3>
            <p className="text-gray-600 mt-3">Trusted transactions with verified professionals.</p>
          </div>

          <div className="feature p-8 bg-white text-black rounded-2xl shadow-2xl transition-all hover:scale-105 hover:shadow-3xl">
            <FaRecycle className="text-6xl text-green-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">Eco-Friendly</h3>
            <p className="text-gray-600 mt-3">Be a part of responsible recycling and sustainability.</p>
          </div>
        </motion.div>
      </section>

      {/* NGO Integration Section */}
      <section className="ngo-integration text-center py-16">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-900"
        >
          Partner with NGOs
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto px-4"
        >
          Collaborate with NGOs to make a bigger impact. Donate a portion of your earnings or contribute directly to environmental causes.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleUp}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12"
        >
          <div className="ngo-feature text-center p-8 bg-white shadow-2xl rounded-2xl transition-all hover:scale-105 hover:shadow-3xl">
            <FaHandsHelping className="text-6xl text-green-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">Support Causes</h3>
            <p className="text-gray-600 mt-3">Donate to NGOs working for environmental conservation and community welfare.</p>
          </div>
          <div className="ngo-feature text-center p-8 bg-white shadow-2xl rounded-2xl transition-all hover:scale-105 hover:shadow-3xl">
            <FaLeaf className="text-6xl text-green-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">Green Initiatives</h3>
            <p className="text-gray-600 mt-3">Contribute to tree planting, clean energy, and waste management projects.</p>
          </div>
        </motion.div>
      </section>

      {/* Buy & Sell Buttons */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="flex gap-10 mt-16 justify-center mb-16"
      >
        {/* Buy Button */}
        <Link
          to="/buy"
          className={`px-8 py-4 text-white font-bold rounded-full transition-all shadow-lg ${selectedOption === "Buy"
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
          className={`px-8 py-4 text-white font-bold rounded-full transition-all shadow-lg ${selectedOption === "Sell"
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gray-600 hover:bg-gray-700"
            }`}
          onClick={() => setSelectedOption("Sell")}
        >
          Sell
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;