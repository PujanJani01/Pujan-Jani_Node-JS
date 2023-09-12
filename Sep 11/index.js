const http = require("http");
const qs = require("querystring");
const url = require("url");

const arr = [
    { id: 1, name: 'bhavik' },
    { id: 2, name: 'sachin' },
    { id: 3, name: 'pujan' }
]

http.createServer((req, res) => {
    if (req.method == 'GET') {
        reqData = url.parse(req.url);
        let { path, query } = reqData;
        // console.log(reqData);
        console.log(qs.parse(query));
        let q = qs.parse(query);

        if (!path.startsWith("/users")) {
            res.end("Not Found")
        }
        else if (path == '/users') {
            res.setHeader('content-type', "application/json");
            res.end(JSON.stringify(arr));
        }
        else if (q.id) {
            let user = arr.find((item) => item.id == q.id);
            res.setHeader('content-type', "application/json");
            res.end(JSON.stringify(user));
        }
        else if (q.name) {
            let user = arr.filter((item) => item.name == q.name);
            res.setHeader('content-type', "application/json");
            res.end(JSON.stringify(user));
        }
        else if(q.search){
            let user = arr.filter((item) => item.name.includes(q.search));
            res.setHeader('content-type', "application/json");
            res.end(JSON.stringify(user));
        }
    }
    else if(req.method == 'POST'){
        let body = '';
        req.on('data', (chunk) => {
            // console.log(chunk)
            body += chunk;
            console.log(body);
        })
        req.on('end', () => {
            let user =  JSON.parse(body);
            arr.push(user);
            res.setHeader('content-type', "application/json");
            res.end(JSON.stringify(arr));
        })
    }
    else if(req.method == 'PUT'){
        let body = '';
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            let user =  JSON.parse(body);
            let index = arr.findIndex((item) => item.id == user.id);
            arr[index] = user;
            res.setHeader('content-type', "application/json");
            res.end();
        })
    }
    else if(req.method == 'DELETE'){
        let body = '';
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            let user = qs.parse(body);
            let index = arr.findIndex((item) => item.id == user.id);
            arr.splice(index, 1);
            res.setHeader('content-type', "application/json");
            res.end();
        })
    }
    else {
        res.end("Not Found")
    }
}).listen(3000);