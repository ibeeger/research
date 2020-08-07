
export default class ImageEdit {
  ctx:any
  cs:HTMLCanvasElement
  timer:any
  constructor(cs:HTMLCanvasElement){
    this.cs = cs;
    this.ctx = cs.getContext('2d');
  }


  //尝试
  updateCanvas3(_data:any, mem:any) {
    // R: 75 G: 250 B: 3
    const cs = this.cs
    const ctx = this.ctx;
    let seek = 0;
    let _this= this;
    let index = 0;
    let max = 255;
    // ctx.drawImage(img, 0,0, cs.width,cs.height);
    console.log(cs.width, cs.height)
    function update(){
      let imageData = ctx.getImageData(0,0,cs.width,cs.height);
      let data = imageData.data;
      let byteSize = data.length;
      // mem.set(_data);
      data.set(_data.subarray(0, byteSize));
      // data.set(_data);
      console.log(data)

      ctx.putImageData(imageData,0,0);
      if(max==0){
        cancelAnimationFrame(_this.timer);
        clearTimeout(_this.timer);
        return
      }
      max--;
      // _this.timer = setTimeout(update, 100);
      // _this.timer = requestAnimationFrame(update);
    }
    update();
  }
  

  //清空
  updateCanvas2(img:any, fun:Function, mem:any) {
    // R: 75 G: 250 B: 3
    const cs = this.cs
    const ctx = this.ctx;
    let seek = 0;
    let _this= this;
    let index = 0;
    let max = 255;
    ctx.drawImage(img, 0,0, cs.width,cs.height);
    function update(){
      let imageData = ctx.getImageData(0,0,cs.width,cs.height);
      let data = imageData.data;
      let byteSize = data.length;
      mem.set(data);
      fun(byteSize, max, max, max);
      data.set(mem.subarray(0, byteSize));
      ctx.putImageData(imageData,0,0);
      if(max==0){
        cancelAnimationFrame(_this.timer);
        clearTimeout(_this.timer);
        return
      }
      max--;
      _this.timer = setTimeout(update, 100);
      // _this.timer = requestAnimationFrame(update);
    }
    update();
  }

  updateCanvas(img:any, fun:Function, mem:any) {
    // R: 75 G: 250 B: 3
    const cs = this.cs;
    const ctx = this.ctx;
    const offset = 400;
    let seek = 0;
    let _this= this;
    let index = 0;
    ctx.drawImage(img, 0,0, cs.width,cs.height);
    function update(){
      let imageData = ctx.getImageData(0,0,cs.width,cs.height);
      let data = imageData.data;
      let byteSize = data.length;
      mem.set(data);
      fun(byteSize,Math.floor(index/4), Math.floor(offset/4));
      // data.set(mem.subarray(0, byteSize));
      data.set(mem.subarray(index, index+offset));
      ctx.putImageData(imageData,0,0);
      if(index>=byteSize){
        cancelAnimationFrame(_this.timer);
        clearTimeout(_this.timer);
        return
      }
      index+=Math.floor(offset/4);
      _this.timer = setTimeout(update, 10);
      // _this.timer = requestAnimationFrame(update);
    }
    update();
  }
  update(){

  }
}