//css files
import './Burger.css'

const Burger = (prpos) => {
    return (
        <div className={prpos.showMenu ? "burger active" : "burger"} onClick={prpos.handleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burger