import React from 'react'
import { animated, useSpring, useSpringRef } from '@react-spring/web'
import './Menu.css'
import { useState } from 'react'
 

export default function Menu() {

  const [open, toggle] =useState(false)

  const size = useSpring(() => ({ 
    borderRadius: open ? '50%' :'20%',
    height: open ?'3em': '20em',
    width: open ?'3em': '25em',
    background:  open ?'darkgreen': 'white'
  }))

  // const handleClick = () =>{
  //   api.start({
  //     config: config.stiff,
  //   from:{
  //     borderRadius: '50%',
  //     height: '3em',
  //     width: '3em',
  //     background: 'green'
  //   },
  //   to:{
  //     borderRadius: '20%',
  //     height: '10em',
  //     width: '10em',
  //     background: 'white'
  //   }
  //   })
  // }

  return (
    <div  onClick={() => toggle(!open)}>
      <animated.div
      className='bg-success menu-button'
      style={
        size
      }
      >
      </animated.div>
    </div>
  )
}
