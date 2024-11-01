"use strict";
{
    // Learning ---> Function
    // Normal Function
    function sum(num1, num2) {
        return num1 + num2;
    }
    sum(1, 2);
    // Arrow Function
    const addNum = (add1, add2) => add1 + add2;
    // Object --> Function --> Method Function
    const isMe = {
        name: "naym",
        balance: 110,
        addBalance(balance) {
            return `New Balance ${this.balance + balance}`;
        },
    };
    // Array type sample
    const array = [1, 3, 2, 4, 5, 6];
    const newArray = array.map((ele) => ele * ele);
}
