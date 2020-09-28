//
// app.js
//
// デバッグフラグ
let DEBUG = true;
// クリックスタート座標、終了座標
let start_x, start_y, end_x, end_y;
// ドラッグ状態フラグ
let dragging = false;
// 描画データ保存エリア
let draw_data = new Array();

// Canvas
let c = document.querySelector("#canvas");
let canvasW = c.clientWidth;
let canvasH = c.clientHeight;
let context = c.getContext("2d");
// Canvasの原点を取得
let offset_x = c.getBoundingClientRect().left;
let offset_y = c.getBoundingClientRect().top;
debug_print("canvas origin = (" + offset_x +"," + offset_y + ")");

// デバッグ出力
function debug_print(msg){
  if (DEBUG) {
    console.log("DEBUG: " + msg);
  }
}

// 直線描画
function drawLine(ctx, start_coord, end_coord){
  ctx.beginPath();
  ctx.moveTo(start_coord.x, start_coord.y);
  ctx.lineTo(end_coord.x, end_coord.y);
  ctx.stroke();
}

// 描画データを再描画
function redrawLines(ctx, lines){
  for (const line of lines) {
    ctx.beginPath();
    ctx.moveTo(line.start.x, line.start.y);
    ctx.lineTo(line.end.x, line.end.y);
    ctx.stroke();
  }
}

// 描画データとキャンバスクリア
function clearCanvas(e){
  draw_data = [];
  context.clearRect(0, 0, canvasW, canvasH);
  console.log('Clear canvas')
}

// マウスダウン
function onDown(e) {
  debug_print("down");
  // クリック位置の座標を取得
  start_x = e.clientX - offset_x;
  start_y = e.clientY - offset_y;
  debug_print("start = (" + start_x +"," + start_y + ")");
  dragging = true;
}

// マウスドラッグ
function onMove(e){
  if (dragging){
    let start_coord = {x: start_x, y: start_y};
    let drag_coord = {x: e.clientX - offset_x, y: e.clientY - offset_y};

    context.clearRect(0, 0, canvasW, canvasH);
    redrawLines(context, draw_data);
    drawLine(context, start_coord, drag_coord);
    debug_print("drag x=" + drag_coord.x + ", drag y=" + drag_coord.y);
  }
}

// マウスアップ
function onUp(e) {
  debug_print("up");
  // マウスアップ座標取得
  end_x = e.clientX - offset_x;
  end_y = e.clientY - offset_y;
  debug_print("end = (" + end_x +"," + end_y + ")");
 // 描画
  context.clearRect(0, 0, canvasW, canvasH);
  redrawLines(context, draw_data);
  context.beginPath();
  context.moveTo(start_x, start_y);
  context.lineTo(end_x, end_y);
  context.stroke();
  
  // 描画データ保存
  draw_data.push({start: {x: start_x, y: start_y}, 
                  end: {x: end_x, y: end_y}});
  // 変数クリア
  start_x = 0;
  start_y = 0;
  end_x = 0;
  end_y = 0;
  dragging = false;
}

// ドラッグ中、キャンバスから出た時の処理
function onOut(e) {
  if (dragging){
    debug_print("mouseout");
    // ドラッグキャンセル
    dragging = false;
    start_x = 0;
    start_y = 0;
    context.clearRect(0, 0, canvasW, canvasH);
    redrawLines(context, draw_data);
  }
}

// イベントハンドラー登録
c.addEventListener('mousedown', onDown, false);
c.addEventListener('mouseup', onUp, false);
c.addEventListener('mousemove', onMove, false);
c.addEventListener('mouseout', onOut, false);

let clear = document.querySelector("#clear");
clear.addEventListener('click', clearCanvas, false);