var time = 60;

		$(".countTime").html("<h3>" + time + "</h3>");

//init variables
		var timer;

		var q1 = false;
		var q2 = false;
		var q3 = false;
		var q4 = false;
		var q5 = false;
		var score = 0;
//init functions

		var startTime = function() {

			timer = setInterval(function() {

				counting = true;

      			time --;

      			if (time <= 0){

      					clearInterval(timer)

      				$(".scoreBoard").attr("style", "height: auto; margin-top: 100px;");
				$(".wrapper").attr("style", "height: 0px;");
				if (q1) {
					score ++;
				}

				if (q2) {
					score ++;
				}

				$(".score").html(score);
      			}

     		$(".countTime").html("<h3>" + time + "</h3>");

			}, 1000);

		
		}

		$(".q1").on("click", function() {

			$(".q1").attr("style", "color: black;");
			$(this).attr("style", "color: blue;");

		if (this.value === "right") {

			q1 = true;

		} else {

			q1 = false;
		}

		// console.log(q1);

		});

		$(".q2").on("click", function() {

			$(".q2").attr("style", "color: black;");
			$(this).attr("style", "color: blue;");

		if (this.value === "right") {

			q2 = true;

		} else {

			q2 = false;
		}

		//console.log(q2);

		});


		$(".q3").on("click", function() {

			$(".q3").attr("style", "color: black;");
			$(this).attr("style", "color: blue;");

		if (this.value === "right") {

			q3 = true;

		} else {

			q3 = false;
		}

		// console.log(q1);

		});

			$(".q4").on("click", function() {

			$(".q4").attr("style", "color: black;");
			$(this).attr("style", "color: blue;");

		if (this.value === "right") {

			q4 = true;

		} else {

			q4 = false;
		}

		// console.log(q1);

		});

		$(".q5").on("click", function() {

			$(".q5").attr("style", "color: black;");
			$(this).attr("style", "color: blue;");

		if (this.value === "right") {

			q5 = true;

		} else {

			q5 = false;
		}

		// console.log(q1);

		});

			$(".submit").on("click", function() {

				$(".scoreBoard").attr("style", "height: 250px; margin-top: 100px;");
				$(".wrapper").attr("style", "height: 0px;");
				if (q1) {
					score ++;
				}

				if (q2) {
					score ++;
				}

				if (q3) {
					score ++;
				}

				if (q4) {
					score ++;
				}

				if (q5) {
					score ++;
				}

				$(".score").html(score);

		});

		startTime()



var correctAnswers = 0
var wrongAnswers = 0

var marvelQuestions = [{

	question: "How did Spider-Man get his powers?",

	guesses: ["A. Born with them",
				"B. Bit by a spider",
				"C. Ate a spider",
				"D. Lab experiment gone wrong"],
	answer: 1,
},

{
	question: "How did Captain America get his powers?",

	guesses: ["A. Died and resurrected with them",
				"B. Born with them",
				"C. Granted them by the Gods",
				"D. Created in a government lab"],

	answer: 3 
},

{
	question: "Who is not in the Avengers?",

	guesses: ["A. Iron Man",
				"B. The Hulk",
				"C. Wolverine",
				"D. Thor"],
	answer: 2
},

{
	question: "Which is a physical disadvantage of Daredevil?",

	guesses: ["A. Deaf",
				"B. Blind",
				"C. Missing an arm",
				"D. Cannot Speak"],

	answer: 0
},

{
	question: "Which Titanic Team is Storm a part of?",

	guesses: ["A. Avengers",
				"B. Guardians of the Galaxy",
				"C. X-Men",
				"D. Fantastic Four"],
	answer: 2
},

{
	question: "Who is Thor's evil brother?",

	guesses: ["A. Ultron",
				"B. Thanos",
				"C. Magneto",
				"D. Loki"],
	answer: 3
},

{
	question: "What is Luke Cage's special ability?",

	guesses: ["A. Super Speed",
				"B. Bullet Proof",
				"C. Invisibility",
				"D. Shape-Shifter"],

	answer: 1
},

{
	question: "What is the name of Iron-Man's super computer?",

	guesses: ["A. Jeeves",
				"B. Jarvis",
				"C. Jerry",
				"D. Jinx"],

	answer: 1
},

{
	question: "Who defeated Dr. Octopus?",

	guesses: ["A. Captain America",
				"B. Fantastic Four",
				"C. Spider Man",
				"D. Daredevil"],

	answer: 2

},

{
	question: "Who is not a hero in Marvel Comics?",

	guesses: ["A. Green Lantern",
				"B. Black Panther",
				"C. Medusa",
				"D. Hawkeye"],

	answer: 0
}

];






