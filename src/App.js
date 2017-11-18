import React from 'react';
import { connect } from 'react-redux';
import { getQuestions } from './actions/questions'; 
import { getUsers } from './actions/users'; 
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Video from './Video';
import Footer from './Footer';

const App = ({ questions, users, onAddQuestion, onFindQuestion, getAllQuestions, getAllUsers, ownProps }) => {


  let questionInput = '';
  let findInput = '';

  const addQuestion = () => {
    onAddQuestion(questionInput.value);
    questionInput.value='';
  }

  const findQuestion = () => {
    onFindQuestion(findInput.value);
  }
    
    return (
      <div>
        <Header/>
        <Video/>
        <div className="content">
        <div>
          <input type="text" className="input" ref={(input) => { questionInput = input}}/>
          <button onClick={addQuestion} className="btn">Add Question</button>
        </div>
        <div>
          <input type="text" className="input" ref={(input) => { findInput = input}}/>
          <button onClick={findQuestion} className="btn">Search Question</button>
        </div>
        <div>
          <button onClick={getAllQuestions} className="btn">Load all questions</button>
        </div>
        <ul> 
        {
            questions.map((question, index) => 
            <li key={index}>
              <Link to={`/question/${question._id}`}>{question.title}</Link>
            </li>
          )
        }
        </ul>
        <div>
          <button onClick={getAllUsers} className="btn">Get list of users</button>
        </div>
        <ul> 
        {
            users.map((user, index) => 
            <li key={index}>
              <Link to={`/user/${user._id}`}>{user.username}</Link>
            </li>
          )
        }
        </ul>
        </div>
        <Footer/>
      </div>

    );
}

export default connect(
  (state, ownProps) => ({
    questions: state.questions,
    users: state.users,
    // .filter(question => question.title.includes(state.filterQuestions)),
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
    },
    getAllUsers: () => {
      dispatch(getUsers());
    }
  })
)(App);
