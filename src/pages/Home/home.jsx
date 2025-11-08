import React from 'react'
import './home.module.css'
import Header from "./header"
import { DiPhotoshop } from "react-icons/di"
import { DiIllustrator } from "react-icons/di"
import { TbBrandAdobeIndesign } from "react-icons/tb"
import { TbBrandAdobePremier } from "react-icons/tb"

import { MdGames } from "react-icons/md"
import { MdOutlineLocalMovies } from "react-icons/md"
import { FaPersonSwimming } from "react-icons/fa6"
import { SiAntdesign } from "react-icons/si"
import { CiBasketball } from "react-icons/ci"


const Home = () => {
  return (
    <div className='bg-[url(32993994_840843081452.jpg)] flex flex-col bg-cover bg-no-repeat h-screen w-screen'>
      <Header />

      <main>

        <section id='home' className='h-screen w-screen flex pl-30 justify-start place-content-center items-center text-white'>
          <div className='flex flex-col gap-10'>
            <div>
              <h1 className='text-6xl'>MADUEKE <br /> <span className='font-bold text-9xl'>KELVIN</span></h1>
              <p className='text-2xl w-full tracking-[3px]'>UI/UX and Graphic Designer</p>
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

          <div className='flex flex-col gap-20 left-30 w-96 z-4 absolute'>
            <div className='flex flex-col items-center gap-4'>
              <h1 className='border-b-4 border-b-[cyan] pb-2 w-fit text-5xl'>ABOUT</h1>
              <h2 className='text-xl border-b-[cyan] border-b-2'> <a href='mailto:Maduekeugonna2@gmail.com' className='text-white'>Maduekeugonna2@gmail.com</a></h2>
            </div>

            <div>
              <p className='text-[17px] font-normal text-center'>I’m a UI/UX and graphic designer with a little over a year of experience in app and web design, as well as illustrations.
                 I love creating clean, user-friendly designs that make digital experiences feel effortless. I’m adaptable and empathetic, which helps me understand users’ 
                 needs and design meaningful solutions. Alongside UI/UX, I also enjoy graphic design and illustration, bringing creativity and personality into every project I work on.
              </p>
            </div>

            <div className='flex flex-col items-center text-[17px]'>
              <p>Lagos, Nigeria</p>
              <div className='w-fit flex items-center gap-2'>
                <div className='h-0.5 w-10 border border-[lightblue] '></div>
                  <p className='flex'>Surule Somethinggg</p>
                <div className='h-0.5 w-10 border border-[lightblue] '></div>
              </div>
            </div>
          </div>

        </section>

        <section id='resume' className='h-screen w-screen bg-[#00ffff10] flex justify-between text-white p-10'>
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
                  <TbBrandAdobeIndesign  className='text-4xl'/>
                  <p>Indesign</p>
                  <div className='relative'>
                    <div className='w-40 h-px border'></div>
                    <div className='p-[3px] rounded-[50%] -top-1.5 left-34 border absolute z-2'>
                      <div className='w-1.5 h-1.5 bg-white rounded-[50%]'></div>
                    </div>
                  </div>
              
                </div>
                <div className='flex items-center gap-10'>
                  <TbBrandAdobePremier className='text-4xl' />
                  <p>Premier</p>
                  <div className='relative'>
                    <div className='w-40 h-px border'></div>
                    <div className='p-[3px] rounded-[50%] -top-1.5 left-25 border absolute z-2'>
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

                <div className='flex items-center gap-30'>
                  <p>Arabic</p>
                  <div className='relative'>
                    <div className='w-40 h-px border'></div>
                    <div className='p-[3px] rounded-[50%] -top-1.5 left-34 border absolute z-2'>
                      <div className='w-1.5 h-1.5 bg-white rounded-[50%]'></div>
                    </div>
                  </div>

                </div>


                <div className='flex items-center gap-30'>

                    <p>Turkish</p>
                    <div className='relative'>
                      <div className='w-40 h-px border'></div>
                      <div className='p-[3px] rounded-[50%] -top-1.5 left-25 border absolute z-2'>
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


          <div className='flex flex-col gap-20'>
            <div>
              <h2 className='font-bold tracking-[3px] border-b-3 border-[cyan] pb-2 mb-5 w-fit text-2xl'>EDUCATION</h2>
              <h3 className='text-xl'>Bs/Computer Science,</h3>
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

      </main>
    </div>
  )
}

export default Home