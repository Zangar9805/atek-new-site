document.addEventListener('DOMContentLoaded', function() {
    // инициализация слайдера
    new SimpleAdaptiveSlider('#slider1', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // инициализация слайдера
    new SimpleAdaptiveSlider('#slider2', {
        loop: true,
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
});

let st = false;
const hideText = document.querySelector("#txt-hide");
const toggleButton = document.querySelector("#hide-btn");

const toggleTxt = () => {
    if (!st) {
        hideText.style.display = "inline-block";
        toggleButton.textContent = "Свернуть";
        st = true;
    } else {
        hideText.style.display = "none";
        toggleButton.textContent = "Читать далее";
        st = false;
    }
}