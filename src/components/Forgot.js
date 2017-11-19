import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Forgot extends Component {
  render() {
    return (
        <div >
            <form className="account_form">
                <div className="head">
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
                <div>
                    <h1>Forgot your password?</h1>
                    <p>Enter your email below to receive your password reset instructions </p> 
                </div>
                <input type="text" name="email" value="" placeholder="Email" />
                <input type="submit" name="reset" value="Send instruction" />
                <h6>back to <Link to='/signin'>Sign in</Link></h6>
            </form>
        </div>
    );
  }
}

export default Forgot;
