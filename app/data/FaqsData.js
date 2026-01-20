import Link from "next/link";
const FaqsData = [
  [
    {
      question: "1. What type of events do you organize?",
      answer: (
        <>
          We organize <strong>music-driven events</strong>, including DJ nights,
          live music performances, artist-led shows, and curated party
          experiences. Our focus is on creating high-energy, professionally
          managed events that deliver memorable experiences.
        </>
      ),
    },
    {
      question: "2. Do you organize private or customized events?",
      answer: (
        <>
          Yes. We offer <strong>customized event planning</strong> customized
          event planning for private parties, brand events, artist-led shows,
          and special occasions. You can contact us directly to discuss your
          requirements.
        </>
      ),
    },
    {
      question: "3. How can I book tickets for your events?",
      answer: (
        <>
          <p>Tickets can be booked :</p>
          <ul className="list-disc ml-10">
            <li>
              Directly through our <strong>official website,</strong> or
            </li>
            <li>
              Via <strong>private booking</strong> by contacting us through our
              official communication channels.
            </li>
          </ul>
          All bookings require
          <strong> full payment</strong> to confirm entry.
        </>
      ),
    },
    {
      question: "4. Is full payment required to confirm a booking?",
      answer: (
        <>
          Yes. <strong>Full payment is mandatory</strong> at the time of booking
          to secure your ticket and confirm your entry to the event.
        </>
      ),
    },
    {
      question: "5. Is there an age restriction for attending your events?",
      answer: (
        <>
          Yes. All our events are <strong>strictly 18+</strong>. Valid
          government-issued photo ID may be required at entry.
        </>
      ),
    },
    {
      question: "6. Will alcohol be available at the events?",
      answer:
        "Yes. Alcohol may be available at certain events. Attendees must comply with UK licensing laws and venue policies. We promote responsible drinking at all times.",
    },
    {
      question: "7. Can I collaborate with you to organize an event in the UK?",
      answer: (
        <>
          Absolutely. We collaborate with{" "}
          <strong>international and domestic event organisers</strong>, brands,
          and agencies. If you’re planning an event in the UK and need local
          execution support, we can manage planning, coordination, and
          operations.
        </>
      ),
    },
    {
      question: "8. I am an artist. Can you help me organise my own event?",
      answer: (
        <>
          Yes. We work with{" "}
          <strong>artists such as DJs, singers, rappers, and performers</strong>{" "}
          to help them plan, organise, and execute their own events—from concept
          to live execution.
        </>
      ),
    },
    {
      question: "9. Do you offer refunds if I can’t attend the event?",
      answer: (
        <>
          Refund policies vary depending on the event. Please refer to our
          <strong> Refund Policy</strong> page for detailed information. In
          general, tickets are
          <strong> non-refundable</strong> unless the event is cancelled or
          rescheduled.
        </>
      ),
    },
    {
      question: "10. What happens if an event is cancelled or postponed?",
      answer: (
        <>
          In case of cancellation or rescheduling, ticket holders will be
          informed promptly. Refunds or ticket transfers will be handled
          according to our <strong>Refund Policy</strong>.
        </>
      ),
    },
    {
      question: "11. Can event details change after booking?",
      answer:
        "Yes. Event details such as venue, lineup, or timing may change due to unforeseen circumstances. Any major updates will be communicated through official channels.",
    },
    {
      question: "12. How can I contact you for enquiries or bookings?",
      answer: (
        <>
          <p>You can contact us via :</p>
          <ul className="list-disc ml-10">
            <li>
              The <strong>Contact Us</strong> form on our website
            </li>
            <li>Our official email or phone number</li>
            <li>Our verified social media pages</li>
          </ul>
        </>
      ),
    },
    {
      question: "13. Do you handle venue management and technical setup?",
      answer: (
        <>
          Yes. Depending on the service, we assist with{" "}
          <strong>
            venue coordination, sound, lighting, artist management, and
            on-ground execution
          </strong>{" "}
          to ensure a smooth event experience.
        </>
      ),
    },
    {
      question: "14. Is photography or videography allowed at events?",
      answer:
        "Photography and videography policies may vary by event. By attending, you consent to being photographed or recorded for promotional purposes unless stated otherwise.",
    },
    {
      question: "15. How can I stay updated about upcoming events?",
      answer: (
        <>
          <p>You can stay updated by :</p>
          <ul className="list-disc ml-10">
            <li>Following us on social media</li>
            <li>Subscribing to our newsletter</li>
            <li>Checking our website regularly for announcements</li>
          </ul>
        </>
      ),
    },
  ],
];

export default FaqsData;
