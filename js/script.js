document.getElementById('user-answer-btn').addEventListener('click', checkAnswer);
let playerPoints = 0;
let rightAnswer = 0;
let i = 1;
const ljudSpel = {
	"ljud":[
{"audio": "assets/failure.mp3"},
{"audio":"assets/success.mp3" }
	]
};

function namn(){
	document.getElementById('game-feedback').style.display = 'none';
	  document.getElementById('game-start').style.display = 'block';
	  document.getElementById('game-in-progress').style.display = 'none';
	const playerName = document.getElementById('name-input').value;
	console.log(playerName);
	if(playerName.trim() === '')
	{
		alert('invalid name');
	}
	else {
		startGame();
	}
}

function restartGame(){
	location.reload();
	
}


function startGame() {
	playerPoints = 0;

  const playerName = document.getElementById('name-input').value;
  document.getElementById('player-name').innerText = playerName;
  document.getElementById('game-start').style.display = 'none';
  document.getElementById('game-in-progress').style.display = 'block';
  loadQuestion(1);
}

function loadQuestion(index)
{
if (index === 1){	 
	 document.getElementById('question-field').innerText = "Vad heter Finlands nuvarande statsminister?" ;
	  document.getElementById('answer-1-field').innerText = "Petteri Orpo";
	  document.getElementById('answer-2-field').innerText = "Sanna Marin";
	  document.getElementById('answer-3-field').innerText = "Antti Rinne";
	  rightAnswer = 1;
}
if (index === 2){
		document.getElementById('question-field').innerText = "Vad heter Norges kung" ;
	  document.getElementById('answer-1-field').innerText = "Kung Olav V";
	  document.getElementById('answer-2-field').innerText = "Carl XVI Gustaf";
	  document.getElementById('answer-3-field').innerText = "Kung Harald V";
	  rightAnswer = 3;
}
if (index === 3){
		document.getElementById('question-field').innerText = "Vilken terrorist grupp är inte med i Irans Axis of resistance?" ;
	  document.getElementById('answer-1-field').innerText = "Hezbollah";
	  document.getElementById('answer-2-field').innerText = "Hamas";
	  document.getElementById('answer-3-field').innerText = "IS";
	  rightAnswer = 3;
}	
if (index === 4){
		document.getElementById('question-field').innerText = "Av nuvarande sittande presidenter, vem har suttit längst?" ;
	  document.getElementById('answer-1-field').innerText = "Paul Biya, Kamerun";
	  document.getElementById('answer-2-field').innerText = "Vladimir Putin, Ryssland";
	  document.getElementById('answer-3-field').innerText = "Ali Abdullah Saleh, Yemen";
	  rightAnswer = 1;
}
if (index === 5){
		document.getElementById('question-field').innerText = "Vem var Sveriges föregående statsminister" ;
	  document.getElementById('answer-1-field').innerText = "Stefan Löfven";
	  document.getElementById('answer-2-field').innerText = "Magdalena Andersson";
	  document.getElementById('answer-3-field').innerText = "Ulf Kristersson";
	  rightAnswer = 2;
}
if (index === 6){
		document.getElementById('question-field').innerText = "Når är nästa presidentval i USA?" ;
	  document.getElementById('answer-1-field').innerText = "4 December 2024";
	  document.getElementById('answer-2-field').innerText = "6 Januari 2025";
	  document.getElementById('answer-3-field').innerText = "5 November 2024";
	  rightAnswer = 3;
}
if (index === 7){
		document.getElementById('question-field').innerText = "Hur länge sitter en vald president i USA?" ;
	  document.getElementById('answer-1-field').innerText = "4 år";
	  document.getElementById('answer-2-field').innerText = "5 år";
	  document.getElementById('answer-3-field').innerText = "6 år";
	  rightAnswer = 1;
}
if (index === 8){
		document.getElementById('question-field').innerText = "Hur länge sitter en vald president i Finland" ;
	  document.getElementById('answer-1-field').innerText = "4 år";
	  document.getElementById('answer-2-field').innerText = "5 år";
	  document.getElementById('answer-3-field').innerText = "6 år";
	  rightAnswer = 3;
}
if (index === 9){
		document.getElementById('question-field').innerText = "Vad hette Finlands första president?" ;
	  document.getElementById('answer-1-field').innerText = "Kaarlo Juho Ståhlberg";
	  document.getElementById('answer-2-field').innerText = "Pehr Evind SvinHufvud";
	  document.getElementById('answer-3-field').innerText = "Gustaf Mannerheim";
	  rightAnswer = 1;
}
if (index === 10){
		document.getElementById('question-field').innerText = "Vilken diktator är ansvarig för flest dödsfall?" ;
	  document.getElementById('answer-1-field').innerText = "Adolf Hitler";
	  document.getElementById('answer-2-field').innerText = "Mao Zedong";
	  document.getElementById('answer-3-field').innerText = "Joseph Stalin";
	  rightAnswer = 2;
}
if (index === 11){
	 document.getElementById('game-in-progress').style.display = 'none';
	document.getElementById('game-feedback').style.display = 'block';
	document.getElementById('total-player-points').innerText = playerPoints;
	const feedbackTitle = document.querySelector('#game-feedback h2');
	switch (playerPoints){
	case 0:
	feedbackTitle.innerText = "Försökte du?";
	break;
	case 1:
	feedbackTitle.innerText = "Bättre än 0!";
	break;
	case 2:
	feedbackTitle.innerText = "Urselt..";
	break;
	case 3:
	feedbackTitle.innerText = "Hemskt dåligt.";
	break;
	case 4:
	feedbackTitle.innerText = "Bättre kan du.";
	break;
	case 5:
	feedbackTitle.innerText = "Bättre än inget.";
	break;
	case 6:
	feedbackTitle.innerText = "Du försökte i alla fall.";
	break;
	case 7:
	feedbackTitle.innerText = "Helt okej.";
	break;
	case 8:
	feedbackTitle.innerText = "Fint!";
	break;
	case 9:
	feedbackTitle.innerText = "Bra jobbat!";
	break;
	case 10:
	feedbackTitle.innerText = "Snyggt! Alla rätt!";
	break;
	}
}
}  


function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answers"]:checked');
    if (selectedAnswer) {
        if (parseInt(selectedAnswer.value) === rightAnswer) { 
            playerPoints += 1;
            const audio = new Audio(ljudSpel.ljud[1].audio); // Play success sound (index 1 for success.mp3)
            audio.play();
        } else {
            const audio = new Audio(ljudSpel.ljud[0].audio); // Play failure sound (index 0 for failure.mp3)
            audio.play();
        }
        document.getElementById('player-points').innerText = playerPoints;
        i++;
        loadQuestion(i);
    } else {
        alert("Please select an answer before proceeding!");
    }
}
function allmanBild ()
{
	 window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}