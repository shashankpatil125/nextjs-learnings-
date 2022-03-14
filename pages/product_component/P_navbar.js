import React from 'react'
import Link from 'next/link'

function P_navbar() {
  return (
    <ul className="flex w-full bg-slate-500 fixed">
      <li className="mr-6 ml-6  my-4 text-lg">
        <Link href='/'>
        <a href="#">Home</a>
        </Link>
      </li>
      <li className="mr-6 my-4 text-lg">
        <a href="#">Products</a>
      </li>
      {/* <li className="mr-6">
        <button className= " text-right my-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 px-4 border-b-4 ml-80 border-black hover:border-blue-500 rounded">Like Us</button>
      </li>  */}
    </ul>
  )
}

export default P_navbar