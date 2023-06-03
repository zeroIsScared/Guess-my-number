'use strict';

let message =document.querySelector('.message').textContent;
console.log(message); 
let inputNumber = document.querySelector('.guess');
let displayNumber = document.querySelector('.number').textContent;
let score = document.querySelector('.score').textContent;
let highscore = document.querySelector('.highscore').textContent;
let backgroundColor = document.body.style.backgroungColor;
let number1= randomNumber();
let newScore;
let btnAgain= document.querySelector('.again');
let btnCheck = document.querySelector('.check');

function randomNumber () {
   return  Math.trunc(Math.random() * 20) + 1;
}

const resetGame =()=>{
    number1= randomNumber();
    message = 'Start guessing...';
    score = '20';
    inputNumber.value = '';
    displayNumber = '?';
    backgroundColor = 'black';
  
    }

console.log(number1);
console.log(randomNumber());
console.log(parseInt(inputNumber.value));

const checkNumber =()=>{
    console.log(parseInt(inputNumber.value));
    console.log(number1); 

    if (parseInt(inputNumber.value) == number1){

        message= 'Correct Number!';
        backgroundColor= 'green';
        displayNumber = number1;

    } else if (parseInt(inputNumber.value) > number1){

        message= 'Too low!';
        // minus score
        newScore= parseInt(score)-1;
        score= `${newScore}`;

    } else {

        message= 'Too High!';
         // minus score
         newScore= parseInt(score)-1;
         score= `${newScore}`;

    }
}


btnAgain.addEventListener('click',resetGame)

btnCheck.addEventListener('click',checkNumber);








