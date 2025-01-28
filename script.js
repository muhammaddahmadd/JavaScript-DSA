'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium"
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard"
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium"
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic"
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


/////////////////////////////////////////////////
 

let arr = ["a", "b", "c", "d", "e"];



// console.log(arr[arr.length -1])


const arr2 = ["j", "i", "h", "g"];
// console.log(arr2.reverse())



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// for(const mov of movements) {
//   console.log(`${mov > 0? "You deposited" : "You withdrew"}: ${Math.abs(mov)}`)
// }
// console.log("------foreach------")
// movements.forEach(function(mov) {
//   console.log(`${mov > 0 ? "You deposited" : "You withdrew"}: ${Math.abs(mov)}`)

// })

// movements.forEach((element, i)=> {
//   console.log(`${i} : ${element}`)
// });

// for (const [i, mov] of movements.entries()) {
//   console.log(`${i}:${mov}`)
// }


// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
function checkDogs(dogsJulia, dogsKate){
  // const total = [...dogsJulia, ...dogsKate];
  const corrected = [dogsJulia.slice(1, -2), ...dogsKate]
  const final = corrected.flat();
  final.forEach(function(pet,i){
    // if (pet >= 3) console.log(`Dog number${i + 1} is adult and is ${pet} age`)
    // else console.log(`Dog number${i + 1} is puppy and is ${pet} age`)
  })

  // console.log(total)
}
const julia = [9, 16, 6, 8, 3]
// console.log(julia)
// const juliaCopy = julia.slice(1, -2);
// console.log(juliaCopy)

const kate = [10, 5, 6, 1, 4]
checkDogs(julia, kate)


const rate = 285;
const mx = movements.map(m => Math.abs(m * rate))
// console.log(mx)

const rslt = movements.filter(m => m > 1000);
// console.log(rslt)
const total = rslt.reduce((acc, curr)=> acc + curr, 0);
// console.log(total)


const withdrawalz = movements.filter((amount) => amount < 0).map(Math.abs);
// console.log(withdrawalz)


// console.log(movements.reduce((acc, curr)=> acc + curr))
// const sumed = movements.reduce(function(acc, cur, i, arr) {
//   return acc + cur
// }, 0)
// console.log(sumed)


// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


function calcAverageHumanAge(arr1){
  const combined = [...arr1];
  // console.log(combined)
  // combined.forEach(function(com, i) {
  //   if (com <= 2) console.log(`1st :${com}`)
  //     else console.log(`${com}`)
  // })

  const mapped = combined.map((d => d <= 2 ? d * 2 : 16 + d * 4));
  const filtered = mapped.filter((x)=> x > 18);

 return (filtered.reduce((acc, cur)=> acc+ cur)/filtered.length);
}

const calcAverageHumanAge1 =(arr) => arr.map(d => d <=2? d * 2 : 16 + d * 4).filter(i => i > 18).reduce((acc, cur, i, arr)=> acc + cur/ arr.length, 0);
const Kate1 = [16, 6, 10, 5, 6, 1, 4]
const julia1 = [5, 2, 4, 1, 15, 8, 3];
const gimme = calcAverageHumanAge1(Kate1);
console.log(gimme)



const result = calcAverageHumanAge(Kate1)
console.log(result)


// const convertedToUsd = movements.filter(z=> z >0).map(x => x * 1.1).reduce((acc, cur) => acc + cur);
// console.log(convertedToUsd)

const x2 = [2, 4, 6, 8, 10];
console.log(x2.find(x => x > 2))

const jonasAcc = accounts.find(x => x.owner === "Jonas Schmedtmann")
// console.log(jonasAcc)

// for(const acc of accounts.values()) {
//   if (acc.owner === "Jonas Schmedtmann") 
//     // console.log("Fpounf iot")
// }


const listOfBawasy = ["Shappi", "Smoker Gui", "CryptoNaire", "Tarri", "Saan", "Tp", "Tarri"];


// console.log(listOfBawasy.findLast(x => x === "Tarri"))
// console.log(movements)
const largetMov = movements.findLastIndex((x, i, arr)=>  x > 2000)
// console.log(`Yopur biggest movement ws ${movements.length - largetMov} ago`)
// console.log(largetMov)

// console.log(movements.some(x=> x > 0))
// console.log(account4.movements.every(x => x > 10 ))


const randomArr = [100, 30, [3, [20]], 89];
// console.log(randomArr.flatMap(x=> x * 2))


// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/


const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];
// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// 2. Find the name of the only breed that likes both "running" and "fetch"("dogBothActivities" variable)



function onlyBreed(obj){
  let x = obj.find()
  console.log(x)
  // console.log(obj.map(o => o.activities).filter(x => x.activities === "running" && x.activities ==="fetch"? x.breed : ""))
}

// onlyBreed(breeds)

