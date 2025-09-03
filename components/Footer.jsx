import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-10 flex flex-col relative' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96 z-10 '>
                <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-70' />
        </div>
        <div className='flex flex-col items-center gap-3 z-20'>
            <h2 className='text-3xl text-center  font-bold lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h2>
            <p className='text-neutral-200 md:mt-10 mt-5 text-center'>
                Reach out to me and let&apos;s discuss how I can help you achieve your goals.
            </p>
            <a href="mailto:navneetbisht05@gmail.com">
                <MagicButton title={"let's get in touch"} icon={<FaLocationArrow/>} position="right"></MagicButton>
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between px-32 gap-6 items-center justify-self-end z-20'>
            <p className='sm:text-xs w-44 text-xs md:font-normal font-light'>Copyright &copy; 2025 Navneet</p>
            <div className='flex items-center md:gap-3 gap-6 py-2'>
                    {
                        socialMedia.map((profile)=>{
                            return(
                                <div key ={profile.id} className='w-9 h-9 cursor cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 opacity-75 bg-black-200 rounded-lg border border-black-200'>
                                    <img src={profile.img} alt={profile.img} width={20} height={20}/>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    </footer>
  )
}

export default Footer;