//
// shape.js
//
import {debug_print} from './utils.js';

// 図形ベースクラス
class Shape {
  constructor(ctx, start, end){
    this.context = ctx;
    this.start = start;
    this.end = end;
    ctx.strokeStyle = "black";
  }  
  draw(){
    // implementing in subclass
  }
}

// ラインクラス
export class Line extends Shape {
  constructor(ctx, start, end){
    super(ctx, start, end);
  }

  draw(){
    this.context.beginPath();
    this.context.moveTo(this.start.x, this.start.y);
    this.context.lineTo(this.end.x, this.end.y);
    this.context.stroke();
  }
}

// 四角クラス
export class Square extends Shape {
  constructor(ctx, start, end){
    super(ctx, start, end);
  }

  draw(){
    let w = this.end.x - this.start.x;
    let h = this.end.y - this.start.y;
    // debug_print("start.x = " + this.start.x, ",this.end.x = " + this.end.x);
    this.context.beginPath();
    this.context.strokeRect(this.start.x, this.start.y, w, h);
  }
}

// 円クラス
export class Circle extends Shape {
  constructor(ctx, start, end){
    super(ctx, start, end);
    this.center = {x: (this.start.x + this.end.x)/2, y: (this.start.y + this.end.y)/2};
    this.radius = Math.sqrt(Math.pow(this.end.x - this.start.x, 2) + Math.pow(this.end.y - this.start.y, 2));
    debug_print("center.x = " + this.center.x +",center.y = " + this.center.y);   
    debug_print("radius = " + this.radius);
  }

  draw(){
    this.center = {x: (this.start.x + this.end.x)/2, y: (this.start.y + this.end.y)/2};
    this.radius = Math.sqrt(Math.pow(this.end.x - this.start.x, 2) + Math.pow(this.end.y - this.start.y, 2))/2;
    this.context.beginPath();
    this.context.arc(this.center.x, this.center.y, this.radius, Math.PI*2, false);
    this.context.stroke();
  }
}