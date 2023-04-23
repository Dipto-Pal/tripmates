import React from 'react';
import { AiFillStar } from 'react-icons/ai'

const Review = ({ review, index }) => {
    return (
        <div className='py-10 px-10'>
            <div className={index % 2 === 0 ? '-rotate-[7deg] p-6 bg-[#bbe3f1] rounded-lg' : 'rotate-[7deg] p-6 bg-[#bbe3f1] rounded-lg'}>
                <div className='flex justify-between items-center pb-6 border-b-2 border-[#7f7f7f]'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <img className='rounded-full object-center w-14 h-14' src={review.image} alt="" />
                        </div>
                        <div>
                            <h2 className='font-medium text-[22px]'>{review.name}</h2>
                            <p className='text-base font-light text-[#7f7f7f]'>{review.profession}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <AiFillStar size={20} className='text-orange-400'></AiFillStar>
                        <p className='text-lg font-medium'>{review.rating}</p>
                    </div>
                </div>
                <p className='mt-4 text-[#7f7f7f] font-light'>{review.about}</p>
            </div>
        </div>
    );
};

export default Review;