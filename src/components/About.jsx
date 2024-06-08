import React from 'react'

function About() {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-[4.2vw] leading-[4.4vw] tracking-tight'>
                Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </h1>
            <div className="w-full pt-10 border-t-[1px] border-[#a1b562] mt-20 flex gap-5">
                <div className='w-1/2'>
                    <h1 className='text-6xl'>Our Approach:</h1>
                    <button className='mt-10 px-10 py-6 bg-zinc-900 rounded-full text-white uppercase tracking-tight flex gap-10 items-center'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>
                <div className="w-1/2 h-[70vh] bg-[#a1b562] rounded-3xl"></div>
            </div>
        </div>
    )
}

export default About