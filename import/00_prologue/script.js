// prologue/script.js

import "/import/00_prologue/style.scss" // css
import { btnSD_1 } from "/import/13_sound/script.js"; // sd

// data
import { userThreeSlot } from "../save/script.js";
import { insData } from "/import/10_initData/user_instant.js";
import { boss_1_1, boss_1_2, boss_1_3,
         level_1_1, level_1_2, level_1_3, } from "/import/11_bossData/level_1.js";
import { boss_2_1, boss_2_2, boss_2_3,
         level_2_1, level_2_2, level_2_3, } from "/import/11_bossData/level_2.js";
import { boss_3_1, boss_3_2, boss_3_3,
         level_3_1, level_3_2, level_3_3, } from "/import/11_bossData/level_3.js";
import { boss_4_1, boss_4_2, boss_4_3,
         level_4_1, level_4_2, level_4_3, } from "/import/11_bossData/level_4.js";

const prologueArea = document.createElement("div");
const prolMainDiv = document.createElement("div");
const prolLvlDiv = document.createElement("div");
const prolBounty = document.createElement("div");
const prolBlood = document.createElement("div");
const prolBtnDiv = document.createElement("div");
const prolFightBtn = document.createElement("div");
const prolPassBtn = document.createElement("div");

prolMainDiv.append(prolBounty, prolBlood)
prolBtnDiv.append(prolFightBtn, prolPassBtn)
prologueArea.id = "prologueArea";
prolMainDiv.id = "prolMainDiv";
prolLvlDiv.id = "prolLvlDiv"
prolBounty.id = "prolBounty"
prolBlood.id = "prolBlood";
prolBtnDiv.id = "prolBtnDiv"
prolFightBtn.id = "prolFightBtn"
prolPassBtn.id = "prolPassBtn"
prolFightBtn.textContent = "fighting"
prolPassBtn.textContent = "Pass"
const importPrologue = (app) =>{
    console.log("import prol", insData.now_slot, userThreeSlot[insData.now_slot].currLevel)
    randBoss(userThreeSlot[insData.now_slot].currLevel);
    prolLvlDiv.textContent = "Level. "+userThreeSlot[insData.now_slot].currLevel
    prolBounty.textContent = "Bounty: "+insData.curr_boss.reward
    prolBlood.textContent = "score: "+insData.curr_boss.blood
    prologueArea.append(prolLvlDiv, prolMainDiv, prolBtnDiv);
    return app.appendChild(prologueArea);
}
const lvl_arr1 = [level_1_1, level_1_2, level_1_3];
const lvl_arr2 = [level_2_1, level_2_2, level_2_3];
const lvl_arr3 = [level_3_1, level_3_2, level_3_3];
const lvl_arr4 = [level_4_1, level_4_2, level_4_3];
const bos_arr1 = [boss_1_1, boss_1_2, boss_1_3];
const bos_arr2 = [boss_2_1, boss_2_2, boss_2_3];
const bos_arr3 = [boss_3_1, boss_3_2, boss_3_3];
const bos_arr4 = [boss_4_1, boss_4_2, boss_4_3];
const LVL_ARR = [  0, lvl_arr1, lvl_arr2, lvl_arr3, lvl_arr4 ];
const BOS_ARR = [ 0, bos_arr1, bos_arr2, bos_arr3, bos_arr4 ];

const randBoss = (num) => {
    let randIndex = 0;
    randIndex = Math.floor(Math.random() * lvl_arr1.length);
    let lvl_arr = LVL_ARR[num]
    let bos_arr = BOS_ARR[num]
    insData.boss_code = lvl_arr[randIndex];
    insData.curr_boss = bos_arr[randIndex];
    console.log("RDR boss", bos_arr[randIndex])
} 
prolFightBtn.addEventListener("click", () => {
    prologueArea.classList.value = ""
    prologueArea.classList.add("prolFightFin");
    btnSD_1.play();
})
prolPassBtn.addEventListener("click", () => {
    prologueArea.classList.value = ""
    prologueArea.classList.add("prolPassFin");
    btnSD_1.play();
})
export { importPrologue };