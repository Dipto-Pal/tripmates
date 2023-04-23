import React from 'react';

const Heros = ({ slider, heading, subheading }) => {
    return (
        <div className='h-[380px] xs:h-[520px] md:h-[840px]'>
            <div>
                <img
                    className="absolute object-cover object-center w-full h-full rounded-2xl"
                    src={slider.image}
                    alt=""
                />
            </div>
            <div className='absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-center'>
                <h3 className='font-normal text-lg xs:text-xl'>{subheading}</h3>
                <h1 className='font-semibold text-[25px] xs:text-[40px] uppercase'>{heading}</h1>
                <p className='font-light text-[14px] mt-5'>{slider.placeName}</p>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Heros;