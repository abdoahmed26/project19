import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img1 from './images/shape-2.png';
import img2 from './images/shape-3.png';

const Book = () => {
    return (
        <div className='py-12 bg-contColor mt-24 rounded-md relative' id='reser'>
            <div className="title font-secondFont text-center">
                <h2 className='text-firstColor text-2xl md:text-3xl relative z-40'>Reservation</h2>
                <h1 className='text-titleColor text-3xl md:text-4xl my-2 relative z-40'>Book A Table</h1>
            </div>
            <div className='container mt-10'>
                <form action="">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
                        <input type="text" name="name" placeholder='Your Name' 
                        className='bg-bgColor p-3 outline-none rounded-md border border-[gray] caret-firstColor
                        placeholder:text-[grey] text-titleColor z-40'/>
                        <input type="email" name="email" placeholder='Email Address' 
                        className='bg-bgColor p-3 outline-none rounded-md border border-[gray] caret-firstColor
                        placeholder:text-[gray] text-titleColor z-40'/>
                        <input type="text" name='phone' placeholder='Your Phone' 
                        className='bg-bgColor p-3 outline-none rounded-md border border-[gray] caret-firstColor
                        placeholder:text-[gray] text-titleColor z-40'/>
                        <input type="text" name="date" placeholder='Date Ex: DD/MM/YY' 
                        className='bg-bgColor p-3 outline-none rounded-md border border-[gray] caret-firstColor
                        placeholder:text-[grey] text-titleColor'/>
                        <input type="text" name="time" placeholder='Time Ex: 01:25PM'
                        className='bg-bgColor p-3 outline-none rounded-md border border-[gray] caret-firstColor
                        placeholder:text-[gray] text-titleColor'/>
                        <input type="text" name='people' placeholder='Number Of People' 
                        className='bg-bgColor p-3 outline-none rounded-md border border-[gray] caret-firstColor
                        placeholder:text-[gray] text-titleColor'/>
                    </div>
                    <div className='mb-5 z-40'>
                        <textarea name="message" placeholder='Your Message' 
                        className='bg-bgColor p-3 outline-none rounded-md border border-[gray] caret-firstColor
                        placeholder:text-[gray] text-titleColor w-full h-32 resize-none relative z-40'>
                        </textarea>
                    </div>
                    <div className='text-center'>
                        <button type="submit" 
                        className='p-2 px-4 font-bodyFont text-titleColor bg-firstColor border border-firstColor rounded-md 
                        hover:bg-inherit hover:text-firstColor duration-300 relative z-40'>
                            <FontAwesomeIcon icon={faBookmark}/> Book A Table
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <img src={img1} alt="" className='w-40 h-40 absolute top-12 right-0 lg:right-5 z-10'/>
                <img src={img2} alt="" className='w-40 h-40 absolute bottom-2 left-0 lg:left-5 z-10'/>
            </div>
        </div>
    );
}

export default Book;
