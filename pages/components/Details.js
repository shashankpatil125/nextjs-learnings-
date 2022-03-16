import { useState } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link';

function Details() {
  const [usedisplay, setusediplay] = useState(false);
  const enterd = () => {
    setusediplay(true)
  }


  const router = useRouter();
  return (
    <div className="  bg-slate-300 p-6">

      <button onClick={enterd} className=" text-right my-2 bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">More accessories</button>
      <Link href="/productdetails">
        <button className=" text-right my-2 bg-neutral-900 hover:bg-neutral-700 text-white font-bold ml-4 py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">Best seller</button>
      </Link>

      <div id="myModal" className={usedisplay ? "" : "hidden" + " overflow-auto"}>
        <div className='flex mt-6'>
          <div className='w-56'>
            <image className="  p-4  h-56 w-56 bg-white rounded-xl" src="https://m.media-amazon.com/images/I/71wLsMcxA7L._SX679_.jpg" alt="Girl in a jacket" width="500" height="600"></image>
            <p className='text-gray-700'>VOYEE WE-07P Wireless PC Controller, Game Controller for PC PS3 PS2 Dualshock Joystick for Laptop PC Gaming, Wireless PC Gamepad (Red)</p>
            <div className=''>
              <button className="w-56 text-center my-2 bg-neutral-900 hover:bg-neutral-700 text-orange-600 font-bold  py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">Buy product</button>
              <Link href="/dynamic_product/Dp_1">
                <button className="w-56 text-center my-2 bg-neutral-900 hover:bg-neutral-700 text-orange-600 font-bold  py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">Details</button>
              </Link>
            </div>
          </div>

          <div className='w-56 ml-6'>
            <image className="  p-4  h-56 w-56 bg-white rounded-xl" src="https://m.media-amazon.com/images/I/71gyRfzBAKL._AC_SS450_.jpg" alt="Girl in a jacket" width="500" height="600"></image>
            <p className='text-gray-700'>Cosmic Byte CB-GK-17 Galactic Wired Gaming Keyboard with Aluminium Body, 7 Color RGB Backlit with Effects, Anti-Ghosting (Black)</p>
            <div className=''>
              <button className="w-56 text-center my-2 bg-neutral-900 hover:bg-neutral-700 text-orange-600 font-bold  py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">Buy product</button>
              <Link href="/dynamic_product/Dp_2">
                <button className="w-56 text-center my-2 bg-neutral-900 hover:bg-neutral-700 text-orange-600 font-bold  py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">Details</button>
              </Link>
            </div>
          </div>

          <div className='w-56 ml-6'>
            <image className="  p-4  h-56 w-56 bg-white rounded-xl" src="https://m.media-amazon.com/images/I/81gGxv85cyL._SX679_.jpg" alt="Girl in a jacket" width="500" height="600"></image>
            <p className='text-gray-700'>
              Roll over image to zoom in
              ASUS TUF Gaming GeForce GTX 1650 4GB GDDR6 RAM Non LHR Graphic Card 128 Bit 896 CUDA Cores</p>
            <div className=''>
              <button className="w-56 text-center my-2 bg-neutral-900 hover:bg-neutral-700 text-orange-600 font-bold  py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">Buy product</button>
              <Link href="/dynamic_product/Dp_3">
                <button className="w-56 text-center my-2 bg-neutral-900 hover:bg-neutral-700 text-orange-600 font-bold  py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">Details</button>
              </Link>
            </div>
          </div>

          <div className='w-56 ml-6'>
            <image className="  p-4  h-56 w-56 bg-white rounded-xl" src="https://m.media-amazon.com/images/I/71h7F81EBoS._AC_UY327_FMwebp_QL65_.jpg" alt="Girl in a jacket" width="500" height="600"></image>
            <p className='text-gray-700'>Dell G15 Intel i5-10500H Gaming Laptop, 16GB DDR4, 512GB SSD, Win 10, NVIDIA GTX 1650 4GB GDDR6, 15.6 (39.62cm)</p>
            <div className=''>
              <button className="w-56 text-center my-2 bg-neutral-900 hover:bg-neutral-700 text-orange-600 font-bold  py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">Buy product</button>
              <Link href="/dynamic_product/DP_4">
                <button className="w-56 text-center my-2 bg-neutral-900 hover:bg-neutral-700 text-orange-600 font-bold  py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">Details</button>
              </Link>
            </div>
          </div>

          <div className='w-56 ml-6'>
            <image className="  p-4  h-56 w-56 bg-white rounded-xl" src="https://m.media-amazon.com/images/I/51zb2RLO-hS.jpg" alt="Girl in a jacket" width="500" height="600"></image>
            <p className='text-gray-700'>Offbeat®- Ripjaw Alpha Gaming Series 2.4gh Wireless Rechargeable, 8D Silent Clicks, DPI 1600,2400,3200 Mouse for Pc/Laptop/Smart TV/Mac</p>
            <div className=''>
              <button className="w-56 text-center my-2 bg-neutral-900 hover:bg-neutral-700 text-orange-600 font-bold  py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">Buy product</button>
              <Link href="/dynamic_product/Dp_5">
                <button className="w-56 text-center my-2 bg-neutral-900 hover:bg-neutral-700 text-orange-600 font-bold  py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">Details</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>


  )
}
export default Details