/* Creator: steppe
Date Created 10 / 11 / 18
Date last modified: 10 / 11 / 18 */

function countingCharacters(stringToCount) {
    console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind) {
    var characterCount = 0;
    for (var characterPosition = 0; characterPosition < stringToCount.length; characterPosition++) {
        if (stringToCount[characterPosition] == characterToFind) {
            characterCount++;
        }
    }
    console.log('------------------------------------');
    console.log("String to search in: "  + stringToCount);
    console.log('------------------------------------');
    console.log('------------------------------------');
    console.log("Character to find: " + characterToFind);
    console.log('------------------------------------');
    console.log('------------------------------------');
    console.log("Number of times the character appears: " + characterCount);
    
    }
    