import React from 'react';
import back  from './images/home-bg.png'

const Body = () => {
    return (
        <div className="text-titleColor bg-cover h-[100vh] home" id='home' style={{backgroundImage : `url(${back})`}}>
            <div className='flex items-center h-full container'>
                <div className='w-full md:w-3/4'>
                    <h2 className='text-3xl md:text-4xl font-secondFont'>Welcome To Coffero!</h2>
                    <h1 className='text-4xl md:text-7xl font-secondFont font-bold my-4'>
                        Discover Amazing Coffee House & get Energy
                    </h1>
                    <p className='font-bodyFont text-base md:text-lg mt-5'>
                        There are many variations of passages available but the majority have 
                        suffered alteration in some form by injected humour or randomised words.
                    </p>
                    <div className='font-bodyFont mt-9 flex gap-6 items-center'>
                        <a href='#menu' className='p-3 px-4 bg-firstColor border border-firstColor rounded-md 
                        hover:bg-inherit duration-300'>
                            Check Menu
                        </a>
                        <a href='#reser' className='p-3 px-4 bg-inherit border border-firstColor rounded-md hover:bg-firstColor 
                        duration-300'>
                            Book Table
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;