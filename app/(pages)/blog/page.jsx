import React from "react";
import BlogCard from "../../../components/blog/BlogCard";
import BlogData from "../../data/BlogData";
import Heading_desc from "../../../components/Heading_desc";

const Blog = () => {
  return (
    <>
      <div>
        <Heading_desc
          title={`Blogs`}
          description={`Explore the latest in elite entertainment, immersive DJ nights, and luxury event experiences. Southwave Entertainment brings you behind-the-scenes insights and expert tips from the world of high-profile events`}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {BlogData.map((data) => (
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
    </>
  );
};

export default Blog;
