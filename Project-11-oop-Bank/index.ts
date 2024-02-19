import inquirer from "inquirer";
import { Faker, faker } from "@faker-js/faker";
import chalk from "chalk";

class Customer {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  mobNumber: number;
  accNumber: number;

  constructor(
    fName: string,
    lNmae: string,
    age: number,
    gender: string,
    mob: number,
    acc: number
  ) {
    this.firstName = fName;
    this.lastName = lNmae;
    this.age = age;
    this.gender = gender;
    this.mobNumber = mob;
    this.accNumber = acc;
  }
}

interface BankAccount {
  accNumber: number;
  balance: number;
}

class Bank {
  customer: Customer[] = [];
  account: BankAccount[] = [];

  addCustomer(obj: Customer) {
    this.customer.push(obj);
  }

  addAccountNumber(obj: BankAccount) {
    this.account.push(obj);
  }
  transaction(accObj: BankAccount) {
    let NewAccounts = this.account.filter(
      (acc) => acc.accNumber !== accObj.accNumber
    );
    this.account = [...NewAccounts, accObj];
  }
}

let myBank = new Bank();

for (let i: number = 1; i <= 3; i++) {
  let fName = faker.person.firstName("male");
  let lNmae = faker.person.lastName();
  let num = parseInt(faker.phone.number("3#########"));
  const cus = new Customer(fName, lNmae, 25 * i, "male", num, 1000 + i);
  myBank.addCustomer(cus);
  myBank.addAccountNumber({ accNumber: cus.accNumber, balance: 100 * i });
}

async function bankService(bank: Bank) {
  do{let service = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Please Select the Service",
    choices: ["View Balance", "Cash Withdraw", "Cash Deposit", "Exit"],
  });
  if (service.select == "View Balance") {
    let res = await inquirer.prompt({
      type: "input",
      name: "num",
      message: "Please Enter Your Account Number: ",
    });
    let account = myBank.account.find((acc) => acc.accNumber == res.num);
    if (!account) {
      console.log(chalk.red.bold("Invalid Account Number"));
    }
    if (account) {
      let name = myBank.customer.find(
        (item) => item.accNumber == account?.accNumber
      );
      console.log(
        `Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.
          italic(name?.lastName)} Your Account Balance is ${chalk.bold.
            blueBright(account.balance)}`
      )
          }
  }
  if (service.select == "Cash Withdraw") {
    let res = await inquirer.prompt({
      type: "input",
      name: "num",
      message: "Please Enter Your Account Number: ",
    });
    let account = myBank.account.find((acc) => acc.accNumber == res.num);

    if (!account) {
      console.log(chalk.red.bold("Invalid Account Number"));
    }
    if (account) {
      let ans = await inquirer.prompt({
        type: "number",
        message: "Please Enter Your amount.",
        name: "rupee",
      });
      if(ans.rupee > account.balance){
        console.log(chalk.red.bold("Mojuda Balance Nakafi Hai ...."))
      }

      let newBalance = account.balance - ans.rupee;

      bank.transaction({ accNumber: account.accNumber, balance: newBalance });
    }
  }  
  if (service.select == "Cash Deposit") {
    let res = await inquirer.prompt({
      type: "input",
      name: "num",
      message: "Please Enter Your Account Number: ",
    });
    let account = myBank.account.find((acc) => acc.accNumber == res.num);

    if (!account) {
      console.log(chalk.red.bold("Invalid Account Number"));
    }
    if (account) {
      let ans = await inquirer.prompt({
        type: "number",
        message: "Please Enter Your amount.",
        name: "rupee",
      });
      let newBalance = account.balance + ans.rupee;

      bank.transaction({ accNumber: account.accNumber, balance: newBalance });
    }
  }
  if(service.select == "Exit"){
    return;
  }
}while(true)
}
bankService(myBank);



// How TO Run This Code "tsc" , "node .\index.js"