import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import products from "../../data/products.json"

function Dp_1() {
  
  const router= useRouter()
  const { pid } =router.query
  const pinfo=products[pid]
  
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
      {pinfo&&(
         <div className='flex'>
         <div>
           <img className="object-center p-10 pt-24 " src={pinfo.image} alt="Girl in a jacket" width="500" height="600"></img>
   
         </div>
   
         <div className='text-2xl w-96 mt-40 ml-14 '>
           <p>{ pinfo.name }</p>
           <p className='text-red-700 text-sm mt-3'>{ pinfo.brand}</p>
           <p className='font-bold'>{pinfo.price}</p>
           <p className='text-xs text-zinc-500'>MRP: {pinfo.oprice}</p>
           <button className='full border-2 w-80 rounded-xl bg-black text-white hover:shadow-xl'>BUY</button>
         </div>
         </div>
      )}
     
    </div>
  )
}

export default Dp_1