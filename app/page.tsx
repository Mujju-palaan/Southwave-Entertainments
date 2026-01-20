import BlogSwiper from "../components/blog/BlogSwiper";
import Event from "../components/events/Event";
import Status from "../components/home/Status";
import Bannervideo from "../components/home/Bannervideo";
import ServiceMenu from "../components/services/ServiceMenu";
import Live from "../components/events/Live";
import GalleryHome from "../components/gallery/GalleryHome";
import Heading_desc from "@/components/Heading_desc";

export default function Home() {
  return (
    <div>
      <Bannervideo />

      {/* ------------- Events  ------------- */}
      <Live
        heading={`Live Events`}
        description={`In London our events have connected thousands across borders and cultures. Explore the moments we brought to life.`}
      />

      {/* <Event
        heading={`Live Events`}
        description={`In London our events have connected thousands across borders and cultures. Explore the moments we brought to life.`}
        EventsData={OngoingEventsData}
      /> */}

      <div className="md:my-15">
        <ServiceMenu />
      </div>
      

      {/* ------------- status bar ------------- */}
      <Status />

      {/* ------------- Blog ------------- */}
      <div className="md:my-10">
        <Heading_desc
          title={`Blogs`}
          description={`peoples who revied our events, who where satisfied with us`}
        />
        <BlogSwiper />
      </div>

        <Heading_desc
          title={`Partiers gallery`}
          description={`When the city’s hottest faces come out to party, you know it’s our event. These are the moments that define our events.`}
        />
        <GalleryHome />

    </div>
  );
}
