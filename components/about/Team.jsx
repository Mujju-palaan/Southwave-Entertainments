import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="flex flex-col md:gap-8 gap-4">
      <div className="md:px-20 p-4 text-center flex flex-col gap-4">
        <h1 className="md:text-6xl text-xl font-serif md:font-normal font-semibold">
          We are the people who manage Southwave Entertainment
        </h1>
        <p className="text-gray-600 md:text-lg text-xs">
          Our philosopy is simple, manage people and give them the resources and
          support to do their best.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center md:p-8 ">
        <TeamCard
          img={`/about/Nithish kumar siripuram.jpeg`}
          name={`Nithish Kumar Siripuram`}
          rank={`Founder`}
        />
        <TeamCard
          img={`/about/Sathish Varma.jpeg`}
          name={`Sathish Varma`}
          rank={`Co-Founder`}
        />
        <TeamCard
          img={`/about/Irshad-Shaik.jpeg`}
          name={`Irshad Shaik`}
          rank={`Co-Founder`}
        />
        {/* <TeamCard
        img={`/about/Irshad Shaik.jpeg`}
        name={`Irshad Shaik`}
        rank={`Co-Founder`}
      /> */}
      </div>

    </div>
  );
};

export default Team;
