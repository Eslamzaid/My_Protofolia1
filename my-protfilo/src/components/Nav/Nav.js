import { useRef, useEffect } from "react";
import fgd from './../Image/discord.png'
import * as React from "react";
import "./nav.css"

const Nav = (props) => {
    return (
        <nav>
            <div className="NavB">
                <div className="NabB1">
                    <h2 id="myName">EslamZ</h2>
                </div>
                <div className="NabB2">
                    <h2  className="nav-elem">Home</h2>
                    <h2 className="nav-elem">About</h2>
                    <h2 className="nav-elem">Projects</h2>
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