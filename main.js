/**
 * Hello challenger! Your task is to write a function named `transformLength` which takes in a string and returns 1 if the length of the string is even and otherwise -1.
 *
 * Your implementation should handle strings whose length is between 0 (inclusive) and 2500 (inclusive).
 *
 * A few examples:
 *    `transformLength("table")` should return -1 as the length of "table" is not even
 *    `transformLength("wizard")` should return 1 as the length of "wizard" is even
 */
export function transformLength (string) {
    // Check if the length of the string is within the valid range
    if (string.length >=0 && string.length <=2500){
        //Check if the length of the string is even
    if (string.length % 2 === 0){
        return 1;
    }
    else {
        return -1;
    }
  } else {
    throw new Error("string length is not in the valid range of (0-2,500)");
  }
}

//Make a function where 