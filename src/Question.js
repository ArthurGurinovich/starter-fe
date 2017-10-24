import React from 'react';
import { connect } from 'react-redux';

const Question = ({ question }) => {
	console.log(question);
    return (
      <div>
        	{question.description}
      </div> 
    );
};

const mapStateToProps = (state, ownProps) => {
	return {
		question: state.questions.find(question => question._id === ownProps.match.params.id)
	};
};

export default connect(mapStateToProps)(Question);
