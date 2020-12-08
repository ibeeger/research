import React, { Component } from 'react';
import { loadLocalFile, getInstance, showImage } from '../utils/util'
import { instantiateStreaming } from 'assemblyscript/lib/loader';


export default class VideoPage extends Component {
    state: any = {
        width: 100,
        height: 100,
    }

    componentDidMount() {   

        let {width, height} = this.state;

        const cs = document.querySelector('canvas') as HTMLCanvasElement
        const ctx:any = cs.getContext('2d');
        ctx.fillStyle ="#c3f"
        ctx.fillRect(0,0,1,1);

        let size = width*height*4;

        var memory = new WebAssembly.Memory({ initial: 10, maximum: 20 });
        let importObject = { env: { memory, abort: () => console.log("Abort!") } };

        instantiateStreaming(fetch("/wasm/optimized.wasm?d="+Date.now()), importObject)
            .then((obj: any) => {
                var imgdata:any = ctx?.getImageData(0,0,width,height).data;
                var mem = new Int32Array(memory.buffer);
                // var mem = new Int16Array(memory.buffer);
                console.log(mem);
                mem.set(imgdata);
                obj.change();
                console.log(mem);
            }).catch((e)=>{
                console.log(e);
            });
    }

    change = (e: any) => {

    }

    render() {
        let { height, width } = this.state;
        return (<section>
            <header><input type="file" accept="video/*" placeholder="选择" onChange={this.change} /> <p id="tips"></p></header>
            <canvas className="canvas-cs" width={height} height={width}></canvas>
            <video id="mainvideo" muted loop autoPlay={true}>
            </video>
        </section>)
    }
}