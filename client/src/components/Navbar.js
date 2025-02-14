// import React, {useEffect} from 'react'
import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TypeIt</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? 'active' : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/myAccount" ? 'active' : ""}`} aria-current="page" to="/myAccount">My Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? 'active' : ""}`} aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/faqs" ? 'active' : ""}`} aria-current="page" to="/faqs">FAQs</Link>
                        </li>
                    </ul>
                </div>
                {(localStorage.getItem('TypeItLoggedIn') === 'false' || localStorage.getItem('TypeItLoggedIn') === null) &&
                    <div>
                        <Link className={`btn btn-primary ${location.pathname === "/login" ? 'hideIt' : 'showIt'}`} type="button" to='/login'>Log In</Link>
                        <Link className={`btn btn-primary ${location.pathname === "/signup" ? 'hideIt' : 'showIt'}`} type="button" to='/signup' style={{ marginLeft: "1em" }}>Sign Up</Link>
                        {/* <Link className={`btn btn-primary ${location.pathname === "/" ? 'showIt' : 'hideIt'}`} type="button" to='/login' style={{marginLeft: '1em'}}>Log Out</Link> */}
                    </div>}
            </div>
        </nav>
    )
}

export default Navbar
