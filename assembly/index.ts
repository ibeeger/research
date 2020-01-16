

var num = 0;

export function test():i32 {
  return 0
}


//对比颜色
export function contrast(r1:i32, g1:i32, b1:i32,r2:i32, g2:i32, b2:i32):i32{
  let color1 = r1*0.299 + g1*0.578 + b1*0.114;
  let color2 = r2*0.299 + g2*0.578 + b2*0.114
  if(color1 <= color2) {
    return 1;
  }
  return 0;
}
 


//排序颜色
export function sortColors (byte:i32, index:i32, offset:i32):i32 {
  let byteSize = byte/4;
  let start:i32 = index>offset ? index-offset : 0;
  let end:i32 = index+offset;

  // for(let i = 0; i< end - 1; i++) {
    for (let j = 0; j<byteSize - 1; j++) {
      if(j>end){
        break;
      }
      let pos = j;
      if(contrast(load<u8>(j*4), load<u8>(j*4+1), load<u8>(j*4+2), load<u8>(j*4+4),load<u8>(j*4+5), load<u8>(j*4+6))) {
        let r = load<u8>(j*4+4);
        let g = load<u8>(j*4+5);
        let b = load<u8>(j*4+6);
        let a = load<u8>(j*4+7);
        store<u8>(pos*4 + 4, load<u8>(j*4));
        store<u8>(pos*4 + 5, load<u8>(j*4+1));
        store<u8>(pos*4 + 6, load<u8>(j*4+2));
        store<u8>(pos*4 + 7, load<u8>(j*4+3));
        store<u8>(pos*4 + 0, r);
        store<u8>(pos*4 + 1, g);
        store<u8>(pos*4 + 2, b);
        store<u8>(pos*4 + 3, a);
      }
    }
  // }
  return 0;
}