import React from 'react'
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
import keywest from '../assets/keywest.jpg';
import maldives3 from '../assets/maldives3.jpg';
import ChooseCard from './ChooseCard';


const Choose = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <ChooseCard  picture={borabora} title='Bahamas' />
        <ChooseCard  picture={borabora2} title='Zanzibar' />
        <ChooseCard  picture={maldives} title='Maldives' />
        <ChooseCard  picture={maldives2} title='Ogbudu' />
        <ChooseCard  picture={keywest} title='Barbados' />
        <ChooseCard  picture={maldives3} title='Ibiza' />
    </div>
  )
}

export default Choose;