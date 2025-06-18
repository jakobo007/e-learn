import React from 'react'

const Title = ({subTitle, title}) => {
  return (
    <div className='title text-center uppercase'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='text-2xl  text-[#000f38] normal-case font-semibold'>{subTitle}</p>
    </div>
  )
}

export default Title
