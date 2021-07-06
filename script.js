// 1の位の音を鳴らす
function play1(num) {
    let music = new Audio();
    music.load();
    music.src = `audio/${num}.mp3`;
    music.volume = 0.5; //音量の初期値(50%)
    music.play();
}


// 10の位の音を鳴らす
let src = 0;

function play10() {
    let music = new Audio();
    music.src = "audio/10-.mp3";
    music.load();
    music.volume = 0.5; //音量の初期値(50%)
    music.play();

    setTimeout(function play1 () {
        music.src = `audio/${src}.mp3`;
        music.volume = 0.5; //音量の初期値(50%)
        music.load();
        music.play();
    }, 400);

}

// カウントを表示する
function displayNum(){
    document.getElementById('num').innerText = num;
}


let num = 0;
let count = 0;
let end = 10;  // 繰り返したい回数
let interval = 1000; // 繰り返し処理の実行間隔（ミリ秒数 1000=1秒）

function start() {
    let id = setInterval(
        function () {
            // --- 繰り返したい処理をここに書く ---
            num++;

            // カウントを表示する
            displayNum();

            // 音を鳴らす
            play1(num);

            // 実行回数インクリメント
            count += 1;

            // 終了条件
            if (count == end) {
                // 終了
                clearInterval(id);
                next();
            }
        }
        , interval
    )
}


function next() {
    let count2 = 0;
    let end2 = 5;  // 繰り返したい回数
    let interval2 = 1000; // 繰り返し処理の実行間隔（ミリ秒数 1000=1秒）
    let id2 = setInterval(
        function () {
            // --- 繰り返したい処理をここに書く ---
            // カウントを表示する
            num++;

            displayNum();

            src++;

            // 実行回数インクリメント
            count2 += 1;


            // 音を鳴らす
            play10();



            // 終了条件
            if (count2 == end2) {
                // 終了
                clearInterval(id2);
            }
        }
        , interval2
    )
}