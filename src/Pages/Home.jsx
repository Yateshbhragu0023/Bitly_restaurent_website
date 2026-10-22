import React from 'react'
import image1 from "../assets/Images/feat-img1.jpg"
import image2 from "../assets/Images/feat-img2.jpg"
import image3 from "../assets/Images/feat-img3.jpg"
import image4 from "../assets/Images/feat-img4.png"
import healtpng from "../assets/Images/sub.png"
import gallery1 from "../assets/Images/gallery-img1.jpg"
import gallery2 from "../assets/Images/gallery-img2.jpg"
import gallery3 from "../assets/Images/gallery-img3.jpg"
import chef1 from "../assets/Images/team-img1.jpg"
import chef2 from "../assets/Images/team-img2.jpg"
import chef3 from "../assets/Images/team-img3.jpg"
import blog1 from "../assets/Images/blog-img1.jpg"
import blog2 from "../assets/Images/blog-img2.jpg"
import blog3 from "../assets/Images/blog-img3.jpg"
import Bookingbanner from "../assets/Images/booking-bg.jpg"
import { motion, spring } from "framer-motion"
import { CiUser } from "react-icons/ci";
import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa'
import Slider from './Slider'

export default function Home() {

  const chef = [
    {
      "chef": chef1,
      "name": "gopesh bhragu",
      "post": "main"
    },
    {
      "chef": chef2,
      "name": "ajeet bhragu",
      "post": "junior"
    },
    {
      "chef": chef3,
      "name": "Ashik bhragu",
      "post": "junior"
    }
  ]

  const bookingimg = {
    backgroundImage: `url(${Bookingbanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }


  return (
    <section className=' bg-[#2c423f] py-10 '>
      <div className='max-w-7xl px-8 mx-auto'>
        {/* enjoy yourfood */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10 py-7'>
          {/* 1st section */}
          <div className='col-span-1 space-y-7 hidden md:block'>
            <div className='flex gap-4'>
              <div ><motion.img
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.2

                }}
                className='rounded-t-full w-[180px]' src={image1} alt="" /></div>
              <div><motion.img
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.4

                }}
                className='rounded-t-full w-[180px]' src={image2} alt="" /></div>
            </div>
            <div >
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.3

                }}
                className=' w-full' src={image3} alt="" />
            </div>
          </div>
          {/* second section  */}
          <div className=' place-items-center items-center text-white'>
            <div className='flex items-center gap-4'>
              <div className='w-[50px] h-[1px] bg-yellow-600'></div>
              <motion.h1 initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2

                }} className='text-yellow-600 text-xl md:text-2xl'>Enjoy Your Food</motion.h1>
              <div className='w-[50px] h-[1px] bg-yellow-600'></div>
            </div>
            <h1 className='text-4xl text-center px-6 mt-4'>Pure Pleasure On every plate</h1>
            <motion.p initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                delay: 0.4

              }} className='text-center text-xl my-6 leading-normal px-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore autem accusantium blanditiis pariatur voluptates ut deleniti at labore unde maiores.</motion.p>
            <div >
              <motion.button initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5

                }} className='px-8 border-yellow-600 text-yellow-600 text-xl cursor-pointer hover:text-white hover:bg-yellow-600 duration-300 mt-10 text-center p-3 border '>Contact Us</motion.button>
            </div>
          </div>
          {/* third section  */}
          <div className='pt-3 items-center  xl:block md:hidden flex justify-center'>
            <motion.img initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                delay: 0.5

              }} src={image4} alt="" />
          </div>
        </div>

        {/*Food menu  */}
        <div className='items-center place-items-center py-10 mt-12 md:mt-20 space-y-11'>
          <div className='place-items-center text-white space-y-4'>
            <div className='flex gap-3 items-center'>
              <div className='w-[80px] h-[1px] bg-yellow-600'></div>
              <motion.h1 initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4

                }} className='text-yellow-600 text-xl md:text-2xl'>Enjoy Your Food</motion.h1>
              <div className='w-[80px] h-[1px] bg-yellow-600'></div>
            </div>
            <motion.h2 initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "motion",
                damping: 30,
                delay: 0.6

              }} className='text-3xl md:text-5xl '>Choose Your Food</motion.h2>
          </div>
          {/* lobaster */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "motion",
              delay: 0.4

            }}
            className='place-items-center border-t w-full border-t-gray-500 py-4 space-y-4 '>
            <h1 className='text-6xl opacity-30 md:text-9xl  text-white'>Lobaster</h1>
            <h1 className='text-xl md:text-3xl opacity-30 text-white'>Mix Saled And drinks</h1>
          </motion.div>
          {/* chicken */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "motion",
              delay: 0.5

            }}
            className='place-items-center border-t w-full border-t-gray-500 py-4 space-y-4 '>
            <h1 className='text-6xl opacity-30 md:text-9xl text-white'>Chicken</h1>
            <h1 className='text-xl opacity-30 md:3xl text-white'>Mix Saled And soft drinks</h1>
          </motion.div>
          {/* rissoto */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "motion",
              delay: 0.6

            }}
            className='place-items-center border-t w-full border-t-gray-500 py-4 space-y-4 '>
            <h1 className='text-6xl opacity-30 md:text-9xl text-white'>Rossito</h1>
            <h1 className=' text-xl md:text-3xl opacity-30 text-white'>Mixed soft drinks</h1>
          </motion.div>
          {/* button */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "motion",
              delay: 0.4

            }}
            className='border-t place-items-center  w-full border-t-gray-500 py-14 space-y-4 '>
            <div>
              <button className='border border-yellow-600 hover:text-white hover:bg-yellow-600 duration-300 text-yellow-600 px-4  md:px-6 p-2 md:p-3 text-xl uppercase'>View All Menu Item</button>
            </div>
          </motion.div>

        </div>

        {/* Romantic dinner  */}
        <div className='  place-items-center py-20 rounded-md bg-white'>
          <div className='relative'>
            <div className='md:place-items-center  text-center space-y-6'>
              <div className='place-items-center'>
                <img src={healtpng} alt="" />
              </div>
              <h1 className='text-4xl md:text-5xl font-normal  font-serif text-[#496662]'>Romantic dinner</h1>
            </div>
          </div>
          {/* images */}
          <div className=' grid grid-cols-1 pt-10 sm:px-2 md:px-5 px-2 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full '>

            <div> <img src={gallery1} className='rounded-lg' /></div>
            <div> <img src={gallery2} className='rounded-lg' /></div>
            <div> <img src={gallery3} className='rounded-lg' /></div>
          </div>
        </div>
        {/* slider */}
        <div className='place-items-center pt-10 mt-10 md:h-[500px] h-[400px]  bg-[#2c423f]'>
          <div>
              <Slider/>
          </div>
        </div>
        {/* Our Chef */}
        <div className='place-items-center w-full py-10 mt-20 bg-white rounded-lg '>
          <div className=' place-items-center'>
            <div className='flex gap-3 items-center'>
              <div className='w-[80px] h-[1px] bg-yellow-600'></div>
              <motion.h1 initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4

                }} className='text-yellow-600 text-xl md:text-2xl'>Our chef</motion.h1>
              <div className='w-[80px] h-[1px] bg-yellow-600'></div>
            </div>
            <motion.h2 initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "motion",
                damping: 30,
                delay: 0.6

              }} className='text-3xl text-[#496662] mt-3 md:text-4xl '>The Fly & Fine Chefs</motion.h2>
          </div>
          <div className='text-[#2c423f] grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 pt-10 gap-4 '>
            {
              chef.map(
                (data, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.5

                      }}
                      className='item-center text-center px-4 md:mt-8 mt-0'>
                      <img className=' rounded-md hover:rounded-t-full hover:duration-1000 hover:ease-in instant-reset ' src={data.chef} alt="" />
                      <h1 className='text-3xl pt-3'>{data.name}</h1>
                      <h1>{data.post}</h1>
                    </motion.div>
                  )

                }
              )
            }

          </div>
        </div>
      </div>
      {/* book table banner */}
      <div style={bookingimg} className='mt-24 w-full '>
        <div className='text-white bg-gray-800/50 md:p-24 p-12 w-full'>
          <div className='place-items-center text-center '>
            <div className='flex md:gap-4 gap-1 items-center'>
              <div className='w-[80px] h-[1px] bg-yellow-600'></div>
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4

                }} className='text-yellow-600 text-xl mt-0  md:text-2xl'>book now</motion.h1>
              <div className='w-[80px] h-[1px] bg-yellow-600'></div>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "motion",
                damping: 30,
                delay: 0.6

              }} className='text-3xl md:text-5xl '>Choose Your Food</motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "motion",
              delay: 0.4

            }}
            className=' place-items-center  w-full py-14 space-y-4 '>
            <div>
              <button className='border border-yellow-600 hover:bg-yellow-600 hover:text-white duration-400  text-yellow-600 px-4  md:px-6 p-2 md:p-3 text-xl uppercase'>Book Table now</button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* opening time */}
      <div className=' py-20 mx-auto  mt-10 md:px-14 px-5 text-center md:text-start max-w-7xl'>
        <div className=' grid md:grid-cols-2 mx-auto grid-cols-1 gap-18'>
          {/* text */}
          <div className='text-white space-y-8 '>
            <h1 className='text-5xl'>
              Join Us During These Opening Time
            </h1>
            <p className='text-xl text-gray-200 font-semibold'>
              Join us during our opening hours for a memorable dining experience filled with delicious food, warm ambiance, and friendly service.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "motion",
                delay: 0.4

              }}
              className=' place-items-center  w-full  space-y-4 '>
              <button className='border border-yellow-600 hover:bg-yellow-600 hover:text-white duration-400  text-yellow-600 px-4  md:px-6 p-2 md:p-3 text-xl uppercase'>Contact Us</button>
            </motion.div>
            <div>
              <motion.img
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "motion",
                  delay: 0.5

                }}
                src={chef3} className='w-full md:h-[500px] sm:h-[400px]' alt="" />
            </div>
          </div>
          {/* timing */}
          <div className=' md:pl-10 md:ml-18 ml-0 mt-7 content-center md:mt-0'>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "motion",
                delay: 0.4

              }}
              className=' border text-white border-gray-400 px-12 p-8 space-y-6'>
              <h1 className='text-3xl'>Opening Time</h1>
              <div className='flex justify-between border-b border-dashed py-6'>
                <h1>Monday</h1>
                <h1>10:00AM-07:00PM</h1>
              </div>
              <div className='flex justify-between border-b border-dashed pb-6'>
                <h1>Tuesday</h1>
                <h1>10:00AM-07:00PM</h1>
              </div>
              <div className='flex justify-between border-b border-dashed pb-6'>
                <h1>wednesday</h1>
                <h1>10:00AM-06:30PM</h1>
              </div>
              <div className='flex justify-between border-b border-dashed pb-6'>
                <h1>thursday</h1>
                <h1>10:00AM-07:30PM</h1>
              </div>
              <div className='flex justify-between border-b border-dashed pb-6'>
                <h1>friday</h1>
                <h1>10:00AM-08:00PM</h1>
              </div>
              <div className='flex justify-between border-b border-dashed pb-6'>
                <h1>Saturday</h1>
                <h1>10:00AM-06:00PM</h1>
              </div>
              <div className='flex justify-between  pb-6'>
                <h1>Sunday</h1>
                <h1 className='text-yellow-400'>Closed</h1>
              </div>
            </ motion.div>
          </div>

        </div>
      </div>
      {/* blog post section */}
      <div className='bg-white place-items-center px-8 py-12 '>
        <div className='max-w-7xl'>
          {/* blog text */}
          <div className='place-items-center text-center '>
            <div className='flex md:gap-4 gap-1 items-center'>
              <div className='w-[80px] h-[1px] bg-yellow-600'></div>
              <motion.h1
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4

                }} className='text-yellow-600 text-xl mt-0  md:text-2xl'>Latest blog </motion.h1>
              <div className='w-[80px] h-[1px] bg-yellow-600'></div>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "motion",
                damping: 30,
                delay: 0.6

              }} className='text-3xl text-[#496662] md:text-5xl '>Our Recent Posts</motion.h2>
          </div>
          {/* blog post */}
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 py-10 mt-9'>
            <div className='space-y-5'>
              <img src={blog1} alt="" />
              <div className='flex gap-8' >
                <h1 className='flex text-xl gap-2 items-center text-[#496662] font-semibold'><span><FaRegUser /></span> By john </h1>
                <h1 className='flex text-xl gap-2 items-center text-[#496662] font-semibold'><span><FaRegCalendarAlt /></span> August 23, 2025 </h1>
              </div>
              <h1 className='text-3xl text-[#496662] font-serif hover:text-yellow-500'>Easy summer Dishesh To keep You Cool  And full</h1>
              {/* Read more */}
              <div className='flex text-center border-t border-t-gray-500 border-opacity-35 py-6 place-items-center gap-3'>
                <h1 className='text-xl text-[#496662] uppercase'>read more</h1>
                <div className='h-[2px] w-16 bg-[#496662]'></div>
              </div>
            </div>
            <div className='space-y-5'>
              <img src={blog2} alt="" />
              <div className='flex gap-8' >
                <h1 className='flex text-xl gap-2 items-center text-[#496662] font-semibold'><span><FaRegUser /></span> By john </h1>
                <h1 className='flex text-xl gap-2 items-center text-[#496662] font-semibold'><span><FaRegCalendarAlt /></span> May 19, 2025 </h1>
              </div>
              <h1 className='text-3xl text-[#496662] font-serif hover:text-yellow-500'>A day in the life of our head chef at delhi</h1>
              {/* Read more */}
              <div className='flex text-center border-t border-t-gray-500 border-opacity-35 py-6 place-items-center gap-3'>
                <h1 className='text-xl text-[#496662] uppercase'>read more</h1>
                <div className='h-[2px] w-16 bg-[#496662]'></div>
              </div>
            </div>

            <div className='space-y-5'>
              <img src={blog3} alt="" />
              <div className='flex gap-8' >
                <h1 className='flex text-xl gap-2 items-center text-[#496662] font-semibold'><span><FaRegUser /></span> By Gopesh </h1>
                <h1 className='flex text-xl gap-2 items-center text-[#496662] font-semibold'><span><FaRegCalendarAlt /></span> April 05, 2025 </h1>
              </div>
              <h1 className='text-3xl text-[#496662] font-serif hover:text-yellow-500'>The meditrian influence Behind our new menu items</h1>
              {/* Read more */}
              <div className='flex text-center border-t border-t-gray-500 border-opacity-35 py-6 place-items-center gap-3'>
                <h1 className='text-xl text-[#496662] uppercase'>read more</h1>
                <div className='h-[2px] w-16 bg-[#496662]'></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  )
}
