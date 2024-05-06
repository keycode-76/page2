// codingArea/script
import "/import/02_codingArea/style.scss"
import { btnSD_1 } from "/import/13_sound/script.js"; // sd
import { userThreeSlot } from "../save/script.js"; // data
import { insData } from "/import/10_initData/user_instant.js";

const codeAreaDiv = document.createElement("div");
const labelContainer = document.createElement("div");
const codingInput = document.createElement("input");
const lvlComText = document.createElement("label");
let lvlCom = false;
codeAreaDiv.id = "codeAreaDiv"
labelContainer.id = "labelContainer"
codingInput.id = "codingInput"
codingInput.setAttribute("autocomplete", "off");
codingInput.setAttribute("type", "text");
lvlComText.id = "lvlComText"
lvlComText.textContent = "" //Export Complete!

const totalLevel = 5; // 關卡總數不知放哪 先放這
const renderCode = (level) => {
    insData.codeLength_is0 = false;
    if (userThreeSlot[insData.now_slot].currLevel >= totalLevel) {return}
    labelContainer.innerHTML = "";
    lvlCom = level.every(item => item.done);
    if (lvlCom) {
        insData.codeLength_is0 = true;
        lvlComText.classList.add("lvlFin");
        return labelContainer.appendChild(lvlComText);
    }
    let labelDelayNum = 0;

    level.forEach((data, index) => { // render code
        if (data.done || labelContainer.childElementCount >= 5) { return }
        const codeLabelDiv = document.createElement("label"); // element
        const codeLabel = document.createElement("label"); // element
        codeLabelDiv.className = "codeLabelDiv";
        codeLabel.className = "codeLabel";
        codeLabel.style.animationDelay = labelDelayNum +"ms";
        labelDelayNum += 200;

        data.content.split("").forEach(letter => { // split letter
            const span = document.createElement("span");
            span.textContent = letter;
            if (span.textContent === " ") {
                span.style.width = "10px";
            }
            codeLabel.appendChild(span);
        });
        codeLabelDiv.appendChild(codeLabel)
        labelContainer.append(codeLabelDiv);

        codingInput.addEventListener("input", () => { // input
            inputDetect( data, codeLabel);
        });
    });
    btnSD_1.play();
    console.log("render code");
};

const importCode = (app) => {
    insData.boss_code.forEach(level => { // level data init
        level.done = false;
    });
    renderCode(insData.boss_code); // render
    codeAreaDiv.append(labelContainer, codingInput)
    app.append(codeAreaDiv) // append
};
export { importCode };

const inputDetect = (data, codeLabel) => { // inputing func
    // console.log("dataContent : ",data.content)
    let inputVal = codingInput.value.toString();
    let inputArr = inputVal.split("");
    const inLength = inputArr.length - 1;
    if(codeLabel.children.length -1 >= inLength && inLength >= 0) { // add active label anim
        if(codeLabel.children[inLength].textContent === inputVal[inLength]) {
            codeLabel.children[inLength].classList.add("activeLabel");
        }            
    }
    if(data.content === inputVal) {
        codeLabel.classList.add("finLabel"); // add label fin anim
        if (data.done === true || userThreeSlot[insData.now_slot].currLevel === 0) return;
        document.querySelectorAll(".activeLabel").forEach( active => {
            active.classList.remove("activeLabel")
        });
        data.done = true;
        inputArr = [];
    }
};

window.addEventListener("keydown", (i) => { // init input
    codingInput.focus();
    if(i.keyCode == 8) {
        codingInput.value = "";
        document.querySelectorAll(".activeLabel").forEach( active => {
            active.classList.remove("activeLabel");
        });
    }
});
// codingInput.addEventListener("input", function(event) {
//     console.log("codeInput : ", codingInput.value) 
// });

window.addEventListener("animationend", (event) => { // remove anim
    if (event.animationName === "fade-in-bck") {
      event.target.classList.remove("fade-in-bck");
      event.target.style.animationDelay = "0ms";
    } 
    else if (event.animationName === "nextLvlAnim" ) { // shop next btn
        renderCode(insData.boss_code);
        // console.log("finLabAnim : end")
    }
    else if (event.animationName === "finLabelAnim") { // 完成一行字
        event.target.classList.remove("finLabelAnim");
        codingInput.value = "";
        renderCode(insData.boss_code);
        console.log("finLabAnim : end")
    }
  });

  