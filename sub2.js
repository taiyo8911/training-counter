// カウントダウンの初期値を設定する
function sendNum() {
    num = document.getElementById('input').textContent;
    document.getElementById('num').innerText = num;
    return num;
}

// カウントを表示する
function displayNum() {
    num--;
    document.getElementById('num').innerText = num;
}

// 1の位の音を鳴らす
function play(no) {
    let music = new Audio();
    music.src = `audio/${no}.mp3`;
    music.volume = 0.5; //音量の初期値(50%)
    music.play();
}

function play10() {
    let music = new Audio();
    music.src = `audio/10-.mp3`;
    music.volume = 0.5; //音量の初期値(50%)
    music.play();
}

let input = 8;

if (input > 10) {
    no = input - 10;
    play10();
    play(input);
}

else{
    no = input;
    play(input);
}