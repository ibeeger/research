import React, { Component } from 'react';
import { loadLocalFile, getInstance, showImage } from '../utils/util'
import { instantiateStreaming } from 'assemblyscript/lib/loader';

const Color:any = {
    r:0,
    g:1,
    b:2
}

export default class VideoPage extends Component {
    state: any = {
        width: 100,
        height: 100,
        rst:[]
    }
    ctx:any = null;
    cs:any = null;
    imgdata:any = null;
    mem:any = null;
    wsInstance:any = null;
    memory = new WebAssembly.Memory({ initial: 40, maximum: 65536 })

    componentDidMount() {   
        
        let {width, height} = this.state;

        this.cs = document.querySelector('canvas') as HTMLCanvasElement
        this.ctx = this.cs.getContext('2d');
        this.ctx.fillStyle ="#0c9"
        this.ctx.fillRect(0,0,10,10);

        let size = width*height*4;
        let init = 40;

        let importObject = { env: { memory: this.memory, abort: () => console.log("Abort!") } };
        instantiateStreaming(fetch("/wasm/optimized.wasm?d="+Date.now()), importObject)
            .then((obj: any) => {
                this.wsInstance = obj;
                this.mem = new Uint8Array(this.memory.buffer);
            }).catch((e)=>{
                console.log(e);
            });
    }

    changeValue = (e:any) => {
        let {width, height} = this.state;
        let size = width*height*4;
        let attr:string = e.target.id;
        let img = this.ctx.getImageData(0,0,width,height);
        
        let imgdata  = img.data;

        this.mem.set(imgdata);
        let rst = this.mem.subarray(0, size);
        console.log(imgdata[0],imgdata[4],imgdata[8]);
        this.wsInstance.change(size, Color[attr], e.target.value*1);
        rst = this.mem.subarray(0, size);
        if(imgdata){
            imgdata.set(rst);
            this.ctx.clearRect(0,0, width,height);
            this.ctx.putImageData(img,0,0);
            console.log(rst[0],rst[4],rst[8], rst.length, e.target.id);
        }
    }

    updateImage = async (e:any) => {
        let {width, height} = this.state;
        let size = width*height*4;
        let img:any = await showImage(e);
        // this.setState({
        //   width:img['path'][0]['width'],
        //   height:img['path'][0]['height']
        // });
        this.ctx.drawImage(img.path[0], 0, 0, width, height);
        this.imgdata = this.ctx.getImageData(0,0,100,100);
        this.mem.set(this.imgdata.data);

      }
       
      change = (e:any) =>{
        if(e.target.files.length){
          loadLocalFile(e.target.files[0], this.updateImage);
        }
      }

    render() {
        let { height, width, rst } = this.state;
        return (<section className="vcon">
            <header>
                <input type="file" accept="image/*" placeholder="选择" onChange={this.change} /> 
                <input type="range" min="0" max="255" defaultValue="128" id="r" onChange={this.changeValue} />
                <input type="range" min="0" max="255" defaultValue="128" id="g" onChange={this.changeValue} />
                <input type="range" min="0" max="255" defaultValue="128" id="b" onChange={this.changeValue} />
            </header>
            <canvas className="canvas-cs" width={height} height={width}></canvas>
            <video id="mainvideo" muted loop autoPlay={true}>
            </video>
            <div className="aff">
            {rst.join(',')}
            </div>
        </section>)
    }
}