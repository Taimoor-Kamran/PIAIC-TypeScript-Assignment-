import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly Enter Your First No : "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly Enter Your Second No : "
    },
    {
        type: "lsit",
        name: "operator",
        message: "Select Operator: ",
        choices: ["*", "+", "-", "/"]
    }
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne + numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log("Your result is :", result);
}
else {
    console.log("Kindly Enter Valid Input");
}
