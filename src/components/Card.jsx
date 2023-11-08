import React from 'react'

export default function Card() {
  return (
    <div className='rounded-2xl border w-96 bg-[#F3E6C6]'>
      <img className='h-64 w-96 object-cover rounded-t-2xl' src="https://plus.unsplash.com/premium_photo-1665657351435-96c58da04fd1?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
      <div className='py-5 px-8'>
        <h2 className='text-2xl text-center'>Card Title</h2>
        <div className='text-xl flex'><img src='/details/map-marker.svg' alt='map-marker' /><span>Konum bilgisi</span></div>
        <div className='text-xl flex'><img src='/details/calendar.svg' alt='calendar' /><span>Tarih bilgisi</span></div>
        <button className='rounded-lg bg-[#E09870] px-2 py-1 active:opacity-90 text-xl w-full flex justify-between'><span>Minimum Fiyat</span><img src='/details/cart.svg' alt='cart' /></button>
      </div>
    </div>
  )
}
