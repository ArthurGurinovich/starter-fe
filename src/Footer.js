import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
            <div className="section">
                 <a href="#">About Us</a>
                 <a href="#">Careers</a>
                 <a href="#">Contact</a>
            </div>
            <div className="section">
                 <a href="#">Blog</a>
                 <a href="#">Developers</a>
                 <a href="#">API</a>
            </div>
            <div className="section">
                 <a href="#">Terms of Service</a>
                 <a href="#">Privacy</a>
                 <a href="#">Security</a>
            </div>
            <div className="section">
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
            </div>
            <div className="copy">
                <div className="copyright">
                    2018 Sprint Management. All rights reserved.
                </div>
                
                <div>
                    
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;