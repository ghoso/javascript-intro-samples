//
// app.js
//
import {Line, Square, Circle} from './shape.js';
import {debug_print} from './utils.js';
//
// 定数
//

// 図形タイプ
const SHAPE_TYPE_LINE = "line";
const SHAPE_TYPE_SQUARE = "square";
const SHAPE_TYPE_CIRCLE = "circle";
// パレットイメージファイル
const LINE_IMG = "./images/line.png";
const SQUARE_IMG = "./images/square.png";
const CIRCLE_IMG = "./images/circle.png";
const LINE_S_IMG = "./images/line-r.png";
const SQUARE_S_IMG = "./images/square-r.png";
const CIRCLE_S_IMG = "./images/circle-r.png";

// Canvas
let c = document.querySelector("#canvas");
// Canvasサイズ
let canvasW = c.clientWidth;
let canvasH = c.clientHeight;
// Canvasコンテキスト
let context = c.getContext("2d");
// Canvas原点座標 
let offset_x = c.getBoundingClientRect().left;
let offset_y = c.getBoundingClientRect().top
// ドラッグ状態フラグ
let dragging = false;
// 描画データ保存領域
let draw_data =  new Array();

// パレット
let pallet = document.querySelector("#shape_pallet");
let line_btn = document.querySelector("#line");
let square_btn = document.querySelector("#square");
let circle_btn = document.querySelector("#circle");
// パレットツールイメージ
let line_img = document.querySelector("#line img");
let square_img = document.querySelector("#square img");
let circle_img = document.querySelector("#circle img");

// 図形オブジェクト
let shape;
// 図形タイプ
let shape_type = SHAPE_TYPE_LINE;

//
// 関数定義
//

// 描画データとキャンバスクリア
export function clearCanvas(){
  draw_data = [];
  context.clearRect(0, 0, canvasW, canvasH);
}

// 保存図形の再描画
function redrawShape(){
  for (let shape of draw_data){
    shape.draw();
  }
}

// マウスダウンハンドラー
function onDown(e) {
  debug_print("down");
  // クリック位置の座標を取得
  let start = {x: e.clientX - offset_x, y: e.clientY - offset_y};
  // 図形オブジェクト生成
  switch (shape_type){
    case "line":
      shape = new Line(context, start, start);
    break;
    case "square":
      shape = new Square(context, start, start);
    break;
    case "circle":
      shape = new Circle(context, start, start);
    break;
    default:
      return;  
  }
  dragging = true;
}

// マウスドラッグハンドラー
function onMove(e){
  if (dragging){
    shape.end = {x: e.clientX - offset_x, y: e.clientY - offset_y};
    context.clearRect(0, 0, canvasW, canvasH);
    shape.draw();
    redrawShape();
  }
}

// マウスアップハンドラー
function onUp(e) {
  debug_print("up");
  // マウスアップ座標取得
  shape.end = {x: e.clientX - offset_x,y: e.clientY - offset_y};
  // 描画
  context.clearRect(0, 0, canvasW, canvasH);
  shape.draw()
  redrawShape();
  // 描画データ保存
  draw_data.push(shape);
  shape = null;
  // ドラッグモード終了
  dragging = false;
}

// 描画領域から出た
function onOut() {
  debug_print("mouseout");
  if (dragging){
    // ドラッグキャンセル
    dragging = false;
    context.clearRect(0, 0, canvasW, canvasH);
    redrawShape();
    shape = null;
  }
}

// パレット上のマウス移動
function onPalletMove(e){
  pallet.style.cursor = "default";
}

// パレットクリア
function clearPallet(){
  line_img.src = LINE_IMG;
  square_img.src = SQUARE_IMG;
  circle_img.src = CIRCLE_IMG;
}

// パレットのラインツール選択
function selectLine(){
  clearPallet();
  line_img.src = LINE_S_IMG;
  shape_type = SHAPE_TYPE_LINE;
}

// 四角ツール選択
function selectSquare(){
  clearPallet();
  square_img.src = SQUARE_S_IMG;
  shape_type = SHAPE_TYPE_SQUARE;
}

// 円ツール選択
function selectCircle(){
  clearPallet();
  circle_img.src = CIRCLE_S_IMG;
  shape_type = SHAPE_TYPE_CIRCLE;
}

// Canvasイベントハンドラー登録
c.addEventListener('mousedown', onDown, false);
c.addEventListener('mouseup', onUp, false);
c.addEventListener('mousemove', onMove, false);
c.addEventListener('mouseout', onOut, false);

// パレットイベントハンドラー登録
pallet.addEventListener('mouseover', onPalletMove, false);
line_btn.addEventListener('click', selectLine, false);
square_btn.addEventListener('click', selectSquare, false);
circle_btn.addEventListener('click', selectCircle, false);

// クリアボタンイベントハンドラー登録
let clear = document.querySelector("#clear");
clear.addEventListener('click', clearCanvas, false);

// 初期描画ツールをラインに設定
clearPallet();
selectLine();