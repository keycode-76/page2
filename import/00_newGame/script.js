// newGame.js

// css
import "../00_newGame/style.scss"
// data
import { saveBtn, userThreeSlot } from "../save/script.js";
import { insData } from "/import/10_initData/user_instant.js";
import { importPause } from "/import/00_setting/script.js";
import { importKeyBGrade } from "../03_keyboardGrade/script.js";
//func
import { importTutorial } from "/import/00_tutorial/script.js";
import { importPrologue } from "/import/00_prologue/script.js";
import { importTitle } from "/import/01_titleArea/script.js";
import { importCode } from "/import/02_codingArea/script.js";
import { importShop } from "/import/02_shopArea/script.js";
import { importBattle } from "/import/02_battleArea/script.js";
import { importSkill, renderSkill } from "/import/02_skillArea/script.js";
import { importKey } from "/import/04_keyboardArea/script.js";
import { importHint, renderHint } from "../00_hint/script";


// Create main areas
const gameArea = document.createElement("div");
const headArea = document.createElement("div");
const middleArea = document.createElement("div");
const keyBoardArea = document.createElement("div");

gameArea.id = "gameArea"
headArea.id = "headArea";
middleArea.id = "middleArea";
keyBoardArea.id = "keyBoardArea";

// pause
window.addEventListener("keydown", (key) => {if (key.keyCode === 27) {
    const app = document.getElementById("app")
    // console.log(key.Code)
    importPause(app); }
});
// game
const renderGame = (app) => {
    importKeyBGrade();
    if ( userThreeSlot[insData.now_slot].currLevel === 0) {

        console.log("RDR tutorial");
        importTutorial(app);
    }
    else {
        importPrologue(app);
        console.log("RDR game");
    }
};
// if (key.keyCode === 27)
window.addEventListener("animationend", (event) => {
    if (event.animationName === "tourFinAnim") { //教學
        event.target.classList.remove("tourFin");
        userThreeSlot[insData.now_slot].currLevel = 1;
        console.log("tourFin lvl", userThreeSlot[insData.now_slot].currLevel)
        const app = document.querySelector("#app");
        app.innerHTML = "";
        insData.curr_scene = "tour";
        renderGame(app);
    }
    else if (event.animationName === "finBossAnim") { //打贏
        event.target.classList.remove("finBoss");
        console.log("scene now: ", insData.curr_scene )
        middleArea.innerHTML = "";
        keyBoardArea.innerHTML = "";
        importSkill(middleArea);
        renderSkill(49);
        importShop(middleArea);
        importKey(keyBoardArea);
        insData.curr_scene = "shop";
        saveBtn.click();
        
    } 
    else if (event.animationName === "shopFinAnim" ) { // 離開商店
        event.target.classList.remove("shopFin");
        console.log("next lvl");
        const app = document.querySelector("#app");
        app.innerHTML = "";
        importPrologue(app);
    } 
    else if (event.animationName === "prolFightFinAnim" ) { //過場
        event.target.classList.remove("prolFightFin");
        console.log("scene now: ", insData.curr_scene )
        const app = document.querySelector("#app");
        app.innerHTML = "";
        insData.curr_scene = "battle";
        saveBtn.click();
        gameArea.innerHTML = "";
        middleArea.innerHTML = "";
        app.appendChild(gameArea);
        importTitle(headArea, userThreeSlot[insData.now_slot].currLevel);
        importKey(keyBoardArea);
        importBattle(middleArea);
        importCode(middleArea);
        // headArea.classList.add("shaking");
        gameArea.append(headArea, middleArea, keyBoardArea);
        importKeyBGrade(); // keyboard grade
        importHint(app);
        insData.now_hint = 9;
        renderHint();
    }
    else if (event.animationName === "prolPassFinAnim") { // 略過這一關
        event.target.classList.remove("prolPassFin");
        const app = document.querySelector("#app");
        app.innerHTML = "";
        userThreeSlot[insData.now_slot].currLevel += 1;
        importPrologue(app);
    }
    else if (event.animationName === "bossWinAnim" ) { // 打輸
        event.target.classList.remove("bossWinAnim");
        console.log("you lose! back to lvl 1");
        userThreeSlot[insData.now_slot].currLevel = 1;
        userThreeSlot[insData.now_slot].challengeTime += 1;
        userThreeSlot[insData.now_slot].currMoney = 200;
        insData.curr_scene = "battle";
        saveBtn.click();
    }
});

export { renderGame };