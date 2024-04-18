"use client";

import React, { useState } from 'react';

export default function RoverForm() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Option:', selectedOption);
    console.log('Selected Date:', selectedDate);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col text-center">
        <div>
          <label className="block mb-1">Choose an Option:</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="1"
                checked={selectedOption === '1'}
                onChange={handleOptionChange}
                className="mr-1"
              />
              Curiosity
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="2"
                checked={selectedOption === '2'}
                onChange={handleOptionChange}
                className="mr-1"
              />
              Spirit
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="3"
                checked={selectedOption === '3'}
                onChange={handleOptionChange}
                className="mr-1"
              />
              Opportunity
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="date" className="block mb-1">Select a Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            className={`w-full border rounded-md px-3 py-2 text-black ${selectedDate === '' ? "text-opacity-30" : ""}`}
          />
        </div>
        <div>
          <button type="submit" className="bg-slate-500 text-white px-4 py-2 rounded-md hover:opacity-50">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

//OLD FORM
{/* <form className="flex flex-col text-center border-2 border-white w-[50%] max-w-[400px] rounded-xl">
        <p className="mb-8 text-2xl">Rover Type</p>

        <div className="flex flex-col items-center">
          <div className="flex justify-normal mb-2">
            <label htmlFor="Opportunity" className="">
              Opportunity -
            </label>
            <input
              type="radio"
              value="Opportunity"
              name="rover-name"
              className=""
            />
          </div>

          <div className="flex justify-normal mb-2">
            <label htmlFor="Spirit" className="">
              Spirit
            </label>
            <input
              type="radio"
              value="Spirit"
              name="rover-name"
              className=""
            />
          </div>

          <div className="flex items-center mb-2">
            <label htmlFor="Curiosity" className="">
              Curiosity
            </label>
            <input
              type="radio"
              value="Curiosity"
              name="rover-name"
              className=""
            />
          </div>
        </div>
      </form> */}