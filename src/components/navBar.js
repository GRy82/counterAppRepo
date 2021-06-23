import React, { Component } from 'react';

const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="">
                    NavBar <span className="badge bg-pill bg-secondary">{props.count}</span>
                </a>
            </div>
        </nav>
        );
}
 
export default NavBar;