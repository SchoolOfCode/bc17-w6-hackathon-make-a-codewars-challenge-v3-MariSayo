import {test, expect} from "vitest";
import  {transformLength}  from "./main.js";
//import {numberToColour} from "./main.js";


test("This should return 1 if string even", async () => {
    expect(transformLength("rabbit")).toBe(1);
})

test("This should return -1 if string odd", async () => {
    expect(transformLength("fly")).toBe(-1);
})

test("this should throw an error if string is outside of valid range", async () =>{
expect(()=>{
    expect(transformLength("o"))
}).toThrow("string length is not in the valid range of (2-2500)")
})


// test("this should return all the colours of the rainbow", async () => {
//     expect(numberToColour("red").toBe(1));
//     expect(numberToColour("orange").toBe(2));
//     expect(numberToColour("yellow")).toBe(3);
// })