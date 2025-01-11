// // var a = "nameless"
// // let b = "pls declare"
// // function loud(){
// //     if(true){
// //          a = "Ahmad";
// //          b = "Rana";
// //         // console.log(a, "this is var0")
// //         // console.log(b, "this is let0")
// //     }
// //     // console.log(a , "this is var")
// //     // console.log(b, "this is let")
// // }

// // console.log(a, "this is var1")
// // console.log(b, "this is let1")


// // loud()

// // window.alert("working")

// // for (let i = 0; i < 5; i++) {
// //     console.log(i);
// // }

// // const saandInaam = {age: 26, name: "Hassan Inaam", job: "Customer Support", favouritePerson: "Rafia"};
// // console.log(saandInaam)

// // saandInaam.favouritePerson = "Nomi Dadra";
// // console.log(saandInaam)


// // console.log('Start');

// // setTimeout(() => {
// //     console.log('This is asynchronous!');
// // }, 1000);

// // console.log('End');


// console.log('Start');

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// delay(1000).then(() => {
//     console.log('This is asynchronous!');
// });

// console.log('End');
                  
// const abc = "Khan"
// console.log(typeof abc)

// let num1 = 100;
// console.log(num1 += 100)

// function check(x){

    
//     console.log(Object.prototype.toString.call(x));
//     // console.log(x)
//     return x;
// }
// const input = prompt("enter")


// check(input)


// const t = true;
// const f = false;
// // AND
// console.log(t && f)// false
// console.log(t && t)//true
// console.log(f && t)//false
// console.log(f && f) //false

// // OR
// console.log(t || f)// true
// console.log(t || t)//true
// console.log(f || t)//false
// console.log(f || f) //false




const day = prompt("Enter the day you would like to book your appointment:");

switch(day) {
    case "Monday":
        console.log("Your appointment is on Monday at 10:00 AM");
        break;
    case "Tuesday":
        console.log("Your appointment is on Tuesday  9 AM");
        break;
    case "Wednesday":
        console.log("Your appointment is on Wednesday  12");
        break;
    case "Thursday":
        console.log("Your appointment is on Monday at 10:00 AM");
        break;
    case "Friday":
        console.log("Your appointment is on Friday0:00 AM");
        break;
        default:
            console.log("invalid");
}