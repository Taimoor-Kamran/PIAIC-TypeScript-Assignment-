import inquirer from "inquirer";


const Convertion = {
    "PKR": {
        "USD": 0.004434589800443458980044345898,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBR":{
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
}

const answer : {
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD" , "GBP"],
        message: "Select Your Currency"

    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your convertion Currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Convertion amount"
    }
]);

const {from , to ,  amount} = answer;

if(from && to && amount){
   let result = Convertion [from] [to] * amount;
   console.log(`Your Convertion from ${from} to ${to} is ${result}`)
} else {
    console.log("Invalid Inputs")
}


// How To Run This Code "tsc" , "node index.js"