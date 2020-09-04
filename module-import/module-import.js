// ES6スタイル モジュール読み込み
// ./package.json
import {Square} from './square-es6.js';

let s = new Square(0, 0, 100, 100);
console.log(s.area());