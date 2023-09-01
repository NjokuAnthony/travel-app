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
    <div className='max-w-[1240px] mx-auto px-4 py-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <ChooseCard  img={borabora} text='Borabora' />
        <ChooseCard  img={borabora2} text='Zanzibar' />
        <ChooseCard  img={maldives} text='Maldives' />
        <ChooseCard  img={maldives2} text='Ogbudu Cattle Ranch' />
        <ChooseCard  img={keywest} text='Barbados' />
        <ChooseCard  img={maldives3} text='Ibiza' />
    </div>
  )
}

export default Choose;