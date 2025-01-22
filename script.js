// "use strict";

// // const x = true;
// // if (x) {
// //     console.log(`x is true`)
// // }

// // const let = 10;

// // function ustad(){
// //     alert("Umer is millionaire")
// // }

// // ustad()

// // const calc = b => 2025 + b;
// // const value = calc(10) // 2035
// // console.log(value)



// // function calling another function;
// // const lengthCheck = function (name){
// //     return name.length;
// // }

// // const degree = function (fn, email) {
// //     const fnL = lengthCheck(fn);


// //     return `${fn} has length of ${fnL} and the email is ${email}`
// // }

// // console.log(degree("Muhammad", "ranaahmad131@gmail.com"))


// // function yearsUntilRetirement ()

// /* 
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
// */


// //test cleared
// // const calcAverage = (a,b,c)=> {
// //     return (a+b+c)/3
// // }

// // const scoreDolphins = calcAverage(85, 54, 41);
// // const scoreKoalas = calcAverage(23, 34, 27);

// // function checkWinner(avgDolphins, avgKoalas) {

// //     if (avgDolphins >= avgKoalas * 2) {
// //         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
// //     } else {
// //         console.log("No team wins")
// //     }
// // } 

// // checkWinner(scoreDolphins, scoreKoalas)

// // const arr = ["ahmad", "umer", "khan"]
// // const pushed = arr.push("tarri")
// // console.log(pushed.length)
// // console.log(pushed)
// // console.log(arr)
// // // arr[2] = "rana";
// // // console.log(arr.length)
// // // console.log(arr[arr.length - 1])


// // const newArr = ['a', 'b', 'c', 'd']
// // newArr.unshift('e', 'f')
// // console.log(newArr)

// //challenge 2


// // const calcTip  = bill => bill >= 50 && bill <=300? bill * 15/100 : bill *20/100; 


// // const bills = [125, 555, 44];
// // const tips = [calcTip(bills)]
// // const tips = bills.map(calcTip);
// // const totals = [bills + tips for (bill, tip) of [bills, tips]]


// // const dev = {
// //     name: "ahmad",
// //     age: 25,
// //     skills: ["html", "css", "js"],
// //     level: 1,
// //     isPro: true
// // }

// // const getValue = prompt("Enter what you want to know abt ahmad:");
// // const value = dev[getValue];
// // console.log(value)
// // dev.married = false;
// // dev["sports"] = "football"
// // console.log(dev)






// // const lallis = {
// //     name : "mikaan",
// //     age: 27,
// //     // skills: alert("backchodii!!"),
// //     dob: 1998,
// //     isGay : true,
// //     married: false,
// //     calcAge : function(){
// //         return 2025 - dob;
// //     }
// // }

// // console.log(lallis.calcAge())
// // // console.log(lallis.calcAge(1990))
// // console.log(lallis["calcAge"](1998))


// // "Jonas is a 46-year old teacher, and he has a driver's license"

// // const jonas = {
// //     firstName: "Jonas",
// //     lastName : "Schmedmann",
// //     birthYear: 1991,
// //     job: "teacher",
// //     isMarried: false,
// //     calcAge: function(){
// //         this.age = 2025 - this.birthYear
// //         return this.age
// //     },
// //     friends: ["Michael", "Peter", "Steven"],
// //     hasDriversLic : true,
// //     getSummary: function(){
// //         return `${this.firstName} is ${this.calcAge()}old ${this.job}, and he ${this.hasDriversLic ? "has drivers license" : "doesn't have license"}`
// //     }

// // }



// // console.log(jonas.getSummary())



// // const mark = {
// //     fullName: "Mark Miller",
// //     mass: 78,
// //     height: 1.69,
// //     calcBMI: function () {
// //         this.bmi = this.mass / (this.height * this.height)
// //         return this.bmi
// //     }
// // }
// // const john = {
// //     fullName: "John Smith",
// //     mass: 92,
// //     height: 1.95,
// //     calcBMI: function () {
// //         this.bmi = this.mass / (this.height * this.height)
// //         return this.bmi
// //     }
// // }

