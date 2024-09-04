import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../../Error/Error";

const Details = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate()

  const loadData = async () => {
    try {
      const res = await fetch("/blog.json");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      if (error) {
        <Error></Error>;
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      const blog = blogs.find((blog) => blog.id === parseInt(id));
      setSelectedBlog(blog);
    }
  }, [blogs, id]);

  if (!selectedBlog) {
    return (
      <div className="text-center flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  const handleBackbutton =()=>{
    navigate(-1)
  }

  console.log(selectedBlog);
  return (
    <div className="container mx-auto px-5 my-5 flex">
      <img src={selectedBlog.cover} alt="" />
      <div className="p-10">
        {" "}
        <h1 className="text-lg font-medium mb-5">{selectedBlog.title}</h1>
        <h1>{selectedBlog.description}</h1>
        <button
      onClick={()=>handleBackbutton()}
        className=
            "select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5"
            
        type="button"
      >
        Go Back
      </button>
      </div>
    </div>
  );
};

export default Details;
