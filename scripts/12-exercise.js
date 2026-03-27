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
while (messages>0){
    setInterval(function(){
    if (document.title === '12 Exercises'){
    document.title= `(${messages}) New messages`;
    }
    else{
    document.title= '12 Exercises';
    }
    }, 1000);
}
