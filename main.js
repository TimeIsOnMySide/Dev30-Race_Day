//Set a random race number

let raceNumber = Math.floor(Math.random() * 1000);

//Did they register early??

let earlyrunner = false;

//set runner age

let runnerAge = 50;

//set race number for adult early registrants

if(runnerAge >= 18 && earlyrunner) {
    raceNumber += 1000;
}

//log the race time and number to the console

if(runnerAge >= 18 && earlyrunner){
    console.log(`You will race at 9:30am and your race number is ${raceNumber}`);
} else if(runnerAge >= 18 && !earlyrunner) {
    console.log(`You will race at 11:00am and you race number is ${raceNumber}`);
} else {
    console.log(`You will race at 12:30pm and your race number is ${raceNumber}`);
}
