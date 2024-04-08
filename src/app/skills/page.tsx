

'use client'

import { useState } from 'react'


function Skills() {

    const [Education, setEducation] = useState(false)
    const [Experience, setExperience] = useState(true)


    function switchcontext() {
        setEducation(!Education)
        setExperience(!Experience)
    }


    return (
        <div className="h-screen max-w-3xl gap-4 mx-4 md:mx-auto lg:mx-auto flex flex-row items-center">


            {/* col 1 */}
            <div className="flex h-[75%] flex-col gap-4 justify-center w-[50%]" >

                {/* card 1 */}
                <div className="h-[100%] w-full rounded-[15px] bg-white dark:bg-[#1C1D1F] p-3 md:p-5 border border-[#EDEDED] dark:border-0 " >

                    <div className="flex flex-col w-full h-full  items-center">


                        <div className="text-center w-full mt-5 " >

                            <h1 className="font-bold text-xs sm:text-base md:text-base lg:text-2xl" >Qualification</h1>
                            <p className="text-xs sm:text-sm md:text-sm text-[#868686]" >My personel journey</p>

                        </div>

                        {/* selection */}
                        <div className="w-full flex flex-row justify-around my-5  md:mt-10   " >

                            <a onClick={() => switchcontext()} > <p className={`text-[10px] md:text-lg font-bold cursor-pointer ${Education ? '' : 'text-[#888888]'}`} ><i className='bx bxs-graduation'></i>&nbsp;Education</p> </a>
                            |
                            <a onClick={() => switchcontext()} > <p className={`text-[10px] md:text-lg font-bold cursor-pointer ${Experience ? '' : 'text-[#888888]'}`} ><i className='bx bx-briefcase-alt-2' ></i>&nbsp;Experience</p> </a>

                        </div>



                        {Education &&
                            <>
                                {/* desktop  */}
                                <div className="h-full w-full  md:mt-5 py-2 md:pt-5 hidden md:block " >

                                    {/* Baccalaureate */}
                                    <div className="relative flex flex-row w-full h-1/3 px-5 " >

                                        <div className="absolute transform -translate-x-1/2 left-1/2  h-[20px] w-[20px] rounded-full bg-[#868686] "></div>

                                        <div className=" w-1/2 h-full border-r-[0.5px] border-[#B8B8B8]" >

                                            <div>
                                                <h1 className="text-sm font-semibold " >Baccalaureate</h1>
                                                <p className="text-xs text-[#808080] dark:text-[#D7D7D7]  " >El Hajeb - Morocco</p>
                                                <small className=" text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2008 - 2009</small>
                                            </div>


                                        </div>

                                        <div className=" w-1/2 h-full  border-l-[0.5px] border-[#B8B8B8] flex justify-end " >

                                        </div>

                                    </div>

                                    {/* IT Diploma */}
                                    <div className="relative flex flex-row w-full h-1/3 px-5 " >

                                        <div className="absolute transform -translate-x-1/2 left-1/2  h-[20px] w-[20px] rounded-full bg-[#868686] "></div>

                                        <div className=" w-1/2 h-full   border-r-[0.5px] border-[#B8B8B8] " >

                                        </div>

                                        <div className=" w-1/2 h-full  border-l-[0.5px] border-[#B8B8B8] flex justify-end " >

                                            <div className="text-left" >
                                                <h1 className="text-sm font-semibold " >IT Diploma</h1>
                                                <p className="text-xs text-[#808080] dark:text-[#D7D7D7]  " >Meknes - Morocco</p>
                                                <small className=" text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2009 - 2012</small>
                                            </div>

                                        </div>

                                    </div>

                                    {/*Self Education*/}
                                    <div className="relative flex flex-row w-full h-1/3 px-5 " >

                                        <div className="absolute transform -translate-x-1/2 left-1/2  h-[20px] w-[20px] rounded-full bg-[#868686]  "></div>

                                        <div className=" w-1/2 h-full  " >

                                            <h1 className="text-sm font-semibold " >Self Education</h1>
                                            <p className="text-xs text-[#808080] dark:text-[#D7D7D7]  " >El hajeb - Morocco</p>
                                            <small className=" text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2012 - Present</small>

                                        </div>


                                    </div>



                                </div>


                                {/* mobile  */}
                                <div className="h-full w-full  md:mt-5 py-2 md:pt-5 block md:hidden" >

                                    {/* Baccalaureate */}
                                    <div className="relative flex flex-row w-full h-1/3 px-2 " >

                                        <div className="absolute transform -translate-x-1/2  h-[20px] w-[20px] rounded-full bg-[#868686] "></div>

                                        <div className=" w-full h-full border-l-[0.5px] border-[#B8B8B8] flex justify-start pl-5 " >

                                            <div>
                                                <h1 className="text-[12px] font-semibold " >Baccalaureate</h1>
                                                <p className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " >El Hajeb - Morocco</p>
                                                <small className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2008 - 2009</small>
                                            </div>


                                        </div>

                                    </div>

                                    {/* IT Diploma */}
                                    <div className="relative flex flex-row w-full h-1/3 px-2 " >

                                        <div className="absolute transform -translate-x-1/2  h-[20px] w-[20px] rounded-full bg-[#868686] "></div>

                                        <div className=" w-full h-full  border-l-[0.5px] border-[#B8B8B8] flex justify-start pl-5 " >

                                            <div className="text-left" >
                                                <h1 className="text-[12px] font-semibold " >IT Diploma</h1>
                                                <p className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " >El Hajeb - Morocco</p>
                                                <small className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2009 - 2012</small>
                                            </div>

                                        </div>

                                    </div>

                                    {/* Self Education */}
                                    <div className="relative flex flex-row w-full h-1/3 px-2 " >

                                        <div className="absolute transform -translate-x-1/2  h-[20px] w-[20px] rounded-full bg-[#868686]  "></div>

                                        <div className=" w-full h-full flex justify-start pl-5" >

                                            <div className="text-left" >
                                                <h1 className="text-[12px] font-semibold " >Self Education</h1>
                                                <p className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " >El hajeb - Morocco</p>
                                                <small className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2012 - Present</small>
                                            </div>

                                        </div>


                                    </div>



                                </div>
                            </>
                        }


                        {Experience &&
                            <>
                                {/* desktop  */}
                                <div className="h-full w-full  md:mt-5 py-2 md:pt-5 hidden md:block" >

                                    {/* Web Developer */}
                                    <div className="relative flex flex-row w-full h-1/4 px-5 " >

                                        <div className="absolute transform -translate-x-1/2 left-1/2  h-[20px] w-[20px] rounded-full bg-[#868686] "></div>

                                        <div className=" w-1/2 h-full border-r-[0.5px] border-[#B8B8B8]" >

                                            <div>
                                                <h1 className="text-sm font-semibold " >Web Developer</h1>
                                                <p className="text-xs text-[#808080] dark:text-[#D7D7D7]  " >Meknes - Morocco</p>
                                                <small className=" text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2012 - 2014</small>
                                            </div>


                                        </div>

                                        <div className=" w-1/2 h-full  border-l-[0.5px] border-[#B8B8B8] flex justify-end " >

                                        </div>

                                    </div>

                                    {/* Digital Marketing */}
                                    <div className="relative flex flex-row w-full h-1/4 px-5 " >

                                        <div className="absolute transform -translate-x-1/2 left-1/2  h-[20px] w-[20px] rounded-full bg-[#868686] "></div>

                                        <div className=" w-1/2 h-full   border-r-[0.5px] border-[#B8B8B8] " >

                                        </div>

                                        <div className=" w-1/2 h-full  border-l-[0.5px] border-[#B8B8B8] flex justify-end " >

                                            <div className="text-left" >
                                                <h1 className="text-sm font-semibold " >Digital Marketing</h1>
                                                <p className="text-xs text-[#808080] dark:text-[#D7D7D7]  " >El Hajeb - Morocco</p>
                                                <small className=" text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2014 - Present</small>
                                            </div>

                                        </div>

                                    </div>

                                    {/* Mobile Developer */}
                                    <div className="relative flex flex-row w-full h-1/4 px-5 " >

                                        <div className="absolute transform -translate-x-1/2 left-1/2  h-[20px] w-[20px] rounded-full bg-[#868686]  "></div>

                                        <div className=" w-1/2 h-full border-r-[0.5px] border-[#B8B8B8]  " >

                                            <h1 className="text-sm font-semibold " >Mobile Developer</h1>
                                            <p className="text-xs text-[#808080] dark:text-[#D7D7D7]  " >El hajeb - Morocco</p>
                                            <small className=" text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2020 - Present</small>

                                        </div>

                                        <div className=" w-1/2 h-full  border-l-[0.5px] border-[#B8B8B8]" >



                                        </div>

                                    </div>

                                    {/* Freelancer */}
                                    <div className="relative flex flex-row w-full h-1/4 px-5 " >

                                        <div className="absolute transform -translate-x-1/2 left-1/2  h-[20px] w-[20px] rounded-full bg-[#868686] "></div>

                                        <div className=" w-1/2 h-full border-[#B8B8B8] " >


                                        </div>

                                        <div className=" w-1/2 h-full border-[#B8B8B8] flex justify-end " >

                                            <div className="text-left" >
                                                <h1 className="text-sm font-semibold " >Freelancer</h1>
                                                <p className="text-xs text-[#808080] dark:text-[#D7D7D7]  " >Martil - Morocco</p>
                                                <small className=" text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2021 - Present</small>
                                            </div>

                                        </div>

                                    </div>

                                </div>


                                {/* mobile  */}
                                <div className="h-full w-full  md:mt-5 py-2 md:pt-5 block md:hidden" >

                                    {/* Web Developer */}
                                    <div className="relative flex flex-row w-full h-1/4 px-2 " >

                                        <div className="absolute transform -translate-x-1/2  h-[20px] w-[20px] rounded-full bg-[#868686] "></div>

                                        <div className=" w-full h-full border-l-[0.5px] border-[#B8B8B8] flex justify-start pl-5 " >

                                            <div>
                                                <h1 className="text-[12px] font-semibold " >Web Developer</h1>
                                                <p className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " >Meknes - Morocco</p>
                                                <small className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2012 - 2014</small>
                                            </div>


                                        </div>

                                    </div>

                                    {/* Digital Marketing */}
                                    <div className="relative flex flex-row w-full h-1/4 px-2 " >

                                        <div className="absolute transform -translate-x-1/2  h-[20px] w-[20px] rounded-full bg-[#868686] "></div>

                                        <div className=" w-full h-full  border-l-[0.5px] border-[#B8B8B8] flex justify-start pl-5 " >

                                            <div className="text-left" >
                                                <h1 className="text-[12px] font-semibold " >Digital Marketing</h1>
                                                <p className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " >El Hajeb - Morocco</p>
                                                <small className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2014 - Present</small>
                                            </div>

                                        </div>

                                    </div>

                                    {/* Mobile Developer */}
                                    <div className="relative flex flex-row w-full h-1/4 px-2 " >

                                        <div className="absolute transform -translate-x-1/2  h-[20px] w-[20px] rounded-full bg-[#868686]  "></div>

                                        <div className=" w-full h-full border-l-[0.5px] border-[#B8B8B8] flex justify-start pl-5" >

                                            <div className="text-left" >
                                                <h1 className="text-[12px] font-semibold " >Mobile Developer</h1>
                                                <p className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " >El hajeb - Morocco</p>
                                                <small className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2020 - Present</small>
                                            </div>

                                        </div>


                                    </div>

                                    {/* Freelancer */}
                                    <div className="relative flex flex-row w-full h-1/4 px-2 " >

                                        <div className="absolute transform -translate-x-1/2  h-[20px] w-[20px] rounded-full bg-[#868686] "></div>

                                        <div className=" w-full h-full flex justify-start pl-5 " >

                                            <div className="text-left" >
                                                <h1 className="text-[12px] font-semibold " >Freelancer</h1>
                                                <p className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " >Martil - Morocco</p>
                                                <small className="text-[10px] text-[#808080] dark:text-[#D7D7D7]  " ><i className='bx bx-calendar' ></i>&nbsp;2021 - Present</small>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </>
                        }


                    </div>


                </div>


            </div>

            {/* col 2 */}
            <div className="flex h-[75%] flex-col gap-4 justify-center w-[50%]" >

                {/* third card */}
                <div className="h-[50%] w-full rounded-[15px] bg-white dark:bg-[#1C1D1F] p-3 md:p-5 border border-[#EDEDED] dark:border-0 " >

                    {/* content */}
                    <div className="flex flex-col w-full h-full  ">

                        {/* title */}
                        <div className="text-center w-full mt-5" >

                            <p className="text-xs sm:text-sm md:text-sm lg:text-base text-[#868686] " >Frontend Skills</p>

                        </div>

                        {/* skills */}
                        <div className="flex flex-row h-full justify-between sm:justify-around md:justify-around " >

                            {/* left col  */}
                            <div className="flex gap-10 flex-col justify-center " >

                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >HTML</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Advanced</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >CSS</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Advanced</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >JavaScript</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Advanced</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* right col */}
                            <div className="flex gap-10 flex-col justify-center " >

                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >Tailwind</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Advanced</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >Figma</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Advanced</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >React</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Advanced</p>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>


                    </div>

                </div>

                {/* fourth card */}
                <div className="h-[50%] w-full rounded-[15px] bg-white dark:bg-[#1C1D1F] p-3 md:p-5 border border-[#EDEDED] dark:border-0 " >

                    {/* content */}
                    <div className="flex flex-col w-full h-full  ">

                        {/* title */}
                        <div className="text-center w-full mt-5" >

                            <p className="text-xs sm:text-sm md:text-sm lg:text-sm text-[#868686] " >Backend Developer</p>

                        </div>

                        {/* skills */}
                        <div className="flex flex-row h-full justify-between sm:justify-around md:justify-around " >

                            {/* left col  */}
                            <div className="flex gap-10 flex-col justify-center " >

                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >Next Js</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Advanced</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >Node Js</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Advanced</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >Git</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Intermediate</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* right col */}
                            <div className="flex gap-10 flex-col justify-center " >

                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >MongoDB</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Advanced</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >Firebase</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Intermediate</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col" >
                                    <div className="flex flex-row">
                                        <i className='bx bx-badge-check text-sm md:text-xl '></i>&nbsp;
                                        <div className="text-left" >
                                            <h1 className="font-semibold text-[10px] md:text-sm" >Docker</h1>
                                            <p className="text-[8px] md:text-xs  text-[#868686]" >Advanced</p>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>


                    </div>

                </div>
            </div>


        </div>

    )
}

export default Skills