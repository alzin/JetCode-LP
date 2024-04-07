"use client"

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'

// Styles
import Styles from './Header.module.css'

// components
import Burger from '@/components/Burger/Burger'
import Buttons from '@/components/Buttons/Buttons'
import NavbarItem from '@/components/NavbarItem/NavbarItem'

// data
import { NavbarItemsData, TryForFreeData } from './data'

// asstes
import Logo from '../../../public/images/JetCode.png'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const pathName = usePathname()

  useEffect(() => {
    setShowMenu(false)
  }, [pathName])


  //show menu item
  const handleMenu = () => {
    if (window.innerWidth < 992)
      setShowMenu(pre => !pre);
  }


  return (
    <header className={Styles.header}>
      <div className={`container ${Styles.container}`}>

        <Link href='/' className={Styles.logo}>
          <Image src={Logo} alt="logo" fill={true} />
        </Link>

        <Burger showMenu={showMenu} handleMenu={handleMenu} />

        <nav className={showMenu ? Styles.active : ""}>
          <ul>
            {NavbarItemsData.map((item) =>
              <NavbarItem key={item.id} to={item.to} handleMenu={handleMenu} content={item.content} />
            )}
          </ul>
          <Buttons content={TryForFreeData.content} to={TryForFreeData.to} />
        </nav>

      </div>
    </header>

  )
}

export default Header