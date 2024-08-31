import BookMark from "./BookMark";

const BookMarks = ({ LocalBookMarkData ,readTime}) => {

  return (
    <>
      <div>
        <h1 className="bg-purple-100 border border-purple-600 rounded-lg px-5 py-5 mb-5 text-purple-800 font-bold text-center">Spent time on read : {readTime} min</h1>

        <div className="bg-gray-200 p-5 rounded-xl">
          <h1 className="text-lg font-semibold mb-2">
            Bookmarked Blogs : {LocalBookMarkData.length}
          </h1>
          {LocalBookMarkData.map((item, idx) => (
            <BookMark key={idx} bookmark={item}></BookMark>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookMarks;
