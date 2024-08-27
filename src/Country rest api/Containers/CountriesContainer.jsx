/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CountriesComponent from "../Components/CountriesComponent";
import VisitedCountryContainer from "./VisitedCountryContainer";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visitedCountry, setVisitedCountry] = useState([]);

  const getCountries = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const json = await response.json();
      if (!json) return;
      setCountries(json);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleVisitedCountry = (country) => {
    setVisitedCountry([...visitedCountry, country]);
  };

  const removeCountry =(country)=>{
    setVisitedCountry(visitedCountry.filter(c=>c.name.common !==country.name.common))
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-20 ">
        This is country component{" "}
      </h1>
      {visitedCountry.length != 0 && (
        <div>
          <VisitedCountryContainer
            visitedCountry={visitedCountry}
            removeCountry={removeCountry}
          ></VisitedCountryContainer>
        </div>
      )}

      <div className="text-center text-lg font-bold mt-10">
        <h1> See All Countries : {countries.length}</h1>
      </div>

      <div className="grid grid-cols-3 mx-20  gap-5  ">
        {countries.map((country) => {
          return (
            <CountriesComponent
              key={country.name.common}
              country={country}
              isLoading={isLoading}
              error={error}
              handleVisitedCountry={handleVisitedCountry}
            ></CountriesComponent>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesContainer;
