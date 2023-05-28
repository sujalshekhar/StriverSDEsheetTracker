import React from 'react'
import Contact from './Contact'

const Footer = () => {
  return (
    <div style={{marginTop:'20px',padding:'20px', width:'100%', backgroundColor:'var(--footer)', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:'100px'}}>
        <Contact />
        <button className='github-button'><a href='https://www.npmjs.com/package/rc-progress' target='_blank'>Star ⭐ this Project on Github</a></button>
        <h4 style={{color:'white', fontSize:'10px', fontWeight:'400', opacity:'0.7'}}>© Sujal Shekhar</h4>
    </div>
  )
}

export default Footer