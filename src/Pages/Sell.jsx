import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Sell = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = async () => {
    setShowConfirmation(false);
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDetails", productDetails);
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("location", location);
    formData.append("productImage", productImage);
    // Provide a sellerId if needed (the backend will use req.user._id if available)
    formData.append("sellerId", "67a911acf443f5c755612379");
    // Set a valid minBidAmount (backend requires at least 1)
    formData.append("minBidAmount", 1);
    formData.append("maxBidAmount", 100);
    formData.append("lastBidAmount", 50);
    // Use the key 'biddingEndDate' as required by the backend model
    formData.append("biddingEndDate", new Date().toISOString());

    try {
      // Retrieve the token from localStorage
      let token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No JWT token found. Please login.");
      }
      
      // Optional: Remove any extra quotes from the token (if stored as a JSON string)
      token = token.replace(/^"|"$/g, "").trim();

      // Log the token to verify (remove in production)
      console.log("Using JWT token:", token);

      const response = await fetch("http://localhost:8000/api/v1/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: formData,
      });

      // Parse the response as JSON
      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data?.message || "Failed to list product";
        throw new Error(errorMessage);
      }

      console.log("Product created successfully:", data);
      toast.success("Your product is now listed! 🌟", {
        position: "top-right",
        autoClose: 1000,
        onClose: () => navigate("/"),
      });
    } catch (error) {
      console.log("Error creating product:", error);
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 1000,
      });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(file);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 w-full mb-8">
      <ToastContainer />
      {showConfirmation ? (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl text-center"
        >
          <h2 className="text-xl font-bold text-red-600 mb-4">🚨 Alert!!</h2>
          <p className="text-gray-700 mb-6">
            Ensure you have the promised quantity available. Buyers rely on your accuracy!
            <br />
            <span className="text-red-600 font-semibold">
              NOTE: Repeated fraudulent activities may lead to legal actions.
            </span>
          </p>
          <button
            onClick={handleConfirm}
            className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300"
          >
            ✅ I Understand
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-2xl"
        >
          <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
            Sell Your Product
          </h1>
          <p className="text-center font-black text-gray-600 mb-4">
            "Recycling isn’t just good for the planet, it’s good for your pocket too!"
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Books">Books</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Quantity (KG)
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Number(e.target.value)))
                  }
                  required
                  min="20"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                Product Details
              </label>
              <textarea
                value={productDetails}
                onChange={(e) => setProductDetails(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                rows="3"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1">
                Product Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                required
                className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300"
              >
                List My Product
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Sell;
