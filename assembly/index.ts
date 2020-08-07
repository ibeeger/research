


export function test():i32 {
  return 0
}


export function calculation(d:i32):void{
  for(let i = 0; i<d; i++){
    store<u16>(i, d-i);
  }
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
 

const str:u8[] = [1,3,6,4,9,2,1,8,1,1,9]

export function crypto2(d:i32):i32 {
  for(let i=0; i<d; i++) {
    store<u8>(i, load<u8>(i)-str[i%str.length]);
  }
  return str[3];
}




export function decode(d:i32):i32 {
  for(let i=0; i<d; i++) {
    store<u8>(i, load<u8>(i)+str[i%str.length]);
  }
  return str[1];
}




export function crypto(d:i32):void {
  for(let i=0; i<str.length; i++) {
    store<u16>(i, str[i]);
  }
}


export function getmemory (i:i32):i32 {
   return load<u8>(i);
};



export function clearColor(byte:i32, sr:i8, sg:i8, sb:i8):void{
   for(let j=0; j<byte; j+=4){
     let r = load<i32>(j);
     let g = load<i32>(j+1);
     let b = load<i32>(j+2);
     let a = load<i32>(j+3);
     if(contrast(r,g,b, sr,sg,sb)){
       store<i32>(j, 255);
       store<i32>(j+1, 2);
       store<i32>(j+2, 255);
       store<i32>(j+3, 222);
     } else {
       store<i32>(j, r);
       store<i32>(j+1, g);
       store<i32>(j+2, b);
       store<i32>(j+3, a);
     }
   }
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