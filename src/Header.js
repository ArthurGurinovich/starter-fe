import React, { Component } from 'react';
import Menu from './Menu';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
      <div className="logo">
      	 <div className="title"><Link to='/'>Symposium</Link></div>
      	
      </div>
      <div className="links"><Menu/></div>
      </header>
      
    );
  }
}

export default Header;
