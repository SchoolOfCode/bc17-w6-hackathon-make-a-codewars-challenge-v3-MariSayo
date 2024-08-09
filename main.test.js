import {test, expect} from "vitest";
import  {transformLength}  from "./main.js";


test("This should return 1 if string even", async () => {
    expect(transformLength("rabbit")).toBe(1);
})

test("This should return -1 if string odd", async () => {
    expect(transformLength("fly")).toBe(-1);
})

test("this should throw an error if string is outside of valid range", async () =>{
expect(()=>{
    expect(transformLength)toBe()
})
})