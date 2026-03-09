let calculation = localStorage.getItem('calculation')||'';
  showAnswer();
function updateCalculation(value) {
  calculation += value;
  // console.log(calculation);
  showAnswer();
  localStorage.setItem('calculation',calculation);

}

function showAnswer(){
  document.querySelector('.js-display').innerHTML= calculation;

}
      