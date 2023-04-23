import React, { useRef } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Slider1 from '../../../assets/Image/Hero/Image1.png'
import Slider2 from '../../../assets/Image/Hero/Image1.png'
import Slider3 from '../../../assets/Image/Hero/Image1.png'
import Heros from '../Heros/Heros';
import './Hero.css'

const heroData = [
    {
        id: '01',
        placeName: 'Northen Lights, Norway',
        image: Slider1
    },
    {
        id: '02',
        placeName: 'Northen Lights, Norway',
        image: Slider2
    },
    {
        id: '03',
        placeName: 'Northen Lights, Norway',
        image: Slider3
    },
]

const Hero = ({heading, subheading}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div  className='relative w-full z-0 mb-24'>
            <button
                ref={prevRef}
                className='absolute p-[10px] sm:p-[18px] border rounded-full left-[41%] top-[37%] z-50'
            >
                <span className='text-center text-base text-white opacity-100'>
                    <AiOutlineArrowLeft />
                </span>
            </button>
            <button
                ref={nextRef}
                className='absolute p-[10px] sm:p-[18px] mr-5  border text-white rounded-full right-[40%] top-[37%] z-50'
            >
                <span className='text-center text-base text-white'>
                    <AiOutlineArrowRight />
                </span>
            </button>
            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
            >
                {
                    heroData.map(slider =>
                        <SwiperSlide key={slider.id}>
                            <Heros slider={slider} heading={heading} subheading={subheading}>

                            </Heros>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Hero;