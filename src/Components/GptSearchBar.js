import React from 'react'
import lang from './lauguageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
 

    <div className='pt-[10%] flex justify-center'>
        
        <form className=' w-1/2 bg-black grid grid-cols-12 z-10  '>
            <input type='text' className='p-4 m-4 col-span-9  border-solid border-2 border-black ' size={70} placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-2 col-span-3 px-4 m-4 rounded-lg  bg-red-500 text-white'>{lang[langKey].search}</button> 
        </form>
    </div>
  )
}

export default GptSearchBar