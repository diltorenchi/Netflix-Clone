import React, { useEffect, useState } from 'react'
import './Navigationbar.css'

function Navigationbar() {
  const [show ,setShow]=useState(false)
  /* side effect */
  useEffect(()=>{
    window.addEventListener('scroll',()=>{ /* first tag should  */
      if(window.scrollY>600){ //it is used to give a background color as in netflix icon when scrolling ,and if it reach 600px(banner/cover size)
        setShow(true)
      }else{
        setShow(false)
      }
    })
  })
  return (
    <div className={`${show && 'nav-black'} nav`} >
      <img width={'150px'}  src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />
    </div>
  )
}

export default Navigationbar