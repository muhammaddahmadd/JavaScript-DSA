"use strict";
// // const books = [
// //     {
// //         title: 'Algorithms',
// //         author: ['Robert Sedgewick', 'Kevin Wayne'],
// //         publisher: 'Addison-Wesley Professional',
// //         publicationDate: '2011-03-24',
// //         edition: 4,
// //         keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
// //         pages: 976,
// //         format: 'hardcover',
// //         ISBN: '9780321573513',
// //         language: 'English',
// //         programmingLanguage: 'Java',
// //         onlineContent: true,
// //         thirdParty: {
// //             goodreads: {
// //                 rating: 4.41,
// //                 ratingsCount: 1733,
// //                 reviewsCount: 63,
// //                 fiveStarRatingCount: 976,
// //                 oneStarRatingCount: 13
// //             }
// //         },
// //         highlighted: true
// //     },
// //     {
// //         title: 'Structure and Interpretation of Computer Programs',
// //         author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
// //         publisher: 'The MIT Press',
// //         publicationDate: '2022-04-12',
// //         edition: 2,
// //         keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
// //         pages: 640,
// //         format: 'paperback',
// //         ISBN: '9780262543231',
// //         language: 'English',
// //         programmingLanguage: 'JavaScript',
// //         onlineContent: false,
// //         thirdParty: {
// //             goodreads: {
// //                 rating: 4.36,
// //                 ratingsCount: 14,
// //                 reviewsCount: 3,
// //                 fiveStarRatingCount: 8,
// //                 oneStarRatingCount: 0
// //             }
// //         },
// //         highlighted: true
// //     },
// //     {
// //         title: 'Computer Systems: A Programmer\'s Perspective',
// //         author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
// //         publisher: 'Prentice Hall',
// //         publicationDate: '2002-01-01',
// //         edition: 1,
// //         keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
// //         pages: 978,
// //         format: 'hardcover',
// //         ISBN: '9780130340740',
// //         language: 'English',
// //         programmingLanguage: 'C',
// //         onlineContent: false,
// //         thirdParty: {
// //             goodreads: {
// //                 rating: 4.44,
// //                 ratingsCount: 1010,
// //                 reviewsCount: 57,
// //                 fiveStarRatingCount: 638,
// //                 oneStarRatingCount: 16
// //             }
// //         },
// //         highlighted: true
// //     },
// //     {
// //         title: 'Operating System Concepts',
// //         author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
// //         publisher: 'John Wiley & Sons',
// //         publicationDate: '2004-12-14',
// //         edition: 10,
// //         keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
// //         pages: 921,
// //         format: 'hardcover',
// //         ISBN: '9780471694663',
// //         language: 'English',
// //         programmingLanguage: 'C, Java',
// //         onlineContent: false,
// //         thirdParty: {
// //             goodreads: {
// //                 rating: 3.9,
// //                 ratingsCount: 2131,
// //                 reviewsCount: 114,
// //                 fiveStarRatingCount: 728,
// //                 oneStarRatingCount: 65
// //             }
// //         }
// //     },
// //     {
// //         title: 'Engineering Mathematics',
// //         author: ['K.A. Stroud', 'Dexter J. Booth'],
// //         publisher: 'Palgrave',
// //         publicationDate: '2007-01-01',
// //         edition: 14,
// //         keywords: ['mathematics', 'engineering'],
// //         pages: 1288,
// //         format: 'paperback',
// //         ISBN: '9781403942463',
// //         language: 'English',
// //         programmingLanguage: null,
// //         onlineContent: true,
// //         thirdParty: {
// //             goodreads: {
// //                 rating: 4.35,
// //                 ratingsCount: 370,
// //                 reviewsCount: 18,
// //                 fiveStarRatingCount: 211,
// //                 oneStarRatingCount: 6
// //             }
// //         },
// //         highlighted: true
// //     },
// //     {
// //         title: 'The Personal MBA: Master the Art of Business',
// //         author: 'Josh Kaufman',
// //         publisher: 'Portfolio',
// //         publicationDate: '2010-12-30',
// //         keywords: ['business'],
// //         pages: 416,
// //         format: 'hardcover',
// //         ISBN: '9781591843528',
// //         language: 'English',
// //         thirdParty: {
// //             goodreads: {
// //                 rating: 4.11,
// //                 ratingsCount: 40119,
// //                 reviewsCount: 1351,
// //                 fiveStarRatingCount: 18033,
// //                 oneStarRatingCount: 1090
// //             }
// //         }
// //     },
// //     {
// //         title: 'Crafting Interpreters',
// //         author: 'Robert Nystrom',
// //         publisher: 'Genever Benning',
// //         publicationDate: '2021-07-28',
// //         keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
// //         pages: 865,
// //         format: 'paperback',
// //         ISBN: '9780990582939',
// //         language: 'English',
// //         thirdParty: {
// //             goodreads: {
// //                 rating: 4.7,
// //                 ratingsCount: 253,
// //                 reviewsCount: 23,
// //                 fiveStarRatingCount: 193,
// //                 oneStarRatingCount: 0
// //             }
// //         }
// //     },
// //     {
// //         title: 'Deep Work: Rules for Focused Success in a Distracted World',
// //         author: 'Cal Newport',
// //         publisher: 'Grand Central Publishing',
// //         publicationDate: '2016-01-05',
// //         edition: 1,
// //         keywords: ['work', 'focus', 'personal development', 'business'],
// //         pages: 296,
// //         format: 'hardcover',
// //         ISBN: '9781455586691',
// //         language: 'English',
// //         thirdParty: {
// //             goodreads: {
// //                 rating: 4.19,
// //                 ratingsCount: 144584,
// //                 reviewsCount: 11598,
// //                 fiveStarRatingCount: 63405,
// //                 oneStarRatingCount: 1808
// //             }
// //         },
// //         highlighted: true
// //     }
// // ];


