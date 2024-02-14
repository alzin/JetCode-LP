import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

//css files
import './Header.css'

//assets file
import logo from '../../assets/images/logo-new.svg'
import { IoAnalytics } from "react-icons/io5"

//components
import Burger from '../../component/Burger/Burger'
import Buttons from '../../component/Buttons/Buttons'
import { SolutionDropDown } from '../../component/DropDown/DropDown'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)

  const location = useLocation()


  useEffect(() => {
    setShowMenu(false)
    setShowDropDown(false)
    window.scrollTo(0, 0)
  }, [location])




  //show menu item
  const handleMenu = () => {
    setShowMenu(pre => !pre);
  }


  //show solution drop down
  const handleDropDown = () => {
    setShowDropDown(pre => !pre);
  }



  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <Burger showMenu={showMenu} handleMenu={handleMenu} />

        <nav className={showMenu ? "active" : ""}>
          <ul>
            <li className='list' onClick={handleDropDown}>
              Solutions
              <ul className={showDropDown ? "active" : ""}>
                <SolutionDropDown to='/employee-engagement' icon={<IoAnalytics />} name="Employee Engagement" />
                <SolutionDropDown to='/wellness' icon={<IoAnalytics />} name="Wellness" />
                <SolutionDropDown to='/analytics' icon={<IoAnalytics />} name="Analytics" />
              </ul>
            </li>
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/faqs'>FAQS</Link></li>
          </ul>
          <Buttons content='Try For Free' to='/' className="TryFreeButton" />
        </nav>

      </div>
    </header>

  )
}

export default Header