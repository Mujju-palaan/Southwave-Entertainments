import React from "react";
import BlogCard from "../../../components/blog/BlogCard";
import BlogData from "../../data/BlogData";

const Blog = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {BlogData.map((data)=>(
        <BlogCard
        key={data.id}
        id={data.id}
        img={data.image}
        name={data.name}
        venue={data.venue}
        date={data.date}
        description={data.description}
        categories={data.categories}
      />
      ))}
      
    </div>
  );
};

export default Blog;
