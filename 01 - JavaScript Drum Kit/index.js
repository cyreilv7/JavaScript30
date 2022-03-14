function playSound(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`); // attribute selector
    const key = document.querySelector(`.key[data-key=${e.key}]`); 
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    const key = document.querySelector(`.key[data-key=${e.key}]`);
    if (!key) return;
    key.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeTransition);