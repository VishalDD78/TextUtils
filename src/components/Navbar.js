import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        abouText: PropTypes.string,
        homeText: PropTypes.string
    }

    // Navbar.defaultProps = {
    //     title: "Default Title",
    //     abouText: "Default About",
    //     homeText: "Default Home"
    // }

    // const onSwitchYellow = () => {
    //     document.body.style.backgroundColor = "yellow";
    // }

    // const onSwitchGreen = () => {
    //     document.body.style.backgroundColor = "green";
    // }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link> */}
                            <a className="nav-link active" aria-current="page" href="#">{props.homeText}</a>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/about">{props.abouText}</Link> */}
                            <a className="nav-link" href="#">{props.abouText}</a>
                        </li>
                    </ul>
                    {/* <p className={`my-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Switch to Color Mode</p>
                    <button type="button" onClick={onSwitchYellow} className="btn btn-warning mx-3"></button>
                    <button type="button" onClick={onSwitchGreen} className="btn btn-success"></button> */}
                    <div className={`form-check form-switch mx-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? "Disable" : "Enable"} dark mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
