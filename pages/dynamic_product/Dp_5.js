import React from 'react'
import Link from 'next/link'

function Dp_5() {
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
        <img className="object-center p-10 pt-24 " src="https://m.media-amazon.com/images/I/51zb2RLO-hS.jpg" alt="Girl in a jacket" width="500" height="600"></img>

      </div>

      <div className='text-2xl w-96 mt-40 ml-14 '>
        <p>Offbeat®- Ripjaw Alpha Gaming Series 2.4gh Wireless Rechargeable, 8D Silent Clicks, DPI 1600,2400,3200 Mouse for Pc/Laptop/Smart TV/Mac</p>
        <p className='text-red-700 text-sm mt-3'>Brand:Vero Forza</p>
        <p className='font-bold'>$07</p>
        <p className='text-xs text-zinc-500'>MRP: $09</p>
        <button className='full border-2 w-80 rounded-xl bg-black text-white hover:shadow-xl'>BUY</button>
      </div>
      </div>
    </div>
  )
}

export default Dp_5