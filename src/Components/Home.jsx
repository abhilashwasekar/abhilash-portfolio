import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link, animateScroll as scroll } from "react-scroll";


const Home = () => {
    useEffect(() => {
        AOS.init()

    }, [])

    return (
        <div name="home" className='w-full h-screen bg-[#0a192f] font-sans'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#C23B22] font-bold font-sans sm:text-2xl' data-aos='fade-down' data-aos-duration="1000">Hi My name is</p>
                <h1 className='text-5xl sm:text-7xl font-bold text-[#e1e6f5]' data-aos='fade-right' data-aos-duration="2000">Abhilash Wasekar</h1>
                <h2 className='text-5xl sm:text-7xl font-bold text-[#8892b0]' data-aos='fade-up' data-aos-duration='2500'>I am a MERN Stack Developer,</h2>
                <p className='py-5 max-w-[700px] text-[#8892b0] font-sans'>
                    I am a dedicated and skilled MERN Stack Developer with a specialization in HTML, React, Tailwindcss, CSS, JavaScript, Node.js, and TypeScript.
                    With a keen eye for design and a passion for creating seamless user experiences,
                    I am focused in building mobile responsive web applications.
                </p>
                <div>
                    <Link activeClass='active' to='work' smooth={true} duration={1000}>

                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] duration-300 font-sans'>View My Work

                            <span className='group-hover:ml-6 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />

                            </span>

                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Home
