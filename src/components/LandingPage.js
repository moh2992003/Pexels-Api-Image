import React, { useState } from 'react';

const LandingPage = ({ searchText }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(inputValue)
  };
  
  return (
    <div>
      <div className="rounded-md p-6 max-w-xg flex justify-center items-center flex-col w-full text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white duration-200 hover:text-pink-600 mb-2">
          Welcome to Your Picture Gallery
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white duration-200 hover:text-pink-600 mb-4">
          Explore a world of captivating images that will satisfy your artistic desire.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 md:items-center">
            <input
              onChange={(e) => {setInputValue(e.target.value)}}
              type="text"
              placeholder="Search Images"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 text-black"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 items-end"
            >
              Search Images
            </button>
          </div>
        </form>
        <div className="mt-4 md:mt-8 border-t-2 border-solid border-[#eac8c1] w-full mx-auto"></div>
      </div>
    </div>
  );
};

export default LandingPage;
