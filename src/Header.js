import React, { Component } from 'react';
import Menu from './Menu';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
              <header>
            <div className="logo">
                <div className="icon">
                    S
                </div>
                <div className="title">
                    <div>
                        Sprint
                    </div>
                    <div>
                        Management
                    </div>
                </div>
            </div>
            <div className="search">
                <input type="text" name="search" value=""   placeholder="Find users" />
            </div>
            <div className="lines">
                 <div className="section">
                    <Link to='/signin'> Projects</Link>
                </div>
                <div className="section">
                    <a href="#">Questions</a>
                </div>
                <div className="section">
                    <a href="./users/users.html">Team</a>
                </div>
                <div className="section">
                    <Link to='/signin'> Sing In</Link>
                </div>
            </div>
            
        </header>
      
    );
  }
}

export default Header;
