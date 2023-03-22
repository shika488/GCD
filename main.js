'use strict';

//公約数を求める
let text = [];
function divisor(a, b) {
    for (let i = 1; i <=a && i <=b; i++) {
        if (a % i === 0 && b % i ===0) {
            text.push(i);   //取得した値を配列に入れていく
        }    
    }
}

//値が入力されて、ボタンが押されたとき
// gcd:greatest common divisor
const gcd = function () {

    //入力された値を数値にする
    const n1 = Number(document.getElementById('num1').value);
    const n2 = Number(document.getElementById('num2').value);
    
    //結果を表示
    const result = document.getElementById('result');

    //整数のとき
    if(n1>0 && n2>0){
        divisor(n1, n2);
        result.innerHTML ="最大公約数は " + Math.max(...text);  //公約数のうちの最大値

    //整数ではないとき
    } else {
        alert('正の整数を入力して下さい ※半角');
    }
    
};

