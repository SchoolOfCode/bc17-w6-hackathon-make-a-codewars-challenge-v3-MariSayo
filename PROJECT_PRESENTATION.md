Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

# plan

**stage 1**

- clone your repo to a folder
- make sure to do `npm install`
- install any devdependincies like `npm install vitest`
- make sure you have both `"type": "module"` and in your scripts a test for vitest `"test": "vitest"`
- This is the basic set up complete
- /////"test": "echo \"Error: no test specified\" && exit 1",   removed this from tests as it was interfering with script.



**stage 2**

# CodeWars information
- follow what the standard is/client wants. In this case our basic requirement is to build our own Kata
- TDD testing 

/// WHAT THE CLIENT WILL LOOK AT////
    - Enjoyment
    - Creativity
    - Tests and technical solution
    - The accompanying plan 


- Unit testing
- figure out the function you want solved and how to test for the edge cases.
- what are the valid or invalid inputs and outputs?
- How many test cases need to be considered?

**What are the fun ideas?**

- 1) Write a function where the numbers 1 to 7 correspond to their colour in the rainbow where the response returned is the colours as a string in order.
 - let 1 = red, let 2 = orange 

 do I want each number to correlate a colour?
 rainbow is supposed to be an array of all those colours?
 the result should be an array of the colours...
 
 What is the result going to look like?

 "red, orange, yellow, green, blue, indigo and violet"
 - as a string
 - are the numbers necessary?
 - I ended up removing the numbers as they were not necessary to my code

tests to run:
- is the string returing?
- what is length of array before indigo removed?
- 


How will the question asked look like?

Please create the rainbow colours using an array but then remove indigo because indigo is not a colour of the rainbow. 

''Hello there, in this project your aims are as follows:
- Make a function where you have an array of the 7 colours of the rainbow
- ordered as red, orange, yellow, green, blue, indigo and violet
- return this as a string without indigo because indigo is not a colour of the rainbow and we all know that.
-return as a string!
- please also return the **originalLength** and return the **finalLength** of your array!''

I WANT TO MAKE IT CLEAR THAT I THINK INDIGO IS A COLOUR OF THE RAINBOW ITS JUST THIS IS THE ONLY IDEA I HAD