"use client"

import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import lightBg from '../../public/blog-light.webp'
import darkBg from '../../public/blog-dark.webp'



interface MotionDivProps extends HTMLMotionProps<'div'> {
  className?: string;
}


export default function Home() {



  const MotionDiv: React.FC<MotionDivProps> = (props) => <motion.div {...props} />;

  return (



    <div className=" h-screen max-w-6xl gap-4 mx-4 md:mx-4 lg:mx-auto flex flex-row items-center ">


      {/* col 1 */}
      <div className="flex h-[75%] flex-col gap-4 justify-center w-[45%] md:w-[30%]" >

        {/* card 1 mobile and desktop */}
        <MotionDiv

          initial={{
            opacity: 0,
            translateX: -50,
            translateY: -50,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}

          className="h-[40%] md:h-[75%] w-full rounded-[15px] bg-white dark:bg-[#1C1D1F] p-3 md:p-5 bg-cover bg-right bg-no-repeat border border-[#EDEDED] dark:border-0" style={{ backgroundImage: `url("me.webp")` }}>

          <div className="relative w-full h-full "   >


            <div className="absolute top-0 text-left md:text-center w-full " >

              <h2 className="font-bold text-xs sm:text-base md:text-base lg:text-2xl text-white " >This is me</h2>
              <p className="text-xs sm:text-sm md:text-base lg:base text-[#b0b0b0] " > nice to meet you </p>

            </div>


            <div className="absolute bottom-0 md:top-1/3 left-0 flex flex-col items-center">

              <Link href="https://twitter.com/soufianehrittan" target="blank" ><FaXTwitter className="my-2 font-xs md:text-3xl text-white " /></Link>
              <Link href="https://wa.me/+212608223488/?text=hello !" target="blank" > <FaWhatsapp className="my-2 font-xs md:text-3xl text-white " /> </Link>
              <Link href="https://github.com/hrittane" target="blank" > <FaGithub className="my-2 font-xs md:text-3xl text-white " /></Link>
              <Link href="https://www.linkedin.com/in/soufiane-hrittane-7352a5136/" target="blank" ><FaLinkedinIn className="my-2 font-xs md:text-3xl text-white " /></Link>

            </div>


          </div>

        </MotionDiv>

        {/* card2 */}
        <MotionDiv

          initial={{
            opacity: 0,
            translateX: 0,
            translateY: 50,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}

          className="h-[60%] md:h-[25%] w-full rounded-[15px] bg-white dark:bg-[#1C1D1F]  md:p-5 border border-[#EDEDED] dark:border-0 ">

          {/* on desktop */}
          <div className="hidden md:block h-full" >

            <div className="h-full flex flex-col items-center justify-center " >

              <h2 className="font-bold text-xs sm:text-base md:text-base lg:text-2xl" >For Professionals</h2>
              <p className="text-xs sm:text-sm md:text-base lg:base py-1 text-[#868686] " > here you can </p>

              <Link href="/cv.pdf" target="_blank" download className="text-black dark:text-white bg-[#EDEDED] dark:bg-[#151617] dark:border-0 font-semibold py-3 px-4 rounded-xl flex justify-center items-center w-[174px] mt-2 mx-auto "> Download Cv &nbsp; <i className='bx bxs-download' ></i> </Link>

            </div>

          </div>


          {/* on mobile */}
          <div className=" flex sm:flex md:hidden lg:hidden xl:hidden flex-col h-full justify-around divide-y divide-slate-200 dark:divide-[#151617]" >


            <div className="w-full h-1/4 flex flex-col justify-center items-center " >

              {/* <SlBadge className="" size={30} /> */}
              <i className='bx bx-badge-check' ></i>
              <div className="text-center" >
                <h3 className="mr-2 text-sm font-bold" >Experience</h3>
                <p className="mr-2 text-[10px] mt-1" >100 + Projects</p>
              </div>



            </div>


            <div className="w-full h-1/4 flex flex-col justify-center items-center " >

              {/* <TfiBag className="" size={30} /> */}
              <i className='bx bx-briefcase-alt-2' ></i>
              <div className="text-center" >
                <h3 className="mr-2 text-sm font-bold" >Completed</h3>
                <p className="mr-2 text-[10px] mt-1" >10 Years Working</p>
              </div>

            </div>




            <div className="w-full h-1/4 flex flex-col justify-center items-center  " >


              {/* <FaRegSmileBeam className="" size={30} /> */}
              <i className='bx bx-like' ></i>
              <div className="text-center" >
                <h3 className="mr-2 text-sm font-bold " >Satisfaction</h3>
                <p className="mr-2 text-[10px] mt-1" >100 % satisfaction</p>
              </div>

            </div>





            <div className="w-full h-1/4 flex flex-col justify-center items-center " >

              {/* <BsHeadset className="" size={30} /> */}
              <i className='bx bx-support' ></i>
              <div className="text-center" >
                <h3 className="mr-2 text-sm font-bold " >Support</h3>
                <p className="mr-2 text-[10px] mt-1" >Online 24/7</p>
              </div>

            </div>

          </div>


        </MotionDiv>

      </div>

      {/* col 2 */}
      <div className="flex h-[75%] flex-col gap-4 justify-center w-[55%] md:w-[70%] " >

        {/* upper row */}
        <div className="h-[80%] md:h-[60%] w-full rounded-[15px] flex flex-col md:flex-row gap-4">

          {/* card 3 */}
          <MotionDiv

            initial={{
              opacity: 0,
              translateX: 0,
              translateY: -50,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="h-[60%] w-[100%] md:h-full md:w-[60%] bg-white dark:bg-[#1C1D1F] rounded-[15px] border border-[#EDEDED] dark:border-0">


            {/* on desktop */}
            <section className="hidden md:flex md:flex-col md:h-full md:justify-between" >
              {/* navbar */}
              <div className="bg-[#EDEDED] dark:bg-[#333333] h-[10%] flex flex-row items-center p-3 rounded-t-[15px]  ">
                <div className=" w-[20px] h-[20px] bg-[#272727] m-1 rounded-full"></div>
                <div className=" w-[20px] h-[20px] bg-[#272727] m-1 rounded-full"></div>
                <div className=" w-[20px] h-[20px] bg-[#272727] m-1 rounded-full"></div>
              </div>

              {/* content */}
              <div className="flex-1 m-8 flex flex-col justify-around" >

                <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl lg:leading-snug leading-tight " >Hello <MdWavingHand style={{ display: "inline-flex" }} /> <br></br>my name is
                  <div className="flex items-center mt-4">
                    <hr className="flex-1 h-[1px] mx-auto bg-gray-400 border-0 rounded dark:bg-gray-700" />
                    <span className=" font-semibold text-[#626161] text-base md:text-2xl lg:text-3xl  " >&nbsp;&nbsp;Soufiane Hrittane</span>
                  </div>
                </h1>

                <p className="text-[#868686] text-base md:text-lg lg:text-xl  " >I&apos;m a creative Full Stack Developer.</p>

                <Link href="/contact" className=" text-black dark:text-white  bg-[#EDEDED] dark:bg-[#151617] dark:border-0  font-semibold py-3  rounded-xl flex justify-center items-center w-[174px] mt-3" > Say Hello &nbsp; <i className='bx bxs-send' ></i>  </Link>

              </div>

            </section>


            {/* on mobile */}
            <section className=" md:hidden p-3 text-left h-full flex flex-col justify-between " >

              <div className="font-semibold text-xl leading-relaxed" >Hello <MdWavingHand style={{ display: "inline-flex" }} /> <br></br>my name is
                <div className="font-semibold text-[#626161] text-base mt-2" >Soufiane Hrittane</div>
              </div>
              <hr className="w-full h-[1px] mx-auto  bg-gray-400 border-0 rounded  dark:bg-gray-700" />
              <p className="text-[#868686] text-[10px] font-medium " > <span className="font-bold text-[11px] " >I&apos;m creative Full Stack web and mobile Developer</span> , and I&apos;m very passionate and dedicated to my work.</p>

              <Link href="/contact" className="bg-[#EDEDED] dark:bg-[#151617] text-black dark:text-white text-xs sm:text-sm font-bold py-3 rounded-xl flex justify-center items-center w-full "> Say Hello &nbsp; <i className='bx bxs-send' ></i>  </Link>


            </section>


          </MotionDiv>

          {/* card 4 */}
          <MotionDiv

            initial={{
              opacity: 0,
              translateX: 50,
              translateY: -50,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="h-[40%] w-[100%] md:h-full md:w-[40%] bg-white dark:bg-[#1C1D1F] p-3 rounded-[15px] md:border-8 border-[#EDEDED] dark:border-[#333333] relative " >


            {/* on desktop */}
            <div className="hidden md:flex md:flex-col md:h-full md:justify-between items-center" >

              {/* notch */}
              <div className="absolute top-0 h-[30px] w-[50%] bg-[#EDEDED] dark:bg-[#333333] rounded-b-lg " />

              {/* content */}
              <div className="flex-1 flex flex-col justify-around items-center" >

                {/* skeleton */}
                <Image src="/mobile-dark.webp"
                  alt="Mobile app development showcase"
                  width={120}
                  height={40}
                  className="transition-opacity duration-300 dark:hidden mt-0 md:mt-12 " />

                <Image src="/mobile-light.webp"
                  alt="Mobile app development showcase"
                  width={120}
                  height={40}
                  className="transition-opacity duration-300 hidden dark:block mt-0 md:mt-12 " />

                {/* intro */}
                <div className="text-center" >
                  <p className="text-xs sm:text-sm md:text-xl lg:base text-[#868686] " > Guess what </p>
                  <h2 className="font-bold text-xs sm:text-base md:text-base lg:text-xl" >i build mobile <br /> apps too</h2>
                </div>

                {/* button */}
                <Link href="/contact" className=" text-black dark:text-white  bg-[#EDEDED] dark:bg-[#151617] dark:border-0  font-semibold py-3  rounded-xl flex justify-center items-center w-[174px] mt-3" > Let&apos;s talk &nbsp; <i className='bx bxs-chat'></i> </Link>

              </div>


            </div>

            {/* on mobile */}
            <div className="md:hidden flex flex-col h-full justify-around" >


              <div className="text-left ml-1" >
                <h2 className="font-bold text-xs sm:text-base md:text-base lg:text-2xl" >Explore more</h2>
                <p className="text-xs sm:text-sm md:text-sm lg:base text-[#868686]" >at my blog </p>
              </div>

              <div className="flex flex-row w-full items-center justify-start ml-1" >

                <div className="bg-[#EFEFEF] dark:bg-[#2D2D2D] h-[30px] w-[20%] rounded mr-2" ></div>

                <div className="flex flex-col w-full " >
                  <hr className="w-full h-[10px] mx-auto bg-[#EFEFEF] dark:bg-[#2D2D2D] border-0 rounded my-1" />
                  <hr className="w-[70%] h-[10px]  bg-[#EFEFEF] dark:bg-[#2D2D2D] border-0 rounded my-1" />
                </div>

              </div>

              <Link href="/blog" className="text-black dark:text-white bg-[#EDEDED] dark:bg-[#151617] text-xs sm:text-sm font-bold py-3 rounded-xl flex justify-center items-center w-full" > Visit My Blog &nbsp; <i className='bx bx-spreadsheet' ></i> </Link>

            </div>

          </MotionDiv>

        </div>

        {/* lower row */}
        <MotionDiv

          initial={{
            opacity: 0,
            translateX: 0,
            translateY: 50,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}

          className="h-[20%] p-3 md:p-0 md:h-[40%] w-full rounded-[15px] bg-white dark:bg-[#1C1D1F] border border-[#EDEDED] dark:border-0">


          {/* on desktop */}
          <div className="hidden  md:flex flex-col w-full h-full p-3 md:p-5 " >

            <div className="w-full flex flex-row gap-4 h-full  " >

              {/* elements */}
              <div className="flex-1 h-full grid grid-cols-2 gap-4 " >

                <div className="border-[#EDEDED] dark:border-black bg-[#EFEFEF] dark:bg-[#151617] border w-full h-full  rounded-[15px] flex flex-col items-center justify-center  ">
                  <i className='bx bx-award text-2xl' ></i>
                  <h3 className=" text-xs sm:text-xs md:text-[8px] lg:text-sm  font-bold mt-1" >Experience</h3>
                  <p className=" text-xs sm:text-xs md:text-[8px] lg:text-sm mt-1" >10 Years Working</p>
                </div>

                <div className="border-[#EDEDED] dark:border-black bg-[#EFEFEF] dark:bg-[#151617] border w-full h-full  rounded-[15px] flex flex-col items-center justify-center   ">
                  <i className='bx bx-briefcase-alt-2 text-2xl' ></i>
                  <h3 className=" text-xs sm:text-xs md:text-[8px] lg:text-sm  font-bold mt-1" >Completed</h3>
                  <p className=" text-xs sm:text-xs md:text-[8px] lg:text-sm mt-1" >100 + Projects</p>
                </div>


                <div className="border-[#EDEDED] dark:border-black bg-[#EFEFEF] dark:bg-[#151617] border w-full h-full  rounded-[15px] flex flex-col items-center justify-center  ">
                  <i className='bx bx-support text-2xl' ></i>
                  <h3 className=" text-xs sm:text-xs md:text-[8px] lg:text-sm  font-bold mt-1" >Support</h3>
                  <p className=" text-xs sm:text-xs md:text-[8px] lg:text-sm mt-1" >Online 24/7</p>
                </div>

                <div className="border-[#EDEDED] dark:border-black bg-[#EFEFEF] dark:bg-[#151617] border w-full h-full  rounded-[15px] flex flex-col items-center justify-center  ">
                  <i className='bx bx-like text-2xl' ></i>
                  <h3 className=" text-xs sm:text-xs md:text-[8px] lg:text-sm  font-bold mt-1" >Satisfaction</h3>
                  <p className=" text-xs sm:text-xs md:text-[8px] lg:text-sm mt-1" >100 % guaranteed </p>
                </div>

              </div>

              {/* blog */}
              <div className="flex-1 h-full rounded-[15px] flex items-center justify-center bg-cover bg-center bg-light-pattern dark:bg-dark-pattern">

                {/* button */}
                <Link href="/blog" className=" text-black dark:text-white bg-[#EDEDED] dark:bg-[#151617] dark:border-0 font-semibold py-3  rounded-xl flex justify-center items-center w-[174px]" > Visit My Blog &nbsp; <i className='bx bx-spreadsheet' ></i> </Link>


              </div>


            </div>

          </div>

          {/* on mobile */}
          <div className="md:hidden flex flex-col h-full justify-around " >

            <div className="text-left ml-1" >
              <h2 className="font-bold text-xs sm:text-base md:text-base lg:text-2xl" >For Professionals</h2>
              <p className="text-xs sm:text-sm md:text-sm lg:base text-[#868686]" >here you can </p>
            </div>

            <Link href="/cv.pdf" target="_blank" download className=" text-black dark:text-white bg-[#EDEDED] dark:bg-[#151617] text-xs sm:text-sm font-bold py-3 rounded-xl flex justify-center items-center w-full" > Download Cv &nbsp; <i className='bx bxs-download' ></i> </Link>
          </div>

        </MotionDiv>

      </div>



    </div>



  );
}
