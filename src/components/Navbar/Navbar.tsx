import React from "react"
import "./Navbar.css"
function Navbar() {
    return (
        <div className="nav">
            <div className="nav-left">
                <h1 className="logo">logotyp</h1>
            </div>

            <div className="nav-right">
                <a href="" target="_blank" rel="noopener noreferrer">Link1</a>
                <a href='' target="_blank" rel="noopener noreferrer">Link2</a>
                <a href='' target="_blank" rel="noopener noreferrer">Link3</a>
                <a href="" target="_blank" rel="noopener noreferrer">Link4</a>
                <h4>vahan.balyan.44@gmail.com</h4>
                <select className="lang">
                    <option value="apple">EN</option>
                    <option value="banana">AM</option>
                    <option value="cherry">RU</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar