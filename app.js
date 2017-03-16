
var quizState = {
    questions:[],
    answers:[],
    wrong:[],
    right:[],
    started: false
}     





//state management functions/basic functionality

function checkAnswer(q) {

	var correct = 0;
	var incorrect = 0;

	if (q) {

		right++;
		quizState.right.push(correct);
	}
	else {
		wrong++
		quizState.wrong.push(incorrect);
	}



}





//render side
function render() {
	if(quizState.started) {
		$('.question').show();
		$('.choice-container').show();
		$('.js-start').hide();
	} else {
		$('.js-start').show();
		$('.choice-container').hide();
		$('.question').hide();
	}
}

function turnGreen() {};

function turnRed() {};


//event handlers
function startHandler(e) {
	e.preventDefault();
	quizState.started = true;
	render();
}

function answerHandler(e) {
	e.preventDefault();
}
$(function() {
	$('.js-start').click(startHandler);
	render();
	$('.btn1, .btn2, .btn3, .btn4').click(answerHandler);
})




//callbacks