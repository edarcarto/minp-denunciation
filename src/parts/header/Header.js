import React, { Component } from 'react';
import M from 'materialize-css';
import './Header.css';

class Header extends Component{
    componentDidMount(){
        const elems = document.querySelector('#slide-out');
        M.Sidenav.init(elems,{});
    }
    
    render() {
        return (
            <header className="no-padding">
                <div className="navbar-fixed">
                    <nav className="green">
                        <a href="#/" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <div className="container nav-wrapper">
                            <a href="/" className="brand-logo">Denuncias</a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="/">Denuncie</a></li>
                                <li><a href="/case">Casos</a></li>
                                <li><a href="/">Contacto</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="side-nav-start">
                    <ul id="slide-out" className="sidenav">
                        <li className="menu-item">
                            <a href="/" aria-current="page">App</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Denuncie</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Casos</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Contacto</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;