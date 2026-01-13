
import UpcomingEventsData from "../../app/data/UpcomingEventsData";
import EventsSwiper from "./EventsSwiper";

const UpcommingEvents = () => {
  return (
    <>
    <h1 className="font-serif md:text-6xl text-2xl md:px-30 px-8 md:py-8 py-2">Upcomming Events</h1>
    <EventsSwiper EventsData={UpcomingEventsData} />
    </>
  );
};

export default UpcommingEvents