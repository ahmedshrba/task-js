let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

console.log("Original numbers list: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)

{  //A variable that has an initial value that changes when the condition below is met
   int swap=0;

    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {   //This is a condition by which the ascending order is made
        if(numbers[j] > numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
           swap=1;
        }
    }
  //complex time
   //Through this condition, we reduce the time taken to obtain the desired result
  if(swap==0)
    {
       break;

    }
}

console.log("Numbers list After sorting: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{   int swap=0;
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {   //By this condition, the order is in descending order
        if(numbers[j] < numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
         swap=1;
        }
    }
     if(swap==0)
    {
         break; 
    }
}

console.log("Numbers list After Desc sorting: ", numbers)


