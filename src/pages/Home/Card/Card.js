import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { HiCurrencyDollar } from 'react-icons/hi';

const Card = ({ dt }) => {
    const { "lowest-price": lowest_price } = dt;
    return (
        
        // card er name a flex-1 use korle akta problem
        // category er slide a problem
        <div className='p-4 shadow-3xl rounded-lg flex flex-col gap-3'>
            <img className='rounded-lg' src={dt.images} alt="" />
            <h1 className='font-medium text-xl'>{dt.name}</h1>
            <p className='font-light text-base text-justify flex-1'>{dt.description}</p>
            <div className='text-[#7f7f7f] flex flex-col gap-3'>
                <div className='flex items-center gap-1'>
                    <CiLocationOn size={20}></CiLocationOn>
                    <p className='text-sm font-normal'>{dt.country}, {dt.region}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <HiCurrencyDollar size={25}></HiCurrencyDollar>
                    <p className='text-black text-xl font-medium'>{lowest_price}</p><span className='text-[11px] font-normal'>/ Package</span>
                </div>
            </div>
        </div>
    );
};

export default Card;