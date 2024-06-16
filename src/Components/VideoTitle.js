import React from 'react'

const VideoTitle = ({title,description,image_url}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-20 px-12 absolute bg-gradient-to-r from-black'>
      <img src={image_url}/>
      <h1 className='text-6xl font-bold text-white'>{title}</h1>
      <p className='py-6 text-lg w-1/4 text-white'>{description}</p>
      <div className='flex items-center gap-2'>
      <button className='bg-white text-black font-bold p-2 px-10 text-xl rounded hover:bg-opacity-70'><i className="fa-solid fa-play"></i> Play</button>
      <button className='bg-gray-600 text-white p-2 px-10 text-xl rounded bg-opacity-50 '><i class="fa-solid fa-circle-info"></i> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle