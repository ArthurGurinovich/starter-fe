const questionsList2 = [
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
            var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
          var xhr = new XHR();
          xhr.open('GET', 'https://intense-plateau-37410.herokuapp.com/works', true);
          xhr.send(null);
          xhr.onreadystatechange = function() {
            if (this.readyState != 4) 
              return;
            if (this.status != 200) {
              // обработать ошибку
              alert( 'ошибка: ' + (this.status ? this.statusText : 'Запрос не удался') );
              return;
            }

            var questionsList = JSON.parse(this.responseText);
            dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: questionsList2 });
          }
    }, 2000);
}