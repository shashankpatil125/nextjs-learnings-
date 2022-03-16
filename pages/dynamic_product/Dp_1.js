import React from 'react'
import Link from 'next/link'

function Dp_1() {
  return (
    <div>
      <ul className="flex w-full bg-slate-500 fixed">
        <li className="mr-6 ml-6  my-4 text-lg">
          <Link href='/'>
            <a href="#">Home</a>
          </Link>
        </li>
        <li className="mr-6 my-4 text-lg">
          <a href="#">Products</a>
        </li>

      </ul>
      
      <div className='flex'>
      <div>
        <image className="object-center p-10 pt-24 " src="https://m.media-amazon.com/images/I/71wLsMcxA7L._SX679_.jpg" alt="Girl in a jacket" width="500" height="600"></image>

      </div>

      <div className='text-2xl w-96 mt-40 ml-14 '>
        <p>VOYEE WE-07P Wireless PC Controller, Game Controller for PC PS3 PS2 Dualshock Joystick for Laptop PC Gaming, Wireless PC Gamepad (Red)</p>
        <p className='text-red-700 text-sm mt-3'>Brand:VOYEE</p>
        <p className='font-bold'>$17</p>
        <p className='text-xs text-zinc-500'>MRP: $21</p>
        <button className='full border-2 w-80 rounded-xl bg-black text-white hover:shadow-xl'>BUY</button>
      </div>
      </div>
    </div>
  )
}

export default Dp_1