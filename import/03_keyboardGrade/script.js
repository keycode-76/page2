// keyboardGrade/script.js
import "/import/03_keyboardGrade/style.scss"
// data
import { userCardData, userThreeSlot } from "../save/script.js";
import { insData } from "/import/10_initData/user_instant.js";
const tutorialArea = document.createElement("div");
// tutorialArea.textContent = "tutorial"
// tutorialArea.id = "tutorialArea";
const importKeyBGrade = (app) =>{
//     tutorialArea.classList.add("tourFin");
    // return app.appendChild(tutorialArea);
    let totalCharacters = userCardData.length;
    let levelOneCount = userCardData.filter(character => character.level === 1).length;
    let levelOneRatio = levelOneCount / totalCharacters;

    levelOneRatio *= 10;
    if (levelOneRatio<5) {
        userThreeSlot[insData.now_slot].boardGrade = 2;
    }
}

export { importKeyBGrade };