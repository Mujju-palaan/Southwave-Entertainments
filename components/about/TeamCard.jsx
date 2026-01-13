import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaPhone, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const TeamCard = ({ img, name, rank, instagram, linkedin, phone, whatsapp, mail }) => {
  return (
    <div
      className="flex flex-col border p-4 rounded-xl items-center w-[250px] 
    shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
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
      <span className="flex gap-2 text-xl mt-1">
        <Link href={instagram} target="_blank"><FaInstagram  className="text-[#ee2a7b]"/></Link>
        <Link href={linkedin} target="_blank"><FaLinkedin className="text-blue-800"/></Link>
        <Link href={phone} ><FaPhone className="text-blue-500"/></Link>
        <Link href={whatsapp} ><FaWhatsapp className="text-green-700 font-bold"/></Link>
        <Link href={mail} ><FiMail className="text-blue-500"/></Link>
      </span>
    </div>
  );
};

export default TeamCard;
