// skillArea/script.js
import "/import/02_skillArea/style.scss";
import { btnSD_1, slotSD_1, buySD_1, infoSD_1 } from "/import/13_sound/script.js"; // sd
import { userThreeSlot, userCardData } from "../save/script"; // data
import { renderPage1 } from "/import/03_dictionary/script.js";
import { insData } from "/import/10_initData/user_instant.js";
import { mdseShopData } from "/import/12_shopData/mdse_shop.js";
import { renderHint } from "../00_hint/script"; // hint
const CLASS_0 = ["key_0_1", "key_1_2", "key_1_3", "key_1_4"];
const CLASS_1 = ["key_1_1", "key_1_2", "key_1_3", "key_1_4"];
const CLASS_2 = ["key_2_1", "key_2_2", "key_2_3"];
const CLASS_3 = ["key_3_1", "key_3_2", "key_3_3"];
const MDSE_IMG = [
    "mdse_1_1", "mdse_1_2", "mdse_1_3", "mdse_1_4", "mdse_1_5", "mdse_1_6",
    "mdse_2_1", "mdse_2_2", "mdse_2_3", "mdse_2_4", "mdse_2_5", "mdse_2_6",
];
const skillContainer = document.createElement("div");

const keyHeadDiv = document.createElement("div");
const keyManNameDiv = document.createElement("div");
const keyManNameIcon = document.createElement("div");
const keyManNameLabel = document.createElement("div");
const keyManLvl = document.createElement("div");
const keyManClassDiv = document.createElement("div");
const keyManClassName = document.createElement("div");
const keyManClassIcon = document.createElement("div");
const keyManMiddle = document.createElement("div");
const keyManImg = document.createElement("div");

const keyManValDiv = document.createElement("div");
const keyManXpDiv = document.createElement("div");
const keyManHpDiv = document.createElement("div");
const keyManMpDiv = document.createElement("div");
const keyManOffDiv = document.createElement("div");
// const keyManDefDiv = document.createElement("div");
const keyManCoinDiv = document.createElement("div");
const keyManXpIcon = document.createElement("div");
const keyManHpIcon = document.createElement("div");
const keyManMpIcon = document.createElement("div");
const keyManOffIcon = document.createElement("div");
// const keyManDefIcon = document.createElement("div");
const keyManCoinIcon = document.createElement("div");
const keyManXpValue = document.createElement("div");
const keyManHpValue = document.createElement("div");
const keyManMpValue = document.createElement("div");
const keyManOffValue = document.createElement("div");
// const keyManDefValue = document.createElement("div");
const keyManCoinValue = document.createElement("div");

const keyManEquipArea = document.createElement("div");
const keyManEquipDiv = document.createElement("div");
const keyManSellDiv = document.createElement("div");
const keyManInfo = document.createElement("div");
const keyManSellBtn = document.createElement("button");

skillContainer.id = "skillContainer";
keyHeadDiv.id = "keyHeadDiv";
keyManNameDiv.id = "keyManNameDiv";
keyManLvl.id = "keyManLvl"
keyManClassDiv.id = "keyManClassDiv";
keyManClassName.id = "keyManClassName";
keyManClassIcon.id = "keyManClassIcon";
keyManMiddle.id = "keyManMiddle"
keyManValDiv.id = "keyManValDiv"
keyManImg.id = "keyManImg"
keyManXpDiv.classList.add("keyManValDiv")
keyManHpDiv.classList.add("keyManValDiv")
keyManMpDiv.classList.add("keyManValDiv")
keyManOffDiv.classList.add("keyManValDiv")
keyManXpDiv.textContent = "XP"
keyManHpDiv.textContent = "HP"
keyManMpDiv.textContent = "MP"
keyManOffDiv.textContent = "OFF"
keyManCoinDiv.textContent = "Coin"
keyManSellBtn.textContent = "Sell"
// keyManDefDiv.classList.add("keyManValDiv")
keyManCoinDiv.className = "keyManValDiv coin"
keyManXpIcon.className = "keyManValIcon xp"
keyManHpIcon.className = "keyManValIcon hp"
keyManMpIcon.className = "keyManValIcon mp"
keyManOffIcon.className = "keyManValIcon off"
// keyManDefIcon.classList.add("keyManValIcon")
keyManCoinIcon.classList.add("keyManValIcon")
keyManXpValue.classList.add("keyManValValue")
keyManHpValue.classList.add("keyManValValue")
keyManMpValue.classList.add("keyManValValue")
keyManOffValue.classList.add("keyManValValue")
// keyManDefValue.classList.add("keyManValValue")
keyManCoinValue.classList.add("keyManValValue")
keyManEquipArea.id = "keyManEquipArea"
keyManEquipDiv.id = "keyManEquipDiv"
keyManSellDiv.id = "keyManSellDiv"
keyManInfo.id = "keyManInfo"
keyManSellBtn.id = "keyManSellBtn"

