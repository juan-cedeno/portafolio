import { Link } from "react-router-dom"

import '../css/navbar.css'

export const NavBar = () => {
    return (
        <>
            <nav>
                <a className="menu_items" href="#home">Home</a>
                <a className="menu_items" href= '#proyect'>Project</a>
                <a className="menu_items" href= '#skill'>Skill</a>
                <a className="menu_items" href= '#contact'>Contact</a>
            </nav> 
        </>
    )
}
