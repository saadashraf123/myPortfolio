import React, { useState } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    return (
        <nav id='navbars' className={`navbar navbar-expand-lg navbar-expand-md sticky-top mt-2 ${scrolled ? "scrolled" : "bg-transparent"}`}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <span></span>
                    <li className="nav-item">
                        <a className="nav-link" href="#expertise">Expertise</a>
                    </li>
                    <span></span>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <span></span>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar