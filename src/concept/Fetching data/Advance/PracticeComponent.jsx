/* eslint-disable react/prop-types */
const PracticeComponent = ({ users, isLoading, error }) => {
  if (isLoading) return <div>...loading</div>;
  if (error) return <div>something went wrong</div>;
  if (!users) return null;
  return (
    <div className="flex justify-center flex-wrap mt-20">
      {users.length &&
        users.slice(0,5).map((user) => {
          return <div key={user.id} className="text-center mr-10 p-5 border rounded-xl shadow-xl relative z-0 transition-all duration-300 hover:scale-110">
            <img src={user.avatar} alt="" className="mx-auto rounded-full"/>
            <h1>{user.first_name}</h1>
            <h2>{user.email}</h2>
          </div>;
        })}
    </div>
  );
};

export default PracticeComponent;
