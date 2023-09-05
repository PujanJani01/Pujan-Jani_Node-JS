
console.log('Hello user!');

const arg = process.argv;
const num1 = parseInt(arg[3]);
const num2 = parseInt(arg[4]);

if(arg.length > 2){
    if(isNaN(num1) || isNaN(num2)) {
        console.log('Invalid Input!');
        return;
    }
    if(arg[2] == 'add') {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    }
    else if(arg[2] == 'sub') {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    }
    else if(arg[2] == 'mul') {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    }
    else if(arg[2] == 'div') {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    else {
        console.log('Invalid Operation!');
    }
}


