import inquirer from "inquirer"

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to count the word: "
    }
])

const words = answers.Sentence.trim().split(" ")
console.log(`Your Sentence Word Count is ${words.length}`)





// How To Run This Code "tsc" , "node index.js"