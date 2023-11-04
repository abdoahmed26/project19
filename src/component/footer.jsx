import React from 'react';
import logo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='pt-20 bg-bgColor'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-6">
                    <div>
                        <div>
                            <img src={logo} alt="" className='w-[150px]'/>
                        </div>
                        <p className='font-bodyFont mt-5 text-textColor'>
                            We are many variations of passages of available but the majority have 
                            suffered alteration in some form by injected humour words which don't
                            look even slightly believable.
                        </p>
                        <div className='mt-5'>
                            <div className='font-bodyFont text-textColor flex gap-3 items-center'>
                                <FontAwesomeIcon icon={faPhoneFlip} className='text-firstColor'/>
                                +2 123 654 7898
                            </div>
                            <div className='font-bodyFont text-textColor flex gap-3 items-center mt-4'>
                                <FontAwesomeIcon icon={faLocationDot} className='text-firstColor'/>
                                25/B Milford Road, New York
                            </div>
                            <div className='font-bodyFont text-textColor flex gap-3 items-center mt-4'>
                                <FontAwesomeIcon icon={faEnvelope} className='text-firstColor'/>
                                info@example.com
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-titleColor font-secondFont text-2xl pb-3 w-fit lg:mx-auto
                        border-b-2 border-b-firstColor border-dashed'>
                            Quick Links
                        </h2>
                        <ul className='text-titleColor font-bodyFont mt-6 flex flex-col gap-5 lg:mx-auto w-fit'>
                            <a href="#about" 
                            className='ps-4 relative after:w-0 after:h-0 after:border-[5px] after:border-transparent 
                            after:border-l-firstColor after:absolute after:top-1/2 after:left-0 after:z-40 
                            after:-translate-y-1/2 hover:text-firstColor duration-300'>
                                About Us
                            </a>
                            <a href="#menu" 
                            className='ps-4 relative after:w-0 after:h-0 after:border-[5px] after:border-transparent 
                            after:border-l-firstColor after:absolute after:top-1/2 after:left-0 after:z-40 
                            after:-translate-y-1/2 hover:text-firstColor duration-300'>
                                Menu
                            </a>
                            <a href="#feature" 
                            className='ps-4 relative after:w-0 after:h-0 after:border-[5px] after:border-transparent 
                            after:border-l-firstColor after:absolute after:top-1/2 after:left-0 after:z-40 
                            after:-translate-y-1/2 hover:text-firstColor duration-300'>
                                Features
                            </a>
                            <a href="#gallery" 
                            className='ps-4 relative after:w-0 after:h-0 after:border-[5px] after:border-transparent 
                            after:border-l-firstColor after:absolute after:top-1/2 after:left-0 after:z-40 
                            after:-translate-y-1/2 hover:text-firstColor duration-300'>
                                Gallery
                            </a>
                            <a href="#chefs" 
                            className='ps-4 relative after:w-0 after:h-0 after:border-[5px] after:border-transparent 
                            after:border-l-firstColor after:absolute after:top-1/2 after:left-0 after:z-40 
                            after:-translate-y-1/2 hover:text-firstColor duration-300'>
                                Team
                            </a>
                            <a href="#reser" 
                            className='ps-4 relative after:w-0 after:h-0 after:border-[5px] after:border-transparent 
                            after:border-l-firstColor after:absolute after:top-1/2 after:left-0 after:z-40 
                            after:-translate-y-1/2 hover:text-firstColor duration-300'>
                                Resevation
                            </a>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-titleColor font-secondFont text-2xl pb-3 w-fit
                        border-b-2 border-b-firstColor border-dashed'>
                            Opening Hours
                        </h2>
                        <div className='bg-contColor p-2 mt-6 rounded'>
                            <div className='p-3 py-4 border-2 border-dashed border-firstColor rounded text-textColor font-bodyFont'>
                                <div className='flex justify-between mb-4'>
                                    <p>Saturday:</p>
                                    <p>09AM - 06PM</p>
                                </div>
                                <div className='flex justify-between mb-4'>
                                    <p>Monday:</p>
                                    <p>09AM - 06PM</p>
                                </div>
                                <div className='flex justify-between mb-4'>
                                    <p>Tuesday:</p>
                                    <p>09AM - 06PM</p>
                                </div>
                                <div className='flex justify-between mb-4'>
                                    <p>Wednesday:</p>
                                    <p>09AM - 06PM</p>
                                </div>
                                <div className='flex justify-between mb-4'>
                                    <p>Thursday:</p>
                                    <p>09AM - 06PM</p>
                                </div>
                                <div className='flex justify-between mb-4'>
                                    <p>Friday:</p>
                                    <p>09AM - 06PM</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Sunday:</p>
                                    <p>Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-titleColor font-secondFont text-2xl pb-3 w-fit
                        border-b-2 border-b-firstColor border-dashed'>
                            Newsletter
                        </h2>
                        <p className='text-textColor font-bodyFont my-5'>
                            Subscribe Our Newsletter To Get Latest Update And News.
                        </p>
                        <form action="" className='mb-6'>
                            <input type="email" name="email" placeholder='Your Email' 
                            className='bg-bgColor p-3 outline-none rounded-md border border-[gray] caret-firstColor
                            placeholder:text-[gray] placeholder:font-bodyFont text-titleColor z-40 w-full mb-4'/>
                            <button type="submit" 
                            className='p-2 px-4 font-bodyFont text-titleColor bg-firstColor border border-firstColor rounded-md 
                            hover:bg-inherit hover:text-firstColor duration-300 relative z-40 w-full'>
                            <FontAwesomeIcon icon={faEnvelope}/> Subscribe Now
                        </button>
                        </form>
                        <div>
                            <h2 className='text-titleColor font-secondFont'>
                                Follow Us:
                            </h2>
                            <div className='flex gap-2 mt-3'>
                                <Link to={"https://www.facebook.com/profile.php?id=100029822832042&mibextid=ZbWKwL"} 
                                target='_blank'>
                                    <FontAwesomeIcon icon={faFacebookF} 
                                    className='p-2 px-[11px] bg-contColor text-titleColor rounded-full cursor-pointer
                                    hover:bg-firstColor duration-300 border-2 border-firstColor'/>
                                </Link>
                                <Link to={"https://instagram.com/abdo26.6?igshid=ZDc4ODBmNjlmNQ=="} target='_blank'>
                                    <FontAwesomeIcon icon={faTwitter} 
                                    className='p-2 px-[8px] bg-contColor text-titleColor rounded-full cursor-pointer
                                    hover:bg-firstColor duration-300 border-2 border-firstColor'/>
                                </Link>
                                <Link to={"http://www.linkedin.com/in/abdo-ahmed-67185a28a"} target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedinIn} 
                                    className='p-2 px-[9px] bg-contColor text-titleColor rounded-full cursor-pointer
                                    hover:bg-firstColor duration-300 border-2 border-firstColor'/>
                                </Link>
                                <Link to={"https://wa.me/+201207583096"} target='_blank'>
                                    <FontAwesomeIcon icon={faYoutube} 
                                    className='p-2 px-[7px] bg-contColor text-titleColor rounded-full cursor-pointer
                                    hover:bg-firstColor duration-300 border-2 border-firstColor'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-contColor py-5 mt-16 border-t-2 border-dashed border-t-firstColor'>
                <p className='text-center text-titleColor font-bodyFont'>
                    &copy; Copyright 2023 <span className='text-firstColor'>Abdo</span> All Rights Reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;