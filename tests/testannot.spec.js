import {test} from "@playwright/test"
test("test annotations" , async({page})=>{
    //test.slow()
    console.log("test 1");
    
    
})
test("test 2" , async({browserName})=>{
//test.skip(browserName==="firefox");
console.log("test 2");


})
test("test 3",async()=>{
    console.log("test 3");
    
})