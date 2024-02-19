import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter your Id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter Your Pin: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your account Type",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select Your transaction",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Select Your amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your amount",
        when(answers) {
            return answers.transactionType == "Withdraw";
        }
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remianing = balance - EnteredAmount;
        console.log("your remaining balance is ", remianing);
    }
    else {
        console.log("Insuficent Balances");
    }
}
// How To Run "tsc && node index.js" , 
//  Enter ID , Enter PIN , Enter AccountType , Enter Transaction , Enter Your Ammount. 
