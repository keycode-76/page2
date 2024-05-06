// main.js

import { importMenu, slot1_Btn, slot2_Btn, slot3_Btn } from "../import/00_menu/script.js";
import { renderGame } from "../import/00_newGame/script.js";
import { setBackMenuBtn } from "../import/00_setting/script.js";

const startMain = () => { // init main
    const app = document.querySelector("#app");
    importMenu(app);
    // screenfull.request(app)
};
startMain();

slot1_Btn.addEventListener("click", () => {
    app.innerHTML = "";
    renderGame(app);
});
slot2_Btn.addEventListener("click", () => {
    app.innerHTML = "";
    renderGame(app);

});
slot3_Btn.addEventListener("click", () => {
    app.innerHTML = "";
    renderGame(app);
});

setBackMenuBtn.addEventListener("click", () => {
    app.innerHTML = "";
    importMenu(app);
});
window.addEventListener("animationend", () => {
    if (event.animationName === "bossWinAnim" ) { // 打輸
        console.log("you lose! back to lvl 1");
        app.innerHTML = "";
        importMenu(app);
    }
})