import React from 'react'
import './Title.css'

export default function Title() {
    const title: string = 'Peter Mujuni M.';
    const subTitle: string = "Full MERN-stack Engineer";
    const websiteTitle: string = "www.petermujuni.dk";

  return (
    <>
      <h1 className='title'>{title}</h1>
      <h2 className='title--subtitle'>{subTitle}</h2>
      <h3 className='title--website'>{websiteTitle}</h3>
    </>
  )
}