// // console.log(john.calcBMI())
// // console.log(mark.calcBMI())
// // console.log(`${john.bmi > mark.bmi ? 
// //     `${john.fullName} BMI ${john.bmi}` : `${mark.fullName} BMI ${mark.bmi}`} is higher than ${john.bmi < mark.bmi ? ` ${john.bmi}` : `${mark.bmi}`}`)



// // for (let i = 0 ; i < 10; i++) {
// //     console.log(`lifting weights repetition ${i+1}`)
// // }


// // const years = [1990, 1998, 2008, 2005];
// // const ages = []

// //     for(let i = 0; i < years.length; i++){
// //         // ages.push( years[i])
// //         ages[i] =2025 - years[i]
// //     }
// // console.log(ages)

// // const types = [];
// // for (let i = 0 ; i< newCatto.length; i++){
// //     console.log(newCatto[i], typeof newCatto[i] )
// //     types[i] = typeof newCatto[i];
// //     // types.push(typeof newCatto[i]);
// // }

// // const newCatto = [
// //     "merry",
// //     "cuddles",
// //     undefined,
// //     100,
// //     ["meeki", "kamleshi"]
// // ]
// // const types = [];
// // for (let i = 0; i < newCatto.length; i++) {
   
  
// //     if (typeof newCatto[i] === "number") break;
// //     console.log(newCatto[i])
// // }

// // const str = "3TUm3S11YasTmAYzCF3EaobwNZCC6Zvif75wmZMt38ua"
// // const newStr = "3TUm3S11YasTmAYzCF3EaobwNZCC6Zvif75wmZMt38ua"
// // if (str === newStr) console.log(true)

// // const newCatto = [
// //     "merry",
// //     "cuddles",

// //     100,
// //     ["meeki", "kamleshi"]
// // ]
// // for (let i = newCatto.length - 1; i>= 0; i--) {
// // console.log(newCatto[i])
// //  }

// // for(let x = 0; x <3 ; x++){
// //     for(let y = 0; y<=6; y++) {
// //         console.log(`rep ${x+1} of exercise ${y+1}`)
// //     }
// // }

// // for (let x = 1; x <4 ; x++){
// //     console.log(`---starting exercise ${x}`)
// //     for(let y = 1; y<6; y++) {
// //         console.log(`ex num :${x} rep number ${y}`)
// //     }
// // }
// //while loop

// // let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice)

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// /* Write your code below. Good luck! 🙂 */

// // const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// // // alert(bills.length)
// // const tips = [];
// // const totals =[];
// // for (let i = 0; i <bills.length; i++){
// //     tips[i] = calcTip(bills[i]);
// //     totals[i] = tips[i] + bills[i];
// // }

// // console.log(tips)
// // console.log(totals)

// //bonus

// // const calcAverage = function(arr){
// //     let sum = 0;
// //    for (let i =0; i < arr.length; i++){
// //     // sum = sum + arr[i]
// //     sum += arr[i];
// //    }
// //     return sum/arr.length;
// // }
// // const result = calcAverage(totals);
// // console.log(result)



// // const test = [1,2,3,4];
// // let sum1 =0;
// // for (let i =0; i<test.length; i++){
// //     sum1 = sum1 + test[i]
   
// // } console.log(sum1)


// // const data = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9 ,5];


// // let filtered = data.filter(x => typeof (x) !== "string") 
// // console.log(Number(Math.max(filtered)))
// // console.log(Math.min(filtered))
// // const amplitudeCalc = function(arr){

// //     let filtered = arr.filter(x=> typeof(x) !== "string") 
// //     console.log(filtered)
// //     let max = filtered[0];
// //     let min = filtered[0];
// //     for (let i = 0; i < filtered.length; i++){
// //         const curr = filtered[i]
// //       if (curr > max) max = curr;
// //       if (curr < min) min = curr
// //     }
// //     console.log("min:", min)
// //     console.log("max:", max)
// //     return max - min;
// // }
// // const result = amplitudeCalc(data)
// // console.log(result)



