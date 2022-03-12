



function Scorebord() {
  return (

    <div className="">
      <p className=" ml-36 pr-2 mt-6 pt-3 text-zinc-500 ">SCORE</p>
      <br />
      <div className="flex ml-32">
        <span className="iconify h-12 w-12" data-icon="openmoji:atom-bomb"></span>
        <p className="pt-3 font-medium text-xl">KILLS</p>
      </div>

      <div className=" transition delay-150 duration-300 ease-in-out box-border border-2 border-gray-300 ml-36 w-5/12 mt-5 rounded-xl  hover:shadow-xl hover:bg-white">
        <div className="mt-2">
          <span className="ml-6 mr-4 mt-4 font-medium text-xl">History</span>
          <span className="cursor-pointer text-right ml-80 mt-4">see all</span>
        </div>



        <div className="mt-2 flex ">
          <i className="iconify ml-4 h-10 w-10 " data-icon="noto:bomb"></i>
          <span className="pt-2 font-medium">14 Kills</span>
          <span className="pt-2 ml-2 text-gray-600">by chintu</span>
        </div>

        <div className="mt-2 flex ">
          <i className="iconify ml-4 h-10 w-10 " data-icon="noto:bomb"></i>
          <span className="pt-2 font-medium">439 Kills</span>
          <span className="pt-2 ml-2 text-gray-600">by supermen</span>
        </div>

        <div className="mt-2 flex ">
          <i className="iconify ml-4 h-10 w-10 " data-icon="noto:bomb"></i>
          <span className="pt-2 font-medium">145 Kills</span>
          <span className="pt-2 ml-2 text-gray-600">by batman</span>
        </div>

        <div className="mt-2 flex ">
          <i className="iconify ml-4 h-10 w-10 " data-icon="noto:bomb"></i>
          <span className="pt-2 font-medium">0 Kills</span>
          <span className="pt-2 ml-2 text-gray-600">by flash</span>
        </div>

        <div className="mt-2 flex ">
          <i className="iconify ml-4 h-10 w-10 " data-icon="noto:bomb"></i>
          <span className="pt-2 font-medium">56 Kills</span>
          <span className="pt-2 ml-2 text-gray-600 mb-4">by joker</span>
        </div>
      </div>
    </div>

  )
}

export default Scorebord