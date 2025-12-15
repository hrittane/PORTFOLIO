'use client';


import { useState } from 'react';
import { motion, MotionProps } from "framer-motion";


interface MotionAnchorProps extends MotionProps {
    href?: string;
    target?: string;
    className?: string;
    onClick?: () => void;
}

function Portfolio() {


    const [openModalDelin, setOpenModalDelin] = useState(false);
    const [openModalMeditate, setOpenModalMeditate] = useState(false);
    const [openModalSflix, setopenModalSflix] = useState(false)

    const MotionAnchor: React.FC<MotionAnchorProps> = (props) => <motion.a {...props} />;
    const MotionDiv: React.FC<MotionAnchorProps> = (props) => <motion.div {...props} />;

    return (
        <>
            <div className="h-screen py-20 lg:py-5 max-w-6xl gap-4 mx-4 md:mx-auto lg:mx-auto flex flex-col items-center justify-center  md:flex-row md:justify-center  ">


                {/* col1 */}
                <div className="flex flex-col w-full h-[70%] md:flex-col md:justify-center md:w-[60%] gap-4 " >

                    {/* row 1 */}
                    <div className='h-[40%] flex flex-row gap-4' >

                        {/* casse vhu */}
                        <MotionAnchor


                            initial={{
                                opacity: 0,
                                translateX: -50,
                                translateY: -50,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}

                            href='https://www.casse-vhu.fr/' target='blank' className="relative w-[60%] bg-white rounded-[15px] dark:bg-[#1C1D1F] bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url("apps/cassevhu.webp")` }} >


                            <div className=" absolute top-0 m-3 sm:m-5 md:m-6 "  >
                                <h1 className=" font-semibold  text-[#EFEFEF] text-sm md:text-xl lg:text-2xl" >Casse-vhu.fr </h1>
                                <span className="text-[#808080] text-[10px] md:text-sm " >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></span>
                            </div>



                        </MotionAnchor>


                        {/* car casse */}
                        <MotionAnchor

                            initial={{
                                opacity: 0,
                                translateX: 0,
                                translateY: -50,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}


                            href='https://car-casse.fr/' target='blank' className="relative w-[40%] bg-white rounded-[15px] dark:bg-[#1C1D1F] bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url("apps/carcas.webp")` }}>

                            <div className=" absolute top-0 m-3 sm:m-5 md:m-6 ">
                                <h1 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm md:text-xl lg:text-2xl" >car<br></br>casse</h1>
                                <span className="text-[#808080] text-[10px] md:text-sm " >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></span>
                            </div>

                        </MotionAnchor>


                    </div>

                    {/* row 2  */}
                    <div className='h-[30%] flex flex-row gap-4 ' >

                        {/* rest car */}
                        <MotionAnchor

                            initial={{
                                opacity: 0,
                                translateX: -50,
                                translateY: 50,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}


                            href='https://rest-car.netlify.app/' target='blank' className="relative w-[40%]  bg-white rounded-[15px] dark:bg-[#1C1D1F] bg-cover bg-center no-repeat" style={{ backgroundImage: `url("apps/restcar.webp")` }}>

                            <div className=" absolute top-0 m-3 sm:m-5 md:m-6 ">
                                <h1 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm md:text-xl lg:text-2xl" >Rest-Car.fr</h1>
                                <span className="text-[#808080] text-[10px] md:text-sm " >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></span>
                            </div>

                        </MotionAnchor>


                        {/* connectMe */}
                        <MotionAnchor

                            initial={{
                                opacity: 0,
                                translateX: 0,
                                translateY: 50,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}



                            href='https://call-meeting.netlify.app/' target="blank" className="relative w-[60%] bg-white rounded-[15px] dark:bg-[#1C1D1F] bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url("apps/connectMe.webp")` }} >

                            <div className=" absolute bottom-0 m-3 sm:m-5 md:m-6 ">
                                {/* <h1 className=" font-semibold text-[#EFEFEF] text-sm md:text-xl lg:text-2xl" >connectMe<br></br>App</h1> */}
                                <span className="text-[#808080] text-[10px] md:text-sm " >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></span>
                            </div>

                        </MotionAnchor>

                    </div>

                    {/* row 3  */}
                    <div className='h-[30%] flex flex-row gap-4 ' >


                        {/* Douane */}
                        <MotionAnchor

                            initial={{
                                opacity: 0,
                                translateX: -50,
                                translateY: 50,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}


                            href='https://www.figma.com/file/3zIYCkYH9KNisONiHHM01i/ADII-TEMPLATE?type=design&mode=design&t=7j9dDGXINwxzoepd-1' target='blank' className="relative w-[60%]  bg-white rounded-[15px] dark:bg-[#1C1D1F] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("apps/ADI.webp")` }}>

                            <div className=" absolute top-0 m-3 sm:m-5 md:m-6 ">
                                <h1 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm md:text-xl lg:text-2xl" >Douane <br></br> Maroc<br></br>Figma</h1>
                                <span className="text-[#808080] text-[10px] md:text-sm " >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></span>
                            </div>

                        </MotionAnchor>


                        {/* 3d configurator */}
                        <MotionAnchor

                            initial={{
                                opacity: 0,
                                translateX: 0,
                                translateY: 50,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}



                            href='https://3d-sneaker-plugin.netlify.app/' target="blank" className="relative w-[40%] bg-white rounded-[15px] dark:bg-[#1C1D1F] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("apps/shoes.webp")` }} >

                            <div className=" absolute top-0 m-3 sm:m-5 md:m-6 ">
                                <h1 className=" font-semibold text-[#333333] text-sm md:text-xl lg:text-2xl" >configurator<br></br>3d plugin</h1>
                                <span className="text-[#808080] text-[10px] md:text-sm " >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></span>
                            </div>

                        </MotionAnchor>

                    </div>


                </div>

                {/* col2 */}
                <div className="flex w-full h-[70%] flex-col md:justify-center md:w-[40%] gap-4 "  >



                    <div className='h-[25%] flex flex-row gap-4 ' >



                        {/* delin app */}
                        <MotionAnchor

                            initial={{
                                opacity: 0,
                                translateX: -50,
                                translateY: 50,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}


                            className="relative w-[40%]  bg-white rounded-[15px] dark:bg-[#1C1D1F] bg-cover bg-no-repeat cursor-pointer" style={{ backgroundImage: `url("apps/delinMobile.webp")`, backgroundPosition: 'calc(100% + 87px) bottom' }} onClick={() => { setOpenModalDelin(!openModalDelin) }}>

                            <div className=" absolute top-0 m-3 sm:m-5 md:m-6 ">
                                <h1 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm md:text-xl lg:text-1xl" >Delan <br></br>App</h1>
                                <span className="text-[#808080] text-[10px] md:text-sm " >View <br></br> More&nbsp;<i className='bx bx-right-arrow-alt' ></i></span>
                            </div>

                        </MotionAnchor>

                        {/* delin online */}
                        <MotionAnchor

                            initial={{
                                opacity: 0,
                                translateX: 0,
                                translateY: 50,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}



                            href='https://ecommerce-sanity-stripe-taupe.vercel.app/' target="blank" className="relative w-[60%] bg-white rounded-[15px] dark:bg-[#1C1D1F] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("apps/delinWeb.webp")` }} >

                            <div className=" absolute top-0 m-3 sm:m-5 md:m-6 ">
                                <h1 className=" font-semibold text-[#333333] text-sm md:text-xl lg:text-1xl" >Delin e-commerce</h1>
                                <span className="text-[#808080] text-[10px] md:text-sm " >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></span>
                            </div>

                        </MotionAnchor>

                    </div>


                    {/* meditateMe */}
                    <MotionDiv

                        initial={{
                            opacity: 0,
                            translateX: 0,
                            translateY: 50,
                        }}
                        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}

                        className="relative flex-1 bg-white rounded-[15px] dark:bg-[#1C1D1F]  bg-cover bg-center bg-no-repeat cursor-pointer" onClick={() => { setOpenModalMeditate(!openModalMeditate) }} style={{ backgroundImage: `url("apps/Meditation.webp")` }}  >

                        <div className=" absolute top-0 m-3 sm:m-5 md:m-6 ">
                            <h1 className=" font-semibold  text-[#EFEFEF] text-sm md:text-xl lg:text-2xl" >Mediatate<br></br>Me</h1>
                            <p className="text-[#808080] text-[10px] md:text-sm cursor-pointer " onClick={() => { setOpenModalMeditate(!openModalMeditate) }} >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></p>
                        </div>

                    </MotionDiv>

                    {/* Sflixe */}
                    <MotionAnchor


                        initial={{
                            opacity: 0,
                            translateX: 0,
                            translateY: 50,
                        }}
                        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 }}


                        className="relative flex-1 bg-white rounded-[15px] dark:bg-[#1C1D1F]  bg-cover bg-center bg-no-repeat cursor-pointer " style={{ backgroundImage: `url("apps/sflix.webp")` }} onClick={() => { setopenModalSflix(!openModalSflix) }}  >

                        <div className=" absolute bottom-0 m-3 sm:m-5 md:m-6 ">
                            <h1 className=" font-semibold  text-[#EFEFEF] text-sm md:text-xl lg:text-2xl" >Sflix Movies<br></br>app</h1>
                            <span className="text-[#808080] text-[10px] md:text-sm " >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></span>
                        </div>

                    </MotionAnchor>


                </div >


            </div >

            {
                openModalDelin &&
                <div className='absolute top-0 left-0 h-full w-full bg-black' >


                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center p-4  ">

                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Click To Play Demo
                                </h3>
                                <button onClick={() => { setOpenModalDelin(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div className=" w-[300px] ">

                                <video width="" height="" controls preload="none">
                                    <source src="/apps/demo.MP4" type="video/mp4" />
                                    <track
                                        src="/apps/demo.MP4"
                                        kind="subtitles"
                                        srcLang="en"
                                        label="English"
                                    />
                                    Your browser does not support the video tag.
                                </video>

                            </div>

                        </div>
                    </div>


                </div>
            }


            {
                openModalMeditate &&
                <div className='absolute top-0 left-0 h-full w-full bg-black' >


                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center p-4  ">

                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Demo
                                </h3>
                                <button onClick={() => { setOpenModalMeditate(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>


                            <div className=" w-[300px] h-1/2 ">

                                <img src="apps/first.gif" className='w-full' alt="" />

                            </div>


                        </div>
                    </div>


                </div>
            }

            {
                openModalSflix &&
                <div className='absolute top-0 left-0 h-full w-full bg-black' >


                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center p-4  ">

                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Click To Play Demo
                                </h3>
                                <button onClick={() => { setopenModalSflix(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div className=" w-[300px] ">

                                <video width="" height="" controls preload="none">
                                    <source src="/apps/sflix.MP4" type="video/mp4" />
                                    <track
                                        src="/apps/sflix.MP4"
                                        kind="subtitles"
                                        srcLang="en"
                                        label="English"
                                    />
                                    Your browser does not support the video tag.
                                </video>

                            </div>

                        </div>
                    </div>


                </div>
            }

        </>



    )
}

export default Portfolio