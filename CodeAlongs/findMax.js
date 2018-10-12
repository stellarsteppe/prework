/**
 * Creator: steppe
 * Date Created; 10/12/18
 * Date Last Modified: 10/12/18
 */

 var testArray = [78, 99, 12, 34, 92, 56, 75, 55];

var max = 0;


 for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
     

     
     var currentElement = testArray[arrayPosition];
     var nextElement = testArray[arrayPosition + 1];

     if (currentElement > nextElement) {
      
         max = currentElement;
         
        
     } if (currentElement < nextElement) {
        max = nextElement;
        
     }
    }

 console.log('------------------------------------');
 console.log(max);
 console.log('------------------------------------');

    

