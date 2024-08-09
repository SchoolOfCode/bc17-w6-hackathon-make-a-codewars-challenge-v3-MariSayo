import { test, expect } from "vitest";
import { rainbowColour } from "./main.js";

test("this should return all the colours of the rainbow but not indigo", async () => {
    const result = rainbowColour()
  expect(result.rainbowString).toBe("red,orange,yellow,green,blue,violet");
});

test("this should check that the length of the array is 7 before Indigo is removed", async () => {
    const result = rainbowColour() // Get the original length before removal
  expect(result.originalLength).toBe(7);
})

test("this should check that the length of the array is 6 after Indigo is removed", async () => {
     // Call the function and get the final length
     const result = rainbowColour()
    expect(result.finalLength).toBe(6); // Assert that the final length is 6
})
