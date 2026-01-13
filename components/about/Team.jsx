import React from "react";
import TeamCard from "./TeamCard";
import TeamData from "../../app/data/TeamData";

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
        {TeamData.map((e)=>(
          <TeamCard key={e.id}
          img={e.image}
          name={e.name}
          rank={e.position}
          instagram={e.instagram}
          linkedin={e.linkedin}
          phone={e.phone}
          whatsapp={e.whatsapp}
          mail={e.mail}
        />
        ))}
        
        
        
      </div>

    </div>
  );
};

export default Team;
