import inquirer from 'inquirer';
function birthdayGuessing(num: number) {
    const numInString: string = num.toString();
    let suggest = true;
    let ordinalDate: string;
    let months: string;

    if (numInString.length !== 3 && numInString.length !== 4) {
        console.log(`You did a mistake in calculation.`);
        return;
    }

    const dateCalculation = numInString.slice(-2);
    const monthCalculation = numInString.length === 4 ? numInString.slice(0, 2) : numInString.slice(0, 1);

    const date = Number(dateCalculation) - 50;
    const month = Number(monthCalculation) - 2;

    if (month >= 1 && month <= 12 && date >= 1 && date <= 31) {
        const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        months = monthsArray[month - 1];

        if (date === 1 || date === 21 || date === 31) { ordinalDate = `${date}st`; }
        else if (date === 2 || date === 22) { ordinalDate = `${date}nd`; }
        else if (date === 3 || date === 23) { ordinalDate = `${date}rd`; }
        else { ordinalDate = `${date}th`; }

        console.log(`Here's your birthday.`);
        console.log(`${ordinalDate} ${months}`);
    } else {
        suggest = false;
        console.log(`Sorry, you did the wrong calculation :(`);
    }
}
// MESSAGES FOR GAME
function result() {
    const data = [
        { message: "Think of your birthday date and month.", delay: 1000 },
        { message: "Multiply your month by 2.", delay: 3500 },
        { message: "Add 5 to the answer.", delay: 6000 },
        { message: "Now multiply your answer by 5.", delay: 8000 },
        { message: "Add '0' at the end of your answer.", delay: 13000 },
        { message: "Finally, add your birthday (Date) to the result.", delay: 17000 },
    ];
    data.forEach(({ message, delay }) => {
        setTimeout(() => {
            console.log(message);
        }, delay);
    });
    return data;
}


// FINALIZATION
async function birthDay() {
    setTimeout(async () => {
        const { input } = await inquirer.prompt([
            { name: "input", type: "number", message: "Enter the final result of the calculation." }
        ]);
        birthdayGuessing(input);
    }, 21000);
    result();
}

birthDay()