  import React, { useState } from 'react'
  import { useSpring, animated } from 'react-spring';
  import { useDrag } from '@use-gesture/react';

  import dice_1 from '../assets/dice_1.png'
  import dice_2 from '../assets/dice_2.png'
  import dice_3 from '../assets/dice_3.png'
  import dice_4 from '../assets/dice_4.png'
  import dice_5 from '../assets/dice_5.png'
  import dice_6 from '../assets/dice_6.png'

  const Game = () => {

    const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));

    const bind = useDrag((state) => {
      const [mx, my] = state.offset;
      set({ x: mx, y: my });
    });


    const images = [
      dice_1,
      dice_2,
      dice_3,
      dice_4,
      dice_5,
      dice_6
    ];

    const numbers = [1, 2, 3, 4, 5, 6]
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [randomImage, setRandomImage] = useState(images[0]);
    const [score, setScore] = useState(0);
    const [isSelected, setIsSelected] = useState(false)

    const handleSelectedNumber = (number) => {
      setSelectedNumber(number)
      setIsSelected(false)
    }

    const rollTheDice = () => {
      if (selectedNumber) {
        const imagenumber = Math.floor(Math.random() * 6)
        setRandomImage(images[imagenumber])
        console.log(imagenumber)
        if (selectedNumber === imagenumber + 1) {
          setScore(score + imagenumber + 1)
        }
        else {
          setScore(score - 2)
        }
        setSelectedNumber(null)
      }
      else {
        setIsSelected(true)
      }
    }

    const resetScore = () => {
      setScore(0)
    }

    return (
      <div className='max-h-[100vh] max-w-[100vw] flex flex-col items-center justify-between select-none'>
        <h2 className='text-red-400 min-h-8 text-right w-full px-14 mt-4 text-xl'>{isSelected ? "You have not selected any number" : ""}</h2>
        <div className='h-[20v] flex justify-between px-14 w-full'>
          <div className='flex flex-col items-center justify-end'>
            <h1 className='text-[6vw] leading-none font-semibold'>{score}</h1>
            <h3 className='capitalize text-xl font-semibold'>total score</h3>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex gap-3 pt-1'>
              {numbers.map((number, index) => (
                <div className={selectedNumber === number ? "text-4xl font-bold border-2 border-black flex items-center justify-center h-16 w-16 cursor-pointer bg-black text-white" : "text-4xl font-bold border-2 border-black flex items-center justify-center h-16 w-16 cursor-pointer"} key={index} onClick={() => { handleSelectedNumber(number) }}>
                  {number}
                </div>
              ))}
            </div>
            <h3 className='font-extrabold capitalize text-xl text-right'>select number</h3>
          </div>
        </div>
        <div className='min-h-[80vh] flex justify-center flex-col gap-2 items-center'>
          <img className='h-[14vw]' src={randomImage} alt="" onClick={rollTheDice} />
          <h3 className='text-xl font-semibold capitalize'>click on dise to roll</h3>
          <button className='border-black border-2 px-10 py-1 rounded-sm capitalize font-bold' onClick={resetScore}>reset score</button>
          <button className='border-black border-2 px-10 py-1 rounded-sm capitalize font-bold bg-black text-white'>show rules</button>
        </div>
        <animated.div {...bind()} style={{x,y}} className='bg-gray-300 w-80 h-60 absolute right-10 top-60 rounded-md p-5 shadow-md select-none cursor-pointer overflow-ellipsis'>
          <h2 className='text-xl font-bold' >How to play dice game</h2>
          <h5 className='font-semibold'>Select any number</h5>
          <h5 className='font-semibold'>Click on dice image
            <h5 className='font-semibold'>after click on  dice  if selected number is equal to dice number you will get same point as dice if you get wrong guess then  2 point will be dedcuted </h5>
          </h5>
        </animated.div>
      </div>
    )
  }

  export default Game
