import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";



export default function Home() {

  const n = 5

  return (



    <div className=" h-screen max-w-6xl gap-4 mx-4 md:mx-4 lg:mx-auto flex flex-row items-center ">


      {/* col 1 */}
      <div className="flex h-[75%] flex-col gap-4 justify-center w-[45%] md:w-[30%]" >

        {/* card 1 mobile and desktop */}
        <div className="h-[40%] md:h-[75%] w-full rounded-[15px] bg-white dark:bg-[#1C1D1F] p-3 md:p-5 bg-cover bg-center bg-no-repeat border border-[#EDEDED] dark:border-0" style={{ backgroundImage: `url("me.png")` }}>

          <div className="relative w-full h-full "   >


            <div className="absolute top-0 text-left md:text-center w-full " >

              <h1 className="font-bold text-xs sm:text-base md:text-base lg:text-2xl" >Soufiane Hrittane</h1>
              <p className="text-xs sm:text-sm md:text-sm lg:base text-[#868686] " > welcome to my portfolio </p>

            </div>


            <div className="absolute bottom-0 md:top-1/2 md:-trangray-y-1/2 left-0 flex flex-col items-center">

              <FaXTwitter className="my-2 font-xs md:text-2xl " />
              <FaWhatsapp className="my-2 font-xs md:text-2xl " />
              <FaGithub className="my-2 font-xs md:text-2xl " />
              <FaInstagram className="my-2 font-xs md:text-2xl " />

            </div>


          </div>

        </div>

        {/* card2 */}
        <div className="h-[60%] md:h-[25%] w-full rounded-[15px] bg-white dark:bg-[#1C1D1F]  md:p-5 border border-[#EDEDED] dark:border-0 ">

          {/* on desktop */}
          <div className="hidden md:block h-full" >

            <div className="h-full flex flex-col items-center justify-center " >

              <h1 className="font-bold text-xs sm:text-base md:text-base lg:text-2xl" >For Professionals</h1>
              <p className="text-xs sm:text-sm md:text-sm lg:base text-[#868686] " > here you can </p>

              <a href="/cv.pdf" target="_blank" download className="text-black dark:text-white bg-[#EDEDED] dark:bg-[#151617] dark:border-0 font-semibold py-3 px-4 rounded-xl flex justify-center items-center w-[174px] mt-2 mx-auto "> Download Cv &nbsp; <i className='bx bxs-download' ></i> </a>

            </div>

          </div>


          {/* on mobile */}
          <div className=" flex sm:flex md:hidden lg:hidden xl:hidden flex-col h-full justify-around divide-y divide-slate-200 dark:divide-[#151617]" >


            <div className="w-full h-1/4 flex flex-col justify-center items-center " >

              {/* <SlBadge className="" size={30} /> */}
              <i className='bx bx-badge-check' ></i>
              <div className="text-center" >
                <h1 className="mr-2 text-sm font-bold" >Experience</h1>
                <p className="mr-2 text-[10px] mt-1" >100 + Projects</p>
              </div>



            </div>


            <div className="w-full h-1/4 flex flex-col justify-center items-center " >

              {/* <TfiBag className="" size={30} /> */}
              <i className='bx bx-briefcase-alt-2' ></i>
              <div className="text-center" >
                <h1 className="mr-2 text-sm font-bold" >Completed</h1>
                <p className="mr-2 text-[10px] mt-1" >10 Years Working</p>
              </div>

            </div>




            <div className="w-full h-1/4 flex flex-col justify-center items-center  " >


              {/* <FaRegSmileBeam className="" size={30} /> */}
              <i className='bx bx-like' ></i>
              <div className="text-center" >
                <h1 className="mr-2 text-sm font-bold " >Satisfaction</h1>
                <p className="mr-2 text-[10px] mt-1" >100 % satisfaction</p>
              </div>

            </div>





            <div className="w-full h-1/4 flex flex-col justify-center items-center " >

              {/* <BsHeadset className="" size={30} /> */}
              <i className='bx bx-support' ></i>
              <div className="text-center" >
                <h1 className="mr-2 text-sm font-bold " >Support</h1>
                <p className="mr-2 text-[10px] mt-1" >Online 24/7</p>
              </div>

            </div>

          </div>



        </div>

      </div>

      {/* col 2 */}
      <div className="flex h-[75%] flex-col gap-4 justify-center w-[55%] md:w-[70%] " >

        {/* upper row */}
        <div className="h-[80%] md:h-[60%] w-full rounded-[15px] flex flex-col md:flex-row gap-4">

          {/* card 3 */}
          <div className="h-[60%] w-[100%] md:h-full md:w-[60%] bg-white dark:bg-[#1C1D1F] rounded-[15px] p-3 md:p-5 border border-[#EDEDED] dark:border-0">


            {/* on desktop */}
            <div className="hidden md:flex md:flex-col md:h-full md:justify-between " >

              <h1 className="font-semibold  md:text-3xl lg:text-5xl md:leading-loose lg:leading-relaxed" >Hello <MdWavingHand style={{ display: "inline-flex" }} /> <br></br>my name is </h1>

              <div className="flex items-center">
                <hr className="flex-1 h-[1px] mx-auto bg-gray-400 border-0 rounded dark:bg-gray-700" />
                <h1 className=" font-semibold text-[#626161] text-[24px] " >&nbsp;&nbsp;Soufiane Hrittane</h1>
              </div>

              <p className="text-[#868686] text-sm  " >I'm creative Full Stack Developer based in Elhajeb Morocco, and I'm very passionate and dedicated to my work.</p>

              <a href="/contact" className=" text-black dark:text-white  bg-[#EDEDED] dark:bg-[#151617] dark:border-0  font-semibold py-3  rounded-xl flex justify-center items-center w-[174px] mt-3"  > Say Hello &nbsp; <i className='bx bxs-send' ></i>  </a>

            </div>


            {/* on mobile */}
            <div className=" md:hidden text-left h-full flex flex-col justify-between " >

              <h1 className="font-semibold text-xl leading-relaxed" >Hello <MdWavingHand style={{ display: "inline-flex" }} /> <br></br>my name is </h1>

              <h1 className=" font-semibold text-[#626161] text-base " >Soufiane Hrittane</h1>
              <hr className="w-full h-[1px] mx-auto  bg-gray-400 border-0 rounded  dark:bg-gray-700" />
              <p className="text-[#868686] text-[10px] font-medium " >I'm creative Full Stack Developer based in Elhajeb Morocco, and I'm very passionate and dedicated to my work.</p>

              <a href="/contact" className="bg-[#EDEDED] dark:bg-[#151617] text-black dark:text-white text-xs sm:text-sm font-bold py-3 rounded-xl flex justify-center items-center w-full "> Say Hello &nbsp; <i className='bx bxs-send' ></i>  </a>


            </div>


          </div>

          {/* card 4 */}
          <div className="h-[40%] w-[100%] md:h-full md:w-[40%] bg-white dark:bg-[#1C1D1F] rounded-[15px] p-3 md:px-10 md:py-5 border border-[#EDEDED] dark:border-0" >

            {/* on desktop */}
            <div className="hidden md:flex md:flex-col md:h-full md:justify-between items-center" >


              {/* intro */}
              <div className="text-center" >
                <h1 className="font-bold text-xs sm:text-base md:text-base lg:text-2xl" >Explore more</h1>
                <p className="text-xs sm:text-sm md:text-sm lg:base text-[#868686] " > at my blog </p>
              </div>

              {/* skeleton */}
              {[...Array(n)].map((e, i) =>

                <div key={i} className="flex flex-row w-full items-center justify-start  " >

                  <div className="bg-[#EFEFEF] dark:bg-[#2D2D2D] h-[30px] w-[20%] rounded mr-2" ></div>

                  <div className="flex flex-col w-full" >
                    <hr className="w-full h-[10px] mx-auto bg-[#EFEFEF] dark:bg-[#2D2D2D] border-0 rounded my-1" />
                    <hr className="w-[70%] h-[10px]  bg-[#EFEFEF] dark:bg-[#2D2D2D] border-0 rounded my-1" />
                  </div>

                </div>

              )}
              {/* button */}
              <a href="/blog" className=" text-black dark:text-white bg-[#EDEDED] dark:bg-[#151617] dark:border-0 font-semibold py-3  rounded-xl flex justify-center items-center w-[174px]" > Visit My Blog &nbsp; <i className='bx bx-spreadsheet' ></i> </a>

            </div>

            {/* on mobile */}
            <div className="md:hidden flex flex-col h-full justify-around" >


              <div className="text-left ml-1" >
                <h1 className="font-bold text-xs sm:text-base md:text-base lg:text-2xl" >Explore more</h1>
                <p className="text-xs sm:text-sm md:text-sm lg:base text-[#868686]" >at my blog </p>
              </div>

              <div className="flex flex-row w-full items-center justify-start ml-1" >

                <div className="bg-[#EFEFEF] dark:bg-[#2D2D2D] h-[30px] w-[20%] rounded mr-2" ></div>

                <div className="flex flex-col w-full " >
                  <hr className="w-full h-[10px] mx-auto bg-[#EFEFEF] dark:bg-[#2D2D2D] border-0 rounded my-1" />
                  <hr className="w-[70%] h-[10px]  bg-[#EFEFEF] dark:bg-[#2D2D2D] border-0 rounded my-1" />
                </div>

              </div>

              <a href="/blog" className="text-black dark:text-white bg-[#EDEDED] dark:bg-[#151617] text-xs sm:text-sm font-bold py-3 rounded-xl flex justify-center items-center w-full" > Visit My Blog &nbsp; <i className='bx bx-spreadsheet' ></i> </a>

            </div>


          </div>

        </div>

        {/* lower row */}
        <div className="h-[20%] p-3 md:p-0 md:h-[40%] w-full rounded-[15px] bg-white dark:bg-[#1C1D1F] border border-[#EDEDED] dark:border-0">


          {/* on desktop */}
          <div className="hidden  md:flex flex-col w-full h-full p-3 md:p-5 " >


            <div className="hidden md:block " >

              <h1 className="font-bold text-xs sm:text-base md:text-base lg:text-2xl" >About Me</h1>
              <p className="text-[10px] sm:text-sm md:text-sm lg:text-sm text-[#868686] mt-2  " > im a Full Stack Developer, I create web pages and mobile applications with great UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.</p>

            </div>


            <div className="hidden mt-2 md:flex flex-row flex-wrap gap-4 h-full " >


              <div className="border-[#EDEDED] dark:border-black dark:bg-[#151617] border w-1/4 flex-1 rounded-[15px] flex flex-col items-center justify-center py-2 my-3 ">
                <i className='bx bx-badge-check' ></i>
                <h1 className=" text-xs sm:text-xs md:text-[8px] lg:text-sm  font-bold mt-1" >Experience</h1>
                <p className=" text-xs sm:text-xs md:text-[8px] lg:text-sm mt-1" >10 Years Working</p>
              </div>

              <div className="border-[#EDEDED] dark:border-black dark:bg-[#151617] border w-1/4 flex-1 rounded-[15px] flex flex-col items-center justify-center py-2 my-3 ">
                <i className='bx bx-briefcase-alt-2' ></i>
                <h1 className=" text-xs sm:text-xs md:text-[8px] lg:text-sm  font-bold mt-1" >Completed</h1>
                <p className=" text-xs sm:text-xs md:text-[8px] lg:text-sm mt-1" >100 + Projects</p>
              </div>


              <div className="border-[#EDEDED] dark:border-black dark:bg-[#151617] border w-1/4 flex-1 rounded-[15px] flex flex-col items-center justify-center  py-2 my-3">
                <i className='bx bx-support' ></i>
                <h1 className=" text-xs sm:text-xs md:text-[8px] lg:text-sm  font-bold mt-1" >Support</h1>
                <p className=" text-xs sm:text-xs md:text-[8px] lg:text-sm mt-1" >Online 24/7</p>
              </div>

              <div className="border-[#EDEDED] dark:border-black dark:bg-[#151617] border w-1/4 flex-1 rounded-[15px] flex flex-col items-center justify-center  py-2 my-3">
                <i className='bx bx-like' ></i>
                <h1 className=" text-xs sm:text-xs md:text-[8px] lg:text-sm  font-bold mt-1" >Satisfaction</h1>
                <p className=" text-xs sm:text-xs md:text-[8px] lg:text-sm mt-1" >100 % guaranteed </p>
              </div>




            </div>


          </div>

          {/* on mobile */}
          <div className="md:hidden flex flex-col h-full justify-around" >

            <div className="text-left ml-1" >
              <h1 className="font-bold text-xs sm:text-base md:text-base lg:text-2xl" >For Professionals</h1>
              <p className="text-xs sm:text-sm md:text-sm lg:base text-[#868686]" >here you can </p>
            </div>

            <a href="/cv.pdf" target="_blank" download className=" text-black dark:text-white bg-[#EDEDED] dark:bg-[#151617] text-xs sm:text-sm font-bold py-3 rounded-xl flex justify-center items-center w-full" > Download Cv &nbsp; <i className='bx bxs-download' ></i> </a>
          </div>

        </div>

      </div>



    </div>



  );
}
