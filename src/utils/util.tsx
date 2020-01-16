
import {instantiateStreaming} from 'assemblyscript/lib/loader';

export function loadLocalFile(file:any,callback:Function){
  var fileReader = new FileReader();
  fileReader.onload = function(e:any) {
    callback(e.target.result);
  }
  fileReader.readAsArrayBuffer(file);
}

export async function getInstance(canvas:HTMLCanvasElement) {
  let byteSize = canvas.width*canvas.height*4;
  let initial = 2 * (((byteSize + 0xffff) & ~0xffff) >>> 16);
  let memory = new WebAssembly.Memory({ initial });
  let importObject = { env: { memory, abort: () => console.log("Abort!") }};
  const webasly = await instantiateStreaming(
          fetch("/wasm/optimized.wasm?a="+Date.now()),
          importObject
        )
  const mem = new Uint8Array(memory.buffer);
  return {...webasly,mem}
}


export function showImage(bf:any){
  var blob = new Blob( [ bf ], { type: "image/png" } );
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL( blob );
    var img = new Image();
    return new Promise(function(resolve){
      img.onload = resolve;
      img.src = imageUrl;
    })
}