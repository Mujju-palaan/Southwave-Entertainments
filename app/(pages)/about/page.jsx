
import Banner from "../../../components/about/Banner";
import OurStory from "../../../components/about/OurStory";
import Team from "../../../components/about/Team";
import OurMission from "../../../components/about/OurMission";
import OurVision from "../../../components/about/OurVision";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <Banner />
      <OurStory />
      <Team />
      {/* --------- Our Mission/Vision ------------- */}
      <div className="md:flex xs:flex-col gap-12 justify-center">
        <OurMission />
        <OurVision />
      </div>
      <div className="md:pb-10"></div>
    </div>
  );
};

export default About;
