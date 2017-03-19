
var quizState = [{
   	questions:[],
   	answers: ['a', 'b', 'c', 'd'],
    attempted: false,
    right:0,
    started: false

}]     





//state management functions/basic functionality

function checkAnswer(q, i) {

	var index = i;

	if (q === quizState.answers[index].answer) {

		quizState.right++;
		turnGreen();
	}
	else {

		
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

function renderAnswerResultss() {


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
	$('.choice > button').on('click', function(event) {
		event.preventDefault();
		value = parseInt($(this).attr('value'));
		checkAnswer(value);

	});
})





//callbacks