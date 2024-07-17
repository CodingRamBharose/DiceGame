import React from 'react'
import {useNavigate}  from 'react-router-dom'
import diceImg from '../assets/dices.png'

const LandingPage = () => {

  const navigate = useNavigate();
  const navigateToGamePage =()=>{
    navigate('/game')
  }
  return (
    <div className='flex justify-center items-center gap-[2vw] h-[100vh]'>
      <img src={diceImg} alt="" className='w-[30vw]' />
      <div className='flex flex-col items-end'>
        <h1 className='text-black font-bold text-[6vw] uppercase'>dice game</h1>
        <button className='capatalize text-white bg-black px-12 py-2 capitalize rounded-sm' onClick={navigateToGamePage}>play now</button>
      </div>
    </div>
  )
}

export default LandingPage
