
const n = 2;
const targetIndex = (n % 10) + 1;


function toggleColor(element, className) {
    element.classList.toggle(className);
}

document.body.addEventListener("click", (event) => {
    if (event.target.nodeType === 1) {
        const elements = document.querySelectorAll("body *");
        elements.forEach((elem, index) => {
            if (index + 1 === targetIndex) {
                toggleColor(elem, "active1");
            } else if (index + 2 === targetIndex) {
                toggleColor(elem, "active2");
            }
        });
    }
});


function addImage() {
    const img = document.createElement("img");
    img.src = "https://ukraine.ua/wp-content/uploads/2020/11/Theatre-in-old-town-of-Odesa-sea-port-weiv.simbiothy.depositphotos-2048x1536.jpg";
    img.alt = "Одеський театр з видом на порт";
    img.width = 600;
    document.getElementById("image-container").appendChild(img);
}

function increaseSize() {
    const images = document.querySelectorAll("#image-container img");
    images.forEach(img => {
        img.width += 50;
    });
}

function decreaseSize() {
    const images = document.querySelectorAll("#image-container img");
    images.forEach(img => {
        if (img.width > 50) img.width -= 50;
    });
}

function removeImage() {
    const container = document.getElementById("image-container");
    if (container.lastChild) container.removeChild(container.lastChild);
}
