import React from 'react'

const Title = ({subTitle, title}) => {
  return (
    <div className='title text-center text-[#212EA0] uppercase'>
      <p>{subTitle}</p>
      <h2 className='text-4xl md:text-5xl text-[#000f38] normal-case font-semibold'>{title}</h2>
    </div>
  )
}

export default Title
