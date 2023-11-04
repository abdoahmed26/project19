import React, { useState } from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    let [he,setHe] = useState("0px");
    let [back,backtHe] = useState("inherit");
    window.addEventListener("scroll",()=>{
        if(window.scrollY >= 50){
            backtHe("black");
        }
        else{
            backtHe("inherit");
        }
    })
    return (
        <div className='fixed w-full mb-5 z-50'>
            <nav className='py-2' style={{backgroundColor:`${back}`}}>
                <div className='container'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <img src={logo} alt="" className='w-[150px]'/>
                        </div>
                        <div className='text-titleColor text-2xl md:hidden'>
                            <Link onClick={()=> he==='200px'?setHe("0px"):setHe("200px")}>
                                <FontAwesomeIcon icon={faBarsStaggered} />
                            </Link>
                        </div>
                        <ul className='font-bodyFont text-titleColor list-none hidden md:flex gap-5'>
                            <a className='text-firstColor' href='#home'>Home</a>
                            <a className='hover:text-firstColor duration-300' href='#about' >About</a>
                            <a className='hover:text-firstColor duration-300' href='#feature'>Features</a>
                            <a className='hover:text-firstColor duration-300' href='#menu'>Menu</a>
                            <a className='hover:text-firstColor duration-300' href='#gallery'>Gallery</a>
                            <a className='hover:text-firstColor duration-300' href='#chefs'>Chefs</a>
                            <a className='hover:text-firstColor duration-300' href='#test'>Testimonials</a>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <div className='container md:hidden'>
                    <ul className="overflow-auto bg-titleColor duration-300 list
                    font-bodyFont text-titleColor list-none flex flex-col md:hidden gap-4" style={{height : `${he}`}}>
                        <a className='text-firstColor px-3 pt-2' href='#home'>Home</a>
                        <a className='hover:text-firstColor text-contColor duration-300 px-3' href='#about'>About</a>
                        <a className='hover:text-firstColor text-contColor duration-300 px-3' href='#feature'>Features</a>
                        <a className='hover:text-firstColor text-contColor duration-300 px-3' href='#menu'>Menu</a>
                        <a className='hover:text-firstColor text-contColor duration-300 px-3' href='#gallery'>Gallery</a>
                        <a className='hover:text-firstColor text-contColor duration-300 px-3' href='#chefs'>Chefs</a>
                        <a className='hover:text-firstColor text-contColor duration-300 px-3 pb-2' href='#test'>Testimonials</a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
