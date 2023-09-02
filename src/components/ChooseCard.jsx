import React from 'react'

const ChooseCard = (props) => {
  return (
    <div className='relative'>
        <img className='w-full h-full object-cover' src={props.picture} alt='/' />
            <div classname='bg-gray-900/90 absolute top-0 w-full h-full left-0'>
                <p className='absolute right-4 bottom-4 text-2xl font-bold text-white'>
                    {props.title}
                </p>
            </div>
    </div>
  )
}

export default ChooseCard;