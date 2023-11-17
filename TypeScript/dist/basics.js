"use strict";
/*  npx ts-node src/basics.ts to run the file */
Object.defineProperty(exports, "__esModule", { value: true });
/* you can specify the type */
// const fname: string = "John";
/* if you don't specify the type, it will be inferred from the value */
// const lname = "Doe";
/* if you assign a value of a different type, you will get an error */
// lname = 10; // error
/* you can specify the type of the function parameters and return value */
// function add(a: number, b: number): number {
//     return a + b;
// }
/* void is used when the function doesn't return anything */
// function sayHello(name: string): void {
//     console.log(`Hello ${name}`);
// }
/* never is used when the function never returns (e.g. throws an error) */
// function throwError(message: string): never {
//     throw new Error(message);
// }
/* you can specify the type of the object properties */
// const person1: { name: string, age: number } = {
//     name: "John",
//     age: 30
// };
/* you can use type aliase to make the code more readable and reusable */
// type Person = {
//     name: string,
//     age: number
// };
// const person2: Person = {
//     name: "John",
//     age: 30
// };
/* read-only and optional properties */
// type User = {
//     readonly id: number,
//     name: string,
//     email?: string
// };
// const user: User = {
//     id: 1,
//     name: "John",
//     email: "j@gmail.com" // optional
// };
/* if you try to change the value of a read-only property, you will get an error */
// user.id = 2; // error
/* Intersection types - can be all of the specified types */
// type cardDetails = {
//     cardNumber: string,
//     cvv: string,
//     expiry: string
// };
// type cardHolderDetails = {
//     holderName: string,
//     holderAddress: string
// };
// type Card = cardDetails & cardHolderDetails & { cardType: string };
// const card: Card = {
//     cardNumber: "123456789",
//     cvv: "123",
//     expiry: "12/2020",
//     holderName: "John Doe",
//     holderAddress: "123 Main St",
//     cardType: "VISA"
// };
/* Union types - can be one of the specified types */
// type Status = "success" | "failure";
// function getStatus(): Status {
//     return "success";
// }
// function getId(id: number | string) {
//     if (typeof id === "number") return id;
//     return id.toUpperCase();
// }
/* array types */
// const numbers: number[] = [1, 2, 3];
// const names: string[] = ["John", "Jane", "Jack"];
// const data: (string | number)[] = ["John", 1, "Jane", 2];
/* tuples - fixed length arrays with fixed types */
// const rgb: [number, number, number] = [255, 123, 112];
// const student: [string, number] = ["John", 1];
// student[0] = "Jane";
// student[0] = 2; // error
/* tuples can be pushed to like arrays  */
/* type of the pushed item is union of the types of the tuple */
// student.push(2);
// student.push(true); // error
/* to prevent pushing to a tuple, you can use readonly */
// const student2: readonly [string, number] = ["John", 1];
/* interfaces - can be used to define the shape of an object */
// interface User {
//     readonly dbId: number,
//     email: string,
//     userId: number,
//     googleId?: string
//     // startTrail: () => string
//     startTrail(): string
//     getCoupon(coupon: string): string
// }
// /* reopens the interface and adds new properties */
// interface User {
//     age: number
// }
// const user: User = {
//     dbId: 182,
//     email: "p@gmail.com",
//     userId: 1,
//     googleId: "123",
//     age: 21,
//     startTrail() {
//         return "trail started";
//     },
//     getCoupon(coupon) {
//         return coupon;
//     }
// }
// console.log(user);
// console.log(user.startTrail());
// console.log(user.getCoupon("hello20"));
// /* here we are extending the User interface and adding a new property */
// interface Admin extends User {
//     role: "admin"
// }
// const pujan: Admin = {
//     dbId: 182,
//     email: "p@gmail.com",
//     userId: 1,
//     googleId: "123",
//     age: 21,
//     role: "admin",
//     startTrail() {
//         return "trail started";
//     },
//     getCoupon(coupon) {
//         return coupon;
//     }
// }
// console.log(pujan);
/* generics */
// const print2 = <T>(a: T, b: T): T => {
//     if(typeof a === "number" && typeof b === "number") {
//         return a + b as T;
//     }
//     if(typeof a === "string" && typeof b === "string") {
//         return `${a} ${b}` as T;
//     }
//     throw new Error("Arguments must be of the same type (number or string)");
// }
// console.log(print2(10, 20));
// console.log(print2("hello", "world"));
// // console.log(print2(10, "world")); // error
