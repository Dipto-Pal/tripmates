import React from 'react';

const Category = ({ category }) => {
    return (
        <div className='text-center'>
            <img className='w-[300px] h-[300px] rounded-t-full mx-auto' src={category.image} alt="" />
            <p className='text-[30px] mt-5'>{category.category}</p>
        </div>
    );
};

export default Category;