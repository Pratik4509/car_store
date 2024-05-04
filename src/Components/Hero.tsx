import React from 'react'
import HeroImg from '../Assets/hero.jpg'
const Hero = () => {
    return (
        <div className="hero h-fit bg-[#fafafa]">
            <div className="flex mx-auto w-9/12">
                <div className="w-full font-semibold text-center flex flex-col justify-center">
                    <h4 className="text-6xl tracking-tight">Find the car you love</h4>
                    <p>Welcome to India's best online destination for buying cars</p>
                </div>
                <div className="hero-image w-full relative">
                    <img src={HeroImg} alt="" className='w-full h-[500px] object-cover' />
                </div>  
            </div>
            test
        </div>
    )
}

export default Hero