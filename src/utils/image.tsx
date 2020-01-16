
export default class ImageEdit {
  ctx:any
  cs:HTMLCanvasElement
  timer:any
  constructor(cs:HTMLCanvasElement){
    this.cs = cs;
    this.ctx = cs.getContext('2d');
  }

  updateCanvas(img:any, fun:Function, mem:any) {
    // R: 75 G: 250 B: 3
    const cs = this.cs
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
      console.time('ok')
      fun(byteSize,Math.floor(index/4), Math.floor(offset/4));
      console.timeEnd('ok');
      data.set(mem.subarray(0, byteSize));
      // data.set(mem.subarray(index, index+offset));
      ctx.putImageData(imageData,0,0);
      if(index>=byteSize){
        cancelAnimationFrame(_this.timer);
        clearTimeout(_this.timer);
        return
      }
      console.log(index, seek);
      index+=Math.floor(offset/4);
      _this.timer = setTimeout(update, 10);
      // _this.timer = requestAnimationFrame(update);
    }
    update();
  }
  update(){

  }
}