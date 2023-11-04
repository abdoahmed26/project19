import React from 'react';
import free from './images/free-delivery.svg';
import shape from './images/shape.png';
import cert from './images/certified.svg';
import high from './images/coffee.svg';
import poper from './images/coffee-beans.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Feature = () => {
    return (
        <div className='pt-20 pb-24 bg-contColor' id='feature'>
            <div className="title font-secondFont text-center">
                <h2 className='text-firstColor text-3xl md:text-4xl'>Features</h2>
                <h1 className='text-titleColor text-4xl md:text-5xl my-2'>Our Best Features</h1>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-14">
                    <div data-aos="fade-right" data-aos-duration="1000"
                    className='p-3 rounded-md bg-bgColor hover:-translate-y-2 duration-300'>
                        <div className='bg-bgColor p-5 rounded-md border border-firstColor relative h-full'>
                            <div>
                                <img src={free} alt="" className='h-16 w-16' />
                            </div>
                            <div>
                                <h2 className='text-titleColor font-secondFont text-2xl mt-5 mb-3'>
                                    Free Shipping
                                </h2>
                                <p className='font-bodyFont text-textColor'>
                                    It is a long established fact that a reader will be by the readable content of a page looking
                                    at its layout.
                                </p>
                            </div>
                            <div className='text-center absolute top-10 right-2'>
                                <img src={shape} alt="" className='w-26 h-16'/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000"
                    className='p-3 rounded-md bg-bgColor hover:-translate-y-2 duration-300'>
                        <div className='bg-bgColor p-5 rounded-md border border-firstColor relative h-full'>
                            <div>
                                <img src={cert} alt="" className='h-16 w-16' />
                            </div>
                            <div>
                                <h2 className='text-titleColor font-secondFont text-2xl mt-5 mb-3'>
                                    Drganic Certified
                                </h2>
                                <p className='font-bodyFont text-textColor'>
                                    It is a long established fact that a reader will be by the readable content of a page looking
                                    at its layout.
                                </p>
                            </div>
                            <div className='text-center absolute top-10 right-2'>
                                <img src={shape} alt="" className='w-26 h-16'/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="1000"
                    className='p-3 rounded-md bg-bgColor hover:-translate-y-2 duration-300'>
                        <div className='bg-bgColor p-5 rounded-md border border-firstColor relative h-full'>
                            <div>
                                <img src={high} alt="" className='h-16 w-16' />
                            </div>
                            <div>
                                <h2 className='text-titleColor font-secondFont text-2xl mt-5 mb-3'>
                                    High Quality
                                </h2>
                                <p className='font-bodyFont text-textColor'>
                                    It is a long established fact that a reader will be by the readable content of a page looking
                                    at its layout.
                                </p>
                            </div>
                            <div className='text-center absolute top-10 right-2'>
                                <img src={shape} alt="" className='w-26 h-16'/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000"
                    className='p-3 rounded-md bg-bgColor hover:-translate-y-2 duration-300'>
                        <div className='bg-bgColor p-5 rounded-md border border-firstColor relative h-full'>
                            <div>
                                <img src={poper} alt="" className='h-16 w-16' />
                            </div>
                            <div>
                                <h2 className='text-titleColor font-secondFont text-2xl mt-5 mb-3'>
                                    Proper Roasting
                                </h2>
                                <p className='font-bodyFont text-textColor'>
                                    It is a long established fact that a reader will be by the readable content of a page looking
                                    at its layout.
                                </p>
                            </div>
                            <div className='text-center absolute top-10 right-2'>
                                <img src={shape} alt="" className='w-26 h-16'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;