import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceMenu = () => {
  return (
    <>
      <div className="flex flex-col md:gap-4 gap-2 font-serif text-center md:px-40 px-4 md:py-10 md:mt-4 mt-6">
        <h1 className=" md:text-5xl text-2xl font-semibold ">Our Services</h1>
        <p className="text-stone-500 md:text-2xl text-sm">
          {`We’re a crew of strategists, creators, and marketers helping fearless brands break through the noise and shine with purpose.`}
        </p>
      </div>

      <div className="md:flex xs:flex-col gap-6 items-center justify-center">
        <ServiceCard
          href={``}
          image={`/services/Bussiness-counselting.jpg`}
          title={`Business Consulting`}
          decription={`Lorem ipsum dolor sit amet consectetur adipisicing elit fugit!......`}
        />
        <ServiceCard
          href={``}
          image={`/services/marketing.jpg`}
          title={`Marketing & Brand Promotion`}
          decription={`Lorem ipsum dolor sit amet consectetur adipisicing elit fugit!......`}
        />
        <ServiceCard
          href={`/services`}
          image={`/services/dj.jpg`}
          title={`DJs ,Corporate and Special Events`}
          decription={`Lorem ipsum dolor sit amet consectetur adipisicing elit fugit!......`}
        />
      </div>
      <div className="md:mt-10 m-6"></div>
    </>
  );
};

export default ServiceMenu;
