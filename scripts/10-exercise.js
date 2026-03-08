function toggle(selector){
  let gamesButton = document.querySelector(selector);

  if(!gamesButton.classList.contains('is-toggled')){
      turnOffPreviousButton();
    gamesButton.classList.add('is-toggled');
  }
  else{
    gamesButton.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton(){
  const previousbutton= document.querySelector('.is-toggled');
  if(previousbutton){
    previousbutton.classList.remove('is-toggled');
  }
 
}