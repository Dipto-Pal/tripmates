import React from 'react';
import locations from '../../../assets/Location/categories.json'
import Card from '../Card/Card';

const Cards = () => {
    return (
        <div>
            <div className='mb-[57px]'>
                <h1 className='font-medium text-[24px] md:text-[36px] lg:text-[56px] text-center'>Popular Destination For You</h1>
                <p className='text-sm md:text-[18px] text-center font-normal mb-2'>Much Place suits your mood. Explore somewhere</p>
                <p className='text-sm md:text-[18px] text-center font-normal'>interesting and enjoy the vibe</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mb-[150px]'>
                {
                    locations.map(location => location.locations.map(dt =>
                        <Card key={dt._id} dt={dt}></Card>
                    ))
                }
            </div>
        </div>
    );
};

export default Cards;