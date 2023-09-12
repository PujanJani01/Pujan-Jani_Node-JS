const http = require("http");
const qs = require("querystring");
const url = require("url");
const fs = require("fs");
const arr = require("./users.json");

http.createServer((req, res) => {
    reqData = url.parse(req.url);
    let { path, query } = reqData;
    let q = qs.parse(query);
    res.setHeader('content-type', "application/json");
    if (req.method == 'GET') {
        if (!path.startsWith("/users")) {
            res.end("Not Found")
        }
        else if (path == '/users') {
            res.end(JSON.stringify(arr));
        }
        else if (q.id) {
            let users;
            if (Array.isArray(q.id)) {
                users = arr.filter((item) => q.id.includes(String(item.id)));
            }
            else {
                users = arr.find((item) => item.id == q.id);
            }
            res.end(JSON.stringify(users));
        }
        else if (q.name) {
            let users;
            if (Array.isArray(q.name)) {
                users = arr.filter((item) => q.name.includes(item.name));
            }
            else {
                users = arr.find((item) => item.name == q.name);
            }
            res.end(JSON.stringify(users));
        }
        else if (q.search) {
            let user = arr.filter((item) => item.name.includes(q.search));
            res.end(JSON.stringify(user));
        }
        else {
            res.end("Not Found")
        }
    }
    else if (req.method == 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            let user = JSON.parse(body);
            arr.push(user);
            fs.writeFile("./users.json", JSON.stringify(arr), (err) => { if (err) console.log(err) });
            res.end(JSON.stringify({ message: "User Added", user:{...user}}));
        })
    }
    else if (req.method == 'PUT') {
        let body = '';
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            let user = JSON.parse(body);
            let index = arr.findIndex((user) => user.id == q.id);
            if(index != -1) arr[index] = { id: Number(q.id), ...user };
            else res.end("Id Not Found");
            fs.writeFile("./users.json", JSON.stringify(arr), (err) => { if (err) console.log(err) });
            res.end(JSON.stringify({message: `User with Id-${q.id} Updated`, user:{...arr[index]}}));
        })
    }
    else if (req.method == 'PATCH') {
        let body = '';
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            let user = JSON.parse(body);
            let index = arr.findIndex((user) => user.id == q.id);
            if(index != -1) arr[index] = { ...arr[index], ...user };
            else res.end("Id Not Found");
            fs.writeFile("./users.json", JSON.stringify(arr), (err) => { if (err) console.log(err) });
            res.end(JSON.stringify({message: `User with Id-${q.id} Updated`, user:{...arr[index]}}));
        })
    }
    else if (req.method == 'DELETE') {
        let index = arr.findIndex((item) => item.id == q.id);
        let deleteUser = arr[index];
        if(index != -1) arr.splice(index, 1);
        else res.end("Id Not Found");
        fs.writeFile("./users.json", JSON.stringify(arr), (err) => { if (err) console.log(err) });
        res.end(JSON.stringify({ message: `User with Id-${q.id} Deleted`, user:{...deleteUser} }));
    }
    else {
        res.end("Method Not Supported")
    }
}).listen(3000);