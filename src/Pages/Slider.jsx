import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {

    const reviews = [
        {
            name: "Amit Sharma",
            role: "Startup Founder",
            text: "The team built a website that truly represents my brand. Clean design, fast loading, and mobile-friendly!",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Priya Verma",
            role: "Marketing Head",
            text: "Super impressed with their creativity and timely delivery. Definitely recommend them!",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Rohit Kumar",
            role: "E-commerce Owner",
            text: "My sales boosted after the redesign. The UI/UX was exactly what I wanted for my online store.",
            img: "https://randomuser.me/api/portraits/men/64.jpg",
        },
        {
            name: "Neha Singh",
            role: "Entrepreneur",
            text: "Loved the professional approach and clear communication. Will work again for future projects!",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
        },
    ];

    return (
        <div className="max-w-7xl  mx-auto bg-[#2C423F] rounded-sm  relative">
            <div className=' place-items-center'>
                <div className='flex gap-3 items-center'>
                    <div className='w-[80px] h-[1px] bg-yellow-600'></div>
                    <motion.h1 initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.4

                        }} className='text-yellow-600 text-xl md:text-2xl'>Our Customers review</motion.h1>
                    <div className='w-[80px] h-[1px] bg-yellow-600'></div>
                </div>
                <motion.h2 initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "motion",
                        damping: 30,
                        delay: 0.6

                    }} className='text-3xl text-[#496662] mt-3 md:text-4xl '>Our customers genuine feedback</motion.h2>
            </div>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3500 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="mt-6"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="backdrop-blur-3xl bg-white/5 my-4 hover:bg-[#2C423F] group border border-white/20 shadow-2xl rounded-3xl p-6 h-full flex flex-col justify-between text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500">
                            <img
                                src={review.img}
                                alt={review.name}
                                className="w-20  h-20 rounded-full mx-auto border-4 border-[#EAB308] mb-4"
                            />
                            <p className=" group-hover:text-white text-black italic mb-6">“{review.text}”</p>
                            <div>
                                <h3 className="group-hover:text-white text-lg font-semibold text-black">
                                    {review.name}
                                </h3>
                                <p className="group-hover:text-white text-sm text-[#EAB308]">{review.role}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}