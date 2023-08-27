import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import SpeakersData from "./SpeakersData";
const Slider = () => {
  return (
    <>
      <Swiper
        autoplay={{ delay: 2500, disabledOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        // breakpoints={{
        //   768: {
        //     width: 768,
        //     slidesPerView: 2,
        //   },
        // }}
      >
        {SpeakersData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="speakers">
                <img src={item.img} />
                <h4 className="name">{item.name}</h4>
                <span className="job">{item.job}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