const dogBothActivities = breeds.find(x => x.activities.includes("fetch") && x.activities.includes("running")).breed
console.log(dogBothActivities)
// const huskyAvgWeight = breeds.map(x => x.averageWeight).reduce((acc, cur, i, arr) => (acc + cur) / arr.length);
// 

const huskyAvgWeight = breeds.filter(x => x.breed === "Husky")[0].averageWeight
console.log(huskyAvgWeight)


const allActivities = breeds.map(x => x.activities).flat();
console.log(allActivities)


//  Create an array "uniqueActivities" that contains only the unique activities(no activity repetitions).HINT: Use a technique with a special data structure that we studied a few sections ago.


const uniqueActivities = [...new Set(allActivities)]
// console.log(uniqueActivities)


// 5. Many dog breeds like to swim.What other activities do these dogs like ? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".


const swimmingAdjacent = [...new Set(breeds.filter(x => x.activities.includes("swimming")).map(x => x.activities).flat().filter(z => z !== "swimming"))]

console.log(swimmingAdjacent)

//  Do all the breeds have an average weight of 10kg or more ? Log to the console whether "true" or "false".
console.log(breeds.every(x => x.averageWeight >10))


// 7. Are there any breeds that are "active" ? "Active" means that the dog has 3 or more activities.Log to the console whether "true" or "false".

console.log(breeds.some(z => z.activities.length >= 3))

// BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

const fetch = breeds.filter(bd => bd.activities.includes("fetch")).map(x=> x.averageWeight)
const heaviest = Math.max()
console.log(heaviest)
console.log(fetch)

const nums = [100, -1, 3, 0, 4]
console.log(nums.sort((a,b)=>  b - a))
console.log(Object.groupBy(movements, movement => movement > 0? "bigs" : "sigs")
)

const status = Object.groupBy(accounts, acc => {

  const lengths = acc.movements.length;
 
  if (lengths > 5) return `very active`;
  if (lengths >= 3) return `active`;
  return `inactive`
})

console.log(status)


const pkg = Object.groupBy(accounts, acc => {
  const packages = acc.type;
  if (packages === "premium") return `premium`
  if (packages === "standard") return `standard`
  return `basic`
})
console.log(pkg)


const nr = Array.from({length: 3}, ()=> 1)
console.log(nr.fill("Ahmad", 1, 2))


// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.



GOOD LUCK 😀
*/
// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];


// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion(recFood) and add it to the object as a new property.Do NOT create a new array, simply loop over the array(We never did this before, so think about how you can do this without creating a new array).


const recFood = dogs.map(x => x.weight ** 0.75 * 28 );

dogs.forEach(dog => {
  dog.recFood = dog.weight ** 0.75 *28;
});
 


// Find Sarah's dog and log to the console whether it's eating too much or too little.HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky(on purpose) 🤓


const filtered = dogs.filter(x => x.owners.includes("Sarah")).map(x => x.curFood > x.recFood * 0.90 && x.curFood < x.recFood * 1.10);
console.log(`Sarah's dog is eating ${filtered === false? "too little" : "too much"}`)





// const etm = Object.groupBy(dogs, (dog) => {
//   if (dog.curFood > dog.recFood * 0.90) return `ownersTooLittle`
//   return `ownersTooMuch`
// })

// console.log(etm)






// 3. Create an array containing all owners of dogs who eat too much(ownersTooMuch) and an array with all owners of dogs who eat too little(ownersTooLittle)


const ownersTooMuch = dogs.filter(dog=> dog.curFood > dog.recFood).flatMap(dog=> dog.owners);
console.log(ownersTooMuch)


const ownersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood ).flatMap(dog => dog.owners);

console.log(ownersTooLittle)




// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// const testing = etm;
// console.log(testing)

console.log(`${ownersTooMuch.join(",")}s dogs are eating too much`)



console.log(`${ownersTooLittle.join(",")}s dogs are eating too little`)


// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended(just true or false)

console.log(dogs.some(dog=> dog.curFood === dog.recFood ))


// 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food(just true or false)
console.log(dogs.every(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.10))


// 7. Create an array containing the dogs that are eating an OKAY amount of food(try to reuse the condition used in 6.)

console.log(dogs.filter(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.10))


// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.



const etm = Object.groupBy(dogs, (dog) => {
  if (dog.curFood > dog.recFood ) return `too-much`
  if (dog.curFood < dog.recFood ) return `too-little`
  return `exact`
})

console.log(etm)


const dogsGrouppedBy = Object.groupBy(dogs, dog => `${dog.owners.length}-owners`);
console.log(dogsGrouppedBy)


//  Sort the dogs array by recommended food portion in an ascending order.Make sure to NOT mutate the original array!
const toBeSort = [...dogs]
// console.log(dogs)
console.log(dogs)

const sorted = toBeSort.sort((a, b) => b.recFood - a.recFood );
console.log(sorted)