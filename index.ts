import { BrowserRouter as Router } from 'react-router-dom'

const answers : {
    numberOne : number, 
    numberTwo : number, 
    operator: string
} = inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly Enter Your First No :"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly Enter Your Second No :"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select Operator: "
    }
])

console.log(answers)