/*
-------Display sum of all the odd numbers from 91 to 129.----------
*/

let i=91;
let oddSum=0;
while( i<=129 )
{
    if(i%2!==0)
    {
        oddSum+=i; //oddSum=oddSum+i;
        console.log(oddSum);// see the all steps
    }

    i++;
}
//console the value of oddSum

console.log("The Sum Of Odd Number is: ", oddSum);

/*
--------------Display sum of all the even numbers from 51 to 85.-----------------
*/
console.log("\n")

let num=51;
let evenSum=0;
while( num<=85 )
{
   if(num%2===0)
   {
    evenSum+=num;  //evenSum=evenSum+i;
    console.log(evenSum);
   }

   num++;
}

console.log("The Sum Of Even Numbers Is: ",evenSum);