// // const [firstBook, secondBook] = books;
// // console.log(firstBook, secondBook) // cleared


// // const [,, thirdBook] = books;
// // console.log(thirdBook)// cleared

// // const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// // const [[, rating] ,[, ratingCount]] = ratings;
// // console.log(rating)


// // const ratingStars = [63405, 1808];

// // const [fiveStarRatings, oneStarRatingsoneStarRatings, threeStarRatings = 0] = ratingStars;




// // const game = {
// //     team1: 'Bayern Munich',
// //     team2: 'Borrussia Dortmund',
// //     players: [
// //         [
// //             'Neuer',
// //             'Pavard',
// //             'Martinez',
// //             'Alaba',
// //             'Davies',
// //             'Kimmich',
// //             'Goretzka',
// //             'Coman',
// //             'Muller',
// //             'Gnarby',
// //             'Lewandowski',
// //         ],
// //         [
// //             'Burki',
// //             'Schulz',
// //             'Hummels',
// //             'Akanji',
// //             'Hakimi',
// //             'Weigl',
// //             'Witsel',
// //             'Hazard',
// //             'Brandt',
// //             'Sancho',
// //             'Gotze',
// //         ],
// //     ],
// //     score: '4:0',
// //     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// //     date: 'Nov 9th, 2037',
// //     odds: {
// //         team1: 1.33,
// //         x: 3.25,
// //         team2: 6.5,
// //     },
// // };


// // Coding Challenge #1

// /* 
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
// */


// // const players1 =[game.players[0]];
// // const [gk, ...fieldPlayers] = game.players[0];
// // console.log(gk)

// // const players2 = [game.players[1]];

// // const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];//4

// // const { odds: {team1 :one, x:draw, team2: two}} = game;
// // // console.log(one)


// // const xo = one < two && "team one wins";
// // console.log(xo)


// // function printGoals(...args){
//     // console.log(`${args.length} goals scored by: ${args}`)
// // }


// // printGoals(...game.scored)

// //for-of

// // const allPlayers = [...players1, ...players2];//3

// // for(const player of allPlayers.entries()) {
// //     console.log(`${player[0] + 1}: ${player[1]}`)
// // }



// const weekdays = ["mon", "tues", "wed", "thurs"," fri", "sat","sun"];
// const scl = {
//     name : "Lums", 
//     programs: ["bcs", "bse"]
// }
// // console.log(scl.workingDays)

// for (const day of weekdays) {
//     // const open = scl?.workingDays[day]?.open ?? "closed"
//     // console.log("open variable returning:",open)
//     // console.log(`on ${day} we are open at ${open}`)
// }


// const users = [{
//     name: "",
//     email: "ranaahmad131@gmail.com"
// }]

// // console.log(users[0]?.name || "Name doesnt exist")

// const workingDays = {
//     mon: {
//         open: 11,
//             close: 16,
//         }, tues: {
//         open: 9,
//             close: 16,
//         }, wed: {
//         open: 0,
//             close: 16,
//         },

// }

 

// const properties = Object.keys(workingDays)
// // console.log(properties)

// // let nStr =  `We are open on ${properties.length}days`;

// // for (const day of properties) {
// //     nStr = nStr + `${day},`
// // }
// // console.log(nStr)




// const randomObj = {
//     name: "kk",
//     age : 25,
//     email: "kk@gmail.com",
//     familyTree : ["daughter", "son", "wife", "pet"]
    

// }

// workingHour = {
//     mon: {
//         start: 9,
//             end: 13,
//         },
//     tues: {
//         start: 11,
//             end: 14,
//         },
//     wed: {
//         start: 9,
//             end: 15,
//         },
//     thu: {
//         start: 12,
//             end: 13,
//         }, fri: {
//         start: 8,
//             end: 12,
//         }
    
