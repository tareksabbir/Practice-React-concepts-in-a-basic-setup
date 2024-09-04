const Visited = ({ country ,handelRemoveCountry}) => {
  return (
    <div className="text-center p-10 border rounded-xl shadow-xl relative z-0 transition-all duration-300 hover:scale-110 ">
      <img
        src={country.flags.png}
        className="w-[100px] max-h-[50px] mx-auto"
        alt=""
      />
      <h1 className="mt-5">{country.name.common}</h1>
      <button onClick={()=>handelRemoveCountry(country)}  className="select-none rounded-lg border border-w-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5">Remove</button>
    </div>
  );
};

export default Visited;
