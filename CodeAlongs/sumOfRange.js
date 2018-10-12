/**
 * Creator: steppe
 * Date Created; 10/12/18
 * Date Last Modified: 10/12/18
 */

 var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];

 //get the sum of the array
 var sum = 0;

 //using a loop to calaculate the sum
 for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
     //addition operator to add current element's value to the rolling sum
     sum += testArray[arrayPosition];
 }
 console.log('------------------------------------');
 console.log("The sum of " + testArray + " is: " + sum);
 console.log('------------------------------------');