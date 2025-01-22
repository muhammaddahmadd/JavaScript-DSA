// const books = [
//     {
//         title: 'Algorithms',
//         author: ['Robert Sedgewick', 'Kevin Wayne'],
//         publisher: 'Addison-Wesley Professional',
//         publicationDate: '2011-03-24',
//         edition: 4,
//         keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
//         pages: 976,
//         format: 'hardcover',
//         ISBN: '9780321573513',
//         language: 'English',
//         programmingLanguage: 'Java',
//         onlineContent: true,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.41,
//                 ratingsCount: 1733,
//                 reviewsCount: 63,
//                 fiveStarRatingCount: 976,
//                 oneStarRatingCount: 13
//             }
//         },
//         highlighted: true
//     },
//     {
//         title: 'Structure and Interpretation of Computer Programs',
//         author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
//         publisher: 'The MIT Press',
//         publicationDate: '2022-04-12',
//         edition: 2,
//         keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
//         pages: 640,
//         format: 'paperback',
//         ISBN: '9780262543231',
//         language: 'English',
//         programmingLanguage: 'JavaScript',
//         onlineContent: false,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.36,
//                 ratingsCount: 14,
//                 reviewsCount: 3,
//                 fiveStarRatingCount: 8,
//                 oneStarRatingCount: 0
//             }
//         },
//         highlighted: true
//     },
//     {
//         title: 'Computer Systems: A Programmer\'s Perspective',
//         author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
//         publisher: 'Prentice Hall',
//         publicationDate: '2002-01-01',
//         edition: 1,
//         keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
//         pages: 978,
//         format: 'hardcover',
//         ISBN: '9780130340740',
//         language: 'English',
//         programmingLanguage: 'C',
//         onlineContent: false,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.44,
//                 ratingsCount: 1010,
//                 reviewsCount: 57,
//                 fiveStarRatingCount: 638,
//                 oneStarRatingCount: 16
//             }
//         },
//         highlighted: true
//     },
//     {
//         title: 'Operating System Concepts',
//         author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//         publisher: 'John Wiley & Sons',
//         publicationDate: '2004-12-14',
//         edition: 10,
//         keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
//         pages: 921,
//         format: 'hardcover',
//         ISBN: '9780471694663',
//         language: 'English',
//         programmingLanguage: 'C, Java',
//         onlineContent: false,
//         thirdParty: {
//             goodreads: {
//                 rating: 3.9,
//                 ratingsCount: 2131,
//                 reviewsCount: 114,
//                 fiveStarRatingCount: 728,
//                 oneStarRatingCount: 65
//             }
//         }
//     },
//     {
//         title: 'Engineering Mathematics',
//         author: ['K.A. Stroud', 'Dexter J. Booth'],
//         publisher: 'Palgrave',
//         publicationDate: '2007-01-01',
//         edition: 14,
//         keywords: ['mathematics', 'engineering'],
//         pages: 1288,
//         format: 'paperback',
//         ISBN: '9781403942463',
//         language: 'English',
//         programmingLanguage: null,
//         onlineContent: true,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.35,
//                 ratingsCount: 370,
//                 reviewsCount: 18,
//                 fiveStarRatingCount: 211,
//                 oneStarRatingCount: 6
//             }
//         },
//         highlighted: true
//     },
//     {
//         title: 'The Personal MBA: Master the Art of Business',
//         author: 'Josh Kaufman',
//         publisher: 'Portfolio',
//         publicationDate: '2010-12-30',
//         keywords: ['business'],
//         pages: 416,
//         format: 'hardcover',
//         ISBN: '9781591843528',
//         language: 'English',
//         thirdParty: {
//             goodreads: {
//                 rating: 4.11,
//                 ratingsCount: 40119,
//                 reviewsCount: 1351,
//                 fiveStarRatingCount: 18033,
//                 oneStarRatingCount: 1090
//             }
//         }
//     },
//     {
//         title: 'Crafting Interpreters',
//         author: 'Robert Nystrom',
//         publisher: 'Genever Benning',
//         publicationDate: '2021-07-28',
//         keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
//         pages: 865,
//         format: 'paperback',
//         ISBN: '9780990582939',
//         language: 'English',
//         thirdParty: {
//             goodreads: {
//                 rating: 4.7,
//                 ratingsCount: 253,
//                 reviewsCount: 23,
//                 fiveStarRatingCount: 193,
//                 oneStarRatingCount: 0
//             }
//         }
//     },
//     {
//         title: 'Deep Work: Rules for Focused Success in a Distracted World',
//         author: 'Cal Newport',
//         publisher: 'Grand Central Publishing',
//         publicationDate: '2016-01-05',
//         edition: 1,
//         keywords: ['work', 'focus', 'personal development', 'business'],
//         pages: 296,
//         format: 'hardcover',
//         ISBN: '9781455586691',
//         language: 'English',
//         thirdParty: {
//             goodreads: {
//                 rating: 4.19,
//                 ratingsCount: 144584,
//                 reviewsCount: 11598,
//                 fiveStarRatingCount: 63405,
//                 oneStarRatingCount: 1808
//             }
//         },
//         highlighted: true
//     }
// ];


// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook) // cleared


