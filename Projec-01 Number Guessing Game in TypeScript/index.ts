import inquirer from "inquirer"

type ansType = {
    userGuess: number 
}

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "write your guess b/w 1 to 10: "
    }
])

const {userGuess} = answers;

console.log(userGuess, "userGuess", systemGeneratedNo, "Sys")
if(userGuess === systemGeneratedNo) {
    console.log("Yeaaa Your Answer Is Correct \n you win !")
} else{
    console.log("Please Try Again Better Luck Next Time !")
}

// How To Run This Code "tsc" , "node index.js"