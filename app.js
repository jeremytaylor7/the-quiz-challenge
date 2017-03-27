
var quizState = {
   	questions:[
    {
    	question: 'Who is the 44th President of the U.S?',
	 	choices: ['Donald Trump','Barack Obama','JFK','Beyonce']
	} 
	],
   	correctAnswers: ['Barack Obama', 'b', 'c', 'd'],
   	started: false,
    right:0,
    questionIndex:0,
    incorrect:0,
    indexChoice: 0



    
   



}

var buttonTemplate = 
        "<button class='choice' id='4'></button>"+                                  
         
        

/* As a user 
   I want to see a welcome messag
 ef  so that I can see what the quiz is about.

   As a user
   I want to see if my answer was right or wrong.
   so that I can learn from my mistakes.	

   As a user
   I want to see my score after the quiz.
   so that I can know how well I did.

   As a user
   I want the option to play again.
   So that I can try to do better the next time.

   
*/






//state management functions/basic functionality


function startQuiz(){

	quizState.started = true;
}

function nextQuestion(){

	quizState.questionIndex++;
}

function checkAnswer(value) {


	for (var i = 0; i <= 4; i++) {

	if (value === quizState.correctAnswers[i]) {


		quizState.indexChoice++;
		quizState.right++;
		renderThatsCorrect();
		break;
	}
	else if (value !== quizState.correctAnswers[i]){

		quizState.incorrect++
		renderCorrectAnswer();
		break;
	}
}

}


//render side
function render() {
	if(quizState.started) {

		
		$('.question').show();
		$('.choice-container').show();
		$('.js-start').hide();
		renderQuestion(quizState.questionIndex);
		renderChoices(quizState.indexChoice);

	} else {
		$('.js-start').show();
		$('.choice-container').hide();
		$('.question').hide();
	}
}

function renderQuestion(index){

	var question = quizState.questions[index];

	$('.questionH1').html(question);
}

function renderChoices(index){

	quizState.questions[index].choice.map(function(choice){


		$('answer-container').html(buttonTemplate);
		$('.choice').html(choice);

	})



}

function renderCorrectAnswer() {

	$('.choice-container').hide();
	$('#incorrect').show()
	$('#incorrect > h2').html(
		"That is incorrect, the correct answer is:" + 
		quizState.correctAnswers[0])
}

function renderThatsCorrect() {


	$('.choice-container').hide();
	$('#correct').show()
	$('#correct > h2').html(
		"That is correct!:");



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
		value = $(this).html();
		checkAnswer(value);

		

	});
})





//callbacks