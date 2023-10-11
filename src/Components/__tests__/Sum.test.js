import { sum } from "../Sum";
test("Sum function should calculate sum of two number" , ()=>{

    const result = sum(3,4)
//Assertion
    expect(result).toBe(7);

});