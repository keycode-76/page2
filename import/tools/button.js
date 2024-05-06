
// Create a button with the specified text and click handler
export const renderBtn = (text, onClick) => {
    const btnModel = document.createElement("button");
    btnModel.textContent = text;
    btnModel.addEventListener("click", onClick);
    return btnModel;
};