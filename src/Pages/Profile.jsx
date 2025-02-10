import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    phoneNumber: '+977 9812345678',
    email: 'johndoe@example.com',
    username: 'johndoe123',
    password: '',
    profilePicture: '/images/safanepal.jpg',
    rewardPoints: 1500,
    starRating: 4.5,
    co2Emissions: '1.3 kg',
    wasteToMoneyGenerated: 'Rs.250',
  });

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    // Placeholder for API call to update user data
    console.log('Saving user data:', formData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="mb-6 md:mb-0 md:mr-10">
            <img
              src={formData.profilePicture}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover"
            />
            {isEditing && (
              <input
                type="file"
                onChange={handleImageChange}
                className="mt-2 block w-full text-sm"
              />
            )}
          </div>
          <div className="flex-1">
            {Object.entries(formData)
              .slice(0, 5)
              .map(([key, value]) => (
                <div className="mb-4" key={key}>
                  <label
                    htmlFor={key}
                    className="block text-gray-700 font-bold mb-2"
                  >
                    {key
                      .replace(/[A-Z]/g, ' $&')
                      .replace(/^./, (str) => str.toUpperCase())}
                    :
                  </label>
                  <input
                    type={key === 'password' ? 'password' : 'text'}
                    id={key}
                    name={key}
                    value={value}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`w-full px-4 py-2 border ${isEditing ? 'border-blue-500' : 'border-gray-300'} rounded focus:outline-none`}
                  />
                </div>
              ))}
            {/* Reward Points & Star Rating */}
            <div className="mb-4">
              <p className="block text-gray-700 font-bold mb-2">
                Reward Points:
              </p>
              <p className="text-lg font-semibold text-green-500">
                {formData.rewardPoints}
              </p>
            </div>
            <div className="mb-4">
              <p className="block text-gray-700 font-bold mb-2">Star Rating:</p>
              <p className="text-lg font-semibold text-yellow-500">
                ⭐ {formData.starRating} / 5
              </p>
            </div>
            {/* CO2 Emissions & Waste-to-Money Section */}
            <div className="mb-4">
              <p className="block text-gray-700 font-bold mb-2">
                CO₂ Neutralized:
              </p>
              <p className="text-lg font-semibold text-red-500">
                {formData.co2Emissions}
              </p>
            </div>
            <div className="mb-4">
              <p className="block text-gray-700 font-bold mb-2">
                Waste to Money Generated:
              </p>
              <p className="text-lg font-semibold text-green-600">
                {formData.wasteToMoneyGenerated}
              </p>
            </div>
            <div className="flex justify-end">
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
