import React from 'react'
import './Title.css'

export default function Title() {
    const title = 'Peter Mujuni Mwebesa'
  return (
    <>
      <h1 className='title'>{title}</h1>
      <h2 className='title--subtitle'>Full stack Developer</h2>
      <h3 className='title--website'>www.petermujuni.dk</h3>
    </>
  )
}
