const loadQuestions = () => {
          var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
          var xhr = new XHR();
          xhr.open('GET', 'https://intense-plateau-37410.herokuapp.com/works', true);

          xhr.onload = function() {
            let list = this.responseText;
            let questions = JSON.parse(list);
          }

          xhr.onerror = function() {
            alert( 'Ошибка ' + this.status );
          }
          xhr.send();
};

const questionsList = [
	{
		id: 1,
		name: 'Test Question 1'
	},
	{
		id: 2,
		name: 'Test Question 2'
	}
];

export const getQuestions = () => dispatch => {
	setTimeout( () => {
		dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: questionsList });
    }, 2000);
}