// }
// //object.keys
// // const props = Object.keys(workingHour)
// // console.log(props)
// // console.log(props.length) 

// // let fullStr = `Works ${props.length} a week `

// // for (const [i, el] of props) {
// //     fullStr += `${el}, `



// // }

// // console.log(fullStr)

// ///object.values

// // const entries = Object.entries(workingHour)
// // console.log(entries)
// // for (const [key, { open, close }] of entries) {
// //     console.log(`${key} and ${open} ${close}`)
// // }






// // Let's continue with our football betting app!

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number(Example: "Goal 1: Lewandowski")
// // 2. Use a loop to calculate the average odd and log it to the console(We already studied how to calculate averages, you can go check if you don't remember)
// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.In this game, it will look like this:
// // {
// //     Gnarby: 1,
// //         Hummels: 1,
// //             Lewandowski: 2
// // }




// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };



// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number(Example: "Goal 1: Lewandowski")


// const gameScored = Object.values(game.scored)

// // for(const [i, el] of gameScored) {
// //     console.log(`Goal ${i}: ${el}`)
// // }

// // console.log(gameScored)
// const scorers = {}

// for (let i =0; i < gameScored.length; i++){
//     // console.log(gameScored[i])
//     if (scorers[i]) {
//         scorers[i]++;
//     }else {
//         scorers[i]= 1;
//     }
// }
// // console.log(scorers)



// // 2. Use a loop to calculate the average odd and log it to the console(We already studied how to calculate averages, you can go check if you don't remember)


// // const odds = Object.values(game.odds) 
// // let temp = 0;
// // for(const od of odds) {
// //     temp +=  od
    
//     // console.log(`avg is ${od}/${odds.length}`)
// // }

// //  const avg = temp/odds.length
// //  console.log(avg)

// const {team1, team2, odds} = game
// const prnt = Object.entries(odds) 

// for(const [el, i] of prnt) {
// // console.log(`${el}: ${i}`)
// }


// for (const [team, odd] of Object.entries(game.odds)) {
//     // debugger;
//     const teamStr = team === "x" ? "Draw" : `Odd of victory ${game[team]}`
//     // console.log(team)
//     // console.log(teamStr)
//     // console.log(`${team}: ${odd}`)
// } 





// const zuna = {
//     age : 24,
//     height: 5^3,
//     education : {
//         matric : "science",
//         fsc: "pre-medical",
//         bachelors: "literature and human philosophy"
//     },
//     moviesGenre: ["Disney", "Action", "Minions", "Lillions", "Millions", "Action"],
//     gamesPlayed : ["Ludo","Pubg"]
// }



// // const {education: studies} = zuna;
// // const valuesOfStudies = Object.entries(studies) 
// // for(const [ed, value] of valuesOfStudies) {
// //     console.log(`${ed}: ${value}`)
// // }


// // console.log(valuesOfStudies)


// // const noDup = new Set(zuna.moviesGenre);
// // console.log(noDup)


// // noDup.add("kk");
// // console.log(noDup)



// // const myMap = new Map();
// // myMap.set("zuna", "Ahmad's wifey");
// // myMap.set("Minion","Bigion's wifey")
// // myMap.set("zun","madz")

// // const z = myMap.get("Minion")
// // console.log(myMap.has("madz"))
// // console.log([1, 2] === [1, 2])



// // Coding Challenge #3

// /* 
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//     [17, '⚽️ GOAL'],
//     [36, '🔁 Substitution'],
//     [47, '⚽️ GOAL'],
//     [61, '🔁 Substitution'],
//     [64, '🔶 Yellow card'],
//     [69, '🔴 Red card'],
//     [70, '🔁 Substitution'],
//     [72, '🔁 Substitution'],
//     [76, '⚽️ GOAL'],
//     [80, '⚽️ GOAL'],
//     [92, '🔶 Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened(no duplicates)
// // const events = new Set(gameEvents.entries());
// // console.log(events)
// const events = new Set([...gameEvents.values()])
// // console.log(events)

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair.So remove this event from the game events log.
// // events.delete("🔶 Yellow card");
// // console.log(events)
// gameEvents.delete(64)

// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes"(keep in mind that a game has 90 minutes)
// // const total = gameEvents.keys().reduce((acc, coun)=> acc + coun);
// // console.log(gameEvents.size)


// const popped = [...gameEvents.keys()].pop()
// // console.log(`An event happened, on average, every ${popped/gameEvents.size} minutes`)



// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// // [FIRST HALF]17: ⚽️ GOAL


// for (const [key, value] of gameEvents){

//     const half = key <=45 ? "First" : "Second"
//     // console.log(`${key < 45 ? `[${half}]${key}` : `[Second Half]${key}`}: ${value}`)
// }


// const luna = "ZuNaIraAhmad";

