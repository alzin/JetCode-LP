"use client"

//styles
import Styles from './Burger.module.css'


const Burger = ({ showMenu, handleMenu }) => {
    return (
        <div className={`${Styles.burger} ${showMenu ? Styles.active : ""}`} onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burger