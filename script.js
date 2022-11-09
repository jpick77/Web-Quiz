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
  
  var time = 50
  var i = 0

  var element = document.querySelector("#quiz-body");
  
  document.getElementById('play-again').onclick= function(){

      
      setInterval( function(){
            if (time >0){
            time --;
            document.getElementById('timer').textContent = time
            }
          }, 1000)

      showQuestion()
  }

  document.getElementById('quiz-body').onclick = function(e){
    var text = e.target.innerText;
    if (text === questions[i].answer){
        document.getElementById('result').textContent= "correct"
    }else {
        document.getElementById('result').textContent= "wrong"
        time -=5
    }
    i++
    showQuestion()

  }

  function showQuestion(){

    
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

  