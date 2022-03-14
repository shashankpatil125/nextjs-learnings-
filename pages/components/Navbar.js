import { useState } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link';



function Navbar() {

  
    const [usedisplay, setusediplay] = useState(false);
    const enterd = () => {
      setusediplay(true)
    }

    const router = useRouter();
  
  return (
    <ul className="flex w-full bg-slate-500 fixed">
      <li className="mr-6 ml-6  my-4 text-lg">
        <a href="#">Explore</a>
      </li>
      <li className="mr-6 my-4 text-lg">
        <a href="#">Manifesto</a>
      </li>
      <li className="mr-6 my-4 text-lg">
        <a href="#">Developers</a>
      </li>
      <li className="mr-6 my-4 text-lg">
        <a href="#">Zine</a>
      </li>
      <li className="mr-6 my-4 text-lg">
        <input className="rounded-lg px-2 w-80 h-8" type="text" placeholder="Search The Metaverse"></input>
      </li>
      <li className="mr-6">
        <Link href="/login">
        <button onClick={enterd} className= " text-right my-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold py-2 px-4 border-b-4 ml-80 border-black hover:border-blue-500 rounded">LOG IN/SIGN UP</button>
        </Link>
      </li> 
    </ul>
  )
}

export default Navbar