// hint/script.js

import "/import/00_hint/style.scss";
import { btnSD_1, hintSD_1 } from "/import/13_sound/script.js"; // sd
import { insData } from "/import/10_initData/user_instant.js"; // data
import { hintTextData } from "/import/10_initData/text_hint.js"
const hintArea = document.createElement("div");
const hintDiv = document.createElement("div");
const hintInfo = document.createElement("div");
const hintMove = document.createElement("div");
const hint_img1 = document.createElement("div");
const hint_img2 = document.createElement("div");

hintDiv.id = "hintDiv"
hintArea.id = "hintArea";
hintInfo.id = "hintInfo";
hintMove.id = "hintMove";
hint_img1.id = "hint_img1";
hint_img2.id = "hint_img2";

// hintArea.appendChild(hintDiv);
const importHint = (app) => {
    return app.appendChild(hintArea);
};

// { move: "", info: "Choosing a class for a keycap."},
// { move: "", info: "Upgrade a keycap to level two."},
// { move: "", info: "Grade the keyboard up a level."},
const renderHint = () => {
    hintSD_1.play();
    hintInfo.textContent = hintTextData[insData.now_hint].info;
    hintDiv.append(hintInfo, hintMove);
    hintMove.textContent = hintTextData[insData.now_hint].move;
    if (insData.now_hint === 0) {
        // hintArea.innerHTML = "";
        hintArea.appendChild(hint_img1);
        hintArea.appendChild(hintDiv);
    } else if (insData.now_hint === 1) {
        hintArea.innerHTML = "";
        hintArea.appendChild(hint_img2);
        hintArea.appendChild(hintDiv);
    } else if (insData.now_hint === 2) {
        hintArea.innerHTML = "";
        hintDiv.classList.value = "";
        hintArea.appendChild(hintDiv);
        hintDiv.classList.add("hint2");
    } else if (insData.now_hint === 3) {
        hintDiv.classList.value = "";
        hintArea.appendChild(hintDiv);
        hintDiv.classList.add("hint3");
    } else if (insData.now_hint === 4) {
        hintDiv.classList.value = "";
        hintArea.appendChild(hintDiv);
        hintDiv.classList.add("hint4");
    } else if (insData.now_hint === 5) {
        hintDiv.classList.value = "";
        hintArea.appendChild(hintDiv);
        hintDiv.classList.add("hint5");
    } else if (insData.now_hint === 6) {
        hintDiv.classList.value = "";
        hintArea.appendChild(hintDiv);
        hintDiv.classList.add("hint6");
    } else if (insData.now_hint === 7) {
        hintDiv.classList.value = "";
        hintArea.appendChild(hintDiv);
        hintDiv.classList.add("hint7");
    } else if (insData.now_hint === 8) {
        hintDiv.classList.value = "";
        hintArea.appendChild(hintDiv);
        hintDiv.classList.add("hint8");
        insData.now_hint = 9;
    } else if (insData.now_hint === 9) {
        hintArea.innerHTML = "";
        hintDiv.classList.value = "";
        hintArea.appendChild(hintDiv);
        hintDiv.classList.add("hint9");
    }else if (insData.now_hint === 10) {
        hintDiv.classList.value = "";
        hintArea.appendChild(hintDiv);
        hintDiv.classList.add("hint10");
    }else if (insData.now_hint === 11) {
        hintDiv.classList.value = "";
        hintArea.appendChild(hintDiv);
        hintDiv.classList.add("hint11");
    }
    // console.log("hint", insData.now_hint)
};

export { importHint, renderHint };