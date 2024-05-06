// tutorial/script.js

import "/import/00_tutorial/style.scss" // css
import { btnSD_1 } from "/import/13_sound/script.js"; // sd
import { insData } from "/import/10_initData/user_instant.js"; // data
import { importHint, renderHint } from "../00_hint/script";
import { importBattle } from "../02_battleArea/script.js";
import { importCode } from "/import/02_codingArea/script.js";
import { importKey } from "/import/04_keyboardArea/script.js";

const tutorialArea = document.createElement("div");
const middleTArea = document.createElement("div");
const keyboardTArea = document.createElement("div");
const tourPassBtn = document.createElement("button");
const tourNextBtn = document.createElement("button");

tourPassBtn.textContent = "PASS";
tourNextBtn.textContent = "next"
tutorialArea.id = "tutorialArea";
middleTArea.id = "middleTArea"
keyboardTArea.id = "keyboardTArea";
tourPassBtn.id = "tourPassBtn";
tourNextBtn.id = "tourNextBtn";

tutorialArea.append(middleTArea, keyboardTArea);
const importTutorial = (app) =>{
    // tutorialArea.classList.add("tourFin");
    importHint(tutorialArea);
    renderHint();
    tutorialArea.appendChild(tourNextBtn);
    tourNextBtn.classList.add("nextBtn1");
    return app.append(tutorialArea, tourPassBtn);
};

tourPassBtn.addEventListener("click", () => {
    tutorialArea.classList.add("tourFin");
    insData.now_hint = 0;
    btnSD_1.play();
});
tourNextBtn.addEventListener("click", () => {
    console.log("hint",insData.now_hint+1)
    insData.now_hint +=1;
    renderHint();
    if (insData.now_hint === 2) {
        importKey(keyboardTArea);
        tutorialArea.removeChild(tourNextBtn);
    } 
    else if (insData.now_hint === 4) {
        tutorialArea.removeChild(tourNextBtn);
        importBattle(middleTArea);
    } 
    else if (insData.now_hint === 7) {
        // tutorialArea.removeChild(tourNextBtn);
        tutorialArea.appendChild(tourNextBtn);
        tourNextBtn.classList.add("nextBtn7");
        middleTArea.innerHTML = ""
    }
    else if (insData.now_hint === 8) {
        tutorialArea.removeChild(hintArea);
        middleTArea.innerHTML = "";
        keyboardTArea.innerHTML = "";
        tutorialArea.classList.add("tourFin");
        insData.now_hint = 0;
    }
    btnSD_1.play();
});
window.addEventListener("keydown", (i) => { //3
    if (insData.now_hint === 2) {
        insData.now_hint = 3;
        importBattle(middleTArea);
        importKey(keyboardTArea);  
        renderHint();
        tutorialArea.appendChild(tourNextBtn);
        tourNextBtn.classList.value = "";
        tourNextBtn.classList.add("nextBtn3");
    } else if (i.keyCode === 8) { // 5
        if (insData.now_hint === 4) {
            insData.now_hint = 5;
            importBattle(middleTArea);
            importCode(middleTArea);
            importKey(keyboardTArea);  
            renderHint();
        } else {return}
    } else {return}
});
window.addEventListener("animationend", (event) => { // 6
    if (event.animationName === "finLabelAnim") {
        if (insData.now_hint === 5) {
        insData.now_hint = 6;
        middleTArea.innerHTML = ""
        importBattle(middleTArea);
        tutorialArea.appendChild(tourNextBtn);
        tourNextBtn.classList.value = "";
        tourNextBtn.classList.add("nextBtn6");
        renderHint();
        }
    }
  });
export { importTutorial };