import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookMark, handleMarkedAsRead }) => {
  return (
    <div className="space-y-4 mb-5">
      <img src={blog.cover} className="w-full" alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <img src={blog.author_img} className="w-14 mr-5" alt="" />
          <div>
            <h1 className="font-bold"> {blog.author}</h1>
            <h2>{blog.posted_date}</h2>
          </div>
        </div>
        <div className="flex text-gray-500 pr-2">
          <h1>{blog.reading_time} min read </h1>
          <button onClick={() => handleBookMark(blog)}>
            <FaRegBookmark className="ml-3" />
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold">{blog.title}</h1>
      </div>
      <div className="flex">
        {blog.hashtags.map((hash, index) => {
          return (
            <div key={index}>
              <h1 className="mr-3"> #{hash}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={()=>handleMarkedAsRead(blog.reading_time,blog.id)}
          className="text-purple-600 underline font-semibold"
        >Mark as read</button>
      </div>
    </div>
  );
};

export default Blog;
