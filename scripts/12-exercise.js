let add = ()=>{
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

runTwice(()=>{
    console.log('12b');
});

const finishButton= document.querySelector('.js-button');

finishButton.addEventListener('click',()=>{
    let button = document.querySelector('.js-button');
    button.innerHTML ='Loading...';
   setTimeout ( ()=>{
    button.innerHTML ='Finished!';
   },2000)
})

const addedButton= document.querySelector('.js-added');
addedButton.addEventListener('click',()=>{
    let timeoutId; 
    const display = document.querySelector('.js-display');
    display.innerHTML = 'Added';
    clearTimeout(timeoutId)
    timeoutId =setTimeout( () =>{
        display.innerHTML ='';
    },2000)
})

const addNotification = document.querySelector('.js-display-notification');
let messages =2;
let isdisplayNotification;
let intervalId;
//displayNotification();
addNotification.addEventListener('click',()=>{
    messages++;
    if(isdisplayNotification){
        return ;
    }
    intervalId= setInterval(()=>{
    if (document.title === '12 Exercises'){
    document.title= `(${messages}) New messages`;
    }
    else{
    document.title= '12 Exercises';
    }
    }, 1000);
    isdisplayNotification =true;
}
)

const removeNotification = document.querySelector('.js-remove-notification');

removeNotification.addEventListener('click',()=>{
    isdisplayNotification= false;
    messages--;
    if (messages === 0 ){
        clearInterval(intervalId);
        document.title='Exercise 12';
    }
})