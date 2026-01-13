import CompletedEvents from "../../../components/events/CompletedEvents"
import UpcommingEvents from "../../../components/events/UpcommingEvents"
import OngoingEvents from "../../../components/events/OngoingEvents"

const Events = () => {
  return (
    <div className="">
      <UpcommingEvents />
      <OngoingEvents />
      <CompletedEvents />
    </div>
  )
}

export default Events