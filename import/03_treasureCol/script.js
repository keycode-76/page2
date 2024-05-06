// treasure Collect/script.js
import "/import/03_treasureCol/style.scss";
// save
import { userThreeSlot, userCardData } from "../save/script.js";
import { insData } from "/import/10_initData/user_instant.js";
import { treasureData } from "/import/12_shopData/mdse_treasure.js";
import { renderSkill } from "/import/02_skillArea/script.js";
import { renderKey, 
    keyData1, keyLine1,
    keyData2, keyLine2,
    keyData3, keyLine3,
    keyData4, keyLine4,
    keyData5, keyLine5,
} from "/import/04_keyboardArea/script.js"
const MDSE_IMG = [ 
    "mdse_1_1", "mdse_1_2", "mdse_1_3", "mdse_1_4", "mdse_1_5", "mdse_1_6",
    "mdse_2_1", "mdse_2_2", "mdse_2_3", "mdse_2_4", "mdse_2_5", "mdse_2_6",
];

const shopContainer = document.createElement("div");
const mdseContainer = document.createElement("div");
const mdseArea = document.createElement("div");

const shopCounter = document.createElement("div");
const mdseBankArea = document.createElement("div");
const mdseInfoArea = document.createElement("div");
const mdseInfoName = document.createElement("div");
const bankImg = document.createElement("div");
const userMoney = document.createElement("div");
const mdseInfoBox = document.createElement("div");
const treasBuyBtn = document.createElement("div");

shopContainer.id = "shopContainer"
mdseContainer.id = "mdseContainer"
mdseArea.id = "mdseArea"
shopCounter.id = "shopCounter"
mdseBankArea.id = "mdseBankArea"
mdseInfoArea.id = "mdseInfoArea"
mdseInfoName.id = "mdseInfoName"
bankImg.id = "bankImg"
userMoney.id= "userMoney"
mdseInfoBox.id ="mdseInfoBox"
treasBuyBtn.id = "treasBuyBtn"
mdseInfoBox.classList.add("scrollbar")
userMoney.textContent = 0;
treasBuyBtn.textContent = "Buy"
mdseBankArea.append(mdseInfoName, userMoney, bankImg)
mdseInfoArea.append(mdseInfoBox, treasBuyBtn)
shopCounter.append(mdseBankArea, mdseInfoArea)
shopContainer.append(mdseContainer, shopCounter);

const importTreas = (app) => {
    userMoney.textContent = userThreeSlot[insData.now_slot].currMoney
    mdseArea.innerHTML = ""
    treasureData.forEach((item, index )=> {
        const mdseItem = document.createElement("div");
        const mdseName = document.createElement("div");
        const mdseImg = document.createElement("div");
        const mdsePrice = document.createElement("div");
        mdseItem.append( mdseName, mdseImg, mdsePrice );
        mdseItem.classList.add("mdseItem");
        mdseName.classList.add("mdseName");
        mdseImg.classList.value = "";
        mdseImg.classList.add("mdseImg");
        mdseImg.classList.add(MDSE_IMG[index]);
        mdsePrice.classList.add("mdsePrice");
        mdseName.textContent = item.name;
        mdsePrice.textContent = (item.price).toString();
        mdseArea.appendChild(mdseItem);
        mdseContainer.appendChild(mdseArea)

        mdseItem.addEventListener("click", () => {
            clearClickMdse();
            insData.targetMdse_index = index;
            mdseInfoName.textContent = item.name;
            mdseInfoBox.textContent = item.info;
            mdseImg.classList.add("clickMdse");
        });
        if (index === 0) { // target to first
            mdseItem.click();
        }
    });
    if (insData.key_battle != []) {
        for(let i=0;i<userCardData.length;i++) {
            for (let x=0;x<insData.key_battle.length;x++) {
                if (insData.key_battle[x] === userCardData[i].code) {
                    userCardData[i].xp[0] += 1;
                    if (userCardData[i].xp[0] >= userCardData[i].xp[1])
                    { userCardData[i].level += 1; userCardData[i].xp[0] = 0; } 
                }
            }
        }
        insData.key_battle = [];
    }
    console.log("import shop")
    return app.appendChild(shopContainer);    
};

const clearClickMdse = () => {
    if (!document.getElementsByClassName("clickMdse")) return;
    let mdseClass = document.querySelectorAll(".clickMdse")
    mdseClass.forEach(function(classTarget) {
        classTarget.classList.remove("clickMdse");
    });
};

treasBuyBtn.addEventListener("click", () => { // buy button
    let mdseSwxData = treasureData[insData.targetMdse_index]
    if (mdseSwxData.price > userThreeSlot[insData.now_slot].currMoney) return;
    userThreeSlot[insData.now_slot].currMoney -= mdseSwxData.price;
    userMoney.textContent = userThreeSlot[insData.now_slot].currMoney;
    renderKeyCap(mdseSwxData);
    renderSkill(insData.curr_key);
});

const renderKeyCap = (item) => {
    let i = 0;
    while ( i < userCardData.length ) {
        if (userCardData[i].code === insData.curr_key) {
            let equipIndex = userCardData[i].equip.indexOf(0); //equip index
            if(item.name === "sword_1") {
                userCardData[i].equip[equipIndex] = 1;
            } else if(item.name === "sword_2") {
                userCardData[i].equip[equipIndex] = 2;
            } else if(item.name === "sword_3") {
                userCardData[i].equip[equipIndex] = 3;
            } else if(item.name === "shield_1") {
                userCardData[i].equip[equipIndex] = 4;
            } else if(item.name === "shield_2") {
                userCardData[i].equip[equipIndex] = 5;
            } else if(item.name === "shield_3") {
                userCardData[i].equip[equipIndex] = 5;
            }
            break;
        } else { i++; }
    }
    renderSkill(insData.curr_key);
    renderKey( keyData1, keyLine1 );
    renderKey(keyData2, keyLine2);
    renderKey(keyData3, keyLine3);
    renderKey(keyData4, keyLine4);
    renderKey(keyData5, keyLine5);
    // console.log("render keycap");
};

export { importTreas };