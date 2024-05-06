// keyboardArea/script.js


import "/import/04_keyboardArea/style.scss" // css
import { userThreeSlot, userCardData } from "../save/script"; // data
import { insData } from "/import/10_initData/user_instant.js";

const FighterLV = ["keyFighterLv1", "keyFighterLv2", "keyFighterLv3"]
const WizardLV = ["keyWizardLv1", "keyWizardLv2", "keyWizardLv3"]
const RogueLV = ["keyRogueLv1", "keyRogueLv2", "keyRogueLv3"]

const keyData1 = [
{ name: "Esc", code: 27, pos: "office" ,width: "25px" },
{ name: "1", code: 49, pos: "field" ,width: "25px" },
{ name: "2", code: 50, pos: "field" ,width: "25px" },
{ name: "3", code: 51, pos: "field" ,width: "25px" },
{ name: "4", code: 52, pos: "field" ,width: "25px" },
{ name: "5", code: 53, pos: "field" ,width: "25px" },
{ name: "6", code: 54, pos: "field" ,width: "25px" },
{ name: "7", code: 55, pos: "field" ,width: "25px" },
{ name: "8", code: 56, pos: "field" ,width: "25px" },
{ name: "9", code: 57, pos: "field" ,width: "25px" },
{ name: "0", code: 48, pos: "field" ,width: "25px" },
{ name: "-", code: 189, pos: "field" ,width: "25px" },
{ name: "=", code: 187, pos: "field" ,width: "25px" },
{ name: "Back", code: 8, pos: "office" ,width: "74px" },
];
const keyData2 = [
{ name: "Tab", code: 9, pos: "office" ,width: "50px" },
{ name: "Q", code: 81, pos: "field" ,width: "25px" },
{ name: "W", code: 87, pos: "field" ,width: "25px" },
{ name: "E", code: 69, pos: "field" ,width: "25px" },
{ name: "R", code: 82, pos: "field" ,width: "25px" },
{ name: "T", code: 84, pos: "field" ,width: "25px" },
{ name: "Y", code: 89, pos: "field" ,width: "25px" },
{ name: "U", code: 85, pos: "field" ,width: "25px" },
{ name: "I", code: 73, pos: "field" ,width: "25px" },
{ name: "O", code: 79, pos: "field" ,width: "25px" },
{ name: "P", code: 80, pos: "field" ,width: "25px" },
{ name: "[", code: 219, pos: "field" ,width: "25px" },
{ name: "]", code: 221, pos: "field" ,width: "25px" },
{ name: "\\", code: 220, pos: "office" ,width: "50px" },
];
const keyData3 = [
{ name: "CapsLock", code: 20, pos: "office" ,width: "70px" },
{ name: "A", code: 65, pos: "field" ,width: "25px" },
{ name: "S", code: 83, pos: "field" ,width: "25px" },
{ name: "D", code: 68, pos: "field" ,width: "25px" },
{ name: "F", code: 70, pos: "field" ,width: "25px" },
{ name: "G", code: 71, pos: "field" ,width: "25px" },
{ name: "H", code: 72, pos: "field" ,width: "25px" },
{ name: "J", code: 74, pos: "field" ,width: "25px" },
{ name: "K", code: 75, pos: "field" ,width: "25px" },
{ name: "L", code: 76, pos: "field" ,width: "25px" },
{ name: ";", code: 186, pos: "field" ,width: "25px" },
{ name: "'", code: 222, pos: "field" ,width: "25px" },
{ name: "Enter", code: 13, pos: "office" ,width: "60px" },
];
const keyData4 = [
{ name: "Shift", code: 16, pos: "office" ,width: "79px" },
{ name: "Z", code: 90, pos: "field" ,width: "25px" },
{ name: "X", code: 88, pos: "field" ,width: "25px" },
{ name: "C", code: 67, pos: "field" ,width: "25px" },
{ name: "V", code: 86, pos: "field" ,width: "25px" },
{ name: "B", code: 66, pos: "field" ,width: "25px" },
{ name: "N", code: 78, pos: "field" ,width: "25px" },
{ name: "M", code: 77, pos: "field" ,width: "25px" },
{ name: ",", code: 188, pos: "field" ,width: "25px" },
{ name: ".", code: 190, pos: "field" ,width: "25px" },
{ name: "/", code: 191, pos: "field" ,width: "25px" },
{ name: "Shift", code: 16, pos: "office" ,width: "79px" },
];
const keyData5 = [
{ name: "Ctrl", code: 17, pos: "office" ,width: "40px" },
{ name: "Win", code: 91, pos: "office" ,width: "40px" },
{ name: "Alt", code: 18, pos: "office" ,width: "25px" },
{ name: "Space", code: 32, pos: "office" ,width: "232px" },
{ name: "Alt", code: 18, pos: "office" ,width: "25px" },
{ name: "Fn", code: 0, pos: "office" ,width: "25px" },
{ name: "Ctrl", code: 17, pos: "office" ,width: "40px" },

];
let keyContainer = document.createElement("div");
keyContainer.classList.add("keyContainer")

