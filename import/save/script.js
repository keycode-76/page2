// save/script.js
// import
import { insData } from "/import/10_initData/user_instant.js";

let threeSlot = [
    { index:0, slotName: "New Game 0", challengeTime:0, boardGrade:0, currMoney:200, currLevel:0,
    treasureCol: [0, 0, 0, 0, 0],
    bossCol: [0, 0, 0, 0, 0],
},
    { index:1, slotName: "New Game", challengeTime:0, boardGrade:0, currMoney:200, currLevel:0,
    treasureCol: 0,
    bossCol: 0,
},
    { index:2, slotName: "New Game", challengeTime:0, boardGrade:0, currMoney:200, currLevel:0,
    treasureCol: 0,
    bossCol: 0,
},
    { index:3, slotName: "New Game", challengeTime:0, boardGrade:0, currMoney:200, currLevel:0,
    treasureCol: 0,
    bossCol: 0,
}
];
// card data
let cardData_1 = [
{ name: "1", code: 49, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "2", code: 50, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "3", code: 51, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "4", code: 52, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "5", code: 53, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "6", code: 54, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "7", code: 55, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "8", code: 56, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "9", code: 57, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "0", code: 48, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "-", code: 189, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "=", code: 187, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},

{ name: "Q", code: 81, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "W", code: 87, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "E", code: 69, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "R", code: 82, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "T", code: 84, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "Y", code: 89, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "U", code: 85, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "I", code: 73, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "O", code: 79, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "P", code: 80, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "[", code: 219, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "]", code: 221, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},

{ name: "A", code: 65, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "S", code: 83, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "D", code: 68, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "F", code: 70, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "G", code: 71, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "H", code: 72, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "J", code: 74, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "K", code: 75, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "L", code: 76, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: ";", code: 186, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "'", code: 222, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},

{ name: "Z", code: 90, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "X", code: 88, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "C", code: 67, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "V", code: 86, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "B", code: 66, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "N", code: 78, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "M", code: 77, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: ",", code: 188, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: ".", code: 190, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "/", code: 191, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "-", code: 32, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
];
let cardData_2 = [
    { name: "1", code: 49, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "2", code: 50, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "3", code: 51, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "4", code: 52, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "5", code: 53, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "6", code: 54, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "7", code: 55, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "8", code: 56, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "9", code: 57, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "0", code: 48, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "-", code: 189, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "=", code: 187, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    
    { name: "Q", code: 81, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "W", code: 87, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "E", code: 69, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "R", code: 82, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "T", code: 84, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "Y", code: 89, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "U", code: 85, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "I", code: 73, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "O", code: 79, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "P", code: 80, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "[", code: 219, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "]", code: 221, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "A", code: 65, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "S", code: 83, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "D", code: 68, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "F", code: 70, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "G", code: 71, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "H", code: 72, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "J", code: 74, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "K", code: 75, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "L", code: 76, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: ";", code: 186, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "'", code: 222, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    // { name: "Enter", code: 13, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    
    { name: "Z", code: 90, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "X", code: 88, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "C", code: 67, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "V", code: 86, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "B", code: 66, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "N", code: 78, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "M", code: 77, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: ",", code: 188, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: ".", code: 190, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "/", code: 191, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    { name: "-", code: 32, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
    ];
let cardData_3 = [
{ name: "1", code: 49, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "2", code: 50, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "3", code: 51, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "4", code: 52, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "5", code: 53, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "6", code: 54, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "7", code: 55, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "8", code: 56, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "9", code: 57, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "0", code: 48, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "-", code: 189, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "=", code: 187, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},

// { name: "Tab", code: 9, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "Q", code: 81, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "W", code: 87, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "E", code: 69, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "R", code: 82, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "T", code: 84, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "Y", code: 89, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "U", code: 85, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "I", code: 73, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "O", code: 79, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "P", code: 80, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "[", code: 219, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "]", code: 221, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
// { name: "\\", code: 220, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},

// { name: "CapsLock", code: 20, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "A", code: 65, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "S", code: 83, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "D", code: 68, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "F", code: 70, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "G", code: 71, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "H", code: 72, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "J", code: 74, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "K", code: 75, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "L", code: 76, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: ";", code: 186, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "'", code: 222, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},

{ name: "Z", code: 90, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "X", code: 88, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "C", code: 67, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "V", code: 86, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "B", code: 66, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "N", code: 78, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "M", code: 77, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: ",", code: 188, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: ".", code: 190, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "/", code: 191, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
{ name: "-", code: 32, class: 0, level: 1, xp:[0,20], hp:[2,2] ,off: 1, mp: 1, coin: 0, equip: [0,0,0,0,0,0,0,0]},
];
// get save
let userThreeSlot
let userData
let userCardData
const userThreeSlotJSON = localStorage.getItem("threeSlot");
if (!userThreeSlotJSON || userThreeSlotJSON==="undefined" || userThreeSlotJSON==="null") {
    userThreeSlot = threeSlot; 
} else { 
    userThreeSlot = JSON.parse(userThreeSlotJSON);
}

const cardData = { 1: cardData_1, 2: cardData_2, 3: cardData_3 };
const renderUserData = (num) => { // init userdata
    if (num === 0 ) return;
    const slotNumber = num;
    const userCardDataKey = `cardData_${slotNumber}`;
    const userCardDataJSON = localStorage.getItem(userCardDataKey);
    if (!userCardDataJSON || userCardDataJSON==="undefined" || userCardDataJSON==="null") { 
        if (cardData[slotNumber]) {
            userCardData = cardData[slotNumber]; 
        } else { userCardData = cardData_1; }
    } else { 
        userCardData = JSON.parse(userCardDataJSON); }
    console.log("RDR userData")
};
const renderSlot = () => { // save userdata in slot
    if (insData.now_slot === 0 ) return;
    const slotNumber = insData.now_slot;
    threeSlot = userThreeSlot;
    localStorage.setItem(`threeSlot`, JSON.stringify(threeSlot));
};
const saveBtn = document.createElement("button"); // save btn
const resetBtn = document.createElement("button");
saveBtn.textContent = "SAVE";
resetBtn.textContent = "reset";

saveBtn.addEventListener("click", () => {
    if (insData.now_slot === 0 ) return;
    console.log("save", );
    renderSlot();
    threeSlot = userThreeSlot;
    localStorage.setItem(`threeSlot`, JSON.stringify(threeSlot));

    const slotNumber = insData.now_slot;
    cardData[slotNumber] = userCardData;
    localStorage.setItem(`cardData_${slotNumber}`, JSON.stringify(cardData[slotNumber]));
});

resetBtn.addEventListener("click", () => { // remove userData
    console.log("reset");
    const slotNumber = insData.now_slot;
    if (slotNumber >= 1) {
        // window.localStorage.removeItem(`initialData_${slotNumber}`);
        window.localStorage.removeItem(`cardData_${slotNumber}`);
    }
    insData.now_slot = 0;
    // window.localStorage.clear();
});

export { 
    userThreeSlot,
    renderSlot, renderUserData, 
    saveBtn, resetBtn, 
    userData, userCardData
};
