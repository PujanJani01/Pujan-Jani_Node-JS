
/* let user = new Promise((resolve, reject) => {
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

/* const promise = new Promise((resolve,reject) =>{
    let err = false;
    if(!err) resolve();
    else reject();
})

promise
// .catch(err => console.log('error'))
.then(() => console.log('first'))
// .catch(err => console.log('error'))
.then(() => console.log('second'))
.then(() => console.log('third'))
.catch(err => console.log('error')); */

//--------------------------------------------------------------------------------------------------

/* const promise = new Promise((resolve,reject) =>{
    let err = false;
    if(!err) resolve();
    else reject();
});

promise
.then(() => console.log('first'))
.then(() => {
    setTimeout(() => {
        console.log('second');
    }, 2000);
})
.then(() => {
    setTimeout(() => {
        console.log('third');
    }, 1000);
})
.catch(err => console.log('error')); */

// Output: first third second
// Here the problem is that the third console.log is not waiting for the second console.log to execute
// So we need to use promise inside the promise to solve this problem

/* const promise = new Promise((resolve,reject) =>{
    let err = false;
    if(!err) resolve();
    else reject();
});

promise
.then(() => console.log('first'))
.then(() => {
    return new Promise((resolve,reject) => {
          setTimeout(() => {
               console.log('second');
               resolve();
          }, 2000);
        });
})
.then(() => {
    setTimeout(() => {
        console.log('third');
    }, 1000);
})
.catch(err => console.log('error')); */

// Output: first second third

//--------------------------------------------------------------------------------------------------

/* const number = new Promise((resolve,reject) => {
     resolve(10);
});

number.then(value => value++);

number.then(value => console.log(value));

number.then(value => value + 10);

number.then(value => console.log(value));

number.then(value =>{
    value += 20;
    console.log(value);
});

number.then(value => console.log(value)); */

// Output: 10 10 30 10
// Here the problem is that the value is not getting updated
// So we need to use promise chaining to solve this problem

/* const number = new Promise((resolve,reject) => {
    resolve(10);
});

number
.then(value => ++value)
.then(value => value + 10)
.then(value =>{
   value += 20;
   console.log(value);
}); */

//--------------------------------------------------------------------------------------------------

/* const getData = new Promise((resolve,reject) => {
    let err = false;
    if(!err) resolve("data recived");
    else reject("data not recived");
});

getData
.finally(() => console.log("db connected"))
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => console.log("db disconnected")); */

//--------------------------------------------------------------------------------------------------


/* async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
}

getData()
.then(data => console.log(data))
.catch(err => console.log(err)); */

//--------------------------------------------------------------------------------------------------

/* async function getData() {
    try{
        const res1 = await fetch('https://jsonplaceholder.typicode.com/users');
        const res2 = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data1 = await res1.json();
        const data2 = await res2.json();
        console.log(data1, data2);
    } catch(err) {
        console.log(err);
    }
}
getData(); */

//--------------------------------------------------------------------------------------------------
