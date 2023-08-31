import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <P className='py-4'>Come experience the very pinnacle of Caribbean all-inclusive vacations for couples at BEACHES Resorts. Our Luxury beach resorts, set along the most gorgeous tropical settings and exquisite BEACHES in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and Curacao, feature unlimited gourment dining, unique bar serving premium liquors and wines, and very land and water sport, including complimentary green fees at our golf resorts and certified scuba diving at most resorts. if you are planning a wedding, BEACHES is the leader in Caribbean destinations weddings and honeymoon packages.</P>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <RiCustomerService2Fill size={50} />
                    </button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <P className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</P>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <MdOutlineTravelExplore size={50} />
                    </button>
                    <div>
                        <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
                        <P className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</P>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Search