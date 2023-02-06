import React from 'react'

export default function Navbar(props) {
    const navbarStyle = { backgroundColor: 'orange' }

    return (
        <div>
            <nav className="navbar navbar-expand-lg  bg-body-tertiary " data-bs-theme="dark" style={navbarStyle}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    </div>
                </div>
            </nav>
        </div>
    )
}
