// sample.js
const n = 10;
for (let i = 0; i < n; i++){
    if (isOdd(i)){
        console.log(i);
    }
}

// 奇数かどうか判定する
function isOdd(num){
    if (num % 2 === 0){
        return false;
    } else {
        return true;
    }
}