/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Country from "./Country";
import Visited from "./Visited";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [details, SetDetails] = useState([]);
  // State to hold the input value
  const [inputValue, setInputValue] = useState("");

  const fetchingData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const json = await res.json();
      if (!json) return;
      setCountries(json);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const handelDetails = (country) => {
    const newArray = details.filter((c) => c !== country);
    SetDetails([...newArray, country]);
  };
  const handelRemoveCountry = (country) => {
    SetDetails(details.filter((c) => c !== country));
  };
  // Handler for input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handler for button click
  const handleButtonClick = () => {
    console.log("Input Value:", inputValue);
    // You can perform other actions here with the inputValue
  };

  return (
    <>
      <h1 className="text-center font-bold text-xl mt-5">
        This is country component
      </h1>
      <div className="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
      <input
        type="email"
        placeholder="Search Something..."
        className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
        value={inputValue} // Bind input value to state
        onChange={handleInputChange} // Handle input changes
      />
      <button
        type="button"
        className="flex items-center justify-center bg-[#007bff] px-5"
        onClick={handleButtonClick} // Handle button click
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
          />
        </svg>
      </button>
    </div>

      <div className="text-center mt-5 font-bold">
        Visited Country Details : {details.length}
      </div>
      <div className="grid grid-cols-5 gap-4 mt-5 mx-20">
        {details.map((country) => {
          return (
            <Visited
              key={country.name.common}
              country={country}
              handelRemoveCountry={handelRemoveCountry}
            ></Visited>
          );
        })}
      </div>

      <h2 className="text-center mt-5 font-semibold">
        See All Country : {countries.length}
      </h2>
      <div className="grid grid-cols-5 gap-4 mt-10 mx-20">
        {countries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            isLoading={isLoading}
            error={error}
            handelDetails={handelDetails}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
