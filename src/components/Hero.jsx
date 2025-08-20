import React from 'react'
import perfil from '../assets/profile.webp'
import SocialPill from './SocialPill'
import Github from '../components/icons/Github'
import LinkedIn from './icons/Linkedin'
import Typed from 'typed.js'
import heroBg from '../assets/herobg.webp'

function Hero() {
    const typedElement = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ['Full Stack Developer', 'Creative Technologist', 'Applied AI Developer'],
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });

        return () => {
            typed.destroy();
        };

    })
    return (
        <header id='home' className='flex justify-center items-center max-w-screen h-screen  bg-cover w-full bg-no-repeat p-16' style={{ backgroundImage: `url(${heroBg})` }}>
            <section className='max-w-5xl h-[80%] flex flex-col justify-center bg-gray/10 px-16 rounded-3xl gap-4'>

                <div className='flex gap-4 mb-4'>
                    <div className="text-left text-lg-left justify-center flex flex-col gap-4">
                        <h1 className='text-3xl font-bold'>Hello there, I'm</h1>
                        <span className='font-extrabold text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-[#0BCEAF] to-purple-200 -mt-5'>Lautaro Orbes</span>
                        <div className='flex'>
                            <h2 className='typed-element font-bold text-4xl d-none text-transparent' style={{ WebkitTextStroke: '1px #fff' }} ref={typedElement} >
                            </h2>
                        </div>
                    </div>
                    <div className='flex justify-center min-w-fit'>
                        <img className='rounded-full shadow-lg size-80 hover:bg-cyan-300/10' src={perfil} alt="Foto de perfil" />
                    </div>
                </div>
                <div className='flex gap-4 justify-start'>

                    <SocialPill href="https://github.com/LauroMon">
                        <Github height={30} width={30} />
                    </SocialPill>
                    <SocialPill href="https://www.linkedin.com/in/lautaro-orbes/">
                        <LinkedIn height={30} width={30} />
                    </SocialPill>
                </div>
            </section>

        </header >
    )
}

export default Hero