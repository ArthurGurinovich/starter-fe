import React from 'react';
import { connect } from 'react-redux';

const Question = ({ question }) => {
	console.log(question);
    return (
      <div>
        	{question.name}
      </div> 
    );
};

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps);
	return {
		question: state.questions.find(question => question.id === Number(ownProps.match.params.id))
	};
};

export default connect(mapStateToProps)(Question);
