const express = require("express");
const app = express();

//------------------Route paths-----------------------

app.get("/", (req, res) => res.send("root"));

app.get("/about", (req, res) => res.send("about"));

app.get("/random.txt", (req, res) => res.send("random.txt"));

app.get("/ab?cd", (req, res) => res.send("ab?cd"));

app.get("/ab+cd", (req, res) => res.send("ab+cd"));

app.get("/ab*cd", (req, res) => res.send("ab*cd"));

app.get("/ab(cd)?e", (req, res) => res.send("ab(cd)?e"));

// app.get(/a/, (req, res) => res.send("/a/"));

app.get(/.*fly$/, (req, res) => res.send("/.*fly$/"));

//------------------Route parameters------------------

app.get('/users/:userId/books/:bookId',  (req, res) =>{
    res.send(req.params)
});

app.get('/flights/:from-:to',  (req, res) =>{
    res.send(req.params)
});

app.get('/plantae/:genus.:species',  (req, res) =>{
    res.send(req.params)
});

app.get('/user/:userId(\\d+)',  (req, res) =>{
    res.send(req.params)
});

//------------------Route handlers------------------

app.get('/example/a', (req, res) => {
    res.send('Hello from A!');
});

/* app.get("/example/b", (req, res, next) => { 
    console.log("the response will be sent by the next function ...");
    next();
}, (req, res) => {
    res.send('Hello from B!');
}); */


/* const cb0 = (req, res, next) => {
    console.log("CB0");
    next();
}
const cb1 = (req, res, next) => {
    console.log("CB1");
    next();
}
const cb2 = (req, res) => {
    res.send('Hello from C!');
}
app.get('/example/c', [cb0, cb1, cb2]); */


const cb0 = (req, res, next) => {
    console.log("CB0");
    next();
}
const cb1 = (req, res, next) => {
    console.log("CB1");
    next();
}

app.get('/example/d', [cb0, cb1], (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
}, (req, res) => {
    res.send('Hello from D!');
});


app.listen(3000, () => console.log("Server is running on port 3000"));