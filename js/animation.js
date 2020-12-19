//画面の高さ取得
let screen_height = window.parent.screen.height;

let graph_start = document.getElementsByClassName('graph_start');
graph_start = Array.from(graph_start);

let fadeIn_up = document.getElementsByClassName('fadeIn_Up');
fadeIn_up = Array.from(fadeIn_up);

function animation(){
    //要素を一つづつループ
    graph_start.forEach(element => {
         //ターゲットの位置を取得
         let target = element.getBoundingClientRect().top;

         if(target < screen_height * 0.8){
             element.classList.add("active");
         }
    });
    
    if(window.parent.screen.width <= 767){
        return;
    }
    
    //要素を一つづつループ
    fadeIn_up.forEach(element => {
         //ターゲットの位置を取得
         let target = element.getBoundingClientRect().top;

         if(target < screen_height * 0.8){
             element.classList.add("fadeIn_Up_To");
         }
    });
}

animation();
window.addEventListener('scroll', animation);