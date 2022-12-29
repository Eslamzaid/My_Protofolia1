import { useRef } from "react";
import * as React from "react";
import "./nav.css"


const Nav = () => {
    return (
        <nav>
            <div className="NavB">
                <h1 id="myName">Eslam</h1>
                <h2>About</h2>
                <h2>Projects</h2>
                <h2>Contact Me</h2>
            </div>
        </nav>
    )
}
export default Nav