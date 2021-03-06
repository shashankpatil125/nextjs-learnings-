
import Scorebord from './Scorebord'

function Title_Info() {
  return (
    <div className="bg-slate-200 p-4" >
    <button className="mr-6 md:ml-36 sm:ml-18 ml-6   border-2  pr-2 mt-6 p-3 text-xl rounded-full bg-white border-slate-500 flex ">
      <span className="iconify mt-1 ml-1 mr-2 text-lg h-7 w-7" data-icon="emojione-v1:video-game"></span>COOL GAME</button>
    <h1 className="md:ml-36 sm:ml-18 ml-6 mt-6 text-4xl wid font-semibold">Valorant</h1>
    <div className='mr-6 lg:w-8/12 '>    
    <p className="md:ml-36 sm:ml-18 ml-6 mt-6  ">Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
    </div>
    <Scorebord/>
    </div>
    

  )
}

export default Title_Info 