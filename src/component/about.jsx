import React from 'react';
import aboutImg from './images/about-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className='py-24 bg-bgColor' id='about'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='bg-firstColor flex items-start justify-end ps-5 mt-5'>
                        <img src={aboutImg} alt="" className='w-[100%] h-[100%] -translate-y-5'/>
                    </div>
                    <div>
                        <h2 className='text-firstColor font-secondFont text-2xl md:text-3xl'>About Us</h2>
                        <h1 className='text-4xl md:text-5xl font-secondFont text-titleColor my-4'>
                            Fresh Quality And Organic Tasty Coffee House For You
                        </h1>
                        <p className='font-bodyFont text-base md:text-lg mt-5 text-textColor'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have 
                            suffered alteration in some form, by injected humour, or randomised words which don't
                            look even slightly believable.
                        </p>
                        <ul className='text-textColor list-none font-bodyFont my-5'>
                            <li className='mb-2'>
                                <FontAwesomeIcon icon={faCheck} className='me-3'/>
                                At vero eos et accusamus et iusto odio
                            </li>
                            <li className='mb-2'>
                                <FontAwesomeIcon icon={faCheck} className='me-3'/>
                                Established fact that a reader will be distracted
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className='me-3'/>
                                Sed ut perspiciatis unde omnis iste natus sit
                            </li>
                        </ul>
                        <div className='mt-10'>
                            <a href='#chefs' className='p-3 px-4 bg-firstColor border border-firstColor text-titleColor
                                rounded-md hover:bg-inherit hover:text-firstColor duration-300 font-bodyFont'>
                                Our Experts
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;