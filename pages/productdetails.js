import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

import P_image from './product_component/P_image'
import P_info from './product_component/P_info'
import P_navbar from './product_component/P_navbar'
function ProductDetails() {
  return (
    <div className=''>
    <div className=' lg:flex  md:flex sm:flex-1 text-center'>
    

      <P_navbar/>
      <div className='  lg:flex  md:flex sm:flex-1 text-center'>
      <P_image/>
      <P_info/>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails