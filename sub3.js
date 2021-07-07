musicArr = [
    "audio/1.mp3",
    "audio/2.mp3",
    "audio/3.mp3",
    "audio/4.mp3",
    "audio/5.mp3",
    "audio/6.mp3",
    "audio/7.mp3",
    "audio/8.mp3",
    "audio/9.mp3",
    "audio/10.mp3",
    "audio/10-.mp3"
];

var repeatTimer;
var audio = document.getElementById("music");
var button = document.getElementById("playButton");


function send(num) {
    document.getElementById('num').innerText = num;

    input = num;
}

button.addEventListener("click", function () {
    audio.load();
}, false);


function play() {

    if (input > 10) {
        one = input - 10;
        music.src = `${musicArr[10]}`;
        audio.play();
    
        repeatTimer = setInterval(function () {
            input--;
            music.src = `${musicArr[input]}`;
            audio.play();
        }
            , 1000);
        
    }

    else {
        music.src = `${musicArr[input]}`;
        audio.play();
        repeatTimer = setInterval(function () {
            input--;
            music.src = `${musicArr[input]}`;
            audio.play();
        }
            , 1000);
    }


}



function stop() {
    clearInterval(repeatTimer);
}