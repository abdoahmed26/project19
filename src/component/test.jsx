import React from 'react';
import img1 from './images/testimonial-1.jpg';
import img2 from './images/testimonial-2.jpg';
import img3 from './images/testimonial-3.jpg';
import img4 from './images/testimonial-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Test = () => {
    const options = {
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1024: {
                items: 3,
            }
        },
    };
    return (
        <div className='pt-20 pb-24 bg-contColor' id='test'>
            <div className="title font-secondFont text-center">
                <h2 className='text-firstColor text-3xl md:text-4xl'>Testimonials</h2>
                <h1 className='text-titleColor text-4xl md:text-5xl my-2'>What Client Say's</h1>
            </div>
            <div className="container mt-12">
                <OwlCarousel className='owl-theme' responsiveClass={true} responsive={options.responsive} autoplay 
                autoplayTimeout={3000} loop margin={20} nav>
                    <div>
                        <div className='relative font-bodyFont text-textColor bg-bgColor p-6 leading-relaxed rounded-md
                        after:w-0 after:h-0 after:border-[18px] after:border-transparent after:border-t-bgColor 
                        after:absolute after:-bottom-8 after:left-8 after:z-40'>
                            There are many variations passages of the available but the majority have suffered to the
                            alteration in some form by injected of humour or randomised words.
                        </div>
                        <div className='mt-6 ms-[10px] flex items-center gap-4'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img1} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div>
                                <h2 className='text-titleColor font-secondFont text-xl'>Reid E Butt</h2>
                                <p className='text-textColor font-bodyFont'>Customer</p>
                                <div>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='text-sm text-yellow-600'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='relative font-bodyFont text-textColor bg-bgColor p-6 leading-relaxed rounded-md
                        after:w-0 after:h-0 after:border-[18px] after:border-transparent after:border-t-bgColor 
                        after:absolute after:-bottom-8 after:left-8 after:z-40'>
                            There are many variations passages of the available but the majority have suffered to the
                            alteration in some form by injected of humour or randomised words.
                        </div>
                        <div className='mt-6 ms-[10px] flex items-center gap-4'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img2} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div>
                                <h2 className='text-titleColor font-secondFont text-xl'>Parker Jimenez</h2>
                                <p className='text-textColor font-bodyFont'>Customer</p>
                                <div>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='text-sm text-yellow-600'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='relative font-bodyFont text-textColor bg-bgColor p-6 leading-relaxed rounded-md
                        after:w-0 after:h-0 after:border-[18px] after:border-transparent after:border-t-bgColor 
                        after:absolute after:-bottom-8 after:left-8 after:z-40'>
                            There are many variations passages of the available but the majority have suffered to the
                            alteration in some form by injected of humour or randomised words.
                        </div>
                        <div className='mt-6 ms-[10px] flex items-center gap-4'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img3} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div>
                                <h2 className='text-titleColor font-secondFont text-xl'>Sylvia H Green</h2>
                                <p className='text-textColor font-bodyFont'>Customer</p>
                                <div>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='text-sm text-yellow-600'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='relative font-bodyFont text-textColor bg-bgColor p-6 leading-relaxed rounded-md
                        after:w-0 after:h-0 after:border-[18px] after:border-transparent after:border-t-bgColor 
                        after:absolute after:-bottom-8 after:left-8 after:z-40'>
                            There are many variations passages of the available but the majority have suffered to the
                            alteration in some form by injected of humour or randomised words.
                        </div>
                        <div className='mt-6 ms-[10px] flex items-center gap-4'>
                            <div className='p-1 border-dashed border-firstColor border-2 w-fit rounded-full'>
                                <img src={img4} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div>
                                <h2 className='text-titleColor font-secondFont text-xl'>Gordon D Novak</h2>
                                <p className='text-textColor font-bodyFont'>Customer</p>
                                <div>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='me-1 text-sm text-yellow-600'/>
                                    <FontAwesomeIcon icon={faStar} className='text-sm text-yellow-600'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Test;
