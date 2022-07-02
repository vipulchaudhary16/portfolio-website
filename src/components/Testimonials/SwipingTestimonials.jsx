import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./testimonials.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import { testimonialsData } from "../../data/data";

export default function SwipingTestimonials() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonialsData.map((testimonial) => {
          return (
            <SwiperSlide>
              <article className="testimonial">
                <div className="friend__avtar">
                  <img src={testimonial.pic} alt="Harsh Varmora" />
                </div>
                <h5 className="mate__name">{testimonial.name}</h5>
                <small className="mates__words">{testimonial.words}</small>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
