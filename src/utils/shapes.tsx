
interface Icenter {
  x:number,
  y:number
}

class Point {
  x:number
  y:number
  constructor(x:number,y:number){
    this.x = x;
    this.y = y
  }
}

export default class Shape {
  sild:number
  x:number
  y:number
  r:number
  color?:string
  deg:number = 1
  step:number = 1
  constructor(sild:number = 3, center:Icenter, r:number) {
    this.sild = sild;
    this.x = center['x'];
    this.y = center['y'];
    this.r = r
  }

  getDrawPosition(){
    let mPointX = this.x;
    let mRadius = this.r;
    let mPointY = this.y;
    let lth = this.sild;
    let angle = Math.floor(360/lth);
    let startangle = this.deg;
    let list = []
    for(let i = 0; i<lth; i++) {
      list.push(new Point(
        mPointX + (mRadius * Math.cos((angle * i + startangle)  * Math.PI / 180)),
        mPointY + (mRadius * Math.sin((angle * i + startangle)  * Math.PI / 180))
        )
      )
    }
    return list
  }

  _update(){
    this.deg+=this.step 
    this.r--;
  }
}