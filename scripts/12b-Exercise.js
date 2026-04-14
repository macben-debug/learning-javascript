const multiply= (param1,param2)=> param1*param2;

console.log(multiply(2,3));
console.log(multiply(7,10));


const countPositive=(nums)=>{
    let counter =0;
    nums.forEach((num) => {
        if(num>0){
            counter++;
        }
    });
    return counter;
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));

const addNum=(array,num)=>{
    return array.map(value=> value+num);

}

console.log(addNum([1,2,3],2));
console.log(addNum([-2,-1,0,99],2));

const removeEgg=(foods)=>{
    let counter =0;
    return foods.filter(food=>{
        if (food ==='egg' && counter <2){
            counter ++;
            return false;
        }
        return true;
    } );
}

console.log(removeEgg(['egg','apple','egg','egg','ham']));  