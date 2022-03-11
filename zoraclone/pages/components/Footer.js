import React from 'react'

function Footer() {
  return (
    <div class="bg-black text-white p-10 flex ">
        <div class="w-64">
        <p class="text-4xl font-medium mb-6">zora</p>
        <p class="text-zinc-400 text-xs mb-6">The NFT Marketplace Protocol</p>
        <p class="text-zinc-400 text-xs mb-3">© 2022 Zora Labs. All rights reserved.</p>
        </div>

        <div class=" ml-2 w-64">
        <p class="text-zinc-400 mb-6">Manifesto</p>
        <p class="text-zinc-400 mb-6">ZINE</p>
        <p class="text-zinc-400 mb-3">FAQs</p>
        </div> 

        <div class="ml-2 w-64">
        <p class="text-white mb-6">ZORA V3</p>
        <p class="text-white mb-6">Documentstion</p>
        <p class="text-white mb-3">Term of Service</p>    
        </div>

        <div class="ml-2 w-64">
        <p class="text-white mb-6">Careers</p>
        <p class="text-white mb-6">Follw us:</p>
        </div>

    </div>
  )
}
export default Footer