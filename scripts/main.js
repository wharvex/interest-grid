function updateImgAndTxt() {
    hiImg.title = ` (Hi ${username}. Click me to logout.)`;
    hiTxt.innerText = `Hey ${username}. Click the image to logout. `;
}

function confirmClearOnClick() {
    if (confirm("Are you sure you want to logout?"))
        localStorage.clear();
}

function registerClearOnClick() {
    hiImg.onclick = () => confirmClearOnClick();
}

const hiImg = document.getElementById("hi-img");
const hiTxt = document.getElementById("hey-txt");
const username = localStorage.getItem("username");
if (!username) {
    hiImg.title += " (Click me)";
    hiTxt.innerText = "Click the image. "
    hiImg.onclick = () => localStorage.setItem("username", prompt("Please enter your name."));
    updateImgAndTxt();
    registerClearOnClick();
} else {
    updateImgAndTxt();
    registerClearOnClick();
}