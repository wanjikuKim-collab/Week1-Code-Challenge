//Write a program that prompts the user to input student marks.
// The input should be between 0 and 100. 
//Then output the correct grade as follows: 
//A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.


const generatedGrade = document.querySelector('li');
const form = document.querySelector('form');
const input = document.getElementById('input')

//1. we add an event listener
//an event listener tracks activities inside the web page

form.addEventListener('submit', e=>{
    //The event listener has a default of sending content to the browser
    //to prevent this we use preventDefault
    e.preventDefault();
    checkInput(input)});

// 2. we create a function that checks the user input and displays it
const checkInput = (input)=>{
    const checkInput = input.value
    if (checkInput > 79 && checkInput <=100) {
        generatedGrade.textContent = 'You grade is: A';
      } else if (checkInput >= 60 && checkInput <= 79) {
        generatedGrade.textContent = 'You grade is: B';
      } else if (checkInput > 49 && checkInput <= 59) {
        generatedGrade.textContent = 'You grade is: C'
      } else if (checkInput > 40 && checkInput <= 49) {
        generatedGrade.textContent = 'You grade is: D';
      } else if (checkInput >= 0 && checkInput <= 40) {
        generatedGrade.textContent= 'You grade is: E';
      } else {
        generatedGrade.innerHTML = '<li style="color:red";>Errror</li>';
      }
    }
