import { useState } from 'react'
import { useRouter } from 'next/router'

function Details() {
  const [usedisplay, setusediplay] = useState(false);
  const enterd = () => {
    setusediplay(true)
  }


  const router = useRouter();
  return (
    <div className="text-center  bg-slate-300 p-8">
      
      <button onClick={enterd} className= " text-right my-2 bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-2 px-4 border-b-4 border-black hover:border-blue-500 rounded">LOG IN/SIGN UP</button>

      <div id="myModal" className={usedisplay ? "" : "hidden" + " overflow-auto"}>
        <div className="">
          <div className="text-center my-20">
            <div className="border-2 border-slate-600 rounded-lg w-80 inline-block align-middle bg-white hover:shadow-2xl">
              <h1 className="text-center text-3xl">ENTER FOLLOWING DETAILS</h1>
              <div className="text-center m-3">
                <input type="text" className="border-2 rounded-lg px-10 text-center" placeholder="ENTER EMAIL/PHONE NO"></input>
              </div>
              <div className="text-center m-3">
                <input type="password" className="border-2 rounded-lg px-10 text-center cursor-pointer" placeholder="PASSWORD"></input>
                <p className="py-2 cursor-pointer">Forgot your password?</p>
                <button
                  className="border-2 px-10 py-2 rounded-full bg-red-700 text-slate-300 hover:text-zinc-900 hover:bg-white transition-transform hover:shadow-2xl">
                  LOG IN </button>
                <h1>OR</h1>
                <button
                  className="border-2 px-10 py-2 rounded-full bg-cyan-600 text-slate-300 hover:text-zinc-900 hover:bg-white transition-transform">
                  CONTINUE WITH GOOGLE </button>
              </div>
            </div>
          </div>
          {/* <span className="float-right font-bold text-2xl">&times;</span> */}

        </div>

      </div>


    </div>



  )
}
export default Details