// const smoll = luna.toLowerCase();
// const fixed = smoll[0].toUpperCase() + smoll.slice(1);
// // console.log(fixed)


// const user = "rAnaahmad131@gmail.com\n";
// const email = user.toLowerCase();


// const x = "Zunaira Ahmad".split(" ")
// // console.log(x[1])


// // function capt(name){
// //     const strLow = name.toLowerCase();
// //     const fH = strLow.map(x=> x[0].toUpperCase());
// //     console.log(fh)
// // }

// // console.log(capt("khan Ahmad"))

// // console.log("mionma".split("o"))


// // const rn = "Muhammad ahmad khan";
// // const nam = rn.split(" ")
// // console.log(nam)
// // for (const n of nam) console.log(n[0].toUpperCase() + n.slice(1))


// // Coding Challenge #4

// /*
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM(see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA(pasted to textarea)
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT(5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀
// */


// // Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// function getData(str) {

//     const q = str.split("_")
//     const n = [q[0].toLowerCase() + q[1].slice(0, 1).toUpperCase() + q[1].slice(1)].join("")
//     // console.log(n)
    
// }

// getData("calculate_AGE")


// // const q = "kakabattery_Osaka          ";
// // console.log(q.trim(""));


// // const rnArr = "  zuna_  Maddy  ";
// // const intoArr = rnArr.trim().split("_")
// // console.log(intoArr)


// // for (const v of intoArr) {

  
// //   console.log(q)
// //     // console.log(q[0].toLowerCase() + q[1].replace([1][0], [1][0].toUpperCase()))
  
    
   
// // }



// // function check(str) {
// // // const checked = typeof str;
// // //     if(checked === "string") return true

// //     const v = typeof str === "string"? true: false;
// //     return v;
// // }

// // console.log(check("khan"))
// // console.log(check(10))

// const bookings = []
// const flight = "LHR809"
// const ahmad = {
//     name: "Muhammad Ahmad",
//     age: 27,
//     cnic: 3650224154909,
// }
// const createBooking = function(flightNum, passenger) {
//     flightNum = "PSH821";
//     passenger.name = "Mr." + passenger.name;

//     if (passenger.cnic === 3650224154909) alert("Cleared to be on board")
//     else alert("Wrong ID")

// }


// // createBooking(flight, ahmad)
// // console.log(flight);
// // console.log(ahmad)

// // function count() {
// //     let conter = 0;
// //     return function(){
// //         conter++;
// //         return conter
// //     }
// // }
// // console.log(count())

// const oneWord = function(str){
//     return str.replace(/ /g, "").toLowerCase();
// }

// function upperFirstWord(str){

//     const [first, ...second] = str.split(" ");

//     return [first.toUpperCase(), ...second].join(" ")


// }


// function transform(str, fn) { //hih order fun
//     console.log(`orignal String: ${str}`)
//     console.log(`Trnasformed string: ${fn(str)}`)
//     console.log(`Transformed by : ${fn.name}`)
// }

// transform("Ahmad is a js dev", upperFirstWord) 

// const xyz = ()=> console.log("hi")
// const xq = ["a", "b", "c"].forEach(xyz)

// const greet = (greeting) => {
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

// greet("Hi")("Ahmad")






// const pia = {
//     airline : "Pakistab Airlies",
//     code : "PK",
//     bookings : [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight  #${this.code}${flightNum}`)
//         this.bookings.push({
//             flight: `${this.code}${flightNum}`,
//             name,
//         })
//     }
// }

// const shaheen = {
//     airline: "Shaheen Airlines",
//     code : "SHA",
//     bookings: [],
//     check(){
//         console.log(this.bookings)
//     }
// }


// const book = pia.book;
// // pia.book(234, "Rana")
// // book(909, "rana")// bcz it is a regular function call
// // book.call(shaheen, 303, "Khan")
// // console.log(shaheen.check())


// // const newBook = book.bind(shaheen);
// // newBook(88, "JKT")

// // const shaheen23 = book.bind(shaheen, 606, "Muhammad ")
// // shaheen23()


// // pia.planes = 105;
// // pia.buyPlanes = function(){
// //     console.log(this)
// //     this.planes++;
// //     console.log(this.planes)
// // }

// // const btn = document.querySelector(".buy");
// // btn.addEventListener("click", pia.buyPlanes.bind(pia))


// // function addTax(rate) {
// //     return function(value){
// //         return value + value * rate;
// //     }
// // }

// // console.log(addTax(0.1)(200))

// // Coding Challenge #1

// /* 
// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
  
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀
// */
// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0)
// }
// poll.registerNewAnswer = function () {
//     // const res = Number(prompt(
//     //     `${this.question}\n ${this.options.join('\n')}\n(Write option number)`
//     // ))
//     //  typeof res === Number && res <= this.answers.length
//     //     this.answers[res]++;
    
// }


// poll.registerNewAnswer()

// console.log(poll.answers)

// // const btn = document.querySelector(".buy");
// // btn.addEventListener("click", function(){
// //     btn.innerHTML = "Clicked!"
// // })

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// /////////////////////////////////////////////////
// // Data

// // DIFFERENT DATA! Contains movement dates, currency and locale

// const account1 = {
//     owner: 'Jonas Schmedtmann',
//     movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//     interestRate: 1.2, // %
//     pin: 1111,

//     movementsDates: [
//         '2019-11-18T21:31:17.178Z',
//         '2019-12-23T07:42:02.383Z',
//         '2020-01-28T09:15:04.904Z',
//         '2020-04-01T10:17:24.185Z',
//         '2020-05-08T14:11:59.604Z',
//         '2020-05-27T17:01:17.194Z',
//         '2020-07-11T23:36:17.929Z',
//         '2020-07-12T10:51:36.790Z',
//     ],
//     currency: 'EUR',
//     locale: 'pt-PT', // de-DE
// };

// const account2 = {
//     owner: 'Jessica Davis',
//     movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//     interestRate: 1.5,
//     pin: 2222,

//     movementsDates: [
//         '2019-11-01T13:15:33.035Z',
//         '2019-11-30T09:48:16.867Z',
//         '2019-12-25T06:04:23.907Z',
//         '2020-01-25T14:18:46.235Z',
//         '2020-02-05T16:33:06.386Z',
//         '2020-04-10T14:43:26.374Z',
//         '2020-06-25T18:49:59.371Z',
//         '2020-07-26T12:01:20.894Z',
//     ],
//     currency: 'USD',
//     locale: 'en-US',
// };

// const accounts = [account1, account2];

// /////////////////////////////////////////////////
// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// /////////////////////////////////////////////////
// // Functions

// const displayMovements = function (movements, sort = false) {
//     containerMovements.innerHTML = '';

//     const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

//     movs.forEach(function (mov, i) {
//         const type = mov > 0 ? 'deposit' : 'withdrawal';

//         const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${i + 1
//             } ${type}</div>
//         <div class="movements__value">${mov}€</div>
//       </div>
//     `;

//         containerMovements.insertAdjacentHTML('afterbegin', html);
//     });
// };

// const calcDisplayBalance = function (acc) {
//     acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//     labelBalance.textContent = `${acc.balance}€`;
// };

// const calcDisplaySummary = function (acc) {
//     const incomes = acc.movements
//         .filter(mov => mov > 0)
//         .reduce((acc, mov) => acc + mov, 0);
//     labelSumIn.textContent = `${incomes}€`;

//     const out = acc.movements
//         .filter(mov => mov < 0)
//         .reduce((acc, mov) => acc + mov, 0);
//     labelSumOut.textContent = `${Math.abs(out)}€`;

//     const interest = acc.movements
//         .filter(mov => mov > 0)
//         .map(deposit => (deposit * acc.interestRate) / 100)
//         .filter((int, i, arr) => {
//             // console.log(arr);
//             return int >= 1;
//         })
//         .reduce((acc, int) => acc + int, 0);
//     labelSumInterest.textContent = `${interest}€`;
// };

// const createUsernames = function (accs) {
//     accs.forEach(function (acc) {
//         acc.username = acc.owner
//             .toLowerCase()
//             .split(' ')
//             .map(name => name[0])
//             .join('');
//     });
// };
// createUsernames(accounts);

// const updateUI = function (acc) {
//     // Display movements
//     displayMovements(acc.movements);

//     // Display balance
//     calcDisplayBalance(acc);

//     // Display summary
//     calcDisplaySummary(acc);
// };

// ///////////////////////////////////////
// // Event handlers
// let currentAccount;

// btnLogin.addEventListener('click', function (e) {
//     // Prevent form from submitting
//     e.preventDefault();

//     currentAccount = accounts.find(
//         acc => acc.username === inputLoginUsername.value
//     );
//     console.log(currentAccount);

//     if (currentAccount?.pin === Number(inputLoginPin.value)) {
//         // Display UI and message
//         labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
//             }`;
//         containerApp.style.opacity = 100;

//         // Clear input fields
//         inputLoginUsername.value = inputLoginPin.value = '';
//         inputLoginPin.blur();

//         // Update UI
//         updateUI(currentAccount);
//     }
// });

// btnTransfer.addEventListener('click', function (e) {
//     e.preventDefault();
//     const amount = Number(inputTransferAmount.value);
//     const receiverAcc = accounts.find(
//         acc => acc.username === inputTransferTo.value
//     );
//     inputTransferAmount.value = inputTransferTo.value = '';

//     if (
//         amount > 0 &&
//         receiverAcc &&
//         currentAccount.balance >= amount &&
//         receiverAcc?.username !== currentAccount.username
//     ) {
//         // Doing the transfer
//         currentAccount.movements.push(-amount);
//         receiverAcc.movements.push(amount);

//         // Update UI
//         updateUI(currentAccount);
//     }
// });

// btnLoan.addEventListener('click', function (e) {
//     e.preventDefault();

//     const amount = Number(inputLoanAmount.value);

//     if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
//         // Add movement
//         currentAccount.movements.push(amount);

//         // Update UI
//         updateUI(currentAccount);
//     }
//     inputLoanAmount.value = '';
// });

// btnClose.addEventListener('click', function (e) {
//     e.preventDefault();

//     if (
//         inputCloseUsername.value === currentAccount.username &&
//         Number(inputClosePin.value) === currentAccount.pin
//     ) {
//         const index = accounts.findIndex(
//             acc => acc.username === currentAccount.username
//         );
//         console.log(index);
//         // .indexOf(23)

//         // Delete account
//         accounts.splice(index, 1);

//         // Hide UI
//         containerApp.style.opacity = 0;
//     }

//     inputCloseUsername.value = inputClosePin.value = '';
// });

// let sorted = false;
// btnSort.addEventListener('click', function (e) {
//     e.preventDefault();
//     displayMovements(currentAccount.movements, !sorted);
//     sorted = !sorted;
// });

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES


// console.log(23 === 23.0)
// console.log(Number("10"))
// console.log(+ "10")

// console.log(Number.isFinite("90p"))


// function giveRandomNumb(a, b) {
//     return Math.trunc(Math.random(a, b) * 10)
// }
// console.log(giveRandomNumb(10, 20))

// console.log(8 % 2 === 0)


// const date = new Date();
// console.log(date)
// console.log(new Date("January 04, 2025"))
// setTimeout(()=> console.log(`hey this is ur pizza`), 1000)

// const name = "Ahmad"
// const timer = setTimeout((name)=> console.log(`Hey bud, this is my name: ${name}`), 4000, name)
// if(name === "Ahmad"
// ) clearTimeout(timer)


// // // Timeout Example
// // const timeoutID = setTimeout(() => console.log("This will not run."), 3000);
// // clearTimeout(timeoutID); // Cancels the timeout

// // // Interval Example
// // const intervalID = setInterval(() => console.log("Repeating..."), 1000);
// // setTimeout(() => clearInterval(intervalID)); // Stops the interval after 5 seconds


//  console.log("first")
// const newTime = setTimeout(()=> {
//     console.log(`Second`)
// }, 3000)

// const promise = new Promise((resolve, reject) => {
//     const v = true;
//     if (v) { // Using the variable v instead of hardcoded true
//         console.log(`All good to go`);
//         resolve("Success!"); // Resolving the promise
//     } else {
//         console.log("We dropped out");
//         reject("Error occurred"); // Rejecting in case of failure
//     }
// });

// // Handling the promise
// promise
//     .then((message) => {
//         console.log("Promise resolved with:", message);
//     })
//     .catch((error) => {
//         console.log("Promise rejected with:", error);
//     });



const Person = function(firstName, lastName, dob) {

    this.name = firstName;
    this.husband = lastName;
    this.dob = dob;
}
const zuna = new Person("Zunaira", "Ahmad", 2000)
console.log(zuna)

// console.log(zuna instanceof Person)//


//prototypes
console.log(Person.prototype)
Person.prototype.calcAge = function(){
    console.log(2025 - this.dob)
}
zuna.calcAge()

Person.prototype.foodie = "Yes"

console.log(zuna.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(zuna))
console.log(zuna.hasOwnProperty("dob"))



console.log(zuna.__proto__.__proto__)



const newArr =  [1,2,4,5,9,3,3,4,5,6,7,8];
console.log(newArr.__proto__ === Array.prototype)
console.log(newArr.__proto__.__proto__)

Array.prototype.unique = function(){
   return [...new Set(this)];

}

console.log(newArr.unique())

// quiz 1
const Car = function(make,speed) {
   this.make = make;
   this.speed = speed;
   
}

const bmw = new Car("BMW", 120);
const merc = new Car("Mercedes", 95);
console.log("bmw:", bmw)
console.log("mercedes:", merc)

Car.prototype.accelerate = function (){
    this.speed = this.speed + 10;
}

bmw.accelerate()
console.log(bmw)
merc.accelerate()
console.log(merc)
Car.prototype.brake = function(){
    this.speed = this.speed - 5;
    // console.log(this.speed)
}
bmw.brake()
console.log(bmw)
merc.brake()
console.log(merc)


class PersonCl  {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    greet() {
        console.log(`hey ${this.name}`)
    }

    set name(n) {
        console.log(n)
        if(n.includes(" ")) this._name = n;
        // alert(`${n} is not a full name`)
    }

    get name(){
        return this._name;
    }
}

PersonCl.prototype.favouriteCar = function() {
//     const fav = prompt("Your favourite car");
//    console.log(`${this.name}'s favourite car is ${fav}`)
}
const rana  = new PersonCl("Muhamamd Ahmad", 26)
// console.log(rana)
rana.favouriteCar()
console.log(rana.__proto__.__proto__

)

console.log(rana)


// const account = {
//     owner : "Saand Inaam",
//     email : "saandinaam@forex.com",
//     organizations : ["Binance", "MetaTrader", "Exness", "MetaMask", "Phantom"],

//     get org(){
//         console.log(`${this.owner} is the CEO of ${this.organizations.filter(x => x === "MetaTrader")}`)
//     },
    


//     set balance(amount) {
//         console.log(`CEO ${this.owner.slice(0, 5)} has funded ${amount} for a startup`)
//     },

//     set owner(name) {
//         if(name.includes(" ")) this.owner = name;
//     }

    
// }


// const chohanoe = 
// console.log(account.org)

// account.balance = 100;
// console.log(account.balance)


const PersonProto = {
    calcAge(){
        console.log(2025 - this.bY)
    },
    init(fn, bY){
        this.fn = fn;
        this.bY = bY;
    }
}



const rana1 = Object.create(PersonProto);
console.log(rana1)

// rana1.name = "Muhammad Ahmad";
// rana1.age = 1998;
// rana1.calcAge()

console.log(rana1.__proto__ === PersonProto)

const zuni = Object.create(PersonProto)
zuni.init("Zunaina", 2000)
zuni.calcAge()




// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// const Car1 = function(make, speed){
// this.make = make;
// this.speed = speed;
// }


// Car1.prototype.accelerate = function (){
//     this.speed += 10;
// }

// Car1.prototype.brake = function () {
//     this.speed -= 5;
// }


class Car2 {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -= 5;
    }

     get speedUs(){
        this.speed = this.speed/1.6;
        return this.speed;
     }

     set speedUs(n){
        this.speed = this.speed * 1.6;
     }
}


const ford = new Car2("ford", 120);
ford.accelerate()
console.log(ford.speedUs)
ford.speedUs= 50;
console.log(ford)


const og = {
    name: "orginal",
    brand : "Hp"
}
const copy = structuredClone(og);
copy.brand = "Dell"
console.log(og)
console.log(copy)


let [a,b] = [1, 5];
[a,b] = [b,a]
console.log(a)


const randomObj = {
    name : "Zizi",
    age : 20,
    gamesPlayed : ["Pubg", "Outlast", "Pokemon"],
    birthYear(){
      return  2025 - this.age;
    },
    siblings : 0
}


// console.log(randomObj?.siblings)


function counter(){
  let x = 0
 
    return function(){
        x++;
    }
}
const z = counter()
const one = z()//0
console.log(one)
z()//1
z()//2

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}!`);
    };
};

// Calling the function
greet("Hi")("Ahmad"); // Output: Hi, Ahmad!
console.log(greet.name)





let counte = (function () {
    let count = 0;
    return {
        increment: () => ++count,
        getCount: () => count
    };
})();

console.log(counte.increment()); // 1
console.log(counte.getCount()); // 1



 
// const promise = new
// console.log('Start');  // 1. Immediately prints to console

// setTimeout(() => {
//     console.log('Inside Timeout');  // 3. Runs after 2 seconds
// }, 2000);

// console.log('End');  // 2. Immediately prints to console


// https://restcountries.eu/rest/v2/
// https://countries-api-836d.onrender.com/countries/
// https://restcountries.com/v2/name/portugal


// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries")

// // const request = new XMLHttpRequest();
// // request.open("GET", "https://restcountries.com/v2/name/portugal")
// // request.send()
// // console.log(this.responseText)


// request.addEventListener("load", function(){
//     console.log(this.responseText);
//     const data = JSON.parse(this.responseText)[0]
//     console.log(data)
//     console.log(data.currencies[0].name)
//     const html = ` <article class="country">
//           <img class="country__img" src='${data.flag}'/>
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+ data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>`;

//         countriesContainer.insertAdjacentHTML("beforeend", html)

// }


// )




// setTimeout(()=> {
//     console.log("One")
//     setTimeout(() => {
//         console.log("Two")
//         setTimeout(() => {
//             console.log("Three")
//         }, 1000)
//     }, 1000)
  
// }, 1000)

// const request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v2/name/portugal")
// request.send()
// console.log(this.responseText)


// const request = fetch("https://restcountries.com/v2/name/portugal");
// console.log(request)

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v2/name/${country}`).then((res)=> res.json()).then(data=> console.log(data))
// } 

