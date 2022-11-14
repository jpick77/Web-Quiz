var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];
  console.log(questions);
  
  var time = 50;
  var i = 0;
  var score = 0;
  let timerInterval;
  var gameOver = document.getElementById('end-game');
  var scoresSaved = document.getElementById('save-scores');
  var inputEl = document.getElementById('initialsEl');
  var saveBtn = document.getElementById('saveBtn');
  var scores = document.getElementById('scores');
  var highscoresBtn = document.getElementById('high-scores');
  varscoreDisplay = document.getElementById('scoreDisplay');

  var savedScores;

  var element = document.querySelector("#quiz-body");
  
  document.getElementById('play-again').onclick= function(){

      
      timerInterval = setInterval( function(){
            if (time > 0){
            time --;
            document.getElementById('timer').textContent = time
            } else {
              clearInterval(timerInterval);
            }
          }, 1000)

      showQuestion();
      endGame();
  }

  document.getElementById('quiz-body').onclick = function(e){
    var text = e.target.innerText;
    if (text === questions[i].answer){
        document.getElementById('result').textContent= "Correct"
        document.getElementById('result').style.display = "block";
        score ++
        document.getElementById('correct-score').textContent = score
    }else {
        document.getElementById('result').textContent= "Wrong"
        document.getElementById('result').style.display = "block";
        time -=5
    }
    i++
    showQuestion();
    endGame();

  }

  function saveScore() {
    if(localStorage.getItem('scores')) {
      savedScores = [localStorage.getItem('scores')];
    } else {
      savedScores = [];
    }

    var initialsScore = inputEl.value + " " + score.textContent;

    savedScores.push(initialsScore);
    localStorage.setItem('scores', savedScore);
  };

  function test() {
    var scores = [localStorage.getItem('scores').split(',')];
    console.log(localStorage.getItem('scores'));
    console.log('scores');

    scores.forEach(score => {
      var li = document.createElement('li');
      li.textContent = score;
      scoreDisplay.append(li);
    });
  }

  saveBtn.addEventListener('click', savedScore);
  highscoresBtn.addEventListener('click', test);


  function showQuestion(){
    if (i >= 4) {
      console.log("finished");
      clearInterval(timerInterval);
      // build your end screen
      function endGame() {
       var quizHead = document.getElementById('quiz-head');
       var playAgain = document.getElementById('play-again');
       var quizbody = document.getElementById('quiz-body');
       var scoreSaver = document.getElementById('scoreSaver');
       gameOver.style.display = "block";
       scoresSaved.style.display = "block";
       element.style.display = "none";
       quizHead.style.display = "none";
       playAgain.style.display = "none";
       quizbody.style.display = "none";
       scoreSaver.style.display = "block";
      }
      endGame(); 
      document.getElementById('save-score').classList = "";
    }else {
      element.innerHTML=
      `<h2 class="quiz-question" id="question">
      ${questions[i].title} <br> 
      </h2>
      <ul class="answer-choices">
          <button >${questions[i].choices[0]}</button>
          <button>${questions[i].choices[1]}</button>
          <button>${questions[i].choices[2]}</button>
          <button>${questions[i].choices[3]}</button>
      </ul>
      `
    }

    
      // element.innerHTML=
      // `<h2 class="quiz-question" id="question">
      // ${questions[i].title} <br> 
      // </h2>
      // <ul class="answer-choices">
      //     <button >${questions[i].choices[0]}</button>
      //     <button>${questions[i].choices[1]}</button>
      //     <button>${questions[i].choices[2]}</button>
      //     <button>${questions[i].choices[3]}</button>
      // </ul>
      // `

  }

  