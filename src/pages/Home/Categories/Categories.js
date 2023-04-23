import React, { useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import './Categories.css'
import categories from '../../../assets/Location/categories.json'
import Category from '../Category/Category';

const Categories = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className='mb-[150px]'>
            <div>
                <div className='flex flex-col gap-5 smd:flex-row justify-between items-center mb-[90px] text-center smd:text-start'>
                    <div>
                        <h1 className='text-3xl md:text-5xl mb-5 font-medium'>Categories</h1>
                        <p>Much destinations here but don’t be confuse!</p>
                        <p>It’s already grouped by category.</p>
                    </div>
                    <div className=''>
                        <button
                            ref={prevRef}
                            className='rounded-full border border-gray-400 p-2 mr-7'
                        >
                            <span className='text-center text-base text-gray-400 opacity-100'>
                                <AiOutlineArrowLeft />
                            </span>
                        </button>
                        <button
                            ref={nextRef}
                            className='rounded-full border border-gray-400 p-2 bg-gradient-to-r from-primary to-secondary'
                        >
                            <span className='text-center text-base text-white'>
                                <AiOutlineArrowRight />
                            </span>
                        </button>
                    </div>
                </div>

                <Swiper
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1400: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        categories.map(category =>
                            <SwiperSlide key={category._id}>
                                <Category category={category}></Category>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Categories;