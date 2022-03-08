import React from 'react'
import '../Styles/title.scss'
import heart from '../Assets/heart.svg'
import chair from '../Assets/chairs.svg'

const Title = () => {
  return (
    <div
      className='title ml-14 mt-10 flex justify-center flex-col items-start pl-10 relative'
      style={{
        background: 'linear-gradient(93.4deg, #6069D6 5.1%, #272F98 100%)',
      }}
    >
      <img
        src={chair}
        alt=''
        className='absolute right-[-8rem] bottom-[-0rem]'
      />
      <span className='p-4 text-[#D7AC00] text-2xl font-bold'>
        Our Mentored Grads
      </span>
      <span className='p-4 text-[#64EFC7] text-2xl font-bold'>
        Your company
      </span>
      <div className='p-4 flex justify-start'>
        <span className=' text-[#ffffff] text-2xl font-bold pr-4'>
          Match made in the Corporate Heavens
        </span>
        <img src={heart} alt='' />
      </div>
    </div>
  )
}

export default Title
