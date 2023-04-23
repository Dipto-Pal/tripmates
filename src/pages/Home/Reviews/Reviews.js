import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Review from '../Review/Review';

const Reviews = () => {
    const reviews = [
        {
            name: "Sabina Melya",
            profession: "Blogger",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            rating: "5.0",
            about: "I feel the ease when making choices tourist destination that i will choose when using Tripmates and I can very easily determine it. The Service offered by Tripmates are very complete that’s why I think Tripmates is always reliable when Traveling Around The world"
        },
        {
            name: "Sabina Melya",
            profession: "Blogger",
            image: "https://randomuser.me/api/portraits/men/37.jpg",
            rating: "5.0",
            about: "I feel the ease when making choices tourist destination that i will choose when using Tripmates and I can very easily determine it. The Service offered by Tripmates are very complete that’s why I think Tripmates is always reliable when Traveling Around The world"
        },
        {
            name: "Sabina Melya",
            profession: "Blogger",
            image: "https://randomuser.me/api/portraits/men/38.jpg",
            rating: "5.0",
            about: "I feel the ease when making choices tourist destination that i will choose when using Tripmates and I can very easily determine it. The Service offered by Tripmates are very complete that’s why I think Tripmates is always reliable when Traveling Around The world"
        },
        {
            name: "Sabina Melya",
            profession: "Blogger",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            rating: "5.0",
            about: "I feel the ease when making choices tourist destination that i will choose when using Tripmates and I can very easily determine it. The Service offered by Tripmates are very complete that’s why I think Tripmates is always reliable when Traveling Around The world"
        },
        {
            name: "Sabina Melya",
            profession: "Blogger",
            image: "https://randomuser.me/api/portraits/men/37.jpg",
            rating: "5.0",
            about: "I feel the ease when making choices tourist destination that i will choose when using Tripmates and I can very easily determine it. The Service offered by Tripmates are very complete that’s why I think Tripmates is always reliable when Traveling Around The world"
        },
        {
            name: "Sabina Melya",
            profession: "Blogger",
            image: "https://randomuser.me/api/portraits/men/38.jpg",
            rating: "5.0",
            about: "I feel the ease when making choices tourist destination that i will choose when using Tripmates and I can very easily determine it. The Service offered by Tripmates are very complete that’s why I think Tripmates is always reliable when Traveling Around The world"
        }
    ]
    return (
        <div className='mb-[150px]'>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                className="mySwiper"
            >
                {
                    reviews.map((review, index) =>
                        <SwiperSlide key={index} >
                            <Review review={review} index={index}></Review>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Reviews;