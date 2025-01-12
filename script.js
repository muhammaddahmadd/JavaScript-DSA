"use strict";

// const x = true;
// if (x) {
//     console.log(`x is true`)
// }

// const let = 10;

// function ustad(){
//     alert("Umer is millionaire")
// }

// ustad()

// const calc = b => 2025 + b;
// const value = calc(10) // 2035
// console.log(value)



// function calling another function;
// const lengthCheck = function (name){
//     return name.length;
// }

// const degree = function (fn, email) {
//     const fnL = lengthCheck(fn);


//     return `${fn} has length of ${fnL} and the email is ${email}`
// }

// console.log(degree("Muhammad", "ranaahmad131@gmail.com"))


// function yearsUntilRetirement ()

/* 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/


//test cleared
// const calcAverage = (a,b,c)=> {
//     return (a+b+c)/3
// }

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {

//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     } else {
//         console.log("No team wins")
//     }
// } 

// checkWinner(scoreDolphins, scoreKoalas)

// const arr = ["ahmad", "umer", "khan"]
// const pushed = arr.push("tarri")
// console.log(pushed.length)
// console.log(pushed)
// console.log(arr)
// // arr[2] = "rana";
// // console.log(arr.length)
// // console.log(arr[arr.length - 1])


// const newArr = ['a', 'b', 'c', 'd']
// newArr.unshift('e', 'f')
// console.log(newArr)

//challenge 2


// const calcTip  = bill => bill >= 50 && bill <=300? bill * 15/100 : bill *20/100; 


// const bills = [125, 555, 44];
// const tips = [calcTip(bills)]
// const tips = bills.map(calcTip);
// const totals = [bills + tips for (bill, tip) of [bills, tips]]


// const dev = {
//     name: "ahmad",
//     age: 25,
//     skills: ["html", "css", "js"],
//     level: 1,
//     isPro: true
// }

// const getValue = prompt("Enter what you want to know abt ahmad:");
// const value = dev[getValue];
// console.log(value)
// dev.married = false;
// dev["sports"] = "football"
// console.log(dev)






// const lallis = {
//     name : "mikaan",
//     age: 27,
//     // skills: alert("backchodii!!"),
//     dob: 1998,
//     isGay : true,
//     married: false,
//     calcAge : function(){
//         return 2025 - dob;
//     }
// }

// console.log(lallis.calcAge())
// // console.log(lallis.calcAge(1990))
// console.log(lallis["calcAge"](1998))


// "Jonas is a 46-year old teacher, and he has a driver's license"

// const jonas = {
//     firstName: "Jonas",
//     lastName : "Schmedmann",
//     birthYear: 1991,
//     job: "teacher",
//     isMarried: false,
//     calcAge: function(){
//         this.age = 2025 - this.birthYear
//         return this.age
//     },
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLic : true,
//     getSummary: function(){
//         return `${this.firstName} is ${this.calcAge()}old ${this.job}, and he ${this.hasDriversLic ? "has drivers license" : "doesn't have license"}`
//     }

// }



// console.log(jonas.getSummary())



const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

console.log(john.calcBMI())
console.log(mark.calcBMI())
console.log(`${john.bmi > mark.bmi ? 
    `${john.fullName} BMI ${john.bmi}` : `${mark.fullName} BMI ${mark.bmi}`} is higher than ${john.bmi < mark.bmi ? ` ${john.bmi}` : `${mark.bmi}`}`)