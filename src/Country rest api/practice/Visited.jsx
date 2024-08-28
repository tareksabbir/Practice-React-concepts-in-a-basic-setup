const Visited = ({ country }) => {
  return (
    <div className="text-center p-10 border rounded-xl shadow-xl relative z-0 transition-all duration-300 hover:scale-110 m-3">
      <img
        src={country.flags.png}
        className="w-[100px] max-h-[50px] mx-auto"
        alt=""
      />
      <h1 className="mt-5">{country.name.common}</h1>
    </div>
  );
};

export default Visited;