// getCountryData("portugal")

const p = document.createElement("p");
const body = document.querySelector("body")
body.append(p)
p.innerHTML = "This text gonna be replaced when real data comes from Api"
p.style.fontSize = "40px";
const btn = document.createElement("button");
p.prepend(btn);
btn.textContent = "Test me"
function changeText(a){
    p.innerHTML = `Country ${a} is fetched from the given api`
}



function getJson(url, errorMsg = "Something went wrong") {
  const x = fetch(url)
        .then((res) => {
            console.log(res)
            if (!res.ok) {
                throw new Error(`${errorMsg}: ${res.status}`);
            }

            return res.json()
        })
        return x;
}



const fetched = function (country) {
    getJson(`https://restcountries.com/v2/name/${country}`, "Country not found")
        .then((data) => {
            setTimeout(() => {
                changeText(data[0].name);
            }, 2000);
        })
        .catch((err) => alert("Error: " + err.message));
};


btn.addEventListener("click", function(){
    fetched("spain")
    this.innerHTML = "fetching..."
})




// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

function GetFetchedData(url) {
    return fetch(url)  // ✅ Pass the correct URL
        .then(res => {
            console.log(res);
            if (!res.ok) {
                throw new Error(`Please provide correct coordinates: ${res.status}`);
            }
            return res.json();
        });
}

