import React from 'react';
import img1 from './images/coffee-mug.svg';
import img2 from './images/coffee-beans-2.svg';
import img3 from './images/coffee-beans-3.svg';
import choose from './images/choose.jpg';

const Choose = () => {
    return (
        <div className='pt-20 pb-24 bg-bgColor'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-5'>
                    <div>
                        <div className="title font-secondFont">
                            <h2 className='text-firstColor text-3xl'>Why Choose Us</h2>
                            <h1 className='text-titleColor text-4xl my-2'>
                                Coffero Most Out Of Your Favorite & Tasty Coffee House
                            </h1>
                            <p className='font-bodyFont  mt-5 text-textColor'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have 
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look even slightly believable.
                            </p>
                        </div>
                        <div className='mt-12'>
                            <div className='flex items-start gap-4 mb-8'>
                                <img src={img1} alt="" 
                                className='w-14 h-14 p-2 border-dashed border-titleColor border-2 rounded-full'/>
                                <div>
                                    <h2 className='text-titleColor mb-1 font-secondFont text-2xl'>Awesome Aroma</h2>
                                    <p className='font-bodyFont text-textColor'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have 
                                        suffered alteration in some injected.
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-start gap-4 mb-8'>
                                <img src={img2} alt="" 
                                className='w-14 h-14 p-2 border-dashed border-titleColor border-2 rounded-full'/>
                                <div>
                                    <h2 className='text-titleColor mb-1 font-secondFont text-2xl'>Pure Grades</h2>
                                    <p className='font-bodyFont text-textColor'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have 
                                        suffered alteration in some injected.
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <img src={img3} alt="" 
                                className='w-14 h-14 p-2 border-dashed border-titleColor border-2 rounded-full'/>
                                <div>
                                    <h2 className='text-titleColor mb-1 font-secondFont text-2xl'>Healthy Coffee</h2>
                                    <p className='font-bodyFont text-textColor'>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have 
                                        suffered alteration in some injected.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full'>
                        <img src={choose} alt="" className='w-full h-full'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choose;
