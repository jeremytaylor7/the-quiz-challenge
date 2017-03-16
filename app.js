
var quizState = {
    questions:[],
    answers:[],
    results:[],
    started: false
}     





//state management functions/basic functionality







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


//event handlers
function startHandler(e) {
	e.preventDefault();
	quizState.started = true;
	render();
}
$(function() {
	$('.js-start').click(startHandler);
	render();
})


//callbacks