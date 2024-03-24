import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { Link as SLink } from 'react-scroll'
//css files
import './Header.css'

//assets file

import logo from '../../assets/images/JetCode2.png'
// import { IoAnalytics } from "react-icons/io5"

//components
import Burger from '../../component/Burger/Burger'
import Buttons from '../../component/Buttons/Buttons'
// import ScrollTo from '../../component/ScrollTo'
// import {SolutionDropDown } from '../../component/DropDown/DropDown'
const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  // const [showDropDown, setShowDropDown] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setShowMenu(false)
  }, [location])




  //show menu item
  const handleMenu = () => {
    if (window.innerWidth < 1000)
      setShowMenu(pre => !pre);
  }


  //show solution drop down
  // const handleDropDown = () => {
  //   setShowDropDown(pre => !pre);
  // }


  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/" >
            <img src={logo} alt="logo" />
            {/* <span>JetCode</span> */}
          </Link>
          {/* <svg height="100" stroke="#212529" strokeWidth="1" className="text-line"><text dominantBaseline="middle" textAnchor="right" y="50%">Slash AI</text></svg> */}
        </div>

        <Burger showMenu={showMenu} handleMenu={handleMenu} />

        <nav className={showMenu ? "active" : ""}>
          <ul>
            {/* <li className='list' onClick={handleDropDown}>
              Solutions
              <ul className={showDropDown ? "active" : ""}>
                <SolutionDropDown to='/employee-engagement' icon={<IoAnalytics />} name="Employee Engagement" />
                <SolutionDropDown to='/wellness' icon={<IoAnalytics />} name="Wellness" />
                <SolutionDropDown to='/analytics' icon={<IoAnalytics />} name="Analytics" />
              </ul>
            </li> */}
            <li className='hvr-underline-from-left'>
              <a href="/#overview" onClick={handleMenu}>Overview</a>
            </li>
            <li className='hvr-underline-from-left'>
              <a href="/#features" onClick={handleMenu}>Features</a>
            </li>
            <li className='hvr-underline-from-left'>
              <a href='/#usecases' onClick={handleMenu}>Use Cases</a>
            </li>
            <li className='hvr-underline-from-left'><Link to='/contact' onClick={handleMenu}>Contact Us</Link></li>
          </ul>
          <Buttons content='Try for free' to='https://dahab-production.up.railway.app/' className="TryFreeButton" />
        </nav>

      </div>
    </header>

  )
}

export default Header