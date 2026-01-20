import React from "react";

const Testimonial = ({ avatar, name, title, quote }) => {
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-xl md:w-1/4 h-auto m-2">
        <figure>
          <div className="flex items-center gap-x-4">
            <img src={avatar} className="w-16 h-16 rounded-full" />
            <div>
              <span className="block text-gray-800 font-semibold">{name}</span>
              <span className="block text-gray-600 text-sm mt-0.5">
                {title}
              </span>
            </div>
          </div>
          <blockquote>
            <p className="mt-4 text-gray-700">{quote}</p>
          </blockquote>
        </figure>
      </div>
    </>
  );
};

export default Testimonial;
