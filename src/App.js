import React from 'react';
import { connect } from 'react-redux';
import { getQuestions } from './actions/questions'; 
import Menu from './Menu';
import { Link } from 'react-router-dom';

const App = ({ questions, onAddQuestion, onFindQuestion, getAllQuestions, ownProps }) => {

  console.log(ownProps);
  let questionInput = '';
  let findInput = '';

  const addQuestion = () => {
    console.log('Question', questionInput.value);
    onAddQuestion(questionInput.value);
    questionInput.value='';
  }

  const findQuestion = () => {
    console.log('Question', findInput.value);
    onFindQuestion(findInput.value);
  }
    
    return (
      <div>
        <Menu/>
        <div>
          <input type="text" ref={(input) => { questionInput = input}}/>
          <button onClick={addQuestion}>Add Question</button>
        </div>
        <div>
          <input type="text" ref={(input) => { findInput = input}}/>
          <button onClick={findQuestion}>Search Question</button>
        </div>
        <div>
          <button onClick={getAllQuestions}>Load all questions</button>
        </div>
        <ul> 
        {
            questions.map((question, index) => 
            <li key={index}>
              <Link to={`/question/${question.id}`}>{question.name}</Link>
            </li>
          )
        }
        </ul>
      </div>
    );
}

export default connect(
  (state, ownProps) => ({
    questions: state.questions.filter(question => question.name.includes(state.filterQuestions)),
    ownProps
  }),
  dispatch => ({
    onAddQuestion: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_QUESTION', payload})
    },
    onFindQuestion: (name) => {
      dispatch({ type: 'FIND_QUESTION', payload: name})
    },
    getAllQuestions: () => {
      dispatch(getQuestions());
    }
  })
)(App);
