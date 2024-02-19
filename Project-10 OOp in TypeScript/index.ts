import inquirer from "inquirer"


class Student {
    name:string
    constructor(n:string) {
        this.name=n
    }
}

class Person{
    students:Student[] = []


addStudent(obj:Student){
    this.students.push(obj)
}

}

const persons = new Person;

console.log(persons)


const programmStart = async (persons: Person) =>  {
    do{
console.log("Welcome Guest")

const ans = await inquirer.prompt({
    type: "list",
    message: "Ap Kis se bat kerna pasand kara ga...",
    name: "select",
    choices: ["Khud se:self", "student"],
})

if(ans.select == "Khud se:self"){
    console.log("hello me khud se bat ker raha hun")
    console.log("meri tabiyat thik hai.")
}
if(ans.select == "student"){

    const ans = await inquirer.prompt({
        type: "input",
        message: "ap ko kis student sa bat karni hai.",
        name: "student"
    })


    const student = persons.students.find(val => val.name == ans.student)

if(!student){
    const name = new Student(ans.student)
    persons.addStudent(name);

    console.log(`Hello i am ${name.name}, or me theh hun`)
    console.log(persons.students);
}
if(student){
    console.log(`Hello i am ${student.name}, or me thek hun ..............`)
}

}


}while(true)
}

programmStart(persons)

// How to run This code "tsc" , "node index.js"