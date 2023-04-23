import React from 'react';
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import card1 from '../../../assets/Image/Footer/visa.png'
import card2 from '../../../assets/Image/Footer/vise2.png'
import card3 from '../../../assets/Image/Footer/vise3.png'
import card4 from '../../../assets/Image/Footer/vise4.png'
import logo from '../../../assets/logo.png'

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-primary to-secondary text-white'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-20 lg:gap-8 justify-items-center md:justify-items-start lg:justify-items-center text-center md:text-start py-[57px] xs:py-[114px] border-b border-[#c4c4c4] lg:px-6'>
                    <div>
                        <h3 className='mb-5 font-semibold text-[24px]'>Discover</h3>
                        <div className='flex flex-col xs:flex-row gap-6 lg:gap-6 xl:gap-6 xs:text-start'>
                            <ul className='flex flex-col gap-6 font-normal text-[16px]'>
                                <li>Home</li>
                                <li>Terms and Condition</li>
                                <li>Privacy Policy</li>
                            </ul>
                            <ul className='flex flex-col gap-6'>
                                <li>Refund Policy</li>
                                <li>EMI Policy</li>
                                <li>Talent & Culture</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className='mb-5 font-semibold text-[24px]'>Payment Methods</h3>
                        <div className='flex items-center gap-5 font-normal text-[16px]'>
                            <img src={card1} alt="card" />
                            <img src={card2} alt="card" />
                            <img src={card3} alt="card" />
                            <img src={card4} alt="card" />
                        </div>
                    </div>
                    <div>
                        <h3 className='mb-5 font-semibold text-[24px]'>Contact</h3>
                        <div className='flex flex-col gap-5 font-normal text-[16px]'>
                            <p>info@tirpmates.com</p>
                            <p>+88 09678 332211</p>
                            <div className="flex items-center gap-5">
                                <a href="https://www.instagram.com/" className='border p-2 rounded-full'>
                                    <BsInstagram className='text-lg text-pink-600'></BsInstagram>
                                </a>
                                <a href="https://www.facebook.com/" className='border p-2 rounded-full'>
                                    <BsFacebook className='text-lg text-blue-600'></BsFacebook>
                                </a>
                                <a href="https://twitter.com/" className='border p-2 rounded-full'>
                                    <BsYoutube className='text-lg text-red-600'></BsYoutube>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='mb-5 font-semibold text-[24px]'>Need Help?</h3>
                        <p>We are always here for you! Knock us on Messenger anytime or Call our <br /> Hotline (10AM - 10 PM)</p>
                    </div>
                </div>
                <div className='flex flex-col xs:flex-row gap-y-6 xs:gap-0 items-center justify-between py-[37px] xs:py-[75px]'>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="" className='w-14 h-10'/>
                        <div>
                            <p className='uppercase text-[26px] font-semibold'>Tripmates</p>
                            <p className='uppercase text-[10px]'>Fly Better. Fly Safe</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#c4c4c4]'>© 2023 Tripmates All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;