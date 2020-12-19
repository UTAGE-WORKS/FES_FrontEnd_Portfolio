//class名から モーダルViewトリガーの
let mdl_btn = document.getElementsByClassName("mdl_btn");
//配列に変換
mdl_btn = Array.from(mdl_btn);

//class名からモーダルcolseトリガーのHTML Object を取得
let mdl_close = document.getElementsByClassName("modal_close");
//配列に変換
mdl_close = Array.from(mdl_close);

//モーダルのベース部分の要素を取得
let modal = document.getElementById("modal");

/*
 * モーダル出現処理
 */
function modal_view(){
    //どの要素をクリックしたか判別するために、class名の第二要素を取得
    let target = this.className.split(' ')[1];
    let modal_box = document.getElementById(target);

    //モーダルの背景を表示
    modal.classList.toggle("modal_hidden");

    //モーダルボックスを表示
    modal_box.classList.toggle("modal_hidden");
    window.setTimeout( function() { modal_box.classList.add("fadeIn_To"); }, 1 );
    // modal_box.classList.add("fadeIn_To");
}

/*
 * モーダルクローズ処理
 */
function modal_close(){
    //モーダルの背景を非表示
    modal.classList.add("modal_hidden");

    //全てのモーダルを非表示
    let modal_box = document.getElementsByClassName("modal_box");
    modal_box = Array.from(modal_box);
    modal_box.forEach(element => {
        element.classList.add("modal_hidden");
        element.classList.remove("fadeIn_To");
    });
}

//イベントを追加
//foreach文で全てのmdl_btnにクリックイベントを追加
mdl_btn.forEach(element => {
    //クリックされたときに modal_view が実行される
    element.addEventListener('click', modal_view);
});

mdl_close.forEach(element => {
    //クリックされたときに modal_view が実行される
    element.addEventListener('click', modal_close);
});
modal.addEventListener('click', modal_close);


//メニューバー
let nav_icon = document.getElementById("nav_icon");

function toggle_nav(){
    let top_nav = document.getElementsByClassName("top_nav")[0];
    top_nav.classList.toggle("menu_view");
}

nav_icon.addEventListener("click", toggle_nav);