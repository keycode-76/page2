// setting/script.js

// css
import "/import/00_setting/style.scss";
import { btnSD_1 } from "/import/13_sound/script.js"; // sd
const settingBtn = document.createElement("button"); // btn
const pauseArea = document.createElement("div"); // pause
const pauseDiv = document.createElement("div");
const pauseLabel = document.createElement("label");
const resumeBtn = document.createElement("button");
const setBackMenuBtn = document.createElement("button");
const settingArea = document.createElement("div"); // setting
const settingDiv = document.createElement("div");
const settingLabel = document.createElement("label");
const setVideoBtn = document.createElement("button");
const setAudioBtn = document.createElement("button");
const setBackBtn = document.createElement("button");

pauseArea.id = "pauseArea";
pauseDiv.id = "pauseDiv";
pauseLabel.id = "pauseLabel";
resumeBtn.id = "resumeBtn";
setBackMenuBtn.id = "setBackMenuBtn";
settingArea.id = "settingArea";
settingDiv.id = "settingDiv";
settingLabel.id = "settingLabel";
setVideoBtn.id = "setVideoBtn";
setAudioBtn.id = "setAudioBtn";
setBackBtn.id = "setBackBtn";

settingArea.classList.add("overlay");
pauseArea.classList.add("overlay");
pauseDiv.classList.add("setDivBox");
settingDiv.classList.add("setDivBox");

settingBtn.textContent = "setting";
pauseLabel.textContent = "- pause -"
resumeBtn.textContent = "resume"
setBackMenuBtn.textContent = "back to Menu"
settingLabel.textContent = "- setting -"
setVideoBtn.textContent = "fullscreen"
setAudioBtn.textContent = "audio"
setBackBtn.textContent = "back"

settingArea.appendChild(settingDiv);
pauseArea.appendChild(pauseDiv);
settingDiv.append(settingLabel, setVideoBtn, setAudioBtn, setBackBtn);
const pauseSetBtn = settingBtn.cloneNode(true);
pauseDiv.append(pauseLabel, resumeBtn, pauseSetBtn, setBackMenuBtn);

// click
const importPause = (app) => {
    app.appendChild(pauseArea);
};
settingBtn.addEventListener("click", () => {
    let setDivParent = event.target.parentNode;
    let setParent = setDivParent.parentNode;
    setParent.appendChild(settingArea);
    btnSD_1.play();
});
setBackBtn.addEventListener("click", () => {
    let setDivParent = event.target.parentNode
    let setParent = setDivParent.parentNode
    setParent.parentNode.removeChild(setParent)
    btnSD_1.play();
});
setVideoBtn.addEventListener("click", () => {
    const app = document.querySelector('body');
    app.requestFullscreen();
})
resumeBtn.addEventListener("click", () => {
    let setDivParent = event.target.parentNode
    let setParent = setDivParent.parentNode
    setParent.parentNode.removeChild(pauseArea);
});
pauseSetBtn.addEventListener("click", () => {
    let setDivParent = event.target.parentNode
    let setParent = setDivParent.parentNode
    setParent.appendChild(settingArea);
});
setBackMenuBtn.addEventListener("click", () => {
    app.removeChild(pauseArea);
});

export { importPause, settingBtn, setBackMenuBtn };

