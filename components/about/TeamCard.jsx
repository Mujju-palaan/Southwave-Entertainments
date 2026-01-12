import Image from "next/image";
import React from "react";

const TeamCard = ({ img, name, rank }) => {
  return (
    <div className="flex flex-col border p-4 rounded-xl items-center w-[250px] 
    shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <span className="w-full h-full rounded-xl ">
        <Image
          className="rounded-xl"
          src={img}
          width={`250`}
          height={`250`}
          alt={name}
        />
      </span>
      <span className="font-semibold text-xl text-center mt-1">{name}</span>
      <span className="font-semibold text-red-500">{rank}</span>
    </div>
  );
};

export default TeamCard;
