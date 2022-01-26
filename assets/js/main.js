"use strict"


// //// GetSum Functions
// function getSum(n) {
//     let sum = 0;

//     for(let i = 0; i <= n; i++) {

//         sum+=i;
//     }

//     return sum;
// }

// console.log(getSum(3));


// function getSumExtra(n) {
//     if(n==1) {
//         return n;
//     }else{
//         return n + getSumExtra(n-1);
//     }
// }

// console.log(getSumExtra(3));


/*
let arr = [1,2,3,4,5]

function getArrayItems(n,m,...list){

let sum = n+m;

    for (const item of list) {
        sum +=item;
    }
    return  sum;
    // console.log('n - ' +n);
    // console.log('m - ' +m);
}

console.log(getArrayItems(1,2,3,4,5,6,7));
*/









// //////CallBack Functions
/*
let array = [1,2,3,4,5,6];

// function isEven(n) {
//     return n%2==0;
// }

// function isOdd(n){
//     return n%2!=0;
// }
// function greater3(n){
//     return n>3;
// }

// let isEven = function(n) {
//     return n%2==0;
// }
// let isOdd =function(n) {
//     return n%2!=0;
// }
// let isGreater3 =function(n) {
//     return n>3;
// }

let isEven = n => n%2==0




function getSumByEven(arr,callback) {

    let result=0;

    for (const item of arr) {

        if(callback(item)) {
            result += item;
        }

    }

    return result;

}





console.log(getSumByEven(array,function(n){
    return n%2==0;
}))
console.log(getSumByEven(array,isEven))
// console.log(getSumByEven(array,isGreater3))




function getSumByOdd(arr) {

    let result=0;

    for (const item of arr) {

        if(item%2!=0) {
            result += item;
        }

    }

    return result;

}
function getSumByThree(arr) {

    let result=0;

    for (const item of arr) {

        if(item>3) {
            result += item;
        }

    }

    return result;

}

console.log(getSum(array))
*/

// //Map

/*
let array=[1,2,3,4,5,6];
let num=2;

// function createMap(arr,func) {
//     let result = [];
//     for (const item of arr) {
//         result.push(func(item))
//     }
//     return result;
// }

// let itemMultiply= function(m) {
//     return m * num;
// }

// console.log(createMap(array,itemMultiply))

let result = array.map(m=>m*2);

    console.log(result);
    array[0]=33;
    console.log(array);
    console.log(result);

    array.forEach((n,i)=>{
        console.log(n,i);
    })
*/

   