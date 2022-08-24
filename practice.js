//problem 1
const multiply=(a,b,c)=>a*b*c;
const result=multiply(5,8,3);
//console.log(result);


//problem 2
const multyline=`
    I am a web developer.
    I love to code.
    I love to eat biriyani.
`;
// console.log(multyline);

//problem 3
const add=(a,b=5)=>a+b;
const result1=add(10);
//console.log(result1);


//practice problem 2
const friends=(array)=>{
    const newArray=[]
    for(const friend of brothers){
        if(friend.length % 2==0){
            newArray.push(friend);
        }
    }
    return newArray;
};
const brothers=['Sakib','Mosayeb','Tanbin','Showkat','Mimu','Akib','Faisal','Fahad'];

const friend=friends(brothers);
//console.log(friend);


//practice problem 3
const square=(numbers)=>{
    const newNumbers=[]
    let sum=0;
for(const num of numbers){
     const square=Math.pow(num,2);
    newNumbers.push(square);
}
for(const num1 of newNumbers){
    sum += num1;
}
const average=sum/newNumbers.length;
return average;
}

const numbers=[2,3,4,5,6,7,8,9];
const averageNumbers=square(numbers);
//console.log(averageNumbers);

//practice problem 4
const maximum=(array1,array2)=>{
    const newArray = [...array1,...array2];
    const maxNumber=Math.max(...newArray);
    return maxNumber;
}
const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];

const maxValue=maximum(arr1,arr2);
//console.log(maxValue);





