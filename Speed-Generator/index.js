//using querying elements to drill into the DOM
const form = document.querySelector('form');
const speed = document.getElementById('speed')
const counter  = document.querySelector('p#counter')
const feedback  = document.querySelector('p#feedback')





form.addEventListener('submit', (e)=>{    
//The event listener has a default of sending content to the browser
//to prevent this we use preventDefault
    e.preventDefault();
    checkSpeed(speed)});

    //we create a function that checks the drivers speed and returns the values indicated
function checkSpeed(speed) {
    let points;
    const checkSpeedValue = speed.value;// this takes the value the user inputs
    points = (checkSpeedValue- 70) / 5;//1 point is equivalent to 5 km/s (i.e for values above the speed limit (70))

      
    if (checkSpeedValue <= 70) {
        feedback.textContent = 'OK';
    } else if (checkSpeedValue> 70 && checkSpeedValue<130) {
      return counter.textContent = points
    } else if (points >= 12) {
        counter.textContent = points
      return feedback.textContent = 'License suspended'
    }
}
    
    // console.log(checkSpeed(150))


    
    
    
    
    
    

