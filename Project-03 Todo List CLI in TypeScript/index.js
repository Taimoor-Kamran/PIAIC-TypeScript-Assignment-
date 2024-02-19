import inquirer from 'inquirer';
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add more todo? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "do you want to add more todo? ",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly Enter Your Valid Input");
    }
}
if (todos.length > 0) {
    console.log("Your Todo List:");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
}
