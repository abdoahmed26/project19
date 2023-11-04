import React from 'react';
import img1 from './images/gallery-1.jpg';
import img2 from './images/gallery-2.jpg';
import img3 from './images/gallery-3.jpg';
import img4 from './images/gallery-4.jpg';
import img5 from './images/gallery-5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
    return (
        <div className='pb-24 pt-20 bg-bgColor' id='gallery'>
            <div className="title font-secondFont text-center">
                <h2 className='text-firstColor text-3xl md:text-4xl'>Gallery</h2>
                <h1 className='text-titleColor text-4xl md:text-5xl my-2'>Our Photo Gallery</h1>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    <div className='relative flex justify-center items-center overflow-hidden group'>
                        <img src={img1} alt="" className='w-full h-full rounded-md z-10'/>
                        <div className='w-[96%] h-[0%] absolute bg-firstColor rounded-md opacity-70 group-hover:h-[96%]
                        duration-300 z-20'>
                        </div>
                        <p>
                            <FontAwesomeIcon icon={faPlus} className='text-2xl text-firstColor p-2 px-[10px] z-30 bg-white
                            rounded-full opacity-100 absolute -bottom-full left-1/2 -translate-x-1/2 translate-y-1/2
                            group-hover:bottom-1/2 duration-500'/>
                        </p>
                        <span className='font-secondFont text-xl rounded-md w-[88%] text-center text-titleColor p-4 bg-bgColor
                        absolute -bottom-full left-1/2 -translate-x-1/2 z-40 duration-500 group-hover:bottom-6'>
                            Cappuccino Arabica
                        </span>
                    </div>
                    <div className='relative flex justify-center items-center overflow-hidden group'>
                        <img src={img2} alt="" className='w-full h-full rounded-md z-10'/>
                        <div className='w-[96%] h-[0%] absolute bg-firstColor rounded-md opacity-70 group-hover:h-[96%]
                        duration-300 z-20'>
                        </div>
                        <p>
                            <FontAwesomeIcon icon={faPlus} className='text-2xl text-firstColor p-2 px-[10px] z-30 bg-white
                            rounded-full opacity-100 absolute -bottom-full left-1/2 -translate-x-1/2 translate-y-1/2
                            group-hover:bottom-1/2 duration-500'/>
                        </p>
                        <span className='font-secondFont text-xl rounded-md w-[88%] text-center text-titleColor p-4 bg-bgColor
                        absolute -bottom-full left-1/2 -translate-x-1/2 z-40 duration-500 group-hover:bottom-6'>
                            Cappuccino Arabica
                        </span>
                    </div>
                    <div className='relative flex justify-center items-center overflow-hidden group'>
                        <img src={img3} alt="" className='w-full h-full rounded-md z-10'/>
                        <div className='w-[96%] h-[0%] absolute bg-firstColor rounded-md opacity-70 group-hover:h-[96%]
                        duration-300 z-20'>
                        </div>
                        <p>
                            <FontAwesomeIcon icon={faPlus} className='text-2xl text-firstColor p-2 px-[10px] z-30 bg-white
                            rounded-full opacity-100 absolute -bottom-full left-1/2 -translate-x-1/2 translate-y-1/2
                            group-hover:bottom-1/2 duration-500'/>
                        </p>
                        <span className='font-secondFont text-xl rounded-md w-[88%] text-center text-titleColor p-4 bg-bgColor
                        absolute -bottom-full left-1/2 -translate-x-1/2 z-40 duration-500 group-hover:bottom-6'>
                            Cappuccino Arabica
                        </span>
                    </div>
                    <div className='relative flex justify-center items-center overflow-hidden group'>
                        <img src={img4} alt="" className='w-full h-full rounded-md z-10'/>
                        <div className='w-[96%] h-[0%] absolute bg-firstColor rounded-md opacity-70 group-hover:h-[96%]
                        duration-300 z-20'>
                        </div>
                        <p>
                            <FontAwesomeIcon icon={faPlus} className='text-2xl text-firstColor p-2 px-[10px] z-30 bg-white
                            rounded-full opacity-100 absolute -bottom-full left-1/2 -translate-x-1/2 translate-y-1/2
                            group-hover:bottom-1/2 duration-500'/>
                        </p>
                        <span className='font-secondFont text-xl rounded-md w-[88%] text-center text-titleColor p-4 bg-bgColor
                        absolute -bottom-full left-1/2 -translate-x-1/2 z-40 duration-500 group-hover:bottom-6'>
                            Cappuccino Arabica
                        </span>
                    </div>
                    <div className='relative flex justify-center items-center overflow-hidden group'>
                        <img src={img5} alt="" className='w-full h-full rounded-md z-10'/>
                        <div className='w-[96%] h-[0%] absolute bg-firstColor rounded-md opacity-70 group-hover:h-[96%]
                        duration-300 z-20'>
                        </div>
                        <p>
                            <FontAwesomeIcon icon={faPlus} className='text-2xl text-firstColor p-2 px-[10px] z-30 bg-white
                            rounded-full opacity-100 absolute -bottom-full left-1/2 -translate-x-1/2 translate-y-1/2
                            group-hover:bottom-1/2 duration-500'/>
                        </p>
                        <span className='font-secondFont text-xl rounded-md w-[88%] text-center text-titleColor p-4 bg-bgColor
                        absolute -bottom-full left-1/2 -translate-x-1/2 z-40 duration-500 group-hover:bottom-6'>
                            Cappuccino Arabica
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
