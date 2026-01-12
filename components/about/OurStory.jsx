import Image from "next/image";
import { MdPerson } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";

const OurStory = () => {
  return (
    <div className="md:p-12 p-4">
      <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight p-2">
        Our Story, Vision, Values
      </h1>
      <div className="md:flex xs:flex-col md:gap-12 gap-4 p-1">
        <div className=" md:text-lg text-sm">
          <div className="md:text-2xl">
            <RiDoubleQuotesL />
          </div>
          <div>
            Our team of experts works tirelessly to bring your vision to life,
            ensuring every project we understant not only meets but exceeds
            expectations. We are dedicated to transforming your ideas into
            impactful digital experirnces that resonate with your audience and
            drive sucess.
          </div>
          <div className="h-full w-full md:mt-6 mt-2 mb-2">
            <Image
              className="h-full md:h-100 w-full md:object-cover object-contain rounded-xl"
              alt="About Us"
              src="/about/team.jpeg"
              width="800"
              height="420"
            />
          </div>
        </div>

        <div className="bg-indigo-500 text-amber-50 md:text-lg text-[12px] md:p-10 rounded-xl 
            md:block hidden w-full p-4 ">
          <span className="flex flex-row-reverse text-cyan-300 md:text-4xl font-serif 
          font-semibold text-end md:pb-6">
            <h1>ABOUT US</h1>
            {/* <MdPerson/> */}
          </span>

          <p>
            We belive in the power of collaboration and creativity by partnering
            closely with our clients, we gain a deep understanding of their
            unique needs and goals, allows us to deliver customized solutions
            that truly make a difference. Our holistic apporach integrates
            design, technology and strategy to create sealess and engaging
            digital experiences.
          </p>
          <br />
          <p>
            By staying ahed of the curve and embaracing the latest trends
            audiencetechnologies, we ensure that we provide cutting edges
            solutions that not only address current challenges but aslo
            anticipate future opportunities. Lets us help you navigate the
            digital landscape and achieve your bussiness objectives with flair.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
