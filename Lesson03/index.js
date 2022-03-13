const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
/*fs.readFile('./files/starter.txt', (err,data) =>{
//fs.readFile(): reads file and take as data
    if(err) throw err;
    //for error detection
    console.log(data.toString());
    //received data has no type, we  make it string
})*/
/*fs.readFile('./files/starter.txt','utf-8', (err,data) =>{
    //utf-8: makes data type understandable for code
    if(err) throw err;
    console.log(data.toString());
})*/

const fileOps = async () =>{
    try{
        const data = await fsPromises
        .readFile(path.join(__dirname, 'files', 'starter.txt'),'utf-8');
        //1) read data from starter.txt
        console.log(data);    
        //2) show data to console  
        
        await fsPromises
        .writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'),data);     
        //3) write data from starter.txt to promiseWrite.txt
        await fsPromises
        .appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'),
        '\nHello my friendo append file is HERE');      
        //4) add new data to promiseWrite.txt       
        await fsPromises
        .rename(path.join(__dirname, 'files', 'promiseWrite.txt'),
        path.join(__dirname, 'files', 'promiseComplete.txt'));
        //5) rename file name promiseWrite.txt to promiseComplete.txt
        const newData = await fsPromises
        .readFile(path.join(__dirname, 'files', 'promiseComplete.txt'),'utf-8');
        //6) read data from promiseComplete.txt
        console.log(newData);
        // await fsPromises
        // .unlink(path.join(__dirname, 'files', 'starter.txt')); 
        // //7)Delete data  
    } catch(err){console.log(err);}
}
fileOps();
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf-8', (err,data) =>{
//     //utf-8: makes data type understandable for code
//     if(err) throw err;
//     console.log(data);
// })

/* console.log('Hello...');
// JavaScript is asynchrony that's why Hello... processes
//before fs.readFile()*/

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hello this is my writing text file', 
// //fs.writeFile(): write file data when active and rewrite data
// // do not add data repeatably    
//     (err,data) =>{ if(err) throw err; console.log('Writing has done perfectly.');
// })

// fs.appendFile(path.join(__dirname, 'files', 'test.txt'),'Testing program run perfectly \n \n',
// //fs.appendFile(): write data to file and keep updating data
// // does not delete data   
//     (err,data) =>{ if(err) throw err; console.log('Append finished.');
// })



process.on('uncaughtException', err =>{
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
})
//for catching errors