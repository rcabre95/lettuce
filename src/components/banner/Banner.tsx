import React from 'react'

export default function Banner() {
  return (
    <div className={`hidden md:flex md:flex-row md:w-full md:h-72`}>
      <img className={`w-7/12`} src="/src/assets/up-47.jpg" alt="food image" />
      <img className={`w-4/12`} src="/src/assets/Aba_VillageSalad.jpg" alt="salad" />
    </div>
  )
}
