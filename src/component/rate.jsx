import img1 from './images/coffee-shop.svg';
import img2 from './images/coffee-cup.svg';
import img3 from './images/chef.svg';
// import { useState } from 'react';

const Rate = () => {
    let inter,countCom,countPos,countAch;
    window.addEventListener("scroll",()=>{
        let rate = document.querySelector('.rate');
        if(window.scrollY >= rate.offsetTop-400){
            inter = setInterval(icrease,100);
            countCom = setInterval(incCom,200);
            countPos = setInterval(incPos,300);
            countAch = setInterval(incAch,400);
        }
    });
    function icrease(){
        let total = document.querySelector('.total');
        if(total.innerHTML === "1500"){
            clearInterval(inter);
        }
        else{
            total.innerHTML++;
        }
    }
    function incCom(){
        let cust = document.querySelector('.cust');
        if(cust.innerHTML === "250"){
            clearInterval(countCom);
        }
        else{
            cust.innerHTML++;
        }
    }
    function incPos(){
        let chef = document.querySelector('.chef');
        if(chef.innerHTML === "120"){
            clearInterval(countPos);
        }
        else{
            chef.innerHTML++;
        }
    }
    function incAch(){
        let year = document.querySelector('.year');
        if(year.innerHTML === "50"){
            clearInterval(countAch);
        }
        else{
            year.innerHTML++;
        }
    }
    return (
        <div className='pb-24 pt-20 bg-contColor rate'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-4">
                    <div className='text-center'>
                        <div className='flex justify-center mb-8'>
                            <div className='rounded-full w-[70px] h-[70px] flex justify-center items-center' 
                            style={{backgroundColor:"#372d2a"}}>
                                <img src={img1} alt="" className='w-10 h-10'/>
                            </div>
                        </div>
                        <h2 className='text-titleColor font-bodyFont text-4xl font-bold mb-5'>
                            <span className='total'>0</span>
                        </h2>
                        <p className='text-firstColor font-secondFont'>+ Total Branches</p>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center mb-8'>
                            <div className='rounded-full w-[70px] h-[70px] flex justify-center items-center' 
                            style={{backgroundColor:"#372d2a"}}>
                                <img src={img2} alt="" className='w-10 h-10'/>
                            </div>
                        </div>
                        <h2 className='text-titleColor font-bodyFont text-4xl font-bold mb-5'>
                            <span className='cust'>0</span>
                        </h2>
                        <p className='text-firstColor font-secondFont'>+ Happy Customers</p>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center mb-8'>
                            <div className='rounded-full w-[70px] h-[70px] flex justify-center items-center' 
                            style={{backgroundColor:"#372d2a"}}>
                                <img src={img3} alt="" className='w-10 h-10'/>
                            </div>
                        </div>
                        <h2 className='text-titleColor font-bodyFont text-4xl font-bold mb-5'>
                            <span className='chef'>0</span>
                        </h2>
                        <p className='text-firstColor font-secondFont'>+ Professional Chefs</p>
                    </div>
                    <div className='text-center'>
                        <div className='flex justify-center mb-8'>
                            <div className='rounded-full w-[70px] h-[70px] flex justify-center items-center' 
                            style={{backgroundColor:"#372d2a"}}>
                                <img src={img3} alt="" className='w-10 h-10'/>
                            </div>
                        </div>
                        <h2 className='text-titleColor font-bodyFont text-4xl font-bold mb-5'>
                            <span className='year'>0</span>
                        </h2>
                        <p className='text-firstColor font-secondFont'>+ Years Of Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rate;