let keyLine1 = document.createElement("div");
keyLine1.classList.add("keyLine");
let keyLine2 = document.createElement("div");
keyLine2.classList.add("keyLine");
let keyLine3 = document.createElement("div");
keyLine3.classList.add("keyLine");
let keyLine4 = document.createElement("div");
keyLine4.classList.add("keyLine");
let keyLine5 = document.createElement("div");
keyLine5.classList.add("keyLine");
keyContainer.append( keyLine1, keyLine2, keyLine3, keyLine4, keyLine5)

const renderKey = (keyData, keyLine) => {
    keyLine.innerHTML = "";
    keyData.forEach(data => {
        let keyDiv = document.createElement("div");
        keyDiv.textContent = data.name;
        keyDiv.id = data.code;
        keyDiv.style.width = data.width;
        keyLine.append(keyDiv);

        if ( data.pos === "field") {
            keyDiv.classList.value = ""; // clear key color
            let i = 0;
            while ( i < userCardData.length ) { // userThreeSlot[insData.now_slot] bug
                if (userCardData[i].code === data.code) {
                    if (userCardData[i].class === 1) {
                        keyDiv.classList.add(FighterLV[userCardData[i].level-1]); //  Fighter LV color
                        keyDiv.classList.add("keyFighterLv1")
                    } else if (userCardData[i].class === 2) {
                        keyDiv.classList.add(WizardLV[userCardData[i].level-1]); //  Wizard LV
                        keyDiv.classList.add("keyWizard")
                    } else if (userCardData[i].class === 3) {
                        keyDiv.classList.add(RogueLV[userCardData[i].level-1]); //  Rogue LV
                        keyDiv.classList.add("keyRogue")
                    } else { keyDiv.classList.add("keyCivilian") }
                    break;
                } 
                i++;
            }    
        } else { keyDiv.classList.add("keyOffice") }
        

        keyDiv.classList.add("keycap");

    });
}
const importKey = (app) => {
    app.append( keyContainer);
    renderKey(keyData1, keyLine1);
    renderKey(keyData2, keyLine2);
    renderKey(keyData3, keyLine3);
    renderKey(keyData4, keyLine4);
    renderKey(keyData5, keyLine5);
}
export { importKey, renderKey, 
    keyData1, keyLine1,
    keyData2, keyLine2,
    keyData3, keyLine3,
    keyData4, keyLine4,
    keyData5, keyLine5,
};
const keyDownAnim = (i) => {
    if (typeof i.keyCode!="number" || insData.curr_scene !== "battle") return;
    const key = document.querySelector(`div[id="${i.keyCode}"`);
    key.classList.add("keyDownAnim");
    setTimeout(() => {key.classList.remove("keyDownAnim")}, 100);
}
window.addEventListener('keydown', keyDownAnim);

