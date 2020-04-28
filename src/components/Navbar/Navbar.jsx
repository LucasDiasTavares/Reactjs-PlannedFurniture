import React, { Component } from 'react';
import './style.css';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';


export default class Navbar extends Component {

    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <nav className='navbar'>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/'>
                            <img src={logo} alt='Planned Furniture' />
                        </Link>
                        <button type='button' className='nav-btn'>
                            <FaBars
                                className='nav-icon'
                                onClick={this.handleToggle} />
                        </button>
                    </div>
                    <ul className={
                        this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/furniture/'>Planned-Wardrobe</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
