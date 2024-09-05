import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const handleback = () => {
    navigate(-1);
  };
  return (
    <div className="text-center mt-6">
      this is user hi {user.name}
      <div>
      <button onClick={()=>(handleback())} className="select-none rounded-lg border border-w-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5">
        Go back
      </button>
      </div>
    </div>
  );
};

export default UserDetails;
