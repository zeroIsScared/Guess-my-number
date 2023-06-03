'use strict';

let message =document.querySelector('.message');
console.log(message); 
let inputNumber = document.querySelector('.guess');
let displayNumber = document.querySelector('.number');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let bodyStyle= document.body.style;
let number1= randomNumber();
let newScore;
let btnAgain= document.querySelector('.again');
let btnCheck = document.querySelector('.check');

function randomNumber () {
   return  Math.trunc(Math.random() * 20) + 1;
}

const resetGame =()=>{
    number1= randomNumber();
    message.textContent = 'Start guessing...';
    score.textContent= '20';
    inputNumber.value = '';
    displayNumber.textContent = '?';
    bodyStyle.backgroundColor = 'black';

    if( highscore.textContent < newScore ){
        highscore.textContent = newScore;
    }
   
    }

console.log(number1);
console.log(randomNumber());
console.log(parseInt(inputNumber.value));

const checkNumber =()=>{
    console.log(parseInt(inputNumber.value));
    console.log(number1); 

    if (parseInt(inputNumber.value) === number1){

        message.textContent= 'Correct Number!';
        bodyStyle.backgroundColor= 'green';
        displayNumber.textContent = number1;        
        highscore.textContent= score.textContent;
        console.log(1); 

    } else if (parseInt(inputNumber.value) < number1){

        message.textContent= 'Too low!';
        // minus score
        newScore= parseInt(score.textContent)-1;
        score.textContent= newScore;
        console.log(2); 

    } else if (parseInt(inputNumber.value) > number1){

        message.textContent= 'Too High!';
         // minus score
         newScore= parseInt(score.textContent)-1;
         score.textContent= newScore;
         console.log(3); 

    } else if (!inputNumber.value){

        message.textContent= 'Write a number!';

    }
}


btnAgain.addEventListener('click',resetGame)

btnCheck.addEventListener('click',checkNumber);








