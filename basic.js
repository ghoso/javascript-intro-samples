// Javascript基本データ型

// 数値
// 整数
10

// 実数
3.14

// 指数表現
3.123e8

// 演算
10 - 5 * 3
(10 - 5) * 3

// 特別な数
Infinity
NaN

// 文字列
”Hello Javascript!"
'Hello Python!'
`Hello C++`

// 文字連結
str1 = "Hello" + "Javascript"

// 制御文字
"Bye Javascript\n"

// 型名
typeof 6.7
typeof "Hello"

// 比較演算子
1 > 2
"Apple" == "Orange"
"Google" != "Yahoo"

// 厳格な比較
"Apple" === "Orange"
"Google" !== "Yahoo"
1 === "1"  // 1 == "1"はtrue

// 論理演算子
1 + 1 == 2 && 3 * 3 > 5
true || false

// 意味ある値がない
null
undefined

// 型の自動変換
"5" - 2
3 * null
"three" * 2

//
// 変数
//

// 宣言、初期化、バインディング
let num = 100;
let str1 = "Hello Javascript !";

// 値代入
num = 10;
str1 = "Bye Javascript.";

// 古い変数宣言
var old_num = 100;

// 定数
const c_num = 200;

// 文字置換
let lang = 'Python';
`Hello ${lang}`

//
// 制御構造
//

//  条件分岐　if ,else if ,else
let n = 80;
if (n < 20){
    console.log("nは20より小さい");
} else if (n < 100){
    console.log("nは100より小さい");
} else {
    console.log("nは100以上");
}

// 条件分岐 switch
let signal = "green";
switch (signal) {
    case "green":
        console.log("進め！");
        break;
    case "yellow":
        console.log("注意して進め");
        break;
    case "red":
        console.log("止まれ！")
        break;
    default:
        console.log("故障中");
        break;
}

// 繰り返し（while)
let count = 0;
while (count < 10){
    console.log(count);
    count++;
}

// 繰り返し（do while)
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 10)

// 繰り返し (for)
for (let i = 0; i < 10; i++){
    console.log(i);
}

//繰り返しから抜ける (break)
for (let i = 1; i < 10; i++){
    if (i % 7 == 0){
        console.log("ループから抜けた i = " + i);
        break;
    }
    console.log(i);
}

// 関数
const square = function(x){
    return x * x;
};
console.log(square(3));

// 関数宣言
console.log(square_f(3));
function square_f(x){
    return x * x;
}

// スコープ
let g_num = 100; // グローバル変数
const eq1 = function(x){
    let l_num = 10; // ローカル変数
    return l_num * x + g_num;
}
console.log(eq1(3));

// アロー関数
const addNum = (a, b) => {
    return a + b;
}
console.log(addNum(3, 8));

// オプション引数
function power(base, exp = 2){
    let result = 1;
    for (let count = 0; count < exp; count++){
        result *= base;
    }
    return result;
}
console.log(power(3));
console.log(power(3,2));

// クロージャー（関数閉包）
// 内部関数と変数の値を返す
function wrapValue(n){
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log("wrap1() = " + wrap1());
console.log("wrap2() = " + wrap2());

//関数の再帰呼び出し
function countdownSum(num){
    if (num < 0){
        console.log("引数は0以上の整数を指定してください")
    }
    if (num == 0){
        console.log(num)
    } else {
        console.log(num)
        countdownSum(num - 1)
    }
}
console.log(countdownSum(10))

// 配列
let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
console.log(days[3]);
console.log(days.length);

// 配列ループ
for (let i = 0; i < days.length; i++){
    console.log(days[i]);
}

for (let day of days){
    console.log(day);
}

// プロパティ
let str1 = "Hello Javascript !";
console.log(str1.length);

// メソッド
console.log(str1.toUpperCase());
let seq = [1, 2, 3];
seq.push(4);
seq.push(5);
console.log(seq);

// オブジェクト
let person1 = {
    name: '山田　太郎',
    age: 33,
    gender: '男',
    hobby: ['サッカー','音楽','映画']
}
console.log(person1.name);

// genderプロパティ削除
delete person1.gender;
console.log(person1.gender);
Object.keys(person1);

// genderプロパティ復旧
Object.assign(person1, {gender: 33});

// オブジェクトの配列
let persons = [
    {
        name: '山田　太郎',
        age: 33,
        gender: '男',
        hobby: ['サッカー','音楽','映画']
    },
    {
        name: '鈴木　花子',
        age: 24,
        gender: '女',
        hobby: ['料理','ガーデニング','読書']
    },
    {
        name: '田中　一郎',
        age: 41,
        gender: '男',
        hobby: ['車','キャンプ','カメラ']
    },
];
console.log(persons[1].name);

//  オブジェクト参照
let obj1 = {val: 10};
let obj2 =  obj1;
let obj3 = {val: 10};

console.log(obj1 == obj2);
console.log(obj1 == obj3);

obj1.val = 30;
console.log(obj2.val);
console.log(obj3.val);

// 文字列
let str2 = "javascript";
console.log(str2.slice(2,7));
console.log(str2.indexOf('s'));

let str3 = "Thanks\n";
console.log(str3.trim());

let str4 = "I love Tokyo!";
console.log(str4.split(" "));

// Rest Parameter
function max(...numbers){
    let result = -Infinity;
    for (let number of numbers){
        if (number > result) result = number;
    }
    return result;
}
console.log(max(5,2,-1,3));

// JSON
let json_str = JSON.stringify({name: '山田　太郎',
                               gender: '男'});
console.log(json_str);
let json_obj = JSON.parse(json_str);
console.log(json_obj);

// 高階関数
// 引数やリターン値に関数をとる関数
function repeat(n, action){
    for (let i = 0; i < n; i++){
        action(i);
    }
}
repeat(3, console.log);

// 引数の関数がアロー関数
let labels = [];
repeat(5, i => {
    labels.push(`${i + 1}個`)
});
console.log(labels);

// 関数を返す高階関数
function show_callfunc(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("calling with", args, ", returned", result);
        return result;
    };
}
show_callfunc(Math.min)(1, 2, 3);

// フィルター
// 引数１: 対象の配列、引数２：テスト関数
function filter(array, test){
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}
let persons = [{
        name: 'Donald Tramp',
        is_alive: true
    },
    {
        name: 'Albert Einstein',
        is_alive: false
    },
    {
        name: 'Soseki Natsume',
        is_alive: false
    }
];
console.log(filter(persons, person => person.is_alive));

// Map
function map(array, transform){
    let mapped = [];
    for (let elem of array){
        mapped.push(transform(elem));
    }
    return mapped;
}
console.log(map([1, 2 ,3, 4], d => d * d))

// Reducer
function reduce(array, combine, start){
    let current = start;
    for (let elem of array){
        current = combine(current, elem);
    }
    return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// 関数の連結
let datas = [
    {age: 32, gender: 'M'},
    {age: 23, gender: 'F'},
    {age: 38, gender: 'M'},
    {age: 51, gender: 'F'},
    {age: 43, gender: 'M'}
];
function average(array){
    return array.reduce((a, b) => a + b) / array.length;
}
console.log(average(datas.filter(s => s.gender == 'M').map(s => s.age)));