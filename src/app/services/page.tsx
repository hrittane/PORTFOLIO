'use client';

import { motion, HTMLMotionProps } from "framer-motion";
import { useState } from 'react';


interface MotionDivProps extends HTMLMotionProps<'div'> {
    className?: string;
    onClick?: () => void;
}

export async function generateMetadata() {
    return {
        title: 'Services | Soufiane Hrittane - Full Stack Developer',
        description: 'Discover the range of services offered by Soufiane Hrittane, including product design, UI/UX design, front-end and back-end development, mobile development, and DevOps architecture.',
        alternates: {
            canonical: 'https://www.moroccan.dev/services',
        },
        openGraph: {
            title: 'Services | Soufiane Hrittane - Full Stack Developer',
            description: 'Discover the range of services offered by Soufiane Hrittane, including product design, UI/UX design, front-end and back-end development, mobile development, and DevOps architecture.',
            url: 'https://www.moroccan.dev/services',
            type: 'website',
        },
        twitter: {
            card: "summary_large_image",
            title: 'Services | Soufiane Hrittane - Full Stack Developer',
            description: 'Discover the range of services offered by Soufiane Hrittane, including product design, UI/UX design, front-end and back-end development, mobile development, and DevOps architecture.',
        },
    };
}

function Services() {


    const [openModal, setOpenModal] = useState(false);
    const [Data, setData] = useState<string[]>([])
    const [Title, setTitle] = useState("")

    const ProductDesigner = [
        "Designing software architecture",
        "Implementing software development",
        "Debugging and troubleshooting issues",
        "Refactoring and optimizing existing code",
        "Technical support and troubleshooting"
    ];

    const UiUxDesigner = [
        "Wireframing the user interface Web / Mobile",
        "Prototyping the user interface Web / Mobile",
        "Creating UX element interactions Web / Mobile",
        "I position your company brand first",
        "Design and mockups of software for companies"
    ];

    const FrontEndDeveloper = [
        "Creating and designing the visual layout",
        "Writing HTML and CSS code to create the structure",
        "Writing JavaScript code to add interactivity",
        "Using front-end frameworks such as React and Next.js",
        "Optimizing the speed and performance of web pages"
    ];

    const backEndDeveloper = [
        "Write server-side JavaScript code using frameworks like Node.js, Express.js, and Nest.js",
        "Create APIs using tools like REST and GraphQL",
        "Set up and configure databases using tools like MongoDB, Firebase, and write queries to access, manipulate, and store data",
        "Implement user authentication and authorization systems using tools like Passport.js, OAuth, and JWT",
        "Integrate the backend code with third-party services and APIs, including payment gateways, social media platforms, and other web services"
    ];

    const MobileDeveloper = [
        "Develop cross-platform mobile applications using React Native for iOS/Android",
        "Create and implement the user interface of mobile applications using React Native components and styles",
        "Implement navigation between different screens and components within the application using React Navigation",
        "Integrate native modules written in Java, Kotlin, or Swift/Objective-C into the React Native application to access platform-specific features or functionality",
        "Deploy the application to the App Store and/or Google Play Store"
    ];

    const DevopsArchitect = [
        "Design and architect the infrastructure required for the application or system",
        "Ensure Continuous Integration and Deployment (CI/CD) pipeline design",
        "Implement monitoring and alerting solutions to detect and respond to issues in real-time",
        "Develop and test disaster recovery and business continuity plans to ensure that the system can recover from unexpected failures and disruptions",
        "Automate manual processes to improve efficiency and reduce errors"
    ];


    const MotionDiv: React.FC<MotionDivProps> = (props) => <motion.div {...props} />;

    return (
        <div className="h-screen max-w-6xl mx-4 lg:mx-auto flex flex-col justify-center py-3 sm:p-10 md:p-20 lg:p-20 ">



            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">


                <MotionDiv

                    initial={{
                        opacity: 0,
                        translateX: -50,
                        translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}

                    className="relative flex-1 aspect-square bg-white rounded-[15px] dark:bg-[#1C1D1F] border border-[#EDEDED] dark:border-0 cursor-pointer" onClick={() => { setOpenModal(!openModal), setData(ProductDesigner), setTitle("Product Designer") }} >

                    <div className=" absolute bottom-0 m-3 sm:m-5 md:m-7 ">

                        <i className='bx bx-code-block text-[#333333] dark:text-[#EFEFEF] text-4xl md:text-5xl  '></i>
                        <h1 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm md:text-xl lg:text-2xl mt-2 " >Product <br></br>Designer</h1>
                        <p className="text-[#808080] text-sm mt-2 cursor-pointer " onClick={() => { setOpenModal(!openModal), setData(ProductDesigner), setTitle("Product Designer") }} >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></p>

                    </div>

                </MotionDiv>

                <MotionDiv

                    initial={{
                        opacity: 0,
                        translateX: 0,
                        translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}

                    className="relative flex-1 aspect-square bg-white rounded-[15px] dark:bg-[#1C1D1F] border border-[#EDEDED] dark:border-0 cursor-pointer"
                    onClick={() => { setOpenModal(!openModal), setData(UiUxDesigner), setTitle("Ui/Ux Designer") }} >

                    <div className=" absolute bottom-0 m-3 sm:m-5 md:m-7 ">

                        <i className='bx bxs-edit text-[#333333] dark:text-[#EFEFEF] text-4xl md:text-5xl  '></i>
                        <h1 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm md:text-xl lg:text-2xl mt-2 " >Ui/Ux<br></br>Designer</h1>
                        <p className="text-[#808080] text-sm mt-2 cursor-pointer" onClick={() => { setOpenModal(!openModal), setData(UiUxDesigner), setTitle("Ui/Ux Designer") }}  >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></p>
                    </div>

                </MotionDiv>

                <MotionDiv

                    initial={{
                        opacity: 0,
                        translateX: 50,
                        translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}

                    className="relative flex-1 aspect-square bg-white rounded-[15px] dark:bg-[#1C1D1F] border border-[#EDEDED] dark:border-0 cursor-pointer" onClick={() => { setOpenModal(!openModal), setData(FrontEndDeveloper), setTitle("Front-End Developer") }}>

                    <div className=" absolute bottom-0 m-3 sm:m-5 md:m-7 ">

                        <i className='bx bx-code text-[#333333] dark:text-[#EFEFEF] text-4xl md:text-5xl  '></i>
                        <h1 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm md:text-xl lg:text-2xl mt-2 " >Front-end <br></br>developer</h1>
                        <p className="text-[#808080] text-sm mt-2 cursor-pointer" onClick={() => { setOpenModal(!openModal), setData(FrontEndDeveloper), setTitle("Front-End Developer") }} >View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></p>
                    </div>

                </MotionDiv>

                <MotionDiv

                    initial={{
                        opacity: 0,
                        translateX: -50,
                        translateY: 50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}

                    className="relative flex-1 aspect-square bg-white rounded-[15px] dark:bg-[#1C1D1F] border border-[#EDEDED] dark:border-0 cursor-pointer" onClick={() => { setOpenModal(!openModal), setData(backEndDeveloper), setTitle("Back-End Developer") }}>

                    <div className=" absolute bottom-0 m-3 sm:m-5 md:m-7 ">

                        <i className='bx bx-data text-[#333333] dark:text-[#EFEFEF] text-4xl md:text-5xl  '></i>
                        <h1 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm md:text-xl lg:text-2xl mt-2 " >back-end<br></br>developer</h1>
                        <p className="text-[#808080] text-sm mt-2 cursor-pointer" onClick={() => { setOpenModal(!openModal), setData(backEndDeveloper), setTitle("Back-End Developer") }}>View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></p>
                    </div>

                </MotionDiv>

                <MotionDiv

                    initial={{
                        opacity: 0,
                        translateX: 0,
                        translateY: 50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}

                    className="relative flex-1 aspect-square bg-white rounded-[15px] dark:bg-[#1C1D1F] border border-[#EDEDED] dark:border-0 cursor-pointer" onClick={() => { setOpenModal(!openModal), setData(MobileDeveloper), setTitle("Mobile Developer") }}>

                    <div className=" absolute bottom-0 m-3 sm:m-5 md:m-7 ">

                        <i className='bx bx-mobile-alt text-[#333333] dark:text-[#EFEFEF] text-4xl md:text-5xl  '></i>
                        <h1 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm md:text-xl lg:text-2xl mt-2 " >Mobile<br></br>Developer</h1>
                        <p className="text-[#808080] text-sm mt-2 cursor-pointer" onClick={() => { setOpenModal(!openModal), setData(MobileDeveloper), setTitle("Mobile Developer") }}>View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></p>
                    </div>

                </MotionDiv>

                <MotionDiv

                    initial={{
                        opacity: 0,
                        translateX: 50,
                        translateY: 50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}

                    className="relative flex-1 aspect-square bg-white rounded-[15px] dark:bg-[#1C1D1F] border border-[#EDEDED] dark:border-0 cursor-pointer" onClick={() => { setOpenModal(!openModal), setData(DevopsArchitect), setTitle("Devops Architect") }}>

                    <div className=" absolute bottom-0 m-3 sm:m-5 md:m-7 ">

                        <i className='bx bx-server text-[#333333] dark:text-[#EFEFEF] text-4xl md:text-5xl  '></i>
                        <h1 className=" font-semibold  text-[#333333] dark:text-[#EFEFEF] text-sm md:text-xl lg:text-2xl mt-2 " >Devops<br></br>Architect</h1>
                        <p className="text-[#808080] text-sm mt-2 cursor-pointer" onClick={() => { setOpenModal(!openModal), setData(DevopsArchitect), setTitle("Devops Architect") }}>View More&nbsp;<i className='bx bx-right-arrow-alt' ></i></p>
                    </div>

                </MotionDiv>


            </div>



            {
                openModal &&
                <div className='absolute top-0 left-0 h-full w-full bg-black' >


                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center p-4 w-full md:w-fit ">

                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {Title}
                                </h3>
                                <button onClick={() => { setOpenModal(false) }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div className="">
                                <ul className=" m-5 pb-5 list-disc">
                                    {Data.map((task, index) => (
                                        <li key={index} className="m-2 p-2">
                                            <p className='text-sm' >{task}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                        </div>
                    </div>


                </div>
            }






        </div>





    )
}

export default Services