const whereAmI = function (lat, lng) {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;

    GetFetchedData(url)  // ✅ Pass the correctly formatted URL
        .then(data => {
            console.log(`You are in ${data.city}, ${data.continent}`);
        })
        .catch(err => alert(err));
};

// ✅ Test cases
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);



const lottery = new Promise((resolve, reject) => {
    console.log("Lottery Draw Happening!!")
    setTimeout(()=> {
        if (Math.random() + 0.5 > 1) {
            resolve("You won the lottery")
        } else {
            reject("You lost the lottery")
        }
    }, 2000)
})

lottery.then(res=> console.log(res)).catch(err => console.log(err))

//promisifying 
const waited = function(secs) {
    return new Promise(resolve => {
        setTimeout(resolve, secs * 1000)
    })
}

waited(2).then(()=> {
    console.log("I wiated for 2 sec")
    return waited(5)
}).then(res => console.log("i waited for 5 sec"))

Promise.resolve("Abc").then(res=> console.log(res))

Promise.reject(new Error("xyz")).catch(err => console.log(err))


// function getMyLocation(){
//  let v = navigator.geolocation.getCurrentPosition(position => {
//     return position
//   }, err =>{
//     return err
//   })
//   return v;
// }



const getMyLocation = function(){
    return new Promise((resolve, reject)=> {
        navigator.geolocation.getCurrentPosition(position => resolve(position), fail => reject(fail));
    })
}




