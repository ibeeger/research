
import {instantiateStreaming} from 'assemblyscript/lib/loader';


type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;

export function loadLocalFile(file:any,callback:Function){
  var fileReader = new FileReader();
  fileReader.onload = function(e:any) {
    callback(e.target.result);
  }
  fileReader.readAsArrayBuffer(file);
}

export async function getInstance(byteSize:number) {
  // let initial = 2 * (((byteSize + 0xffff) & ~0xffff) >>> 16);
  // console.log('initial',initial +'kb')
  let memory = new WebAssembly.Memory({ initial:100 });
  console.log('memory',memory)
  let importObject = { env: { memory, abort: () => console.log("Abort!") }};
  const webasly = await instantiateStreaming(
          fetch("/wasm/optimized.wasm?a="+Date.now()),
          importObject
        )
  const mem = new Uint8Array(memory.buffer);
  // console.log('webasly',webasly, mem);

  return {...webasly,mem}
}

export async function getMemoryInstance(byteSize:number) {
  // body...
  let memory = new WebAssembly.Memory({ initial: 100});
  let importObject = { env: { memory, abort: () => console.log("Abort!") }};
  const was = await instantiateStreaming(fetch("/wasm/untouched.wasm?a="+Date.now()), importObject);
  const mem = new Uint8Array(memory.buffer);
  return {...was, mem};
}


export function str2ab(input: string): ArrayBuffer {
  const view = str2Uint8Array(input)
  return view.buffer
}

/** Convert String to Uint8Array */
export function str2Uint8Array(input: string): Uint8Array {
  const encoder = new TextEncoder()
  const view = encoder.encode(input)
  return view
}
export function ab2str(
  input: ArrayBuffer | Uint8Array | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array,
  outputEncoding: string = 'utf8',
): string {
  const decoder = new TextDecoder(outputEncoding)
  return decoder.decode(input)
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