import React from 'react';
import img1 from './images/team-1.jpg';
import img2 from './images/team-2.jpg';
import img3 from './images/team-3.jpg';
import img4 from './images/team-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Book from './book';

const Chefs = () => {
    return (
        <div className='bg-bgColor pt-20 pb-24' id='chefs'>
            <div className="title font-secondFont text-center">
                <h2 className='text-firstColor text-3xl md:text-4xl'>Chefs</h2>
                <h1 className='text-titleColor text-4xl md:text-5xl my-2'>Meet Our Experts</h1>
            </div>
            <div className="container mt-12">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='bg-contColor p-2 overflow-hidden border-b-2 border-b-firstColor relative 
                    hover:-translate-y-2 duration-300 group'>
                        <div>
                            <img src={img1} alt="" className='w-full'/>
                        </div>
                        <div className='text-center p-3'>
                            <h2 className='text-titleColor font-secondFont text-2xl'>Malissa Fie</h2>
                            <p className='text-firstColor font-bodyFont mt-1'>Senior Chef</p>
                        </div>
                        <div className='absolute top-4 -right-full flex flex-col gap-2 group-hover:right-4 duration-500'>
                            <FontAwesomeIcon icon={faFacebookF} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faTwitter} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faLinkedinIn} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faYoutube} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                        </div>
                    </div>
                    <div className='bg-contColor p-2 overflow-hidden border-b-2 border-b-firstColor relative 
                    hover:-translate-y-2 duration-300 group'>
                        <div>
                            <img src={img2} alt="" className='w-full'/>
                        </div>
                        <div className='text-center p-3'>
                            <h2 className='text-titleColor font-secondFont text-2xl'>Chad Smith</h2>
                            <p className='text-firstColor font-bodyFont mt-1'>Senior Chef</p>
                        </div>
                        <div className='absolute top-4 -right-full flex flex-col gap-2 group-hover:right-4 duration-500'>
                            <FontAwesomeIcon icon={faFacebookF} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faTwitter} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faLinkedinIn} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faYoutube} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                        </div>
                    </div>
                    <div className='bg-contColor p-2 overflow-hidden border-b-2 border-b-firstColor relative 
                    hover:-translate-y-2 duration-300 group'>
                        <div>
                            <img src={img3} alt="" className='w-full'/>
                        </div>
                        <div className='text-center p-3'>
                            <h2 className='text-titleColor font-secondFont text-2xl'>Arron Rodri</h2>
                            <p className='text-firstColor font-bodyFont mt-1'>Senior Chef</p>
                        </div>
                        <div className='absolute top-4 -right-full flex flex-col gap-2 group-hover:right-4 duration-500'>
                            <FontAwesomeIcon icon={faFacebookF} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faTwitter} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faLinkedinIn} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faYoutube} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                        </div>
                    </div>
                    <div className='bg-contColor p-2 overflow-hidden border-b-2 border-b-firstColor relative 
                    hover:-translate-y-2 duration-300 group'>
                        <div>
                            <img src={img4} alt="" className='w-full'/>
                        </div>
                        <div className='text-center p-3'>
                            <h2 className='text-titleColor font-secondFont text-2xl'>Tony Pinto</h2>
                            <p className='text-firstColor font-bodyFont mt-1'>Senior Chef</p>
                        </div>
                        <div className='absolute top-4 -right-full flex flex-col gap-2 group-hover:right-4 duration-500'>
                            <FontAwesomeIcon icon={faFacebookF} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faTwitter} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faLinkedinIn} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                            <FontAwesomeIcon icon={faYoutube} 
                            className='p-3 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                            hover:bg-firstColor duration-300'/>
                        </div>
                    </div>
                </div>
                <Book/>
            </div>
        </div>
    );
}

export default Chefs;
