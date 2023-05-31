import React from 'react'
import { Link } from 'react-router-dom'
import footer from './footer.jpg'

const Menu = () => {
  return (
    <>
    <div className="menu">
    <div className="menu-div">
    <h1 className='menu-title'>Meme Maker 4000</h1>
    <div className="buttons">
    <button><Link to="/generatememes" className="menu-buttons">Generate A Meme</Link></button>
    <button><Link to="/viewmemes" className="menu-buttons">View Memes</Link></button>
    </div>
    </div>
    <footer><img src={footer} className='footer'></img></footer>
    </div>
    </>
  )
}

export default Menu