
var quizState = {
   	questions:['answer1',
   	           'answer2',
   	           'answer3',
   	           'answer4',
   	           'answer5'],
   	correctAnswers: ['a', 'b', 'c', 'd'],
   	started: false,
    right:0,
    incorrect:0,

    
   



}

/* As a user I would like to see be able to click a start
   button to see a question displayed that I can answer 
   by choosing the right answer out of 4 possible choices.

   after choosing the right answer I want the program to
   check if the answer was right or wrong and then display
   on the screen if I was right or wrong and show what the
   correct answer is if I was wrong. After I see the
   results of my choice I want to be able to move on to
   the next question and see another question displayed etc.

   After I answer the last question I would like to be able
   to see a screen with my score displayed on the screen and
   then have the option to play again by clicking on the button
   which would take me back to start screen.

*/






//state management functions/basic functionality


function startQuiz(){

	quizState.started = true;
}



function checkAnswer(value) {


	for (var i = 0; i <= 4; i++) {

	if (value === quizState.correctAnswers[i]) {


		quizState.right++;
		
	}
	else {

		
		
	}
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
		value = $(this).attr('value');
		checkAnswer(value);

	});
})





//callbacks