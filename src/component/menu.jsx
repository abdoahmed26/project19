import React from 'react';
import back from './images/bg.jpg';
import img1 from './images/01.jpg';
import img2 from './images/02.jpg';
import img3 from './images/03.jpg';
import img4 from './images/04.jpg';
import img5 from './images/05.jpg';
import img6 from './images/06.jpg';
import img7 from './images/07.jpg';
import img8 from './images/08.jpg';

const Menu = () => {
    return (
        <div className='bg-cover' id='menu' style={{backgroundImage:`url(${back})`}}>
            <div className='pt-20 pb-24 bg-[#000000cc]'>
                <div className="title font-secondFont text-center">
                    <h2 className='text-firstColor text-3xl md:text-4xl'>Our Menu</h2>
                    <h1 className='text-titleColor text-4xl md:text-5xl my-2'>Let's Check Our Menu</h1>
                </div>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
                        <div data-aos="fade-up" data-aos-duration="1000"
                        className='bg-contColor p-4 rounded-md flex flex-col sm:items-center sm:flex-row 
                        gap-3 hover:-translate-y-2 duration-300'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img1} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div className='flex justify-between items-center w-full sm:w-[82%]'>
                                <div>
                                    <h2 className='text-firstColor font-secondFont text-xl mb-1'>Americano Coffee</h2>
                                    <p className='text-textColor font-bodyFont'>Milk with vanilla flavored</p>
                                </div>
                                <p className='text-firstColor font-bodyFont ps-4 border-firstColor border-l-2 border-dashed'>
                                    $50.25
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1000"
                        className='bg-contColor p-4 rounded-md flex flex-col sm:items-center sm:flex-row
                        gap-3 hover:-translate-y-2 duration-300'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img2} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div className='flex justify-between items-center w-full sm:w-[82%]'>
                                <div>
                                    <h2 className='text-firstColor font-secondFont text-xl mb-1'>Cappuccino Arabica</h2>
                                    <p className='text-textColor font-bodyFont'>Milk with vanilla flavored</p>
                                </div>
                                <p className='text-firstColor font-bodyFont ps-4 border-firstColor border-l-2 border-dashed'>
                                    $70.25
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000"
                        className='bg-contColor p-4 rounded-md flex flex-col sm:items-center sm:flex-row
                        gap-3 hover:-translate-y-2 duration-300'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img3} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div className='flex justify-between items-center w-full sm:w-[82%]'>
                                <div>
                                    <h2 className='text-firstColor font-secondFont text-xl mb-1'>Milk Cream Coffee</h2>
                                    <p className='text-textColor font-bodyFont'>Milk with vanilla flavored</p>
                                </div>
                                <p className='text-firstColor font-bodyFont ps-4 border-firstColor border-l-2 border-dashed'>
                                    $30.25
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1000"
                        className='bg-contColor p-4 rounded-md flex flex-col sm:items-center sm:flex-row
                        gap-3 hover:-translate-y-2 duration-300'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img4} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div className='flex justify-between items-center w-full sm:w-[82%]'>
                                <div>
                                    <h2 className='text-firstColor font-secondFont text-xl mb-1'>Special Raw Coffee</h2>
                                    <p className='text-textColor font-bodyFont'>Milk with vanilla flavored</p>
                                </div>
                                <p className='text-firstColor font-bodyFont ps-4 border-firstColor border-l-2 border-dashed'>
                                    $80.25
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000"
                        className='bg-contColor p-4 rounded-md flex flex-col sm:items-center sm:flex-row
                        gap-3 hover:-translate-y-2 duration-300'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img5} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div className='flex justify-between items-center w-full sm:w-[82%]'>
                                <div>
                                    <h2 className='text-firstColor font-secondFont text-xl mb-1'>Fresh Black Coffee</h2>
                                    <p className='text-textColor font-bodyFont'>Milk with vanilla flavored</p>
                                </div>
                                <p className='text-firstColor font-bodyFont ps-4 border-firstColor border-l-2 border-dashed'>
                                    $90.25
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1000"
                        className='bg-contColor p-4 rounded-md flex flex-col sm:items-center sm:flex-row
                        gap-3 hover:-translate-y-2 duration-300'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img6} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div className='flex justify-between items-center w-full sm:w-[82%]'>
                                <div>
                                    <h2 className='text-firstColor font-secondFont text-xl mb-1'>Cappuccino Arabica</h2>
                                    <p className='text-textColor font-bodyFont'>Milk with vanilla flavored</p>
                                </div>
                                <p className='text-firstColor font-bodyFont ps-4 border-firstColor border-l-2 border-dashed'>
                                    $70.25
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000"
                        className='bg-contColor p-4 rounded-md flex flex-col sm:items-center sm:flex-row
                        gap-3 hover:-translate-y-2 duration-300'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img7} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div className='flex justify-between items-center w-full sm:w-[82%]'>
                                <div>
                                    <h2 className='text-firstColor font-secondFont text-xl mb-1'>Milk Cream Coffee</h2>
                                    <p className='text-textColor font-bodyFont'>Milk with vanilla flavored</p>
                                </div>
                                <p className='text-firstColor font-bodyFont ps-4 border-firstColor border-l-2 border-dashed'>
                                    $120.25
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1000"
                        className='bg-contColor p-4 rounded-md flex flex-col sm:items-center sm:flex-row
                        gap-3 hover:-translate-y-2 duration-300'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img8} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div className='flex justify-between items-center w-full sm:w-[82%]'>
                                <div>
                                    <h2 className='text-firstColor font-secondFont text-xl mb-1'>Cold Coffee</h2>
                                    <p className='text-textColor font-bodyFont'>Milk with vanilla flavored</p>
                                </div>
                                <p className='text-firstColor font-bodyFont ps-4 border-firstColor border-l-2 border-dashed'>
                                    $40.25
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
