const musique_questions = ["Qui a composé la musique du film Interstellar?", "Hans Zimmer",
	"Quel groupe a publié la premier album de black metal au monde?", "Venom",
	"Qui est le 'Big Four' du metal thrash américain?", "Metallica, Megadeth, Slayer, Anthrax",
	"Quel est le deuxième album du band nommé Death?", "Leprosy",
	"Qui est l'artiste le plus populaire du monde?", "Weeknd",
	"En quelle année est sorti la chanson 'I Kissed A Girl' par Katy Perry?", "2008",
	"En quelle année est sorti la chanson 'My Heart Will Go On' par Celine Dion?", "1995",
	"Quel est la dernière chanson du premier album des Sex Pistols?", "EMI",
	"Qui a écrit la chanson 'Holiday in Cambodia'?", "Dead Kennedys",
	"Qui a composé la musique de 'Mission Impossible'?", "Lalo Schifrin",
	"Dans quel pays l'ACDC a-t-elle été créée?", "Australie",
	"Reg Presley faisait partie de quel groupe?", "Troggs",
	"En quelle année Black Sabbath a-t-il sorti 'Paranoid'?", "1970",
	"Rebel Yell est une chanson à succès de quelle icône du rock classique?", "Billy Idol",
	"Quel artiste a remporté un Grammy pour sa reprise de The Guess Who's 'American Woman'?", "Lenny Kravitz",
	"Gene Simmons et Paul Stanley ont co-fondé quel groupe de rock?", "KISS",
	"Quel a été le premier single des Beatles en Angleterre?", "Love Me Do",
	"Lemmy Kilmister était le leader de quel groupe de hard rock?", "Motörhead",
	"Qui a écrit la chanson thème de James Bond?", "Monty Norman",
	"Le nom du troisième album du groupe Slayer s'appelle Reign in Blood ou Raining Blood?", "Reign in Blood"];

const questionsSciFi = [
	"Combien y a t-il de film Star Wars?", "12",
	"En quelle année est sorti le film un nouvel espoir?", "1977",
	"Qui est le producteur d'Interstellar?", "Christopher Nolan",
	"Dans quelle ville ce passe le film Robocop?", "Detroit",
	"Combien de gigawatts faut-il pour alimenter la machine a remonter le temps dans Back To The Future?", "1.21 gigawatts",
	"En quelle année Marty Mcfly voyage dans le premier Back To The Future?", "1955",
	"Qui a joue Agent J dans Men In Black?", "Will Smith",
	"Quel est le nom de la fausse ville dans The Truman Show?", "Seaheaven",
	"Qui est ce que le Terminator cherche dans le premier Terminator?", "Sarah Connor",
	"En quelle année Marty Mcfly voyage-il dans dans Back To The Future II?", "2015",
	"Qu'elle vitesse doivent-il atteindre pour faire le saut temporel dans Back To The Future?", "88 mph",
	"Qui a écrit les livres Dune?", "Frank Herbert",
	"Sur quelle lune ce passe le film Avatar?", "Pandora",
	"En quelle annee Marty Mcfly voyage dans Back To The Future III?", "1885",
	"Quelle est le nom du sandworm dans le livre Dune?", "Shai-Hulud",
	"Qui a dirige le film E.T.?", "Steven Spielberg",
	"Qui a joué le Terminator dans The Terminator?", "Arnold Schwarzenegger",
	"C'est quoi le nom de la planet dans le livre Dune?", "Arrakis",
	"Quel est le nom du personnage principal dans le livre Dune?", "Paul Atreides",
	"Quel est le nom du personnage principal dans le livre 1984?", "Winston Smith",
]

const questionsHorreur = [
	"Qui est le tueur dans le film Halloween?", "Michael Myers",
	"Quel est le nom de la poupée meurtrière dans le film Child's Play?", "Chucky",
	"Qui a ecrit le livre The Stand?", "Stephen King",
	"En quelle année est sorti le film Jaws?", "1975",
	"Nommez le tueur dans le film A Nightmare On Elm Street?", " Freddy Krueger",
	"Qui est le tueur en série dans le film Psycho de 1960?", "Norman Bates",
	"Quel est le prénom de la petite fille dans le film Poltergeist?", "Carol-Anne",
	"L'intrigue du film The Thing 1982 se déroule sur quel continent?", "Antarctique",
	"Quel est le pouvoir que possède Carrie?", "Télékinésie",
	"Quel est le nom de l'hôtel dans le film The Shining?", "Overlook",
	"Dans quel chapitre de la série de films Friday The 13th dans lequel le tueur porte pour la première fois son fameux masque de      hockey?", "3",
	"En quelle année est sorti le film Friday The 13th?", "1980",
	"Combien de fois faut-il prononcer le nom Candyman devant un miroir afin que le spectre se manifeste?", "5",
	"Qui est la première victime du tueur dans le film Halloween?", "Judith Myers",
	"Nommez la couleur de Christine?", "Rouge",
	"Quel est le nom du personage principal dans l'histoire courte Apt Pupil par Stephen King?", "Todd Bowden",
	"Quel pourcentage approximatif de la population mondiale est mort dans le livre The Stand par Stephen King?", "99%",
	"En quelle année est sorti le livre Hannibal par Thomas Harris?", "1999",
	"Quel est le nom du tueur en serie du livre Red Dragon par Thomas Harris?", "Francis Dolarhyde",
	"Quel est le nom du tueur en serie du livre The Silence Of The Lambs par Thomas Harris?", "Jame Gumb",
	"Quel est le nom du personage principal du livre Raven's gate par Anthony Horowitz?", "Matthew Freeman"
]

