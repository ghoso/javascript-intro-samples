export class Line {
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    len(){ return Math.sqrt(Math.pow(Math.abs(this.x2 - this.x1),2) + Math.pow(Math.abs(this.y2 - this.y1),2)); }
}

export class Square {
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    area(){ return Math.abs(this.x2 - this.x1) * Math.abs(this.y2 - this.y1);}
}