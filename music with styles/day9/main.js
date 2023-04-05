var myPlayer = document.getElementById("myAudio");

function playAudio(audioSrc) {
    myPlayer.src = audioSrc;
    myPlayer.play();
}

function pauseAudio() {
    myPlayer.pause();
}