const renderOutfit = (num) => { // render outfit
    keyManNameDiv.append(keyManNameIcon, keyManNameLabel);
    keyHeadDiv.append(keyManNameDiv, keyManLvl);
    keyManClassDiv.append(keyManClassIcon, keyManClassName)
    keyManXpDiv.append(keyManXpIcon, keyManXpValue);
    keyManHpDiv.append(keyManHpIcon, keyManHpValue);
    keyManOffDiv.append(keyManOffIcon, keyManOffValue);
    if (num === 1) {
        keyManMpDiv.append(keyManMpIcon, keyManMpValue);
        keyManValDiv.innerHTML = "";
        keyManValDiv.append(keyManXpDiv, keyManHpDiv, keyManOffDiv, keyManMpDiv);
    } else if (num === 3) {
        keyManCoinDiv.append(keyManCoinIcon, keyManCoinValue);
        keyManValDiv.innerHTML = "";
        keyManValDiv.append(keyManXpDiv, keyManHpDiv, keyManOffDiv, keyManCoinDiv);
    }
    keyManMiddle.append(keyManImg, keyManValDiv);
    keyManSellDiv.append(keyManInfo, keyManSellBtn);
    keyManEquipArea.append(keyManEquipDiv, keyManSellDiv);
    skillContainer.append(
        keyHeadDiv,
        keyManClassDiv,
        keyManMiddle,
        keyManEquipArea,
    );
};

const importSkill = (app) => {
    return app.appendChild(skillContainer)
};

const renderSkill = (inputCode) => {
    if (insData.now_slot === 0) return;
    if (typeof inputCode != "number") return;
    let i = 0;
    while (i < userCardData.length) {
        if (userCardData[i].code === inputCode) {
            insData.targetKey_index = i;
            keyManNameDiv.textContent = userCardData[i].name // 鍵帽名稱
            keyManImg.classList.value = "";
            userCardData[i].off = 1;
            userCardData[i].mp = 1;
            userCardData[i].coin = 0;
            skillContainer.innerHTML = "";
            if (userCardData[i].class === 1) {
                renderOutfit(1);
                keyManClassName.textContent = "Fighter";
                keyManImg.classList.add(CLASS_1[userCardData[i].level - 1]);
                userCardData[i].off = 2;
                if (insData.now_hint === 9) {
                    insData.now_hint = 10;
                    renderHint();
                }
            } else if (userCardData[i].class === 2) {
                renderOutfit(1);
                keyManClassName.textContent = "Wizard";
                keyManImg.classList.add(CLASS_2[userCardData[i].level - 1]);
                userCardData[i].mp = 1.1;
            } else if (userCardData[i].class === 3) {
                renderOutfit(3);
                keyManClassName.textContent = "Rogue";
                keyManImg.classList.add(CLASS_3[userCardData[i].level - 1]);
                userCardData[i].coin = 1;
            } else if (userCardData[i].class === 4) {
                renderOutfit(1);
                keyManClassName.textContent = "Druid";
            } else {
                renderOutfit(1);
                keyManClassName.textContent = "Civilian";
                keyManImg.classList.add(CLASS_0[0]);
            }
            keyManEquipDiv.innerHTML = "";
            keyManInfo.textContent = "none"; // equip info text
            for (let x = 0; x < userCardData[i].equip.length; x++) { // equip
                let equipLog = document.createElement("div");
                equipLog.classList.value = "";
                equipLog.classList.add("equipLog");
                equipLog.textContent = "none";
                keyManEquipDiv.appendChild(equipLog)
                if (userCardData[i].equip[x] === 11) { // sword id
                    userCardData[i].off += 1;
                    equipLog.classList.add(MDSE_IMG[5]);
                    equipLog.textContent = mdseShopData[6].info;
                } else if (userCardData[i].equip[x] === 12) {
                    userCardData[i].off += 2;
                    equipLog.classList.add(MDSE_IMG[6]);
                    equipLog.textContent = mdseShopData[7].info;
                } else if (userCardData[i].equip[x] === 13) {
                    userCardData[i].off += 3;
                    equipLog.classList.add(MDSE_IMG[7]);
                    equipLog.textContent = mdseShopData[8].info;
                } 
                // else if (userCardData[i].equip[x] === 4) {
                //     userCardData[i].def += 1;
                //     equipLog.classList.add(MDSE_IMG[9]);
                //     equipLog.textContent = mdseShopData[9].info;
                // } else if (userCardData[i].equip[x] === 5) {
                //     userCardData[i].def += 2;
                //     equipLog.classList.add(MDSE_IMG[10]);
                //     equipLog.textContent = mdseShopData[10].info;
                // }
                equipLog.addEventListener("click", () => {
                    clearClickEquip();
                    insData.targetEquip_index = x
                    if (equipLog.textContent === "none") {
                        keyManInfo.textContent = "none";
                    } else {
                        keyManInfo.textContent = equipLog.textContent;
                    }
                    equipLog.classList.add("clickEquip");
                    slotSD_1.play();
                });
                if (x === 0) { // target to first
                    equipLog.click();
                }
            };
            keyManLvl.textContent = userCardData[i].level // 鍵帽等級文字
            keyManHpValue.textContent = userCardData[i].hp[0] + " /" + userCardData[i].hp[1]
            keyManXpValue.textContent = userCardData[i].xp[0] + " /" + userCardData[i].xp[1]
            keyManMpValue.textContent = userCardData[i].mp
            keyManOffValue.textContent = userCardData[i].off
            // keyManDefValue.textContent = userCardData[i].def
            keyManCoinValue.textContent = userCardData[i].coin
            break;
        } else { i++; }
    }
    console.log("render skill");
};

