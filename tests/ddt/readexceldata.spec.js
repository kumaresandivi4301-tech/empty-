import {test} from "@playwright/test"
import excel from 'exceljs'
import path from "path"
test("read single data",async({page})=>{
     let book=new excel.Workbook
     await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
     let sheet=await book.getWorksheet("Sheet1")
     let data=await sheet.getRow(1).getCell(1).toString()
     console.log(data)
})

//http://49.249.28.218:8081
//to read multiple test data
test.only("read multiple data",async({page})=>{
    let book=new excel.Workbook
    await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
    let sheet=book.getWorksheet("Sheet2")
    for(let row=1 ; row<=sheet.actualRowCount;row++){
        for(let col=1 ; col<=sheet.actualColumnCount;col++){
            let data=sheet.getRow(row).getCell(col).toString()
            console.log(data);
            

        }
    }
})

test("pass test data to the app",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
    let sheet=book.getWorksheet("Sheet1")
})