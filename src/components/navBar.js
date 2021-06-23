import React from 'react';

const NavBar = ({ count }) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="">
                    NavBar <span className="badge bg-pill bg-secondary">{count}</span>
                </a>
            </div>
        </nav>
        );
}

export default NavBar;