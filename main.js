const toTop = document.querySelector('.footer-button');
const toTopMini = document.querySelector('.footer-button-mini');

if (toTop != null) {
    toTop.addEventListener('click', (e) => {
        window.location.href = '#';
    });
}
if (toTopMini != null) {
    toTopMini.addEventListener('click', (e) => {
        window.location.href = '#';
    });
}

const toggleButton = document.querySelector('.menu-button');
const menuDisplay = document.getElementById('drop-down-menu');

toggleButton.addEventListener('click', (e) => {
    if (menuDisplay.style.display == 'none') {
        menuDisplay.style.display = 'flex';
    } else {
        menuDisplay.style.display = 'none';
    }
});