const clearClickEquip = () => {
    if (!document.getElementsByClassName("clickEquip")) return;
    let equipClass = document.querySelectorAll(".clickEquip")
    equipClass.forEach(function (classTarget) {
        classTarget.classList.remove("clickEquip");
    });
};

keyManSellBtn.addEventListener("click", () => { // 賣掉裝備
    let copyEquipCode = userCardData[insData.targetKey_index].equip[insData.targetEquip_index];
    if (copyEquipCode === 11) { //  偵測是哪一個商品
        insData.targetMdse_index = 5; // 商品序列 在陣列中的位置
        userCardData[insData.targetKey_index].off -= 1;
    } else if (copyEquipCode === 12) {
        insData.targetMdse_index = 6;
        userCardData[insData.targetKey_index].off -= 2;
    } else if (copyEquipCode === 13) {
        insData.targetMdse_index = 7;
        userCardData[insData.targetKey_index].off -= 3;
    } 
    // else if (copyEquipCode === 4) {
    //     userCardData[insData.targetKey_index].def -= 1;
    // } else if (copyEquipCode === 5) {
    //     userCardData[insData.targetKey_index].def -= 2;
    // } 
    if (copyEquipCode !== 0) { // 半價售出
        let copyMdseData = mdseShopData[insData.targetMdse_index];
        userThreeSlot[insData.now_slot].currMoney += copyMdseData.price/2; 
    }
    userCardData[insData.targetKey_index].equip[insData.targetEquip_index] = 0;
    renderSkill(userCardData[insData.targetKey_index].code); //再跑一次這隻鍵帽的數據
    buySD_1.play();
});
const nowKey = (key) => {
    if (insData.curr_scene !== "shop" ) return;
    console.log("key down", insData.curr_key)
    insData.curr_key = key.keyCode
    renderSkill(insData.curr_key)
};

keyManXpDiv.addEventListener("click", () => { // click to dictionary
    renderPage1(0);
    infoSD_1.play();
})
keyManHpDiv.addEventListener("click", () => {
    renderPage1(1);
    infoSD_1.play();
})
keyManOffDiv.addEventListener("click", () => {
    renderPage1(2);
    infoSD_1.play();
})
keyManMpDiv.addEventListener("click", () => {
    renderPage1(3);
    infoSD_1.play();
})
keyManCoinDiv.addEventListener("click", () => {
    renderPage1(4);
    infoSD_1.play();
})


export { importSkill, renderSkill, keyManSellBtn };
window.addEventListener('keydown', nowKey);
