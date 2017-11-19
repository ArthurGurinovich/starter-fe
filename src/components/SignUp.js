import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
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
	                <h1>Registration Account</h1>
	                <p>There is a lot to management </p> 
	            </div>
	            <input type="text" name="username" placeholder="Username" />
	            <input type="text" name="email" placeholder="Enter Email" />
	            <input type="password" name="password1" placeholder="Enter Password" />
	            <input type="password" name="password2" placeholder="Confirm Password" />
	            <input type="submit" name="signup" value="Sign Up" />
	            <h6>Already have an account? <Link to='/signin'>Sign in</Link></h6>
	        </form>
	    </div>  
    );
  }
}

export default SignUp;