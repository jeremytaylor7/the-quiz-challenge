
var quizState = {
   	questions:['answer1',
   	           'answer2',
   	           'answer3',
   	           'answer4',
   	           'answer5'],
   	correctAnswers: ['a', 'b', 'c', 'd'],
   	choiceSet1: ['Barack Obama'],
   	choiceSet2: ['Superman'],
   	choiceSet3: ['Spongebob'],
   	choiceSet4: ['Sister Sister'],
   	choiceSet5: ['Tequila'],
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

		var indexQuestion = 0;
		var indexChoices = 0;
		$('.question').show();
		$('.choice-container').show();
		$('.js-start').hide();
		renderQuestion(indexQuestion);
		renderChoices(indexChoices,
			          indexChoices,
			          indexChoices,
			          indexChoices);

	} else {
		$('.js-start').show();
		$('.choice-container').hide();
		$('.question').hide();
	}
}

function renderQuestion(q){

	var question = quizState.questions[q];

	$('.questionH1').html(question);
}

function renderChoices(choice1, choice2, choice3, choice4){

	var choiceIndex1 = quizState.choiceSet1[choice1];
    var choiceIndex2 = quizState.choiceSet2[choice2];	
    var choiceIndex3 = quizState.choiceSet3[choice3];
    var choiceIndex4 = quizState.choiceSet4[choice4];

	$('#1').html(choiceIndex1);
	$('#2').html(choiceIndex2);
	$('#3').html(choiceIndex3);
	$('#4').html(choiceIndex4);




}

function renderAnswerResults() {


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
		

	});
})





//callbacks