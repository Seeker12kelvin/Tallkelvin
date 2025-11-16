import React from 'react'
import './home.module.css'
import Header from "./header"
import img from "../../assets/WhatsApp Image 2025-11-16 at 01.18.28.jpeg"
import bgPic from "../../assets/32993994_840843081452.jpg"

import { FaFacebook } from 'react-icons/fa6'
import { FaLinkedinIn, FaPinterest, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

import { DiPhotoshop } from "react-icons/di"
import { DiIllustrator } from "react-icons/di"
import { FaFigma } from "react-icons/fa"
import { TbBrandAdobeXd } from "react-icons/tb";

import { MdGames } from "react-icons/md"
import { MdOutlineLocalMovies } from "react-icons/md"
import { FaPersonSwimming } from "react-icons/fa6"
import { SiAntdesign } from "react-icons/si"
import { CiBasketball } from "react-icons/ci"


const Home = () => {

  const [entering, setEntering] = React.useState('animate-bounce')
  const [enteringO, setEnteringO] = React.useState('animate-bounce')
  const [enteringT, setEnteringT] = React.useState('animate-bounce')
  const [enteringTH, setEnteringTH] = React.useState('animate-bounce')
  const [enteringF, setEnteringF] = React.useState('animate-bounce')
  const [enteringFI, setEnteringFI] = React.useState('animate-bounce')
  
  return (
    <div style={{backgroundImage: `url(${bgPic})`}} className='flex flex-col bg-cover bg-no-repeat h-screen w-screen'>

      <Header />

      <main className='h-screen w-screen'>

        <section id='home' className='h-full w-full flex flex-col relative pl-30 items-start place-content-center text-white'>
          <div className='flex flex-col justify-self-center gap-10'>
            <div>
              <h1 className='text-6xl'>MADUEKE <br /> <span className='font-bold text-9xl'>KELVIN</span></h1>
              <p className='text-xl w-full tracking-[3px]'>UI/UX and Graphic Designer</p>
            </div>
            <div className='flex gap-5.5'>
              <button className='border-2 border-[cyan] text-2xl rounded-2xl pl-13 cursor-pointer p-2 pr-13'>Resume</button>
              <button className='border-2 border-[cyan] text-2xl rounded-2xl pl-13 cursor-pointer p-2 pr-13 '>Portfolio</button>
            </div>
          </div>
        </section>

        <section id='about' className='h-screen w-screen flex justify-between place-content-center items-center bg-black relative text-white overflow-hidden'>

          <div className='w-full h-full flex -gap-4 z-3'>
            <div className='bg-[#00ffff60] h-full w-2xs'></div>
            <div className='bg-[#00ffff3c] h-full w-2xs'></div>
            <div className='bg-[#00ffff21] h-full w-2xs'></div>
          </div>

          <div className='flex flex-col gap-20 left-30 w-[50%] z-4 absolute'>
            <div className='flex flex-col items-center gap-4'>
              <h1 className='border-b-4 border-b-[cyan] pb-2 w-fit text-5xl'>ABOUT</h1>
              <h2 className='text-xl border-b-[cyan] border-b-2'> <a href='mailto:Maduekeugonna2@gmail.com' className='text-white'>Maduekeugonna2@gmail.com</a></h2>
            </div>

            <div className='w-full'>
              <p className='text-[17px] w-full font-normal text-center'>I’m a UI/UX and graphic designer with a little over a year of experience in app and web design, as well as illustrations.
                 I love creating clean, user-friendly designs that make digital experiences feel effortless. I’m adaptable and empathetic, which helps me understand users’ 
                 needs and design meaningful solutions. Alongside UI/UX, I also enjoy graphic design and illustration, bringing creativity and personality into every project I work on.
              </p>
            </div>

            <div className='flex flex-col items-center text-[17px]'>
              <p>Lagos, Nigeria</p>
              <div className='w-fit flex items-center gap-2'>
                <div className='h-0.5 w-10 border border-[lightblue] '></div>
                  <p className='flex'>15 Ikpoh, Street off olatilewa Surulere, Lagos</p>
                <div className='h-0.5 w-10 border border-[lightblue] '></div>
              </div>
            </div>
          </div>

          <img src={img} className='scale-[0.8] -ml-[86.2px]' />

        </section>

        <section id='resume' className='h-screen w-screen bg-[#00ffff10] flex justify-between gap text-white pt-23 p-30'>
          <div>
            <div className='mb-20'>
              <h2 className='font-bold tracking-[3px] border-b-3 border-[cyan] pb-2 mb-5 w-fit text-2xl'>SOFTWARE SKILLS</h2>

              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-10'>
                  <DiPhotoshop  className='text-4xl'/>
                  <p>Photoshop</p>
                  <div className='relative'>
                    <div className='w-40 h-px border'></div>
                    <div className='p-[3px] rounded-[50%] -top-1.5 left-36 border absolute z-2'>
                      <div className='w-1.5 h-1.5 bg-white rounded-[50%]'></div>
                    </div>
                  </div>
                  
                </div>
                <div className='flex items-center gap-10'>
                  <DiIllustrator  className='text-4xl'/>
                  <p>Illustrator</p>
                  <div className='relative'>
                    <div className='w-40 h-px border'></div>
                    <div className='p-[3px] rounded-[50%] -top-1.5 left-40 border absolute z-2'>
                      <div className='w-1.5 h-1.5 bg-white rounded-[50%]'></div>
                    </div>
                  </div>

                </div>
                <div className='flex items-center gap-10'>
                  <TbBrandAdobeXd  className='text-4xl'/>
                  <p>Adobe XD</p>
                  <div className='relative'>
                    <div className='w-40 h-px border'></div>
                    <div className='p-[3px] rounded-[50%] -top-1.5 left-34 border absolute z-2'>
                      <div className='w-1.5 h-1.5 bg-white rounded-[50%]'></div>
                    </div>
                  </div>
              
                </div>
                <div className='flex items-center gap-10'>
                  <FaFigma className='text-4xl' />
                  <p>Figma</p>
                  <div className='relative'>
                    <div className='w-40 h-px border'></div>
                    <div className='p-[3px] rounded-[50%] -top-1.5 left-35 border absolute z-2'>
                      <div className='w-1.5 h-1.5 bg-white rounded-[50%]'></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className='mb-20'>
              <h2 className='font-bold tracking-[3px] border-b-3 border-[cyan] pb-2 mb-5 w-fit text-2xl'>LANGUAGES</h2>
              
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-30'>
                  <p>English</p>
                  <div className='relative'>
                    <div className='w-40 h-px border'></div>
                    <div className='p-[3px] rounded-[50%] -top-1.5 left-40 border absolute z-2'>
                      <div className='w-1.5 h-1.5 bg-white rounded-[50%]'></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            <div className='flex flex-col gap-5'>
              <h2 className='font-bold tracking-[3px] border-b-3 border-[cyan] pb-2 w-fit text-2xl'>PERSONAL SKILLS</h2>
              <ul className='flex gap-5 list-disc'>
                <li className='list-none'>Creativity</li> 
                <li>Team Work</li> 
                <li>Organization</li>
              </ul>
            </div>
          </div>


          <div className='flex flex-col gap-20 -mr-20'>
            <div>
              <h2 className='font-bold tracking-[3px] border-b-3 border-[cyan] pb-2 mb-5 w-fit text-2xl'>EDUCATION</h2>
              <h3 className='text-xl'>Bs in Software Engineering,</h3>
              <p className='opacity-70'>Lead City university</p>
            </div>

            <div className='flex flex-col w-[300px] gap-5'>
              <h2 className='font-bold border-b-3 border-[cyan] pb-2 w-fit text-2xl'>WHAT CAN I DO?</h2>
              <ul className='flex flex-wrap gap-5 list-disc leading-none'>
                <li className='list-none'>Logo Design</li> 
                <li>App Design</li> 
                <li className='list-none'>Website Design</li>
                <li>Illustrations</li>
                <li className='list-none'>Editing Photos</li>
              </ul>
            </div>
          </div>


          <div className='flex flex-col gap-20'>
            <div className='flex flex-col gap-5 w-[350px]'>
              <h2 className='font-bold tracking-[3px] border-b-3 border-[cyan] pb-2 w-fit text-2xl'>HOBBIES & INTERESTS</h2>
              <div className='flex flex-wrap'>
                <div className='h-[100px] w-[100px] flex flex-col items-center'>
                  <MdGames className='text-5xl border-2 rounded-2xl p-1'/>
                  <p>Games</p>
                </div>
                <div className='h-[100px] w-[100px] flex flex-col items-center'>
                  <MdOutlineLocalMovies className='text-5xl border-2 rounded-2xl p-1'/>
                  <p>Movies</p>
                </div>
                <div className='h-[100px] w-[100px] flex flex-col items-center'>
                  <FaPersonSwimming className='text-5xl border-2 rounded-2xl p-1'/>
                  <p>Swimming</p>
                </div>
                <div className='h-[100px] w-[100px] flex flex-col items-center'>
                  <SiAntdesign className='text-5xl border-2 rounded-2xl p-1'/>
                  <p>Designing</p>
                </div>
                <div className='h-[100px] w-[100px] flex flex-col items-center'>
                  <CiBasketball className='text-5xl border-2 rounded-2xl p-1'/>
                  <p>Basketball</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col w-[300px] gap-5'>
              <h2 className='font-bold border-b-3 border-[cyan] pb-2 w-fit text-2xl'>DESIGN SKILLS</h2>
              <ul className='flex flex-wrap gap-5 list-disc leading-none'>
                <li className='list-none'>Creativity</li> 
                <li>Planning & Strategy</li> 
                <li className='list-none'>Signs & Typography</li>
                <li>Layout</li>
                <li>Grid</li>
                <li className='list-none'>Color sense</li>
                <li>Inspiration</li>
              </ul>
            </div>
          </div>

        </section>

        <section id='contact' className='flex justify-between text-white p-30'>
          <div className='flex flex-col gap-10 w-[700px]'>
            <h1 className='text-6xl pb-2 border-[cyan] border-b-4 w-fit'>Get in touch</h1>
            <p className='text-[17px] leading-8 tracking-widest'>
              Are you looking for a fast-performing and user-friendly website/app to
              represent your product or business? or looking for any kind of
              consultation? or want to ask questions? or have some advice for me
              or just want to say "Hi 👋" in any case feel free to Let me know. I
              will do my best to respond back. 😊 The quickest way to reach out to
              me is via an email.
            </p>
            <button className='text-xl w-fit border-[cyan] border-2 rounded-2xl p-4'><a href='mailto:Maduekeugonna2@gmail.com'>Maduekeugonna2@gmail.com</a></button>
          </div>
          
          <div className=' w-[430px] flex flex-wrap gap-5 text-9xl'>
            <a target='_blank' href='https://www.facebook.com/share/17FLqcPnXp/'><FaFacebook onMouseEnter={() => setEntering('')} onMouseLeave={() => setEntering('animate-bounce')} className={`cursor-pointer ${entering}`} /></a>
            <a target='_blank' href=''><FaLinkedinIn onMouseEnter={() => setEnteringO('')} onMouseLeave={() => setEnteringO('animate-bounce')} className={`cursor-pointer ${enteringO}`} /></a>
            <a target='_blank' href='https://www.instagram.com/kelvin16_kd?igsh=MWVpOHp6aDI0ZHdhcQ=='><FaInstagram onMouseEnter={() => setEnteringT('')} onMouseLeave={() => setEnteringT('animate-bounce')} className={`cursor-pointer ${enteringT}`} /></a>
            <a target='_blank' href='https://pin.it/72NRA1osy'><FaPinterest onMouseEnter={() => setEnteringTH('')} onMouseLeave={() => setEnteringTH('animate-bounce')} className={`cursor-pointer ${enteringTH}`} /></a>
            <a target='_blank' href='https://x.com/Kelvin_Madueke?t=zmhMp6hmRNbUslcm-DP4sg&s=08'><FaTwitter onMouseEnter={() => setEnteringF('')} onMouseLeave={() => setEnteringF('animate-bounce')} className={`cursor-pointer ${enteringF}`} /></a>
            <a target='_blank' href='https://wa.me/qr/2SUU4Z4JR4FWB1'><FaWhatsapp onMouseEnter={() => setEnteringFI('')} onMouseLeave={() => setEnteringFI('animate-bounce')} className={`cursor-pointer ${enteringFI}`} /></a>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Home