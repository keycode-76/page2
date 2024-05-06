// 13_sound data
import btn1File from "/assets/sound/click/btn_2.mp3";
import slot1File from "/assets/sound/click/slot_1.wav";
import hint1File from "/assets/sound/switch/hint_1.wav";
import hit1File from "/assets/sound/battle/hit_1.mp3";
import lose1File from "/assets/sound/lose/lose_1.wav";
import win1File from "/assets/sound/win/win_1.wav";
import buy1File from "/assets/sound/shop/buy_1.mp3";
import coin1File from "/assets/sound/shop/coin_2.wav";
import info1File from "/assets/sound/click/info_2.wav";
import lock1File from "/assets/sound/error/lock_1.wav";
const btnSD_1 = new Audio(btn1File);
const slotSD_1 = new Audio(slot1File);
const hintSD_1 = new Audio(hint1File);
const hitSD_1 = new Audio(hit1File);
const loseSD_1 = new Audio(lose1File);
const winSD_1 = new Audio(win1File);
const buySD_1 = new Audio(buy1File);
const coinSD_1 = new Audio(coin1File);
const infoSD_1 = new Audio(info1File);
const lockSD_1 = new Audio(lock1File);
btnSD_1.volume = 0.2;
hitSD_1.volume = 0.5;

export { btnSD_1, slotSD_1, hintSD_1, infoSD_1,
    buySD_1, coinSD_1, lockSD_1,
    hitSD_1, winSD_1, loseSD_1
 }