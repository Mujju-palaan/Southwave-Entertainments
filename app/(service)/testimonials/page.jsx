import React from "react";
import Heading_desc from "../../../components/Heading_desc";
import TestimonialCard from "../../../components/testimonail/TestimonialCard";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Midnight Pulse",
      quote: "The energy, crowd, and organization were top-notch. Easily one of the best events I’ve attended this year.",
    },
    {
      id: 2,
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Neon Nights",
      quote: "The vibe was unreal. Everything from the music to the lighting felt premium and well curated.",
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "Bass District",
      quote:
        "Great crowd, smooth entry, and amazing DJs. The overall experience keeps getting better with every event.",
    },
    {
      id: 4,
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      name: "Liam smith",
      title: "Electric Avenue",
      quote: "I attended for the first time and was blown away. The atmosphere, security all were perfectly managed.",
    },
    {
      id: 5,
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      name: "Sophia Lee",
      title: "Street PUB",
      quote: "Every event just keeps getting better. The team really knows how to deliver unforgettable nights.",
    },
  ];
  return (
    <div className="min-h-screen">
      <Heading_desc
        title={`Testimonials`}
        description={`Hear from our clients and guests about their unforgettable experiences with Southwave Entertainment.`}
      />
      <div className="flex flex-wrap justify-center items-center">
        {testimonialData.map((t) => (
          <TestimonialCard
            key={t.id}
            id={t.id}
            avatar={t.avatar}
            name={t.name}
            title={t.title}
            quote={t.quote}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
