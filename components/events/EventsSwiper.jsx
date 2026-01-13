"use client";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const EventsSwiper = ({EventsData}) => {
  return (
    <Swiper
      className="flex w-[82%]"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 1100,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1, navigation: false },
        768: { slidesPerView: 2, navigation: true },
        1024: { slidesPerView: 3, navigation: true },
      }}
    >
      {EventsData.map((data) => (
        <SwiperSlide key={data.id}>
          <Link
            href={`/blogs/${data.id}`}
            className="md:mb-10 mb-8 rounded-xl cursor-pointer block
                "
          >
            {/* Image wrapper MUST have height */}
            <div
              className="relative h-full w-full overflow-hidden rounded-xl"
            >
              <Image
                src={data.image}
                alt={data.id}
                className="object-cover h-100"
                height={250}
                width={300}
                //   unoptimized
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventsSwiper;