// // const printForcast = function (arr){
// //     let str = ""
// //     for(let i =0; i < arr.length; i++){
// //         str = str + `... ${arr[i]}C in ${i + 1} days...`
// //         // console.log(str)
// //     }
   
// //     return str;
// // }
// // const test_data1 = [17, 21, 23]
// // const rslt = printForcast(test_data1);
// // console.log(rslt)




// 'use strict';

// /*
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// */

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // When there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = '⛔️ No number!';
//     displayMessage('⛔️ No number!');

//     // When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = '🎉 Correct Number!';
//     displayMessage('🎉 Correct Number!');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     // When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent =
//       // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//       displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = '💥 You lost the game!';
//       displayMessage('💥 You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   //   // When guess is too high
//   // } else if (guess > secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = '📈 Too high!';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = '💥 You lost the game!';
//   //     document.querySelector('.score').textContent = 0;
//   //   }

//   //   // When guess is too low
//   // } else if (guess < secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = '📉 Too low!';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = '💥 You lost the game!';
//   //     document.querySelector('.score').textContent = 0;
//   //   }
//   // }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// ///////////////////////////////////////
// // Coding Challenge #1

// /* 
// Implement a game rest functionality, so that the player can make a new guess! Here is how:

// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the score and secretNumber variables
// 3. Restore the initial conditions of the message, number, score and guess input field
// 4. Also restore the original background color (#222) and number width (15rem)

// GOOD LUCK 😀
// */


// // const reset = document.querySelector(".again")

// function calcMid(index1, index2) {
//   const totalMonths = 12;
//   let diff =0;
//   if(index1 !== 0 && index1 > index2) {
//     const remaing = totalMonths - index1;
//     diff = remaing + index2;
//   } else {
//     diff = index2 - index1;
//   }


//   return Math.abs(diff);
// }

// const rslt = calcMid(11, 0)
// console.log(rslt)



// // const first = () => {
// //   let a =10;
// //   const b = second(5, 10) 
// //   a +=b;
// //   return a;
// // }

// // function second(x,y){
// //   var c =2;
// //   return c;
// // }

// // const v = first()
// // console.log(v)

// function calc(x) {
//   const age = 1998 - x;
//   // console.log(firstName)
//   return age;
// }


// const firstName = "Ahmad"
// calc(2025) 


// const named = "Ahmad" 
// if (true) {
//   const named = "Rana";
//   console.log(named)
// }


// function check() {
//   let rana = "employed" 
//   if (true) {
//     rana = "unemployed"
//   }

//   console.log(rana)// it should give me the modified value of rana
// }
// check();


// function randomTesting() {
//   const fn = "Muhammad Ahmad"
//   console.log(`${fn} is my name`)
// }

// randomTesting()

// // var me = "Ahmad";
// // let job = ""

// //working on temporal dead zone

// // if(!cart) deleteCart();

// // cosnt cart = "some data exists" // unexpected uidentifier
// // let cart = "some data exists" // throws a reference errrior

// function deleteCart(){
//   console.log("Deleting everything in the cart...")
// }


// //testing window object


// const a = 10;
// var b = 11;
// let c = 9;

// console.log(b === window.b)// true

// const calcAgee = function(bY) {
//   console.log(2025-bY);
//   console.log(this)
// }

// calcAgee(1998)


// // const cla = birthY => {
// //   console.log(this)
// // }
// // cla()

// // const iioi = {
// //   fn: "khan",
// //   clc : function(){
// //     console.log(this.fn)

// //     const nn = function(){
// //       console.log(this.fn)
// //     }.bind(this)
// //     nn()
// //   }
// // }

// // iioi.clc()


// // const person = {
// //   firstName: "Muhammad",
// //   lastName : "Khan",
// //   langs: ["Eng", "Urdu", "JavaScript"]
// // }





// // // const newPerson = { ...person }
// // const newPerson = structuredClone(person)
// // newPerson.lastName = "ahmad"
// // newPerson.langs.push("Html")
// // console.log(person)
// // console.log(newPerson)


                              



