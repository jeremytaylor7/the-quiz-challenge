
var quizState = {
    questions:[],
    answers:[],
    results:[],
    progress:[],
    started: false
}     





//state management functions/basic functionality







//render side
function render() {
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
	render();
}
$(function() {
	$('.js-start').click(startHandler);
	render();
})


//callbacks