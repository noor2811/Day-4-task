
// Sum of numbers in array Using Anonymous 
let sumRes=0;
let Addition = function(arr)
{
   arr.map(function (i){
    sumRes+=i
   });
   console.log("Sum of array :",sumRes);
}
let number= [1,2,3,4,5,15];
Addition(number);

// Printing Odd Numbers in given array using IIFE
(function (a)
{
    let oddNum=[];
    a.map(function(i)
    {
        if(i%2!==0)
        {
            oddNum.push([i]);
        
        }
    })
    console.log("Odd numbers in Given array :",oddNum.join(" "));
})([1,3,4,5,6,7,8,10]);

// Converting String into Title case in a string array using anonymous Function
let strArr= ["noor","ameen"];
let title =function titleCase (arr)
{
let resArr=[];
for(let str of arr)
{
     resArr.push(str.charAt(0).toUpperCase()+str.slice(1));
}
console.log("Title case Array :",resArr);
}
title(strArr);
//Prime numbers in Given array using anonymous Function
let prime = function primeNum(a)
{
    if(a<=1) 
    return false;
    for(let i=2;i<a;i++)
    {
        if(a%i ==0)
        {
            return false;
        }
    }
    return true;
    

}

let numArr=[1,2,3,4,5,6,7,88,73];
let primeArr=[];
numArr.map(function (i){
 if(prime(i))
 {
    primeArr.push(i);
 }
});
    console.log(`The Prime No. in given Array :${primeArr} `);

    //palindrom using IIFE
(function (){
    let str=["amma","racecar","mahamaham","kumbakonam"];
   
   function palin(st){
   let rev=st.split("").reverse().join("");
   if(rev==st)
   {
       return true;
   }
   else 
   {
       return false;
   }
   
   }
   let palinArr=[];
   str.map(function(i){
       if(palin(i))
       {
           palinArr.push(i);
       }
   });
   console.log(`Palindrome words in Given Array : ${palinArr}`);
   })();
   