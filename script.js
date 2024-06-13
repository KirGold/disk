document.addEventListener('scroll', function() {
    let scroll = window.scrollY
    let image = document.getElementById('img')

    let rotation = scroll * 0.5
    image.style.transform = `rotate(${rotation}deg)`
})








const image = document.getElementById('img')
let isMouseDown = false
let currentRotation = 0
let rotationDirection = 0
let rotateTimeout = null;

image.addEventListener('mousedown', function(event) {
    isMouseDown = true
    const imageCenterX = image.offsetLeft + image.width / 2
    const mouseX = event.clientX
    if (mouseX > imageCenterX) {
        rotationDirection = 2
    } else {
        rotationDirection = -2
    }
    rotateImage()
});

document.addEventListener('mouseup', function() {
    isMouseDown = false;
    clearTimeout(rotateTimeout);
});

function rotateImage() {
    if (isMouseDown) {
        currentRotation += rotationDirection;
        image.style.transform = `rotate(${currentRotation}deg)`;
        rotateTimeout = setTimeout(rotateImage, 20)
    }
}