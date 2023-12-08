import React, { useState } from 'react'
import './Home.css'
// import i18n from '../../utils/i18n'
import i18n from './../../utils/i18n.js'
const Home = () => {
  const [language,setLanguage] = useState("en")
  return (
    <div className='body'>
      
      <div className='container'> 
<h1>{i18n("title")}</h1>
<p>{i18n('defination')}</p>


<div className='child'>
<select 
defaultValue={localStorage.getItem("lang")} onChange={(e)=>{
localStorage.setItem('lang' , e.target.value)
window.location.reload();
}}>
  <option value='en'>english</option>
  <option value='hi'>hindi</option>
  <option value='mara'>marathi</option>
</select>
</div>
      </div>
    </div>
  )
}

export default Home
