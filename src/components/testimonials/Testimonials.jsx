import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Tina Snow</h5>
            <small className='client__review'>
            Working with Sharon has been an absolute pleasure.
            Her expertise in both front-end and back-end development 
            allowed her to deliver a seamless and efficient website 
            for our business. Her attention to detail and ability 
            to troubleshoot and solve complex coding issues was 
            truly impressive. We highly recommend her services to others.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className='client__name'>James Bond</h5>
            <small className='client__review'>
            I am extremely satisfied with the services provided by 
            Sharon. Her comprehensive knowledge of various programming 
            languages and frameworks enabled her to create a dynamic and 
            responsive web application for our company. Her commitment to 
            delivering high-quality code and exceptional user experience 
            is commendable.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className='client__name'>John Snow</h5>
            <small className='client__review'>
            I cannot speak highly enough of Sharon's skills and professionalism. 
            Her ability to seamlessly integrate front-end designs with robust back-end 
            functionalities exceeded our expectations. Sharon consistently demonstrated 
            a deep understanding of our project requirements and offered innovative 
            solutions to complex problems.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Jane Austen</h5>
            <small className='client__review'>
            We were fortunate to have Sharon as part of our development team. Her versatility 
            and proficiency in various technologies allowed her to contribute to both the 
            front-end and back-end aspects of our application. She consistently delivered clean, 
            well-documented code and demonstrated excellent problem-solving skills.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials
