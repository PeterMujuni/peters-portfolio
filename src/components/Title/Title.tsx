import React from 'react'
import './Title.css'

export default function Title() {
    const title: string = 'Peter Mujuni Mwebesa';
    const subTitle: string = "Full stack Developer";
    const websiteTitle: string = "www.petermujuni.dk";

  return (
    <>
      <h1 className='title'>{title}</h1>
      <h2 className='title--subtitle'>{subTitle}</h2>
      <h3 className='title--website'>{websiteTitle}</h3>
    </>
  )
}
