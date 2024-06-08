import { motion, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap'
import React, { useState } from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation()]

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }
    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-[50px]'>
                <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="card-container relative w-1/2 h-[75vh]">
                        <h1 className='left-full flex -translate-x-[50%] top-1/2 -translate-y-[50%] text-[#CDEA68] absolute z-[9] leading-none tracking-tighter text-8xl overflow-hidden'>{"FYDE".split('').map((item, index) => (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={cards[0]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}
                                className='inline-block'>
                                {item}
                            </motion.span>
                        ))}</h1>
                        <div className="card w-full h-full bg-[#CBCBCD] rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" className='w-full h-full bg-cover' />
                        </div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="card-container w-1/2 h-[75vh] relative">
                        <h1 className='right-full flex translate-x-[50%] top-1/2 -translate-y-[50%] text-[#CDEA68] absolute z-[9] leading-none tracking-tighter text-8xl overflow-hidden'>{"VISE".split('').map((item, index) => (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={cards[1]}
                                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .1 }}
                                className='inline-block'>
                                {item}
                            </motion.span>
                        ))}</h1>
                        <div className="card w-full  h-full rounded-xl bg-[#19181E] ">
                            <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" className='w-full h-full bg-cover' />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Featured