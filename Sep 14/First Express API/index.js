const express = require('express');
const fs = require('fs');
const users = require("./users.json")
const app = express();
const port = 3000;

app.use(express.json())

app.get("/users", (req, res) => {
    res.json(users)
})
app.get('/users/:userId', (req, res) => {
   let userID = req.params.userId
   let user = users.find(user => user.id == userID);
   if(!user) res.status(404).json({status: 404, message: "Not Found"})
   else res.status(200).json({status: 200 ,message: "Ok", data: user})})

app.post('/users', (req, res) =>{
    let user = {...req.body, id: users.length + 1 };
    users.push(user);
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {if(err) console.log(err)});
    res.status(200).json(user);
})

app.put('/users/:userId', (req, res) =>{
    let userID = req.params.userId;
    let userIndex = users.findIndex(user => user.id == userID);
    if(userIndex != -1) users[userIndex] = {...req.body, id: Number(userID)};
    else res.status(404).json({status: 404, message: "Not Found"})
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {if(err) console.log(err)});
    res.status(200).json(users[userIndex]);
})

app.patch('/users/:userId', (req, res) =>{
    let userID = req.params.userId;
    let userIndex = users.findIndex(user => user.id == userID);
    if(userIndex != -1) users[userIndex] = {...users[userIndex],...req.body, id: Number(userID)};
    else res.status(404).json({status: 404, message: "Not Found"})
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {if(err) console.log(err)});
    res.status(200).json(users[userIndex]);
})

app.delete('/users/:userId', (req, res) =>{
    let userID = req.params.userId;
    let userIndex = users.findIndex(user => user.id == userID);
    if(userIndex != -1) users.splice(userIndex, 1);
    else res.status(404).json({status: 404, message: "Not Found"})
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {if(err) console.log(err)});
    res.status(200).json(users);
})

app.use("/", (req, res) =>{
    res.send("Welcome to the express")
})

app.listen(port, () => console.log(`Server stared on ${port}`));