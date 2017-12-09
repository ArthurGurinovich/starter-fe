import React from 'react';
import { connect } from 'react-redux';
import { currentUser, getCookie } from '../actions/users'; 
import { Link } from 'react-router-dom';

const Profile = ({ users, getCookie, currentUser, userInfo, ownProps }) => {



  const getUser = () => {
    let Token = getCookie('SP-Token');
    userInfo(Token);
  }
    return (
        <div onLoad={getUser}>


        </div> 
    );
}

export default connect(
  (state, ownProps) => ({
    ownProps
  }),
  dispatch => ({
    userInfo: (token) => {
      dispatch(currentUser(token))
    }
  })
)(Profile);

