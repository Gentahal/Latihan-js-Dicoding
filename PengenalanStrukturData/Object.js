// const character ={
//     name : 'Genta Halilintar',
//     age : 16,
//     species : 'Human',
//     'Hair color' : 'Blonde'
// };

// console.log(`Halo nama saya ${character.name}`)

// const restaurant = {
//     name: "Genta Food",
//     city: "Jakarta",
//     "favorite drink": "Juice",
//     "favorite food": "Meetball",
//     isVegan: false,
//   };
//   const name= "Genta Food";
//   const favoriteDrink= "Juice";

// //!latihan Array
// const evenNumber = [];

// let angka;

// for(let angka = 1; angka <= 100; angka++){

//  if((angka%2)==0){

//    evenNumber.push(angka);

//  }

// }
// console.log(evenNumber)

// //!Latiham MAP
// const priceInJPY = 5000;

// // TODO
// const currency = new Map([
//   ["USD", 14000],
//   ["JPY", 131],
//   ["SGD", 11000],
//   ["MYR", 3500]
// ]);
// let priceInIDR = priceInJPY * currency.get("JPY");

// const artistsAndSongs = {
//     "Keyakizaka46": ["Silent Majority"],
//     "Blackpink": ["How You Like That", "Ice Cream"],
//     "JKT48": ["Rapsodi", "Heavy Rotation"],
//     "Twice": ["What is Love?"],
// }

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
// delete artistsAndSongs["Keyakizaka46"];
// artistsAndSongs["Blackpink"].push("Rose - Gone");

// console.log(artistsAndSongs);

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));


f