import UpcomingEventsData from "../../app/data/UpcomingEventsData";
import EventsSwiper from "./EventsSwiper";

const OngoingEvents = () => {
  return (
    <>
    <h1 className="font-serif md:text-6xl text-3xl md:px-30 px-8 md:py-8 py-2">Ongoing Events</h1>
    <EventsSwiper EventsData={UpcomingEventsData} />
    </>
  )
}

export default OngoingEvents