//let list_questions = []
let seen = []
let list_questions = questionsSciFi
let questions = []
let reponses = []
let score = 0

function is_even(i){
    console.log(i%2)
    return i%2
}

function resetQuestionsResponse(){
    console.log(list_questions.length)
    questions = [];
    reponses = [];
    seen = [];
    score = 0
    for (let i = 0; i < list_questions.length; i++) {
        if (is_even(i) === 0){
            console.log('EVEN')
            questions.push(list_questions[i])
        }
        else {
            reponses.push(list_questions[i])      
        }
    }
}
resetQuestionsResponse()


/*function whatThemeMusique() {
	list_questions = music_questions;
}
function whatThemeSciFi() {
	list_questions = questionsSciFi;
}
function whatThemeHorreur() {
	list_questions = questionsHorreur;
}
*/
// Function to change the variable value

// Get the button elements
const button1 = document.getElementById("sci-fi");
const button2 = document.getElementById("musique");
const button3 = document.getElementById("horreur");
const submit = document.getElementById("submit-button");
const nextQuestion = document.getElementById("nextQuestion");
submit.disabled = true
// valeur default sci fi
button1.disabled = true
let titre = document.getElementById("titre");
titre.innerHTML = "Test tes connaissances en " + button1.innerHTML 

// Add click event listeners to the buttons
//button1.addEventListener("click", function() {
//  changeValue(questionsSciFi);
//}
//);


function changeValue(value) {
  // Assign the new value to the variable
  nextQuestion.disabled = true
  submit.disabled = false  
  switch(value) {
      case "sci-fi":
        list_questions=questionsSciFi;
        button1.disabled = true
        button2.disabled = false
        button3.disabled = false
        console.log(value);
        titre.innerHTML = "Test tes connaissances en " + button1.innerHTML   
        break;
      case "musique":
        list_questions=musique_questions;
        button1.disabled = false
        button2.disabled = true
        button3.disabled = false
          
        console.log(value);
        titre.innerHTML = "Test tes connaissances en " + button2.innerHTML   
        break;
      case "horreur":
         list_questions=questionsHorreur;
         button1.disabled = false
         button2.disabled = false
         button3.disabled = true
         console.log(value);
         titre.innerHTML = "Test tes connaissances en " + button3.innerHTML 
         break;
  }      
  resetQuestionsResponse();
  generateQuestion();  
}
                                         
const NUM_QUEST = 20 
let randIndex = getRandomNumber()


function getRandomNumber() {
  while (true) {
    let randomNumber = Math.floor(Math.random() * NUM_QUEST);  
    if (!seen.includes(randomNumber)) {
      seen.push(randomNumber);
      console.log("Found a new question")   
      console.log(randomNumber) 
	  return randomNumber;
    }
    if (seen.length == NUM_QUEST) {
      break;
    }	  
    console.log("in LOOP")
  }
  console.log("You won");
  console.log(######)	
}
   
function getRandomQuestion(index) {
   return questions[index]
}

function getRandomResponse(index) {
   return reponses[index]
}

let answer = document.getElementById("input-field");
function checkAnswer() {
	console.log(getRandomResponse(randIndex));
	
	if (answer.value.toLowerCase() == getRandomResponse(randIndex).toLowerCase()) {
	    text.innerHTML = "Bonne réponse!";
		text.style = "color: green;";
		score += 1
    }
	else {
	    text.innerHTML = "Mauvaise réponse";
		text.style = "color: red;";	
	};
	
	answer.value = "";
    nextQuestion.disabled = false
    submit.disabled = true
	console.log(score)
	let score_value = document.getElementById("score-value");
	score_value.innerHTML = "Score: " + score
};
    

function generateQuestion() {
	randIndex = getRandomNumber();
    console.log(randIndex)
    console.log(questions)
	let questionText = document.getElementById("question-text");
	let answerText = document.getElementById("answer-text");
	answer.value = "";
    nextQuestion.disabled = true
    submit.disabled = false
    text.innerHTML = ""
	questionText.innerHTML = getRandomQuestion(randIndex);
    console.log(getRandomQuestion(randIndex));
 }
