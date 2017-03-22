// As a <role> 
// I want to <goal>
// So that I <reason>

/*
As a user I want to see the first question displayed
on the webpage, so that I don't get impatient.
*/


var quizState = {

	questions: ['Who is the President of the U.S?']
}



function render() {

	var thisQuestion = quizState.questions[0];

	$('.question').html(thisQuestion);
}


$(function() {

	render();
})



