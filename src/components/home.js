// src/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="text-4xl font-bold text-center my-4">Welcome to Finance Game!</h1>
      <p className="text-lg text-gray-700 text-center">
        Track your finances, reach your goals, and level up with us!
      </p>
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
