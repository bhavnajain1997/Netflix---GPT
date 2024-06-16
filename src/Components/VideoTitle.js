import React from 'react'

const VideoTitle = ({title,description,image_url}) => {
  return (
    <div className='pt-36 px-12'>
      <img src={image_url}/>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{description}</p>
      <div className='flex items-center gap-2'>
      <button className='bg-gray-500 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50'><i className="fa-solid fa-play"></i> Play</button>
      <button className='bg-gray-600 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50 '>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle