import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        	<Link to='/'> Home</Link>
        	<Link to='/question'> Question</Link>
        	<Link to='/user'> User</Link>
      </div>
      
    );
  }
}

export default Menu;
