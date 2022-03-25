var answers = [];
var totalScore = 0;

var questions = document.getElementsByClassName("question");

var answer1;
var answer2;
var answer3;
var answer4;
var answer5;

function quizcheck()
{

	answer1 = document.getElementById("question1").selectedIndex;
	answer2 = document.getElementById("question2").selectedIndex;
	answer3 = document.getElementById("question3").selectedIndex;
	answer4 = document.getElementById("question4").selectedIndex;
	answer5 = document.getElementById("question5").selectedIndex;

	answers.push(answer1);
	answers.push(answer2);
	answers.push(answer3);
	answers.push(answer4);
	answers.push(answer5);

	for(i = 0; i < answers.length; i++)
	{
		if(answers[i] == 0)
		{
			var questionNum = i+1;
			alert("You did not answer a question " + questionNum + ". Please select a valid answer.");
		}
	}

	if(answer1 > 0 && answer2 > 0 && answer3 > 0 && answer4 > 0 && answer5 > 0)
	{

		if (answers[0] == 2)
		{
			totalScore++;
		}

		else
		{
			totalScore = totalScore;
		}

		if (answers[1] == 3)
		{
			totalScore++;
		}

		else
		{
			totalScore = totalScore;
		}

		if (answers[2] == 2)
		{
			totalScore++;
		}

		else
		{
			totalScore = totalScore;
		}

		if (answers[3] == 1)
		{
			totalScore++;
		}

		else
		{
			totalScore = totalScore;
		}

		if (answers[4] == 3)
		{
			totalScore++;
		}

		else
		{
			totalScore = totalScore;
		}

		document.getElementById("totalScore").innerHTML = "Total Score: "+ totalScore+"/5";
	}

	totalScore = 0;
	answers=[];
}