// // ahmad()
// muhammad()
// var ahmad = function(){
//   console.log("Ahmad is 27 years old")
// }
// var muhammad = ()=> {
//   console.log("Ahmad is 27 years old")
// }



// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
orderDelivery : function(obj){
  const { orderedItems: items, orderAmount: amount, deliveryAddress: address } = obj;// we destructured here
 return `total amount for these ${items} is ${amount} and is delivered at ${address}` 
},

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function(...arr){
    console.log(`You ordered pasta which is made from these ingredients: ${arr.map(x=>x)}`)
  },
  orderDrink: function(mainDrink, ...others) {
    console.log(mainDrink);
    console.log(others)
  }
};

// const userInput = [prompt("ing 1"), prompt("ing 2") ,prompt("ing 3")]
// console.log(userInput)
// restaurant.orderPasta(userInput)

// const [, pasta, ...restFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(restFood)


const newRestaurant = {...restaurant, CEO: "Muhammad Ahmad", foundedIn : 2005}
const nonAlcholicDrinks = ["7up", "Big-Apple", "Fanta"]
restaurant.orderDrink("Sting",...nonAlcholicDrinks)

newRestaurant.name = "The arabian cusinie";
// console.log("og restuarnt:", restaurant )
// console.log("new restuarnt:",newRestaurant)


const newMenu = [...restaurant.starterMenu, "fries" ]
// console.log(newMenu)
const rslt = restaurant.orderDelivery({
  orderedItems: ["fries", "Coke", "Fried Chicken", "Burger"],
  orderAmount: 1290,
  deliveryAddress: "House #96, Madina townn"
})
console.log(rslt)
const {name, openingHours, categories} = restaurant;
const {name: restaurantName, openingHours : hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);


const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu)

//mutautng variables

let a = 100;
let b = 120;
const obj = {a: 90, b: 67};
({a, b} = obj)
// console.log(a,b)

//nested objects



// const [first, , second] = restaurant.categories;
// console.log(first, second)

// const [a, b, c] = [1, 2, 3]
// console.log(a)
 


// const umer = {
//   nft : ["orcs", "degods","punguns", "dragon", "jikan"]
// }

// let [main, ,secondary] = umer.nft;
// console.log(main, secondary)

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)



// [main, secondary] = [secondary, main];

// console.log(main, secondary)

// receive 2 return values
const [starter, mainMeal] = restaurant.order(2, 1)
// console.log(starter)

const arr = [1,2,[5,6]]
// console.log(arr.flat())


const randomArr = [1,2,3,[4,5,6, [7, 8]]]
const [x, , , [y, , , [, z]]] = randomArr;
// console.log(x, y, z)// 1, 4,8


//default values
const [p=0,q=1,r=2]= [8,9];

// console.log(p,q, r)// 892


// const dev = {
//   lang :"JavaScript",
//   techStack : "frontend developer",
//   framework : "React",
//   stylingFramework : "Tailwind Css"
// }


// const anotherDev = { ...dev, lang: "Pyhton", techStack : "backend dev", framework: "django", }
// anotherDev.name = "Shehroz"
// const begineerDev = anotherDev;
// begineerDev.name = "Chitta"
// console.log(begineerDev)

// console.log(anotherDev)
// const 




// const add = function(...nums) {
  
//   const total = nums.length;
//   let sum = 0;
//   for(let i =0; i <total; i++ ){
//     let temp = nums[i];
//     // console.log(i)
//    sum = temp + sum;
  
//   }
//   return sum;
// }
// const mults = [12, 14, 19]
// const storedRslt = add(mults)
// console.log(storedRslt)

// restaurant.orderDelivery? restaurant.orderDrink("coke"): "Method doesnt exist"

// restaurant.orderDrink("coke") || "Method doesnt exist"
// restaurant.orderDelivery && restaurant.orderDrink("coke") 



const test = {
  eng: "write a summary",
  compulsory: {
    totalPassingGrades : 100,
    reqPassingGrades : 60,
    // subj : ['maths', "computer"]
  }
}


const iop = test.compulsory?.subj? true :'property doesnt exist';
console.log(iop)