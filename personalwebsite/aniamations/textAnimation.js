import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function TextAnimation() {
  return (
    <div >
  <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      500,
      'A Cyber Security Ethuasist', // initially rendered starting point
      1000,
      'A Pentester',
      1000,
      'A Devoloper',
      1000,
    
    ]}
    speed={50}
    style={{ fontSize: '1.5em',  }}
    repeat={Infinity}
  />
</div>
  )
}

export default TextAnimation

