import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.6" className='w-full h-screen bg-zinc-900 pt-1'>
            <div className="text-struct mt-48 px-20">
                {/* <div className="masker">
                    <h1 className='uppercase leading-[5.5vw] tracking-tighter text-8xl font-["Founders Grotesk Condensed"] font-medium'>We Create</h1>
                </div>
                <div className="masker">
                    <h1 className='uppercase leading-[5.5vw] tracking-tighter text-8xl font-["Founders Grotesk Condensed"] font-medium'>Eye opening</h1>
                </div>
                <div className="masker">
                    <h1 className='uppercase leading-[5.5vw] tracking-tighter text-8xl font-["Founders Grotesk Condensed"] font-medium'>presentations</h1>
                </div> */}
                {/* corresponding way is to use jsx  */}
                {["We Create", "Eye opening", "presentations"].map((item, index) => {
                    return <div className="masker">
                        <div className="w-fit flex items-baseline">
                            {index === 1 && (
                                <motion.div initial={{ width: 0 }} animate={{width: "7vw"}} transition={{ease: [0.76,0, 0.24,1] , duration: 1}} className='w-[7vw] h-[4vw] bg-red-500'>
                                </motion.div>
                            )}
                            <h1 className='uppercase leading-[5.5vw] tracking-tighter text-[6vw] font-medium'>{item}</h1>
                        </div>
                    </div>
                })}
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "For public and private companies"].map((item, index) => (
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className='px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-md uppercase'>Start the project</div>
                    <div className="w-10 h-10 rounded-full border-[2px] border-zinc-500 flex items-center justify-center">
                        <span className="rotate-[45deg]"><FaArrowUpLong /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing