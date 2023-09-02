import React from 'react'

const sliderData = [
    {
        url: "https://media.istockphoto.com/id/530717631/photo/oia-sunset-santorini-greece.jpg?s=612x612&w=0&k=20&c=x-YLTgsMPVLiDbNfdI912MCETsMj6dzlW8q9d9-YPEY="
    },
    {
        url: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFoYW1hc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVuaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        url: "https://images.unsplash.com/photo-1628531895969-df353541bafe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8emFuemliYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        url: "https://images.unsplash.com/photo-1636728157814-17e3dd6cc94c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFyYmFkb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }
]

const Carousel = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        {
            sliderData.map((item, index) => (
                <div>
                    <imag className='w-full rounded-md' src={item.url} alt='/'/>'
                </div>
            ))
        }
    </div>
  )
}

export default Carousel