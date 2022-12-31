import React, { useRef, useEffect, useState } from "react";
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

    return (    
        <nav className={navbar ? 'active' : 'navtransition: 0.5s;'}>
            <div className="NavB">
                <div className="NabB1">
                    <h2 id="myName">EslamZ</h2>
                </div>
                <div className="NabB2">
                    <h2  className="nav-elem">Home</h2>
                    <h2 className="nav-elem">About</h2>
                    <h2 className="nav-elem one">Projects <img src={fgd} id="arrow-width" alt="Arrow down"></img> </h2>
                </div>
                <div className="NabB3">
                    <h2 className=" buttonn">Contact Me</h2>
                </div>
                {/* onClick={props.connect} */}
            </div>
        </nav>
    )
}
export default Nav