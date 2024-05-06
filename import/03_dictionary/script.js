// shopArea/script.js

import "/import/03_dictionary/style.scss"; // css
import { btnSD_1 } from "/import/13_sound/script.js"; // sd
import { clickDict } from "/import/01_titleArea/script.js";
import { dictTextData } from "../12_shopData/text_dict";

const dictionArea = document.createElement("div");
let pageContentArea = document.createElement("div");
const pageBtnArea = document.createElement("div");
const pageLBtn = document.createElement("div");
const pageDotDiv = document.createElement("div");
const pageRBtn = document.createElement("div");
const page_ARR = 0
let now_page = [0, 1];
dictionArea.id = "dictionArea";
pageContentArea.id = "pageContentArea"
pageBtnArea.id = "pageBtnArea";
pageDotDiv.id = "pageDotDiv";
pageLBtn.id = "pageLBtn";
pageRBtn.id = "pageRBtn";

const block_1_1 = document.createElement("div");
const block_1_2 = document.createElement("div");
const block_1_3 = document.createElement("div");
const block_1_4 = document.createElement("div");
const block_1_5 = document.createElement("div");
const page1_ARR = [0,0,0,0,0]
const page_1 = document.createElement("div");
const block_c = document.createElement("div");
const block_d = document.createElement("div");
const page_2 = document.createElement("div");
page_1.className = "dict_page"
page_2.className = "dict_page"

const importDiction = (app) => {
    pageDotDiv.innerHTML = "";
    for(let i= 0;i<now_page[1]+1;i++) {
        const pageDot = document.createElement("div");
        pageDot.className = "pageDot";
        pageDotDiv.append(pageDot);
    }
    pageBtnArea.append(pageLBtn, pageDotDiv, pageRBtn)
    dictionArea.append(pageContentArea, pageBtnArea)
    app.appendChild(dictionArea);
};
export { importDiction, renderPage1 };

const renderBlock = (array) => {
    array.forEach((item, index) => {
        const blockInfo = document.createElement("div");
        const blockDiv = document.createElement("div");
        // page_1.className = "dict_page"
        blockDiv.className = "blockDiv"
        blockInfo.className = "blockInfo"
        blockDiv.textContent = dictTextData[index].title;
        blockInfo.textContent = dictTextData[index].info;
        blockDiv.appendChild(blockInfo);
        page_1.appendChild(blockDiv)  
    })
};
const renderDiction = (num) => {
    if (num === 0) {  
        renderPage1(0)
    } else if (num === 1) {
        renderPage2(0)
    } else if (num === 2) {
        pageContentArea.textContent = "p3"
    }
    console.log(pageDotDiv.children[num])

};
const clearDictFocus = () => {
    if (!document.getElementsByClassName("clickDict")) return;
    let mdseClass = document.querySelectorAll(".clickDict")
    mdseClass.forEach(function(classTarget) {
        classTarget.classList.remove("clickDict");
    });
}
pageLBtn.addEventListener("click", () => {
    console.log(now_page)
    if (now_page[0]>0) {
        now_page[0] -= 1;
        renderDiction(now_page[0]);
    }
    btnSD_1.play();
});
pageRBtn.addEventListener("click", () => {
    if (now_page[0]<now_page[1]) {
        now_page[0] += 1;
        renderDiction(now_page[0]);
    }
    btnSD_1.play();
});
const renderPage1 = (num) => {
    clearDictFocus();
    page_1.innerHTML = "";
    pageContentArea.innerHTML = "";
    renderBlock(page1_ARR);
    // page_1.append(block_1_1, block_1_2, block_1_3, block_1_4, block_1_5)  
    pageContentArea.appendChild(page_1)  
    const Focus_ARR = [block_1_1, block_1_2, block_1_3, block_1_4, block_1_5];
    page_1.children[num].classList.add("clickDict");
    now_page[0] = 0;
    // console.log(pageDotDiv.children[1])
    clickDict();
    pageDotDiv.children[0].classList.add("clickDict");
}
const renderPage2 = (num) => {
    clearDictFocus();
    pageContentArea.innerHTML = "";
    page_2.append(block_c, block_d)  
    pageContentArea.appendChild(page_2)  
    const Focus_ARR = [block_c, block_d];
    Focus_ARR[num].classList.add("clickDict");
    now_page[0] = 1;
    pageDotDiv.children[1].classList.add("clickDict")
    // console.log(document.getElementById("pageDot1"))

}