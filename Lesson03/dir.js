const fs = require('fs');

if(!fs.existsSync('./Lesson03/new')){
//synchronously check if a file already exists in the given path or not
    fs.mkdir('./Lesson03/new', (err)=>{
    //making new folder (create a directory asynchronously.)
    //EXP: fs.mkdir(path, mode, callback)
        if (err) throw err;
        console.log('Directory created.');
    });
}

if(fs.existsSync('./Lesson03/new')){
        fs.rmdir('./Lesson03/new', (err)=>{
        //delete a directory at the given path
            if (err) throw err;
            console.log('Directory removed.');
        });
}


