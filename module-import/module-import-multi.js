// ワイルドカードを使ったNamedインポート
import * as myshape from './shape.js';

let s = new myshape.Square(0,0,100,100);
console.log(s.area());
let l = new myshape.Line(0,0,10,10);
console.log(l.len());