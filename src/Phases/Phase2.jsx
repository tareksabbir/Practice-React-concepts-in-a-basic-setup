import UserContainer from "../concept/Fetching data/Advance/userContainer";

const Phase2 = () => {
    return (
        <>
        <div className="text-5xl font-medium bg-black text-white text-center p-10 ">
        <h1 className=" text-blue-300">This is Phase 2 advance</h1>
        <ol className="text-center font-bold text-lg  flex justify-center  gap-5 mt-5">
          <li>Container presentational pattern</li>
        </ol>
      </div>
      <UserContainer></UserContainer>
        </>
    );
};

export default Phase2;