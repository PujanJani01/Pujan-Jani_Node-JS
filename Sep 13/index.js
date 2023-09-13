/* 
let user = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('user data');
    }, 2000);
});

user
    .then(data => console.log(data))
    .catch(err => console.log(err)); */

//--------------------------------------------------------------------------------------------------

/* function getUser() {
    return new Promise((resolve, reject) => {
        let err = false;
        if(!err) resolve('user data');
        else reject('user not found');
    })
        .then(data => {
            return new Promise((resolve, reject) => {
                resolve("user address: " + data);
            })
                .then(address => console.log(address))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}
getUser(); */

//--------------------------------------------------------------------------------------------------

/* const user = new Promise((resolve, reject) => {
    let err = false;
    if(!err) resolve('user data');
    else reject('user not found');
});

const address = new Promise((resolve, reject) => {
    resolve("user address: ");
});

user
.then(data => {
     address
    .then(address => console.log(address + data))
    .catch(err => console.log(err));
})
.catch(err => console.log(err)); */

//--------------------------------------------------------------------------------------------------

/* const user = new Promise((resolve, reject) => {
    let err = false;
    if(!err) resolve('user data');
    else reject('user not found');
});

const address = new Promise((resolve, reject) => {
    resolve("user address: ");
});

async function getUser() {
    try {
        const data = await user;
        const addressData = await address;
        console.log(addressData + data);
    } catch(err) {
        console.log(err);
    }
}
getUser(); */

//--------------------------------------------------------------------------------------------------

/* fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err)); */

//--------------------------------------------------------------------------------------------------

/* async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}
getUsers(); */

//--------------------------------------------------------------------------------------------------
