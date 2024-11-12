/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
    startTimer(clock);
  });

  // Task 2. Submit Button
  const submitBtn = document.querySelector('#btnSubmit');
  const scoreSpan = document.querySelector('#score');
  submitBtn.addEventListener('click', () => {
    scoreSpan.innerHTML = calculateScore();
    console.log('Submit Button: Score Updated');
  });

  // Task 4. Reset Button
  const resetBtn = document.querySelector('#btnReset');
  resetBtn.addEventListener('click', () => {
    window.location.reload();
    console.log('Reset Button: Page reloaded');
  });

  // Task 5. Add functionality to quiz timer
  const clock = document.querySelector('#time');

  const startTimer = (clock) => {
    // could implement to parse clocks inner html to get time value?
    // but decided to set time to 59 seconds for simplicities sake
    let sec = 59;
    let timer = setInterval(function(){
          clock.innerHTML='00:'+ sec;
          sec--;
          if (sec < 0) {
              calculateScore(timer);
              console.log('Timeout: Score Updated');
          }
      }, 1000)
}

  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    // Task 3. Add 2 additional questions to the quiz
    {
      q: 'Which mountain has the highest altitude on Earth?',
      o: ['K2', 'Chimborazo', 'Kilimanjaro', 'Everest'],
      a: 3,
    },
    {
      q: 'Where is the lowest altitude on the Earth\'s surface?',
      o: ['The Dead Sea', 'Litke Deep', 'The Mariana Trench', 'Kola Borehole'],
      a: 3
    },
    {
      q: 'Arachnids have eight legs?',
      o: ['True', 'False'],
      a: 0
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';

    // format quiz and put to display
    quizArray.map((quizItem, index) => {
      let options = '';
      // format quizItem options
      quizItem.o.forEach((option, optionIndex) => {
        options += `<li class="list-group-item" id="li_${index}_${optionIndex}"><input type="radio" name="radio${index}" id="radio_${index}_${optionIndex}"> ${option}</li>`
      })
      // format quiz wrapper list
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    ${options}
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = (timer) => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          // correct answers background to a light green color
          liElement.style.backgroundColor = '#AFA';
          score++;
        }

        if (radioElement.checked) {
          // code for task 1 goes here
        }
      }
    });
    clearInterval(timer);
    return score;
  };

  // call the displayQuiz function
  displayQuiz();
});
