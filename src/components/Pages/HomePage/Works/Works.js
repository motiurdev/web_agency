import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import carousel1 from "../../../../images/carousel-1.png";
import carousel2 from "../../../../images/carousel-2.png";
import carousel3 from "../../../../images/carousel-3.png";
import carousel4 from "../../../../images/carousel-4.png";
import carousel5 from "../../../../images/carousel-5.png";
import "swiper/css";

const Works = () => {
  return (
    <div style={{ background: "#111430", padding: "60px" }}>
      <Container>
        <h3 className="py-4 text-center text-white mb-4">
          Here are some of <span style={{ color: "#7ab259" }}>our works</span>
        </h3>
        <Swiper spaceBetween={50} slidesPerView={3}>
          <SwiperSlide>
            <img src={carousel1} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel2} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel4} className="img-fluid" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={carousel5} className="img-fluid" alt="" />
          </SwiperSlide>
          ...
        </Swiper>
      </Container>
    </div>
  );
};

export default Works;
