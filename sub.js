
// カウントダウンの初期値を設定する
function sendNum(){
    num = document.getElementById('input').textContent;
    document.getElementById('num').innerText = num;
    return num; 
}

// カウントを表示する
function displayNum(){
    num--;
    document.getElementById('num').innerText = num;
}

// 1の位の音を鳴らす
function play1() {
    let music = new Audio();
    music.src = `audio/${num}.mp3`;
    music.volume = 0.5; //音量の初期値(50%)
    music.play();
}


// 10の位の音を鳴らす
function play10() {
    let music = new Audio();
    music.src = "audio/10-.mp3";
    music.volume = 0.5; //音量の初期値(50%)
    music.load();
    music.play();

    setTimeout(function() {
        music.src = `audio/${num-10}.mp3`;
        music.volume = 0.5; //音量の初期値(50%)
        music.play();
    }, 400);
}

function reload(){
    location.reload();
}


function start() {
    let count2 = 0;
    let end2 = num - 10;  // 繰り返し回数
    let id2 = setInterval(
        function () {
            // --- 繰り返したい処理をここに書く ---
            // カウントを表示する

            displayNum();

            // 実行回数インクリメント
            count2 += 1;

            // 音を鳴らす
            play10();

            // 終了条件
            if (count2 == end2) {
                // 終了
                clearInterval(id2);
                next();
            }
        }
        , 1000
    )
}



function next() {
    let count = 0;
    let end = 10;  // 繰り返したい回数
    let id = setInterval(
        function () {
            // --- 繰り返したい処理をここに書く ---
            // カウントを表示する
            displayNum();

            // 音を鳴らす
            play1();

            // 実行回数インクリメント
            count += 1;

            // 終了条件
            if (count == end) {
                // 終了
                clearInterval(id);
                reload();
            }
        }
        , 1000
    )
}