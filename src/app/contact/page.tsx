'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation'
import { motion, HTMLMotionProps } from "framer-motion";


interface MotionDivProps extends HTMLMotionProps<'div'> {
    className?: string;
}

export async function generateMetadata() {
    return {
        title: 'Contact | Soufiane Hrittane - Full Stack Developer',
        description: 'Get in touch with Soufiane Hrittane, a full stack developer specializing in React, Next.js, and mobile development. Reach out for collaborations, projects, or inquiries.',
        alternates: {
            canonical: 'https://www.moroccan.dev/contact',
        },
        openGraph: {
            title: 'Contact | Soufiane Hrittane - Full Stack Developer',
            description: 'Get in touch with Soufiane Hrittane, a full stack developer specializing in React, Next.js, and mobile development. Reach out for collaborations, projects, or inquiries.',
            url: 'https://www.moroccan.dev/contact',
            type: 'website',
        },
        twitter: {
            card: "summary_large_image",
            title: 'Contact | Soufiane Hrittane - Full Stack Developer',
            description: 'Get in touch with Soufiane Hrittane, a full stack developer specializing in React, Next.js, and mobile development. Reach out for collaborations, projects, or inquiries.',
        },
    };
}

function Contact() {

    const router = useRouter();

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) {
            console.error("Form ref is null");
            return;
        }

        emailjs.sendForm('service_kpmkohx', 'template_g24fzg8', form.current, { publicKey: 'VjhNEms0slmPOxGzR', })
            .then(
                () => {
                    console.log('SUCCESS!');
                    router.push('/thankyou');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    const MotionDiv: React.FC<MotionDivProps> = (props) => <motion.div {...props} />;

    return (
        <div className="h-screen max-w-3xl gap-4 mx-4 md:mx-auto lg:mx-auto flex flex-col  items-center justify-center  md:flex-row md:justify-center  ">

            {/* bg-blue-500 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-purple-50 */}


            {/* col1 */}
            <div className="flex h-[15%] w-full md:h-[75%] md:flex-col md:justify-center md:w-[40%] gap-4 " >

                <MotionDiv

                    initial={{
                        opacity: 0,
                        translateX: 0,
                        translateY: 50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex-1 rounded-[15px] bg-white dark:bg-[#1C1D1F] p-3 md:p-5 text-center flex flex-col justify-center border border-[#EDEDED] dark:border-0"

                >

                    <a href='mailto:info@moroccan.dev' >
                        <i className='bx bx-mail-send text-[#333333] dark:text-[#EFEFEF] text-4xl md:text-5xl'></i>
                        <h2 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm  mt-2">Email</h2>
                        <div className='hidden md:block' >
                            <p className="text-[#808080] text-sm mt-2" >info@moroccan.dev</p>
                            <p className="text-[#808080] text-sm mt-2" >Write me&nbsp;<i className='bx bx-right-arrow-alt' ></i></p>
                        </div>
                    </a>

                </MotionDiv>

                <MotionDiv

                    initial={{
                        opacity: 0,
                        translateX: 0,
                        translateY: 50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}


                    className="flex-1 rounded-[15px] bg-white dark:bg-[#1C1D1F] p-3 md:p-5 text-center flex flex-col justify-center border border-[#EDEDED] dark:border-0" >

                    <a href="https://wa.me/+212608223488/?text=hello!">
                        <i className='bx bxl-whatsapp text-[#333333] dark:text-[#EFEFEF] text-4xl md:text-5xl'></i>
                        <h2 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm  mt-2">Whatsapp</h2>
                        <div className='hidden md:block' >
                            <p className="text-[#808080] text-sm mt-2" >+212608223488</p>
                            <p className="text-[#808080] text-sm mt-2" >Write me&nbsp;<i className='bx bx-right-arrow-alt' ></i></p>
                        </div>
                    </a>

                </MotionDiv>

                <MotionDiv

                    initial={{
                        opacity: 0,
                        translateX: 0,
                        translateY: 50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}


                    className="flex-1 rounded-[15px] bg-white dark:bg-[#1C1D1F] p-3 md:p-5 text-center flex flex-col justify-center border border-[#EDEDED] dark:border-0" >

                    <a href="https://www.linkedin.com/in/soufiane-hrittane-7352a5136/" target="blank">
                        <i className='bx bxl-linkedin text-[#333333] dark:text-[#EFEFEF] text-4xl md:text-5xl'></i>
                        <h2 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm  mt-2">linkedin</h2>
                        <div className='hidden md:block' >
                            <p className="text-[#808080] text-sm mt-2" >soufiane-hrittane</p>
                            <p className="text-[#808080] text-sm mt-2" >Write me&nbsp;<i className='bx bx-right-arrow-alt' ></i></p>
                        </div>
                    </a>

                </MotionDiv>


            </div>

            {/* col2 */}
            <div className="flex h-[60%] w-full md:h-[75%] md:flex-col md:justify-center gap-4 md:w-[60%] " >


                <MotionDiv

                    initial={{
                        opacity: 0,
                        translateX: 0,
                        translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}


                    className="h-full w-full rounded-[15px] bg-white dark:bg-[#1C1D1F] p-5 md:p-10 flex flex-col justify-between items-center border border-[#EDEDED] dark:border-0 " >


                    <div className="text-left md:text-center w-full mb-5" >

                        <h1 className="font-bold text-xl sm:text-base md:text-base lg:text-2xl" >Get in touch</h1>
                        <p className="text-xs sm:text-sm md:text-sm lg:base text-[#868686] " > Contact Me </p>

                    </div>


                    <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col justify-around items-center mb-5 flex-1  " >


                        <div className="relative mb-5 w-full">
                            <input name='Name' type="text" id="name" className="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#1C1D1F] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Full Name</label>
                        </div>

                        <div className="relative mb-5 w-full">
                            <input name='Email' type="text" id="email" className="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#1C1D1F] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Your Email</label>
                        </div>


                        <div className="relative mb-5 w-full">
                            <input name='Phone' type="text" id="number" className="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="number" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#1C1D1F] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Your Number</label>
                        </div>

                        <div className="relative w-full flex-1 ">
                            <textarea name='Query' rows={3} id="query" className="h-full border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="query" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-[#1C1D1F] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Your Query </label>
                        </div>

                        <button type="submit" value="Send" className="mt-5 bg-[#0D1725] text-white text-xs sm:text-sm font-bold py-3 rounded-xl flex justify-center items-center w-[50%]"> Send &nbsp;<i className='bx bx-send' ></i></button>

                    </form>




                </MotionDiv>


            </div>


        </div>



    )
}

export default Contact