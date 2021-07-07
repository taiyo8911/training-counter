// カウントダウンの初期値を設定する
// 初期値をnumに格納

function send(num) {
    document.getElementById('num').textContent = num;
    input = num;
    return input;
}

// カウンターを表示する
function displayNum() {
    no--;
    document.getElementById('num').innerText = no;
}

// 1の位の音を鳴らす
function play() {
    let music = new Audio();
    music.src = `audio/${no}.mp3`;
    music.volume = 0.5; //音量の初期値(50%)
    music.play();
}

// 10の位の音を鳴らす
function play10() {
    let music = new Audio();
    music.src = "audio/10-.mp3";
    music.volume = 0.5; //音量の初期値(50%)
    music.play();

    setTimeout(function () {
        music.src = `audio/${no-10}.mp3`;
        music.volume = 0.5; //音量の初期値(50%)
        music.play();
    }, 400);
}

// 10より大きい数を読み上げる
function over10() {
    let count = 0; // 繰り返し数カウント用
    let end = no - 11;  // 繰り返し回数

    let id = setInterval(
        function () {
            // カウントを表示する
            displayNum();
            // 音を鳴らす
            play10();
            // 実行回数インクリメント
            count += 1;

            // 終了条件
            if (count == end) {
                // 終了
                clearInterval(id);
                under10();
            }
        }
        , 1000)
}

// 10より小さい数を読み上げる
function under10() {
    let count2 = 0; // 繰り返し回数カウント用
    let end2 = no;  // 繰り返しする回数

    let id2 = setInterval(
        function () {
            // カウントを表示する
            displayNum();
            // 音を鳴らす
            play(no);
            // 実行回数インクリメント
            count2 += 1;

            // 終了条件
            if (count2 == end2) {
                // 終了
                clearInterval(id2);
            }
        }
        , 1000)
}

// メインプログラム
// 「始」ボタンが押された時の処理
function start() {
    if (input > 10) {
        no = input;
        over10();
    }

    else {
        no = input;
        under10(no);
    }
}