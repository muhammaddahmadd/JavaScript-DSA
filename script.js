// var a = "nameless"
// let b = "pls declare"
// function loud(){
//     if(true){
//          a = "Ahmad";
//          b = "Rana";
//         // console.log(a, "this is var0")
//         // console.log(b, "this is let0")
//     }
//     // console.log(a , "this is var")
//     // console.log(b, "this is let")
// }

// console.log(a, "this is var1")
// console.log(b, "this is let1")


// loud()

// window.alert("working")

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// const saandInaam = {age: 26, name: "Hassan Inaam", job: "Customer Support", favouritePerson: "Rafia"};
// console.log(saandInaam)

// saandInaam.favouritePerson = "Nomi Dadra";
// console.log(saandInaam)


// console.log('Start');

// setTimeout(() => {
//     console.log('This is asynchronous!');
// }, 1000);

// console.log('End');


console.log('Start');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

delay(1000).then(() => {
    console.log('This is asynchronous!');
});

console.log('End');
