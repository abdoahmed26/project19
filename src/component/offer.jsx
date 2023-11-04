import React from 'react';
import back from './images/bg.jpg';
import img1 from './images/offer-1.jpg';
import img2 from './images/offer-2.jpg';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Offer = () => {
    return (
        <div className='bg-cover' style={{backgroundImage:`url(${back})`}}>
            <div className='pt-20 pb-24 bg-[#000000cc]'>
                <div className="title font-secondFont text-center">
                    <h2 className='text-firstColor text-3xl md:text-4xl'>Offer</h2>
                    <h1 className='text-titleColor text-4xl md:text-5xl my-2'>Special Offer For You</h1>
                </div>
                <div className="container mt-12">
                    <OwlCarousel className='owl-theme' autoplay autoplayTimeout={3000} loop margin={50} nav items={1}>
                        <div className="box flex flex-col md:flex-row items-center item">
                            <div className='md:w-[255%] lg:w-[170%]'>
                                <img src={img1} alt="" className=' rounded-md md:w-[100%] md:h-[450px] lg:h-[400px]'/>
                            </div>
                            <div className='bg-contColor relative md:-left-16 p-2 rounded-md'>
                                <div className='bg-contColor border-dashed border-firstColor border-2 py-10 px-6
                                rounded-md h-fit'>
                                    <h2 className='text-titleColor font-secondFont text-2xl mb-3'>
                                        Cappuccino Arabica
                                    </h2>
                                    <h4 className='text-titleColor font-secondFont mb-3'>Get 40% Offer</h4>
                                    <p className='text-textColor font-bodyFont'>
                                        It is a long established fact that a reader will be distracted by the readable content 
                                        of a page when looking at its normal distribution layout.
                                    </p>
                                    <div className='mt-8'>
                                        <Link className='p-3 px-4 bg-firstColor border border-firstColor rounded-md 
                                        hover:bg-inherit hover:text-firstColor duration-300 text-titleColor font-bodyFont'> 
                                            Order Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box flex flex-col md:flex-row items-center item">
                            <div className='md:w-[255%] lg:w-[170%]'>
                                <img src={img2} alt="" className=' rounded-md md:w-[100%] md:h-[450px] lg:h-[400px]'/>
                            </div>
                            <div className='bg-contColor relative md:-left-16 p-2 rounded-md'>
                                <div className='bg-contColor border-dashed border-firstColor border-2 py-10 px-6
                                rounded-md h-fit'>
                                    <h2 className='text-titleColor font-secondFont text-2xl mb-3'>
                                        Cappuccino Arabica
                                    </h2>
                                    <h4 className='text-titleColor font-secondFont mb-3'>Get 40% Offer</h4>
                                    <p className='text-textColor font-bodyFont'>
                                        It is a long established fact that a reader will be distracted by the readable content 
                                        of a page when looking at its normal distribution layout.
                                    </p>
                                    <div className='mt-8'>
                                        <Link className='p-3 px-4 bg-firstColor border border-firstColor rounded-md 
                                        hover:bg-inherit hover:text-firstColor duration-300 text-titleColor font-bodyFont'> 
                                            Order Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
}

export default Offer;
