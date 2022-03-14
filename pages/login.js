import React from 'react'

function login() {
  return (
    
    

<body className=" h-full w-full">

    <div className="text-center my-20 m-0 h-full">
        <div className="border-2 border-slate-600 rounded-lg w-80 inline-block align-middle bg-white hover:shadow-2xl">
            <h1 className="text-center text-3xl">Welcome to landing page</h1>
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
</body>
    
  )
}

export default login