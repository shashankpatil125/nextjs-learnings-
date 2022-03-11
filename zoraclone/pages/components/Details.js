import React from 'react'
import { useRouter } from 'next/router'

function Details() {
  const router= useRouter();
  return (
    <div class="text-center  bg-slate-100 p-8">
      <button class="border-2" onClick={() =>router.push("/")}> ENTER YOUR DETAILS HERE</button>

      <div id="myModal" class="hidden overflow-auto">
        <div class="p-20 w-80 border-2 mx-auto">
          <span class="float-right font-bold text-2xl">&times;</span>
          <p>Some text in the Modal..</p>
        </div>

      </div>

      
    </div>



  )
}
export default Details