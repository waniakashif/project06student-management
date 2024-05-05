#!/usr/bin/env node
import inquirer from "inquirer";
const randamNumber = Math.floor(10000 + Math.random() * 90000);
console.log(randamNumber);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "Students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enrolled",
        choices: ["MS office", "HTML", "Javascript", "Typescript", "Python"]
    }
]);
const tutionfee = {
    "MS office": 2000,
    "HTML": 2500,
    "Javascript": 5000,
    "Typescript": 6000,
    "python": 7000,
};
console.log(`\ntutionfee : ${tutionfee[answer.courses]}/-\n`);
console.log(`Balance:${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}/n`);
const tutionfees = tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionfees === paymentAmount) {
    console.log(`Congratulation, you have sucessfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n Status\n");
        console.log(`Student Name: ${answer.Students}`);
        console.log(`Student ID: ${randamNumber}`);
        console.log(`Course: ${answer.course}`);
        console.log(`Tution fees paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System\n");
    }
}
else {
    console.log("Invalid amount due to course\n");
}
