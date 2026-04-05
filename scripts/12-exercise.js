let add = function(){
    console.log(2+3);
}

/*let i =0;
while(i<2){
    add();
    i++;
}*/

function runTwice(fun){
    fun();
    fun();
}

runTwice(add);  

runTwice(function(){
    console.log('12b');
});



function buttonChange(){
    let button = document.querySelector('.js-button');
    button.innerHTML ='Loading...';
   setTimeout ( ()=>{
    button.innerHTML ='Finished!';
   },2000)
}

function addedButton(){
    let timeoutId; 
    const display = document.querySelector('.js-display');
    display.innerHTML = 'Added';
    clearTimeout(timeoutId)
    timeoutId =setTimeout( () =>{
        display.innerHTML ='';
    },2000)
}

let messages =2;
   

let isdisplayNotification;
let intervalId;
displayNotification();
function displayNotification(){
    if(isdisplayNotification){
        return ;
    }
    intervalId= setInterval(function(){
    if (document.title === '12 Exercises'){
    document.title= `(${messages}) New messages`;
    }
    else{
    document.title= '12 Exercises';
    }
    }, 1000);
    isdisplayNotification =true;
}

function stopNotification(){
    isdisplayNotification= false;

    clearInterval(intervalId);
    document.title='Exercise 12';
}