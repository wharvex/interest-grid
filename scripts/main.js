function updateElementsLoggedIn(username, imgElement, txtElement) {
    imgElement.title = `Hi ${username}. Click me to logout.`;
    txtElement.innerText = `Hi ${username}. Click the image to logout. `;
}

function updateElementsLoggedOut(imgElement, txtElement) {
    imgElement.title = "Click me to login";
    txtElement.innerText = "Click the image to login. "
}

function registerClearStorageOnImgClick(imgElement, txtElement) {
    imgElement.onclick = () => {
        if (confirm("Are you sure you want to logout?")) {
            localStorage.clear();
            registerGetUsernameOnImgClick(imgElement, txtElement);
            updateElementsLoggedOut(imgElement, txtElement);
        }
    }
}

function registerGetUsernameOnImgClick(imgElement, txtElement) {
    imgElement.onclick = () => {
        console.log("wwwww");
        username = prompt("Who are you?");
        localStorage.setItem("username", username);
        registerClearStorageOnImgClick(imgElement, txtElement);
        updateElementsLoggedIn(username, imgElement, txtElement);
    }
}

function main() {
    const txtElement = document.getElementById("login-txt");
    const imgElement = document.getElementById("login-img");
    let username = localStorage.getItem("username");
    let loggedIn = username != null;
    if (!loggedIn) {
        updateElementsLoggedOut(imgElement, txtElement);
        registerGetUsernameOnImgClick(imgElement, txtElement);
    } else {
        console.log("hi");
        updateElementsLoggedIn(username, imgElement, txtElement);
        registerClearStorageOnImgClick(imgElement, txtElement);
    }
}

main();