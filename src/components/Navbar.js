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

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">{props.homeText}</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.abouText}</Link>
                        </li> */}
                    </ul>
                    <p className={`my-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Switch to Color Mode</p>
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-3" onClick={() => { props.toggleMode('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-danger rounded mx-3" onClick={() => { props.toggleMode('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-success rounded mx-3" onClick={() => { props.toggleMode('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                        <div className="bg-warning rounded mx-3" onClick={() => { props.toggleMode('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                    </div>
                    {/* <button type="button" onClick={onSwitchGreen} className="btn btn-success"></button> */}
                    <div className={`form-check form-switch mx-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
                        <input className="form-check-input" onClick={() => { props.toggleMode() }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? "Disable" : "Enable"} dark mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
