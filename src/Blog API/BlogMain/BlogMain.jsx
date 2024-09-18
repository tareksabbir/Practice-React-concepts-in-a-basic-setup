import { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import BookMarks from "../BookMark/BookMarks";
import { addBlogToLocalStore, getBlog } from "../BlogStorage/LocalBlogStorage";

const Header = () => {
  const [blogs, setBlogs] = useState([]);
  const [LocalBookMarkData, setLocalBookMarkData] = useState([]);
  const [readTime ,setReadTime] = useState(0)

  const loadData = async () => {
    try {
      const res = await fetch("/blog.json");
      const data = await res.json();
      if (!data) return;
      setBlogs(data);
    } catch (error) {
      if (error) {
        console.log("something went wrong");
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (blogs.length) {
      const getBlogIdFromLS = getBlog();
      const blogId = [];
      for (let id of getBlogIdFromLS) {
        const data = blogs.find((item) => item.id === id);
        blogId.push(data);
      }
      setLocalBookMarkData(blogId);
    }
  }, [blogs]);

  const handleBookMark = (blog) => {
    setLocalBookMarkData([...LocalBookMarkData, blog]);
    addBlogToLocalStore(blog.id);
  };

  const handleMarkedAsRead = (time,id) => {
    setReadTime(time+readTime)
    const filterData = LocalBookMarkData.filter(idx => idx.id !== id)
    setLocalBookMarkData(filterData)
  };

  return (
    <div className="container mx-auto px-5">
      {/* <div className="flex justify-between mt-10 items-center mb-5">
        <h1 className="text-xl ">Knowledge Cafe</h1>
        <img src="../../../src/assets/blog images/profile.png" alt="" />
      </div> */}
      <hr className="font-extrabold" />
      <div className="flex mt-10">
        <div className="w-2/3">
          <Blogs
            handleBookMark={handleBookMark}
            blogs={blogs}
            handleMarkedAsRead={handleMarkedAsRead}
          ></Blogs>
        </div>
        <div className="w-1/3">
          <BookMarks LocalBookMarkData={LocalBookMarkData} readTime={readTime}></BookMarks>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
