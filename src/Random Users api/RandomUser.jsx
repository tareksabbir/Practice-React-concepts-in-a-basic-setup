import { Link } from "react-router-dom";

const RandomUser = ({ user }) => {
  const { name, email, phone,id } = user;
  return (
    <div className="p-10 border ">
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
      <Link to={`/user/${id}`}>
        <button className="select-none rounded-lg border border-w-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default RandomUser;