// const getLoc = document.createElement("button");
// getLoc.textContent = "Click me to get your location";
// body.prepend(getLoc)
// getLoc.addEventListener("click", getMyLocation)
// getMyLocation().then(res=> console.log(res)).catch(err=> console.log(err))


// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/


function createImage(imgPath){
  return new Promise((resolve, reject)=> {
      const img = document.createElement("img")
      img.src = imgPath;

      img.addEventListener("load", ()=> {
          document.querySelector(".images").appendChild(img)
          resolve(img)
      })
      img.addEventListener('error', () => {
          reject(new Error('Failed to load image at ' + imgPath)); // Reject with error
      });
  })

}

createImage().then(res=> res.json()).catch(err=> console.log(err))


const arr = [1,3,5,6];



const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = days[date.getDay()];

const mins = 
console.log(`Today is : ${today} \n Curren time is: ${date.toLocaleTimeString()}`)


const gtD = function(para){
    return fetch(`https://jsonplaceholder.typicode.com/${para}`).then(res=> {
        console.log(res)
        if(!res.ok) throw new Error(`error fetching data,${res.status}`)
        return res.json();
    })
}


const consume = (x)=>{
    gtD(x).then(data=> console.log(data[0].title)).catch(err=> console.log(err))
}
consume("posts")


async function whAmI(country) {
 try {
     const res = await fetch(`https://restcountries.com/v2/name/${country}`);
     const data = await res.json()
     console.log([data])
 }catch(err) {
    console.log("error occured")
 }
}

whAmI("spain")


// function fetchData(url) {
//     return fetch(url).then(res => res.json());
// }

(async function () {
    const res = await Promise.race([
        fetchData("https://restcountries.com/v2/name/spain"),
        fetchData("https://restcountries.com/v2/name/pakistan"),
        fetchData("https://restcountries.com/v2/name/italy")
    ]);

    console.log(res);
})();


const timeout = function(sec){
    return new Promise(function (_, reject){
        setTimeout(function(){
            reject(new Error("Request took too long!!"))
        }, sec * 1000)
    })
}

const fetchData = fetch("https://restcountries.com/v2/name/spain");

Promise.race([
    fetchData,
    timeout(0.15)
])
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err.message));
