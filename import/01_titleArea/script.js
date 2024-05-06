// titleArea/script.js    

// css
import "/import/01_titleArea/style.scss";
import { btnSD_1 } from "/import/13_sound/script.js"; // sd
import { userThreeSlot } from "../save/script";
import { insData } from "/import/10_initData/user_instant.js";
import { importSkill } from "../02_skillArea/script.js";
import { renderPage1 } from "/import/03_dictionary/script.js";
import { importShop } from "../02_shopArea/script.js";
import { importTreas } from "/import/03_treasureCol/script.js";
import { importDiction } from "/import/03_dictionary/script.js";

const titleArea = document.createElement("label");
const nextLvlBtn = document.createElement("div");
const titShopDiv = document.createElement("div");
const titleLabel = document.createElement("label");
const titShopBtn = document.createElement("div");
const titTreasureBtn = document.createElement("div");
const titBugCollBtn = document.createElement("div");
const titKeyCollBtn = document.createElement("div");
const titDictBtn = document.createElement("div");

titleArea.id = "titleArea";
titleLabel.id = "titleLabel";
nextLvlBtn.id = "nextLvlBtn"
nextLvlBtn.textContent = "NEXT";
titShopDiv.id = "titShopDiv";
titShopBtn.id = "titShopBtn"
titTreasureBtn.id = "titTreasureBtn"
titBugCollBtn.id = "titBugCollBtn"
titKeyCollBtn.id = "titKeyCollBtn"
titDictBtn.id = "titDictBtn"
titTreasureBtn.classList.add("lock_img")
titBugCollBtn.classList.add("lock_img")
titKeyCollBtn.classList.add("lock_img")
// titShopBtn.textContent = "Shop"
// titTreasureBtn.textContent = "Treasure"
// titBugCollBtn.textContent = "Bug Collection"
// titKeyCollBtn.textContent = "Keyboard"
// titDictBtn.textContent = "Dictionary"

const importTitle = (app, num) => {
    if (userThreeSlot[insData.now_slot]) {
        console.log("import tit",num);
        titleLabel.textContent = insData.curr_boss.name;
        nextLvlBtn.style.display = "none"
        titleArea.append(titleLabel, titShopDiv, nextLvlBtn)
        return app.append(titleArea)
    } 
};

nextLvlBtn.addEventListener("click", () => {
    nextLvlBtn.classList.add("shopFin");
    btnSD_1.play();
});
titShopBtn.addEventListener("click", () => {
const middleArea = document.getElementById("middleArea");
    titleLabel.textContent = "Shop";
    middleArea.innerHTML = "";
    importSkill(middleArea);
    importShop(middleArea);
    btnSD_1.play();
});
titTreasureBtn.addEventListener("click", () => {
const middleArea = document.getElementById("middleArea");
    titleLabel.textContent = "Treasure";
    btnSD_1.play();
});
titBugCollBtn.addEventListener("click", () => {
const middleArea = document.getElementById("middleArea");
    titleLabel.textContent = "Bug Collection";
    btnSD_1.play();
});
titKeyCollBtn.addEventListener("click", () => {
const middleArea = document.getElementById("middleArea");
    titleLabel.textContent = "Keyboard";
    btnSD_1.play();
});
titDictBtn.addEventListener("click", () => {
    clickDict();
    renderPage1(0);
    btnSD_1.play();
});
const clickDict = () => {
    const middleArea = document.getElementById("middleArea");
    titleLabel.textContent = "Dictionary";
    middleArea.innerHTML = "";
    importSkill(middleArea);
    importDiction(middleArea);
};
export { importTitle, clickDict };

window.addEventListener("animationend", (event) => { // remove anim
    if (event.animationName === "finBossAnim") { // 切換成商店標題
        titleLabel.textContent = "Shop";
        titShopDiv.append(titShopBtn, titTreasureBtn, titBugCollBtn, titKeyCollBtn, titDictBtn)
        nextLvlBtn.style.display = "block";
    }
    else if (event.animationName === "prolFightFinAnim" ) { // 對戰開始更新標題
        titShopDiv.innerHTML = "";
        titleLabel.textContent = "name: " +insData.curr_boss.name;
        nextLvlBtn.style.display = "none";
    }
});

