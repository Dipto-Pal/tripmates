import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default Main;