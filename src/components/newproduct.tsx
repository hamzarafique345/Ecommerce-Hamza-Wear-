import Image from 'next/image'
import React from 'react'


export default function NEW_PRODUCT() {
  return (
    <div>
      <h1 id='season-hdn'>Season Collection</h1>
 
      <div id='season_box1'>


        <div className='boxes'>
  <Image className='season-img' src="/clothes1.jpg" alt='product1' width={2000} height={2000}/>
  <h3 className='product-same-hdn '>Spring</h3>
 
 <button id='btnproduct'>More</button>
</div>

<div className='boxes'>
  <Image className='season-img' src="/clothes2.jpg" alt='product1' width={2000} height={2000}/>
  <h3 className='product-same-hdn'>Summer</h3>
  <button id='btnproduct'>More</button>
</div>

<div id='boxes3' className='boxes'>
  <Image className='season-img' src="/clothes3.jpg" alt='product1' width={2000} height={2000}/>
  <h3 className='product-same-hdn'>Winter</h3>
  <button id='btnproduct'>More</button>
</div>


<div>
    
</div>
      </div>
    </div>
  )
}
