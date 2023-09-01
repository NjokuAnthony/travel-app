import React from 'react'

const ChooseCard = (props) => {
  return (
    <div className='relative'>
        <img className='w-full h-full object-cover' src={props.img} alt='/' />
            <div classname='bg-gray-900/30 absolute top-0 w-full h-full left-0'>
                <p classname='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    {props.text}
                </p>
            </div>
    </div>
  )
}

export default ChooseCard