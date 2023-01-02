import React, { useState } from "react";
import fgd from './../Image/down-arrow.png'
import "./nav.css"

const Nav = (props) => {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    const handleSumbit = () =>{
        alert("Let's see amm...")
    }
    return (    
        <nav className={navbar ? 'active' : 'navtransition: 0.5s;'}>
            <div className="NavB">
                <div className="NabB1">
                    <h2 id="myName">EslamZ</h2>
                </div>
                <div className="NabB2">
                    <h2  className="nav-elem" onClick={props.connectHome}>Home</h2>
                    
                    <h2 className="nav-elem hideit">About</h2>

                    <h2 className="nav-elem one" onClick={props.connect}>Projects <img src={fgd} id="arrow-width" alt="Arrow down"></img> </h2>
                </div>
                <div className="NabB3">
                    <h2 className="buttonn" onClick={props.overThere}   >Contact Me</h2>
                </div>
            </div>
        </nav>
    )
}
export default Nav