// const [,, thirdBook] = books;
// console.log(thirdBook)// cleared

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[, rating] ,[, ratingCount]] = ratings;
// console.log(rating)


// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatingsoneStarRatings, threeStarRatings = 0] = ratingStars;




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


// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/


// const players1 =[game.players[0]];
// const [gk, ...fieldPlayers] = game.players[0];
// console.log(gk)

// const players2 = [game.players[1]];

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];//4

// const { odds: {team1 :one, x:draw, team2: two}} = game;
// // console.log(one)


// const xo = one < two && "team one wins";
// console.log(xo)


// function printGoals(...args){
    // console.log(`${args.length} goals scored by: ${args}`)
// }


// printGoals(...game.scored)

//for-of

// const allPlayers = [...players1, ...players2];//3

// for(const player of allPlayers.entries()) {
//     console.log(`${player[0] + 1}: ${player[1]}`)
// }



const weekdays = ["mon", "tues", "wed", "thurs"," fri", "sat","sun"];
const scl = {
    name : "Lums", 
    programs: ["bcs", "bse"]
}
// console.log(scl.workingDays)

for (const day of weekdays) {
    // const open = scl?.workingDays[day]?.open ?? "closed"
    // console.log("open variable returning:",open)
    // console.log(`on ${day} we are open at ${open}`)
}


const users = [{
    name: "",
    email: "ranaahmad131@gmail.com"
}]

// console.log(users[0]?.name || "Name doesnt exist")

const workingDays = {
    mon: {
        open: 11,
            close: 16,
        }, tues: {
        open: 9,
            close: 16,
        }, wed: {
        open: 0,
            close: 16,
        },

}

 

const properties = Object.keys(workingDays)
// console.log(properties)

// let nStr =  `We are open on ${properties.length}days`;

// for (const day of properties) {
//     nStr = nStr + `${day},`
// }
// console.log(nStr)




const randomObj = {
    name: "kk",
    age : 25,
    email: "kk@gmail.com",
    familyTree : ["daughter", "son", "wife", "pet"]
    

}

workingHour = {
    mon: {
        start: 9,
            end: 13,
        },
    tues: {
        start: 11,
            end: 14,
        },
    wed: {
        start: 9,
            end: 15,
        },
    thu: {
        start: 12,
            end: 13,
        }, fri: {
        start: 8,
            end: 12,
        }
    
}
//object.keys
// const props = Object.keys(workingHour)
// console.log(props)
// console.log(props.length) 

// let fullStr = `Works ${props.length} a week `

// for (const [i, el] of props) {
//     fullStr += `${el}, `



// }

// console.log(fullStr)

///object.values

// const entries = Object.entries(workingHour)
// console.log(entries)
// for (const [key, { open, close }] of entries) {
//     console.log(`${key} and ${open} ${close}`)
// }






// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number(Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console(We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.In this game, it will look like this:
// {
//     Gnarby: 1,
//         Hummels: 1,
//             Lewandowski: 2
// }




const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};



// 1. Loop over the game.scored array and print each player name to the console, along with the goal number(Example: "Goal 1: Lewandowski")


const gameScored = Object.values(game.scored)

// for(const [i, el] of gameScored) {
//     console.log(`Goal ${i}: ${el}`)
// }

// console.log(gameScored)
const scorers = {}

for (let i =0; i < gameScored.length; i++){
    console.log(gameScored[i])
    if (scorers[i]) {
        scorers[i]++;
    }else {
        scorers[i]= 1;
    }
}
console.log(scorers)



// 2. Use a loop to calculate the average odd and log it to the console(We already studied how to calculate averages, you can go check if you don't remember)


// const odds = Object.values(game.odds) 
// let temp = 0;
// for(const od of odds) {
//     temp +=  od
    
    // console.log(`avg is ${od}/${odds.length}`)
// }

//  const avg = temp/odds.length
//  console.log(avg)

const {team1, team2, odds} = game
const prnt = Object.entries(odds) 

for(const [el, i] of prnt) {
console.log(`${el}: ${i}`)
}


for (const [team, odd] of Object.entries(game.odds)) {
    // debugger;
    const teamStr = team === "x" ? "Draw" : `Odd of victory ${game[team]}`
    console.log(team)
    // console.log(teamStr)
    console.log(`${team}: ${odd}`)
} 





const zuna = {
    age : 24,
    height: 5^3,
    education : {
        matric : "science",
        fsc: "pre-medical",
        bachelors: "literature and human philosophy"
    },
    moviesGenre: ["Disney", "Action", "Minions", "Lillions", "Millions", "Action"],
    gamesPlayed : ["Ludo","Pubg"]
}



// const {education: studies} = zuna;
// const valuesOfStudies = Object.entries(studies) 
// for(const [ed, value] of valuesOfStudies) {
//     console.log(`${ed}: ${value}`)
// }


// console.log(valuesOfStudies)


// const noDup = new Set(zuna.moviesGenre);
// console.log(noDup)


// noDup.add("kk");
// console.log(noDup)



// const myMap = new Map();
// myMap.set("zuna", "Ahmad's wifey");
// myMap.set("Minion","Bigion's wifey")
// myMap.set("zun","madz")

// const z = myMap.get("Minion")
// console.log(myMap.has("madz"))
// console.log([1, 2] === [1, 2])