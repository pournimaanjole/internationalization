import React from 'react'
import './Home.css'
import translate from './../../utils/i18n.js'
const Home = () => {
  return (
    <div className='body'>
      
      <div className='container'> 
<h1>{translate({"keyword":"title" , lan:"hi"})}</h1>
      </div>
    </div>
  )
}

export default Home
