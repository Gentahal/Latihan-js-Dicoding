//!!For of/
// let myArray = ['Genta', 'Halilintar']

// for(const arrayItem of myArray) {
//     console.log()
// }

//!Do While/
// let i= 0;

// do {
//     console.log();
//     i++
// } while (i <= 100);

//!infinite loops /
// let a = 1;

// while(a <= 5) {
//     console.log()
// }

//!If else
let score = 100;
let result = ""

if(score >= 90) {
    result = "Selamat! Anda mendapatkan nilai A."
} else if(score >= 80) {
    result = "Anda mendapatkan nilai B."
} else if(score >= 70) {
    result = "Anda mendapatkan nilai C."
} else if(score >= 60) {
    result = "Anda mendapatkan nilai D."
}  else if(score <= 60) {
    result = "Anda mendapatkan nilai E."
}


console.log(result);