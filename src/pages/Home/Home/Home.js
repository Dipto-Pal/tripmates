import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Hero from '../Hero/Hero';
import Cards from '../Cards/Cards';
import NewsLetter from '../NewsLetter/NewsLetter';
import Categories from '../Categories/Categories';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <div className='mt-20'>
                <Hero heading={'Explore the world With us'} subheading={'All you need is Tripmates'}></Hero>
                <Cards></Cards>
                <Categories></Categories>
                <Reviews></Reviews>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;