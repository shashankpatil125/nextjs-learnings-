
import Scorebord from './Scorebord'

function Title_Info() {
  return (
    <div className="bg-slate-200 p-4" >
    <button className="border-2 ml-36 pr-2 mt-6 p-3 text-xl rounded-full bg-white border-slate-500 flex ">
      <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script><span className="iconify mt-1 ml-1 mr-2 text-lg h-7 w-7" data-icon="emojione-v1:video-game"></span>COOL GAME</button>
    <h1 className="ml-36 mt-6 text-4xl wid font-semibold">Valorant</h1>
    <p className="mt-6 ml-36 w-6/12">DEFY THE LIMITS
Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</p>
    <Scorebord/>
    </div>
    

  )
}

export default Title_Info