import React from 'react';
import { connect } from 'react-redux';
import './User.css'
import Header from './Header';

const User = ({ user }) => {
	console.log(user);
    return (
      <div>
      	<Header />
      	<div className="content">
	      	<div className="image">
	      		<img src={user.photo} className="avatar"/>
	      	</div>
	      	<div className="info">
		      	<div className="username">{user.username}</div>
				<div className="position">{user.position}</div>
				<div className="description">{user.description}</div>
				<div className="status">{user.status}</div>
		        <ul> 
		        {
		            user.skils.map((skils, index) => 
		            <li key={index} className="tag">
		            {skils.title}
		            </li>
		          )
		        }
		        </ul>
	        </div>
		</div>
      </div> 
    );
};

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.find(user => user._id === ownProps.match.params.id)
	};
};

export default connect(mapStateToProps)(User);
