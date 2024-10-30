import React from 'react'

export default function CONTACT() {
  return (
    <div className='parent-div '>
      <div   id='child-contact-1' className="same-child-contact">
       <h2 id='contact-hdn-1'>Get more benefits <br />
       by Sign Up & Jion <br />
       Mejiwoo Community!</h2>
       <div id='heading-prnt'>
       <h4 className='same-heading-contact'>* Free Special Gift to a new member </h4>
       <h4 className='same-heading-contact'>* Get 2x Jiwoo Point purshase items</h4>
       <h4 className='same-heading-contact'>* Get special vouncher code every month</h4>
       <h4 className='same-heading-contact'>* Claim Vouncher Disc.Up to 50%</h4>
      </div></div>
    <div className='line-prnt'>
       <hr  className='line'/>
    </div>



      <div  id='child-contact-2'  className="same-child-contact">
        <input className='same-input-cntct' type="text" placeholder='Full Name' />
        <input className='same-input-cntct' type="text" placeholder='Email Address' />
        <input className='same-input-cntct' type="text" placeholder='Password' />
        <div id='radio-box'>
          <input type="radio" /><h4>I agree to all the <strong>Terms</strong> and <strong>Privacy Policy</strong></h4>
        </div>
        <button className='btn-1'>Sign Up</button>
        <h4 className='or'>or</h4>
        <h2 className='btn-2'>Sign Up With Google</h2>
        <h2 className='btn-3'>Sign Up with  Facebook </h2>
      </div>
    </div>
  )
}
