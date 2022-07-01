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

import Harsh from "../../assets/HarshV.jfif";

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
        <SwiperSlide>
          <article className="testimonial">
            <div className="friend__avtar">
              <img src={Harsh} alt="Harsh Varmora" />
            </div>
            <h5 className="mate__name">Harsh Varmora</h5>
            <small className="mates__words">
            Vipul is truly a collaborative partner during the whole process. And made it fun to work on a website project instead of stressful..
            </small>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="testimonial">
            <div className="friend__avtar">
              <img src={Harsh} alt="Harsh Varmora" />
            </div>
            <h5 className="mate__name">Harsh Varmora</h5>
            <small className="mates__words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              accusantium sunt expedita rerum commodi.
            </small>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="testimonial">
            <div className="friend__avtar">
              <img src={Harsh} alt="Harsh Varmora" />
            </div>
            <h5 className="mate__name">Harsh Varmora</h5>
            <small className="mates__words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              accusantium sunt expedita rerum commodi.
            </small>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="testimonial">
            <div className="friend__avtar">
              <img src={Harsh} alt="Harsh Varmora" />
            </div>
            <h5 className="mate__name">Harsh Varmora</h5>
            <small className="mates__words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              accusantium sunt expedita rerum commodi.
            </small>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className="testimonial">
            <div className="friend__avtar">
              <img src={Harsh} alt="Harsh Varmora" />
            </div>
            <h5 className="mate__name">Harsh Varmora</h5>
            <small className="mates__words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              accusantium sunt expedita rerum commodi.
            </small>
          </article>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
