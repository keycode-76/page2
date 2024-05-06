// menu.js

import "/import/00_menu/style.scss"; // css
import { btnSD_1 } from "/import/13_sound/script.js"; // sd
import { music_1 } from "/import/14_music/script.js"; // music
import { renderBtn } from "/import/tools/button.js";
import { settingBtn } from "/import/00_setting/script.js";
import { userThreeSlot, renderUserData, resetBtn } from "/import/save/script.js";
import { insData } from "/import/10_initData/user_instant.js";

const menuArea = document.createElement("div");
const menuDiv = document.createElement("div");
const menuImgDiv = document.createElement("div");
const menuImg = document.createElement("div");
menuArea.id = "menuArea"
menuDiv.id = "menuDiv"
menuImgDiv.id = "menuImgDiv";
menuImg.id = "menuImg";
menuImgDiv.appendChild(menuImg)
const saveSlotArea = document.createElement("div");
const saveSlotDiv = document.createElement("div");
const saveSlotLabel = document.createElement("label");
const slot1_Btn = renderBtn("X",() => { renderGameSlot(1) });
const slot2_Btn = renderBtn("X",() => { renderGameSlot(2) });
const slot3_Btn = renderBtn("X",() => { renderGameSlot(3) });
const slotDel1_Btn = renderBtn("", () => { delGameSlot(1) });
const slotDel2_Btn = renderBtn("", () => { delGameSlot(2) });
const slotDel3_Btn = renderBtn("", () => { delGameSlot(3) });
slotDel1_Btn.classList.add("slotDel_btn");
slotDel2_Btn.classList.add("slotDel_btn");
slotDel3_Btn.classList.add("slotDel_btn");
saveSlotDiv.id = "saveSlotDiv";
saveSlotLabel.id = "saveSlotLabel"
saveSlotArea.classList.add("overlay");
saveSlotDiv.classList.add("setDivBox");
saveSlotLabel.textContent = "- Load -";
const saveSlotBackBtn = renderBtn("Back", () => hideSaveSlots(saveSlotArea));

const importMenu = (app) => {
    insData.curr_scene = "menu";
    menuDiv.innerHTML = "";
    const startBtn = renderBtn("Start", () => showSaveSlots(menuArea));
    const quitBtn = renderBtn("Quit", () => exitGame());
    menuDiv.append(startBtn, settingBtn, quitBtn);
    menuArea.append(menuImgDiv, menuDiv)
    music_1.play();
    return app.appendChild(menuArea)
};
export { importMenu, slot1_Btn, slot2_Btn, slot3_Btn };

const renderThreeSlot = () => {
    saveSlotArea.innerHTML = "";
    saveSlotDiv.innerHTML = "";
    saveSlotDiv.appendChild(saveSlotLabel);
    // console.log(userThreeSlot);
    userThreeSlot.forEach((indieSlot, index) => {
        if ( index === 0 ) return;
        const slotDiv = document.createElement("div");
        const slotName = document.createElement("div");
        slotDiv.classList.add("slotDiv");
        slotName.classList.add("slot_btn");
        slotName.textContent = indieSlot.slotName;
        slotDiv.appendChild(slotName);
        if (indieSlot.slotName !== "New Game") {
            const slotInfo = document.createElement("div");
            const slotCHAL = document.createElement("div");
            const slotGrade = document.createElement("div");
            const slotMoney = document.createElement("div");
            const slotLevel = document.createElement("div");
            const slotDel_Btn = renderBtn("X", () => { delGameSlot(index) });
            slotInfo.classList.add("slotInfo");
            slotCHAL.classList.add("slotCHAL");            
            slotGrade.classList.add("slotGrade");
            slotMoney.classList.add("slotMoney");
            slotLevel.classList.add("slotLevel");
            slotDel_Btn.classList.add("slotDel_btn");
            slotCHAL.innerHTML = `<h4>challenge time</h4>${indieSlot.challengeTime}`
            slotGrade.innerHTML = `<h4>keyboard grade</h4>${indieSlot.boardGrade}`;
            slotMoney.innerHTML = `<h4>money</h4>${indieSlot.currMoney}`;
            slotLevel.innerHTML = `<h4>level</h4>${indieSlot.currLevel}`;
            slotInfo.append(slotCHAL, slotGrade, slotMoney, slotLevel);
            slotName.appendChild(slotInfo);
            slotDiv.appendChild(slotDel_Btn);
        }
        saveSlotDiv.appendChild(slotDiv);
        saveSlotArea.appendChild(saveSlotDiv);
        // return saveSlotArea;
        slotName.addEventListener("click", ()=> {
            if(index === 1) {
                slot1_Btn.click();
            } else if(index === 2) {
                slot2_Btn.click();
            } else if(index === 3) {
                slot3_Btn.click();
            }
        })
    });
    saveSlotDiv.appendChild(saveSlotBackBtn);
};

const showSaveSlots = (menuDiv) => {
    menuDiv.appendChild(saveSlotArea);
    renderThreeSlot();
    btnSD_1.play();
};
const hideSaveSlots = () => {
    menuArea.removeChild(saveSlotArea);
    btnSD_1.play();
};
const renderGameSlot = ( num ) => {
    insData.now_slot = num;
    renderUserData(num); //init save
    if (userThreeSlot[num].slotName === "New Game") { // init
        userThreeSlot[num].challengeTime = 0;
        userThreeSlot[num].boardGrade = 0;
        userThreeSlot[num].currMoney = 200;
        userThreeSlot[num].currLevel = 0;
        userThreeSlot[num].treasureCol = 0;
        userThreeSlot[num].bossCol = 0;
    }
    userThreeSlot[num].slotName = ("data_"+num);
    menuArea.removeChild(saveSlotArea);
    btnSD_1.play();
    music_1.pause();
};
const delGameSlot = ( num ) => {
    insData.now_slot = num;
    userThreeSlot[num].slotName = "New Game";
    userThreeSlot[num].challengeTime = 0;
    userThreeSlot[num].boardGrade = 0;
    userThreeSlot[num].currMoney = 200;
    userThreeSlot[num].currLevel = 0;
    resetBtn.click();
    renderThreeSlot(); // render slot
    btnSD_1.play();
};
const exitGame = () => {
    // btnSD_1.play();
    window.close();
};

