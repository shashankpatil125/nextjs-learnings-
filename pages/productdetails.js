import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

import P_image from './product_component/P_image'
import P_info from './product_component/P_info'
import P_navbar from './product_component/P_navbar'
function ProductDetails() {
  return (
    <div className='bg-white'>
    <div className='bg-white'>
    

      <P_navbar/>
      <div className='flex'>
      <P_image/>
      <P_info/>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails