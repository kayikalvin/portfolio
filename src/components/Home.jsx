import React from 'react'
import HeroImg from "../assets/heroImage.jpg";
import { GoArrowUpRight } from "react-icons/go";


const Home = () => {
  return (
    <div name ='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-cyan-700 pt-50 md:pt-20'>
        <div className='max-w-screen-lg mx-auto flex gap-40 flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center w-fullh-full'>
                <h2 className='text-4xl sm:text-6xl font-bold text-white'>I'm a Data Analyst</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have experience in building designing software.
                    Curently, Ilove to work on web application using technologies like
                    React,Tailwind,Next js and GrapgQL.
                    I have experience in building designing software.
                    Curently, Ilove to work on web application using technologies like
                    React,Tailwind,Next js and GrapgQL.
                    I have experience in building designing software.
                    Curently, Ilove to work on web application using technologies like
                    React,Tailwind,Next js and GrapgQL.
                    I have experience in building designing software.
                    Curently, Ilove to work on web application using technologies like
                    React,Tailwind,Next js and GrapgQL.
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio 
                        <span className='group-hover:rotate-90 duration-200'>
                            <GoArrowUpRight size={10} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
            <img src={HeroImg} alt="my-profile"
            className='rounded-3xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
        
        
    </div>
  )
}

export default Home