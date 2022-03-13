const os = require('os');
// upload os module
console.log(os.type());
// Shows operating system
// EXP: Windows_NT
console.log(os.version());
// Shows operating system
// EXP: Windows 10 Pro
console.log(os.homedir());
// Shows operating system
// EXP: C:\Users\Salih
console.log(__dirname);
// Shows folder that code within
// EXP: d:\HTML PROJECTS\nodejsProject01\Lesson01
console.log(__filename);
// Shows file that code within
// EXP: d:\HTML PROJECTS\nodejsProject01\Lesson01\lesson.js

const path = require('path');
console.log(path.dirname(__filename));
// Shows folder that code within
// EXP: d:\HTML PROJECTS\nodejsProject01\Lesson01
console.log(path.basename(__filename));
// Shows file  full name
// EXP: lesson.js
console.log(path.extname(__filename));
// Shows file  extension name
// EXP: .js
console.log(path.parse(__filename));
// Shows path's extensions
/*
    {
        root: 'd:\\',
        dir: 'd:\\HTML PROJECTS\\nodejsProject01\\Lesson01',
        base: 'lesson.js',ext: '.js',
        name: 'lesson'
    } 
*/
