// shopArea/script.js

import "/import/02_shopArea/style.scss"; // css
import { slotSD_1, buySD_1, coinSD_1 } from "/import/13_sound/script.js"; // sd
import { userThreeSlot, userCardData } from "../save/script.js"; // data
import { insData } from "/import/10_initData/user_instant.js";
import { mdseShopData } from "/import/12_shopData/mdse_shop.js";
import { renderSkill, keyManSellBtn } from "/import/02_skillArea/script.js";
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
const usergetCoin = document.createElement("div");
const mdseInfoBox = document.createElement("div");
const shopPurchaseBtn = document.createElement("div");

shopContainer.id = "shopContainer"
mdseContainer.id = "mdseContainer"
mdseArea.id = "mdseArea"
shopCounter.id = "shopCounter"
mdseBankArea.id = "mdseBankArea"
mdseInfoArea.id = "mdseInfoArea"
mdseInfoName.id = "mdseInfoName"
bankImg.id = "bankImg"
userMoney.id= "userMoney"
usergetCoin.id = "usergetCoin"
mdseInfoBox.id ="mdseInfoBox"
shopPurchaseBtn.id = "shopPurchaseBtn"
mdseInfoBox.classList.add("scrollbar")
userMoney.textContent = 0;
shopPurchaseBtn.textContent = "Buy"

const importShop = (app) => {  // 有空給一個render
mdseBankArea.append(mdseInfoName, userMoney, usergetCoin, bankImg)
mdseInfoArea.append(mdseInfoBox, shopPurchaseBtn)
shopCounter.append(mdseBankArea, mdseInfoArea)
shopContainer.append(mdseContainer, shopCounter);
    userMoney.textContent = userThreeSlot[insData.now_slot].currMoney;
    usergetCoin.textContent = "+"+insData.key_getCoin;
    usergetCoin.classList.add("getCoin");
    mdseArea.innerHTML = ""
    mdseShopData.forEach((item, index )=> {
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
            slotSD_1.play();
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

const clearClickMdse = () => { // clear focus
    if (!document.getElementsByClassName("clickMdse")) return;
    let mdseClass = document.querySelectorAll(".clickMdse")
    mdseClass.forEach(function(classTarget) {
        classTarget.classList.remove("clickMdse");
    });
};
shopPurchaseBtn.addEventListener("click", () => { // buy button
    let mdseSwxData = mdseShopData[insData.targetMdse_index]
    if (mdseSwxData.price > userThreeSlot[insData.now_slot].currMoney) return;
    userThreeSlot[insData.now_slot].currMoney -= mdseSwxData.price;
    userMoney.textContent = userThreeSlot[insData.now_slot].currMoney;
    renderKeyCap(mdseSwxData);
    renderSkill(insData.curr_key);
    buySD_1.play();
});
keyManSellBtn.addEventListener("click", () => { // 售出裝備 更新錢包
    userMoney.textContent = userThreeSlot[insData.now_slot].currMoney;
});
const renderKeyCap = (item) => { // render keyCap value
    let i = 0;
    while ( i < userCardData.length ) {
        if (userCardData[i].code === insData.curr_key) {
            let equipIndex = userCardData[i].equip.indexOf(0); //equip index
            if(item.name === "Heal") {
                if (userCardData[i].hp[1] > userCardData[i].hp[0])
                { userCardData[i].hp[0] += 1; }
            } else if(item.name === "Experience") {
                if (userCardData[i].xp[1] > userCardData[i].xp[0])
                { userCardData[i].xp[0] += 1; } 
                else { userCardData[i].level += 1; userCardData[i].xp[0] = 0; }
            } else if(item.name === "Fighter") {
                userCardData[i].class = 1;
            } else if(item.name == "Wizard") {
                userCardData[i].class = 2;
            } else if(item.name === "Rogue") {
                userCardData[i].class = 3;
            } else if(item.name === "Sword_1") {
                userCardData[i].equip[equipIndex] = 11; // sword id
            } else if(item.name === "Sword_2") {
                userCardData[i].equip[equipIndex] = 12;
            } else if(item.name === "Sword_3") {
                userCardData[i].equip[equipIndex] = 13;
            } else if(item.name === "Shield_1") {
                userCardData[i].equip[equipIndex] = 4;
            } else if(item.name === "Shield_2") {
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
    console.log("render keycap");
};
window.addEventListener("animationend", (event) => {
    if (event.animationName === "getCoinAnim") { // get Coin
        event.target.classList.remove("getCoin");
        userThreeSlot[insData.now_slot].currMoney += insData.key_getCoin;
        insData.key_getCoin = 0;
        userMoney.textContent = userThreeSlot[insData.now_slot].currMoney;
        mdseBankArea.removeChild(usergetCoin);
        coinSD_1.play();
    }
});
export { importShop };