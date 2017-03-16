
var quizState = {
    questions:[],
    correctAnswer:0,
    incorrectAnswer:1,
    wrong:0,
    right:0,
    started: false
}     





//state management functions/basic functionality

function checkAnswer(q) {


	if (q === quizState.correctAnswer) {

		quizState.right++;
		turnGreen();
	}
	else {

		quizState.wrong++
		turnRed();
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



function turnGreen() {

	$('.correct').addClass('turnGreen');


};

function turnRed() {

	$('.incorrect').addClass('turnRed');

};



//event handlers
function startHandler(e) {
	e.preventDefault();
	quizState.started = true;
	render();
}

$(function() {
	$('.js-start').click(startHandler);
	render();
	$('.btn1, .btn2, .btn3, .btn4').on('click', function(event) {
		event.preventDefault();
		id = parseInt($(this).attr('id'));
		checkAnswer(id);

	});
})





//callbacks