// battle/script.js

// css
import "/import/02_battleArea/style.scss";
import { btnSD_1, hitSD_1, winSD_1, loseSD_1 } from "/import/13_sound/script.js"; // sd
import { userThreeSlot, userCardData } from "../save/script.js";// data
import { insData } from "/import/10_initData/user_instant.js";
    
const OFF_IMG0 = [ // 0沒有階級 看是否要處理
  "off_0_1", "off_0_2", "off_0_3"
];
const OFF_IMG1 = [
  "off_1_1", "off_1_2", "off_1_3",
];
const OFF_IMG2 = [
  "off_2_1", "off_2_2", "off_2_3",
];
const OFF_IMG3 = [
  "off_3_1", "off_3_2", "off_3_3",
];

// boss
let boss_blood = 0;
let boss_reward = 0;
let scoreNum = 0;
let coinNum = 0;

//card
const battleDiv = document.createElement("div");
const bossContainer = document.createElement("div");
const bossTitle = document.createElement("div");
const bossDiv = document.createElement("div");
const bossImg = document.createElement("div");
const bossBloodDiv = document.createElement("div");
const bossBloodLabel = document.createElement("label");
const attackArea = document.createElement("div");
const scoreDiv = document.createElement("div");
const scoreLabel = document.createElement("div");
const cardContainer = document.createElement("div");
const userWin = document.createElement("div");
const userLose = document.createElement("div");

userWin.textContent = "K.O";
userLose.textContent = "You Lose"
battleDiv.id = "battleDiv";
bossContainer.id = "bossContainer";
bossTitle.id = "bossTitle";
bossDiv.id = "bossDiv";
bossImg.id = "bossImg";
attackArea.id = "attackArea";
scoreDiv.id = "scoreDiv";
cardContainer.id = "cardContainer";

bossBloodDiv.classList.add("bossBloodDiv");
bossBloodLabel.classList.add("bossBloodLabel");
// cardContainer.classList.add("scrollbar");

const importBattle = (app) => {
    scoreNum = 0; // 會紀錄到shop的數據 要歸零
    boss_blood = insData.curr_boss.blood;
    boss_reward = insData.curr_boss.reward;
    attackKeycode = [];
    cardContainer.innerHTML = "";
    battleDiv.innerHTML = ""
    userWin.classList.value = "";
    userWin.className = "userWin";
    userLose.classList.value = "";
    userLose.className = "userLose";
    bossImg.classList.value = "";
    bossImg.classList.add(insData.curr_boss.id);
    
    bossBloodDiv.appendChild(bossBloodLabel)
    bossBloodLabel.textContent = boss_blood;
    scoreLabel.textContent = "0";
    scoreDiv.appendChild(scoreLabel)
    bossDiv.append(userLose, userWin, bossImg);
    bossContainer.append(bossDiv, bossBloodDiv);
    attackArea.append(scoreDiv, cardContainer)
    battleDiv.append(bossContainer, attackArea);
    app.append(battleDiv);
    console.log("import battle");
};
export { importBattle };

let attackKeycode = [];
const importCard = (key) => { // attact card
  if ( insData.curr_scene !== "battle" || typeof key.keyCode !== "number") return;
  let i = 0;
  while (i < userCardData.length) {
    if (userCardData[i].code === key.keyCode) {
      attackKeycode.push(key.keyCode);
      const cardOff = document.createElement("label");
      const cardDiv = document.createElement("div");
      cardDiv.classList.value = "";
      cardDiv.className = "cardDiv fadeIn";
      if (userCardData[i].class === 1) {
        cardDiv.classList.add(OFF_IMG1[userCardData[i].level-1]); // off color
      } else if (userCardData[i].class === 2) {
        cardDiv.classList.add(OFF_IMG2[userCardData[i].level-1]);
      } else if (userCardData[i].class === 3) {
        cardDiv.classList.add(OFF_IMG3[userCardData[i].level-1]);
      } else if (userCardData[i].class === 4) {
        cardDiv.classList.add(OFF_IMG2[userCardData[i].level-1]);
      } else {
        cardDiv.classList.add(OFF_IMG0[userCardData[i].level-1]);
      }
      cardOff.classList.add("cardOff");
      cardDiv.textContent = userCardData[i].name; // name
      cardOff.textContent = userCardData[i].off; // off
      scoreNum += userCardData[i].off; //sum
      scoreNum *= userCardData[i].mp; //sum
      coinNum += userCardData[i].coin;
      cardDiv.appendChild(cardOff);
      cardContainer.appendChild(cardDiv);
      break;
    }
    i++;
  }
  if (key.keyCode === 8) { // clear attact card
    cardContainer.innerHTML = "";
    scoreNum = 0;
    coinNum = 0;
  }
  scoreLabel.textContent = scoreNum; // score sum
  
};

//boss_lvl_1
window.addEventListener('keydown', importCard);
window.addEventListener("animationend", (event) => {
  if ( insData.now_slot === 0 || userThreeSlot[insData.now_slot].currScene === "shop" ) return;
  if (event.animationName === "finLabelAnim") { // 完成一行字
      event.target.classList.remove("finLabel");
      insData.key_battle = insData.key_battle.concat(attackKeycode);
      attackKeycode = [];
      cardContainer.innerHTML = "";
      console.log(scoreNum, boss_blood)
      boss_blood -= scoreNum; 
      scoreLabel.textContent = scoreNum; //sum
      insData.key_getCoin += coinNum;
      if (boss_blood < 1 && userThreeSlot[insData.now_slot].currLevel != 0) { // finish boss
        userWin.classList.add("KO");
        bossImg.classList.add("finBoss");
        bossBloodLabel.textContent = 0;
        winSD_1.play();
      }
      scoreNum = 0;
      scoreLabel.classList.add("attactScore")
  } 
  else if (event.animationName === "attactScoreAnim") { // 分數攻擊 
    event.target.classList.remove("attactScore");
    scoreLabel.textContent = scoreNum; // score sum to 0
    bossBloodLabel.textContent = boss_blood;
    hitSD_1.play();
  }
  else if (event.animationName === "finBossAnim") { // 打贏
    event.target.classList.remove("finBoss");
    userThreeSlot[insData.now_slot].currLevel += 1; 
    boss_blood = insData.curr_boss.blood;
    userThreeSlot[insData.now_slot].currMoney += boss_reward;
    bossImg.classList.value = "";
    scoreNum = 0;
  }
  else if (event.animationName === "lvlFinAnim") { // 打輸
    if (insData.codeLength_is0 && boss_blood>0) {
      userLose.classList.add("LOSE");
      bossImg.classList.add("bossWin");
      console.log("battle lose",insData.codeLength_is0);
      loseSD_1.play();
    }
    if (userThreeSlot[insData.now_slot].currLevel >= BOSS_ARR.length) return;
    boss_blood = BOSS_ARR[userThreeSlot[insData.now_slot].currLevel].blood; // 重設歸零的boss血量
  } 
  // scoreNum = 0;
});