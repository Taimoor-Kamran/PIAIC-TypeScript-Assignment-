import { differenceInSeconds } from 'date-fns';
import inquirer from 'inquirer';


const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the amount of second",
    validate: (input) => {
        if(isNaN(input)){
            return "Please enter valid number";
        }else if(input >60){
            return "seconds must be 60";
        }else {
            return true;
        }
    }
})

let input = res.userInput

function startTIme (val:number) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val)

    const IntervalTime = new Date(intTime)
    setInterval(()=>{
        const currentTime = new Date()
        const timeDiff = differenceInSeconds(IntervalTime, currentTime);
        if(timeDiff <= 0){
            console.log("Timer has expired")
            process.exit()
        }
        const min = Math.floor((timeDiff%(3600*24))/3600)
        const sec = Math.floor(timeDiff % 60)
        console.log(`${min.toString().padStart(2, "0")},:${sec}`)
    },1000)
}

startTIme(input)