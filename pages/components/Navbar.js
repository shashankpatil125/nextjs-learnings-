import React from 'react'

function Navbar() {
  return (
    <ul class="flex w-full bg-slate-500 fixed">
      <li class="mr-6 ml-6  my-4 text-lg">
        <a href="#">Explore</a>
      </li>
      <li class="mr-6 my-4 text-lg">
        <a href="#">Manifesto</a>
      </li>
      <li class="mr-6 my-4 text-lg">
        <a href="#">Developers</a>
      </li>
      <li class="mr-6 my-4 text-lg">
        <a href="#">Zine</a>
      </li>
      <li class="mr-6 my-4 text-lg">
        <input class="rounded-lg px-2 w-96 h-8" type="text" placeholder="Search The Metaverse"></input>
      </li>
      <li class="mr-6">
        <button class= " text-right my-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 px-4 border-b-4 ml-80 border-black hover:border-blue-500 rounded">Like Us</button>
      </li> 
    </ul>
  )
}

export default Navbar