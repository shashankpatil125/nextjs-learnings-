import React from 'react'

function Details() {
  return (
    <div class="text-center m-7">
      <button class="border-2">ENTER YOUR DETAILS HERE</button>

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