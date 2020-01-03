const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

console.log(windowHeight);

// Elements that needs be to setup
var elements = {
    body: document.getElementsByTagName("body")[0],
}

console.log(elements.body);


function bodySetup() {
    elements.body.style.width = windowWidth;
    elements.body.style.height = windowHeight; 
}

bodySetup();
