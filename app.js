
/* As a user 
   I want to see a welcome message
   so that I can see what the quiz is about.
	
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
var quizState = {
	questions: [
		{
			question: 'Who is the 44th President of the U.S?',
			choices: ['Donald Trump', 'Barack Obama', 'JFK', 'Beyonce']
		},
		{
			question: 'How many continents are there?',
			choices: ['1', '5', '10', '7']
		},
		{
			question: 'What color is Spongebob Squarepants?',
			choices: ['blue', 'yellow', 'orange', 'gold']
		},
		{
			question: 'What is the orc capital in World of Warcraft?',
			choices: ['Sacramento', 'L.A', 'Durotar', 'Orgrimmar']
		},
		{
			question: 'Who created this Quiz?',
			choices: ['Katie Perry', 'Jeremy', 'Fidel Castro', 'Bob']
		}
	],
	correctAnswers: ['Barack Obama', '7', 'yellow', 'Orgrimmar', 'Jeremy'],
	started: false,
	right: 0,
	questionIndex: 0,
	correctIndex: 0,
	incorrect: 0,
	answeredTrueorFalse: false
}

//state management functions/basic functionality


function startQuiz() {

	quizState.started = true;
}

function nextQuestion() {

	quizState.questionIndex++;
}

function nextCorrectAnswer() {
	quizState.correctIndex++;
}

function checkAnswer(value) {


	for (var i = 0; i <= 4; i++) {

		if (value === quizState.correctAnswers[i]) {


			return true;
		}
	}


	return false;

}


//render side
function render() {
	if (quizState.started) {
		$('.start').hide();
		$('#correct, #incorrect').hide();
		$('.question').show();
		$('.choice-container').show();
		$('.js-start').hide();
		renderQuestion(quizState.questionIndex);
		var renderedChoices = renderChoices(quizState.questionIndex);
		$('.answer-container').html(renderedChoices);
		$('.choice').on('click', function (event) {
			event.preventDefault();
			value = $(this).html();
			var trueOrFalse = checkAnswer(value);
			if (trueOrFalse === true) {
				quizState.right++;
				renderThatsCorrect();
				$('.js-next').show();

			}
			else if (trueOrFalse === false) {

				renderCorrectAnswer();
				$('.js-next').show();
				quizState.incorrect++;

			}



		});


	} else {
		$('.js-start').show();
		$('.choice-container').hide();
		$('.question').hide();
	}
}

function renderNextQuestion(e) {

	e.preventDefault();

	qIndex = quizState.questionIndex

	if (qIndex < 4) {
		nextQuestion();
		nextCorrectAnswer();
		render()
	}

	else if (qIndex === 4) {

		alert('all done here');
		renderResults();
	}
}

function renderQuestion(index) {

	var question = quizState.questions[index].question;

	$('.questionH1').html(question);
}
function renderChoice(choice) {

	return "<button class='choice'>" + choice +
		"</button>";

}
function renderChoices(index) {

	return quizState.questions[index].choices.map(renderChoice);



}

function renderCorrectAnswer() {


	var indexForResults = quizState.correctIndex
	$('.choice-container').hide();
	$('#incorrect').show()
	$('#incorrect > h2').html(
		"That is incorrect, the correct answer is:" +
		quizState.correctAnswers[indexForResults])

}

function renderThatsCorrect() {


	$('.choice-container').hide();
	$('#correct').show()
	$('#correct > h2').html(
		"That is correct!");



}

function renderResults() {

	var rightAnswers = quizState.right
	$('#correct, #incorrect').hide();
	$('.js-next').hide();
	$('.js-startOver').show();
	$('.results').show();
	$('.results > h2').html('Thank you for playing!' + '</br>' +
		'You have answered ' + rightAnswers + '/5 questions correctly!')
}




//event handlers
function startHandler(e) {
	e.preventDefault();
	quizState.started = true;
	render();
}

$(function () {
	$('.js-start').click(startHandler);
	render();
	$('.js-next').click(renderNextQuestion);
})





//callbacks