import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceData from "../../app/data/ServiceData";
import Heading_desc from "../Heading_desc";

const ServiceMenu = () => {
  return (
    <>
      <Heading_desc
        title={`Our Services`}
        description={`We craft powerful nights where artists, music, and production come together to create unforgettable live experiences.`}
      />

      <div className="md:flex xs:flex-col gap-6 items-center justify-center">
        {ServiceData.map((data) => (
          <ServiceCard
            key={data.id}
            slug={data.slug}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <div className="md:mt-10 m-6"></div>
    </>
  );
};

export default ServiceMenu;
