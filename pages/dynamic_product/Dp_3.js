import React from 'react'
import Link from 'next/link'

function Dp_3() {
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
        <image className="object-center p-10 pt-24 " src="https://m.media-amazon.com/images/I/81gGxv85cyL._SX679_.jpg" alt="Girl in a jacket" width="500" height="600"></image>

      </div>

      <div className='text-2xl w-96 mt-40 ml-14 '>
        <p>Roll over image to zoom in
              ASUS TUF Gaming GeForce GTX 1650 4GB GDDR6 RAM Non LHR Graphic Card 128 Bit 896 CUDA Cores</p>
        <p className='text-red-700 text-sm mt-3'>Brand:ASUS</p>
        <p className='font-bold'>$99</p>
        <p className='text-xs text-zinc-500'>MRP: $150</p>
        <button className='full border-2 w-80 rounded-xl bg-black text-white hover:shadow-xl'>BUY</button>
      </div>
      </div>
    </div>
  )
}

export default Dp_3