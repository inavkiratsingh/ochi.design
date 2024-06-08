import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen flex items-center px-32 gap-5'>
            <div className="cardcontainer h-[50vh] w-1/2">
                <div className="relative card w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32' alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-white'>&copy;2019</button>
                </div>
            </div>
            <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
                <div className="relative card w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-32' alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-white'>&copy;2019</button></div>
                <div className="relative card w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-32' alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-white'>&copy;2019</button></div>
            </div>
        </div>
    )
}

export default Cards