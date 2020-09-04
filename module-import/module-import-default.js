// export defaultを使ったインポート
import S, {Line} from './square-default.js';

let s = new S(0, 0, 100, 100);
console.log("Square Area (0, 0) (100, 100) =  " + s.area());

let l  = new Line(0, 0, 10, 10);
console.log("Line length (0, 0) (10, 10) = " + l.len());