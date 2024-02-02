/*
-------Display sum of all the odd numbers from 91 to 129.----------
*/

let oddSum=0;
for(let i=91; i<=129; i++)
{
    if(i%2!==0)
    {
        oddSum+=i; //oddSum=oddSum+i;
        console.log(oddSum);// see the all steps
    }
}
//console the value of oddSum

console.log("The Sum Of Odd Number is: ", oddSum);

/*
--------------Display sum of all the even numbers from 51 to 85.-----------------
*/
console.log("\n")

let evenSum=0;
for(let i=51; i<=85; i++)
{
   if(i%2===0)
   {
    evenSum+=i;  //evenSum=evenSum+i;
    console.log(evenSum);
   }
}

console.log("The Sum Of Even Numbers Is: ",evenSum);