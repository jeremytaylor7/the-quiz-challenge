
var quizState = {
    questions:[],
    answers:[],
    results:[],
    started: false
}     





//state management functions/basic functionality







//render side
function renderQuestions() {
	if(quizState.started) {
		$('.question').show();
		$('.js-start').hide();
	} else {
		$('.js-start').show();
		$('.question').hide();
	}
}


//event handlers
function startHandler(e) {
	e.preventDefault();
	quizState.started = true;
	renderQuestions();
}
$(function() {
	$('.js-start').click(startHandler);
	renderQuestions();
})


//callbacks