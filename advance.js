// プロトタイプ
let p_obj = {};
proto = p_obj.get_prototypeOf();
proto.a = 100;
console.log(p_obj.a);

p_obj = {
    f: function(x){
        return 2*x;
    }
}
let s_obj = Object.create(p_obj);
console.log(s_obj.a);
s_obj.f(10);

// プロトタイプによるクラス
function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
}
Animal.prototype.bark = function(){
    console.log(`The ${this.type} barks '${this.sound}'`);
};

let cat = new Animal("Cat","Meow");
cat.bark();
let dog = new Animal("Dog","Baubau");
dog.bark();

// ES6クラス表記
class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
    bark(){
        console.log(`The ${this.type} barks '${this.sound}'`);
    }
}
let new_cat = new Animal("Cat", "Meow");
new_cat.bark();
let new_dog = new Animal("Dog", "Baubau");
new_dog.bark();

// パブリック変数
class Animal {
    name = "NoName";
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
}
let tiger = new Animal("Tiger", "Gaoo");
tiger.name = "Tiger Mask";
console.log(tiger.name);

// プライベート変数
class Animal {
    #name = "NoName";
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
    setName(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
}
let tiger = new Animal("Tiger", "Gaoo");
console.log(tiger.setName("Tiger Mask"));
console.log(tiger.getName());

// Getter, Setter
class Animal {
    #name = "No Name";
    #type;
    #sound;
    constructor(type, sound) {
        this.#type = type;
        this.#sound = sound;
    }
    get name(){
        return this.#name;
    }
    set name(value){
        this.#name = value; 
    }
}

let dog = new Animal("Dog", "Baubau");
dog.name = "Lassy";
console.log(dog.name);

// 静的メソッド
class Animal {
    #name = "No Name";
    #type;
    #sound;
    constructor(type, sound) {
        this.#type = type;
        this.#sound = sound;
    }
    get name(){
        return this.#name;
    }
    set name(value){
        this.#name = value; 
    }
    static className(){
        return "Animal";
    }
}
console.log(Animal.className());

// 継承
class Mammal extends Animal {
    constructor(type, sound){
        super(type, sound);
        this.category = "mamal";
    }
}
let mouse = new Mammal("mouse", "chewchew");
mouse.name = "Micky Mouse";
console.log(mouse.name);
mouse instanceof Mammal;

// イテレータ
// 配列
let array = [1, 2, 3, 4, 5];
for (let i of array){
    console.log(i);
}
// 文字列
let str1 = "Hello Javascript!";
for (let c of str1){
    console.log(c);
}
// Mapオブジェクト
let m = new Map([["one", 1],["two", 2], ["three", 3]]);
for (let [k,v] of m){
    console.log(k, v);
}
// Iterableオブジェクトを実装する
class Range {
    constructor (from, to) {
        this.from = from;
        this.to = to;
    }
    t[Symbol.iterator] () {
        let next = Math.ceil(this.from);
        let last = this.to;
        return {
            next() {
                return (next <= last) ? {value: next++} : { done : true};
            }
        }
    }
}

for (let x of new Range(1, 10)) console.log(x);

// ジェネレータ
const seq = function*(from, to) {
    for (let i = from; i <= to; i++){
        yield i;
    }
};
[...seq(1,10)]

// ジェネレータ on Javascriptオブジェクト
let o = {
    x: 1,
    y: 2,
    z: 3,
    *f() {
        for (let key of Object.keys(this)) {
            yield key;
        }
    }
}
for (let k in o){
    console.log(k);
}

// 非同期プログラミング
// コールバック
checkUpdates = () =>  console.log("check!!");
let intervalId = setInterval(checkUpdates, 3000);
