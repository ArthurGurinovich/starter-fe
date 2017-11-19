import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/users'; 
import { Link } from 'react-router-dom';

const SignIn = ({ users, onLoginUser, loginUser, ownProps }) => {


  let usernameInput = '';
  let passwordInput = '';

  const clickLoginUser = () => {
    onLoginUser(usernameInput.value, passwordInput.value);
  }
    return (
        <div >
            <div className="account_form">
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
                    <h1>Welcome Back!</h1>
                    <p>There is a lot to management </p> 
                </div>
                <input type="text" name="username" placeholder="Username" ref={(input) => { usernameInput = input}}/>
                <input type="password" name="password" placeholder="Password" ref={(input) => { passwordInput = input}}/>
                <Link to='/forgot'className="forgot">Forgot password?</Link>
                <input onClick={clickLoginUser} type="submit" name="signin" value="Sign In" />
                <h6>Don't have an account? <Link to='/signup'>Create one here</Link>.</h6>
            </div>
        </div> 
    );
}

export default connect(
  (state, ownProps) => ({
    spToken: state.spToken,
    ownProps
  }),
  dispatch => ({
    onLoginUser: (username, password) => {
      dispatch(loginUser(username, password))
    }
  })
)(SignIn);

