import { useState } from 'react'
import React from 'react'
import {BsArrowRightSquareFill, BsArrowLeftSquareFill} from 'react-icons/bs'

const sliderData = [
    {
        url: "https://media.istockphoto.com/id/530717631/photo/oia-sunset-santorini-greece.jpg?s=612x612&w=0&k=20&c=x-YLTgsMPVLiDbNfdI912MCETsMj6dzlW8q9d9-YPEY="
    },
    {
        url: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFoYW1hc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        url: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        url: "https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        url: "https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
]

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;
    // console.log(length)


    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    };

    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    };

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center object-cover'>
        <BsArrowLeftSquareFill 
        onClick={prevSlide} 
        className='absolute top-[50%] text-3xl cursor-pointer left-8' 
        />

        <BsArrowRightSquareFill 
        onClick={nextSlide} 
        className='absolute top-[50%] text-3xl cursor-pointer right-8' 
        />

        {
            sliderData.map((item, index) => (
                <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                    {index === slide && (<img className='w-full rounded-md' src={item.url} alt='/' />)}
                </div>
            ))
        }
    </div>
  );
};

export default Carousel