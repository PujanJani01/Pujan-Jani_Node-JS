
/* const user = {
    username: 'Pujan',
    age: 18,
    welcomeMessege: function () {
        console.log(`${this.username}, Welcome to the class`);
        console.log(this); 
    },
    hello : this
} */

// console.log(user.hello);  // {}
// user.welcomeMessege(); 
// user.username = 'Vijay';
// user.welcomeMessege();

// console.log(this);      // {} empty object and in browser it is window object

/* function thisFunc(){
    console.log(this);
}
thisFunc(); // global object */

//----------------------------------------------------------------------------------------------

// lecxical scope (static scope) - code that is defined inside a block is only accessible to the inner scope

/* function outer(){
    let a = 10;
    console.log(a);
    function inner(){
        let b = 20;
        console.log(a); 
        console.log(b);
    }
    inner();
    // console.log(b); // error
}
outer(); */

/* function funcOne(){
    console.log(a);
    function funcTwo(){
        console.log(a);
        function funcThree(){
            console.log(a);
        }
        funcThree();
    }
    funcTwo();
}
let a = 10;
funcOne(); */

//------------------------------------------------------------------------------------------------

// IIFE - Immediately Invoked Function Expression

/* (function(){
    console.log('IIFE');
})(); */

//------------------------------------------------------------------------------------------------

// Closure - A function that is returned by another function

/* function outer(){
    let a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
}
let innerFunc = outer();
innerFunc(); */

//------------------------------------------------------------------------------------------------

// coner case of closure

/* function x(){
    let a = 10;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
let z = outer();
z(); */

//------------------------------------------------------------------------------------------------

/* let dt = require('./myModule');
console.log(dt.module()); */

//------------------------------------------------------------------------------------------------

/* let http = require('http');

http.createServer((req,res) => {
     res.setHeader('Content-Type','application/json');
     res.statusCode = 200 ;
     let data = {
         name: 'Pujan',
         age: 18,
         city: 'Ahmedabad'
     }
     res.end(JSON.stringify(data));
})
.listen(65535,() => console.log('listining on http://localhost:65535/')); */

//------------------------------------------------------------------------------------------------

/* let debug = require('debug')('app');
console.log('Hello console!');
// Command to run debug mode  $env:DEBUG = "app"; node index.js
debug('hello debug!'); */

//------------------------------------------------------------------------------------------------

/* let http = require('http');
let url = require('url');

http.createServer((req,res) => {
    // console.log(http.STATUS_CODES);  // to get all status codes
    // console.log(http.METHODS);       // to get all methods
    // console.log(req.method);         // to get request method
    // console.log(req.url);            // to get request url
    let path = url.parse(req.url, true); // to get request url in object form 
    res.writeHead(200, "OK", {'Content-Type': 'application/json'});
    res.end(JSON.stringify(path));
})
.listen(65535,() => console.log('listining on http://localhost:65535/')); */

//------------------------------------------------------------------------------------------------


