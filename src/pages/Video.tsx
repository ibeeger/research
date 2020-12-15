import React, { Component } from 'react';
import { loadLocalFile, getInstance, showVideo } from '../utils/util'
import { instantiateStreaming } from 'assemblyscript/lib/loader';

const Color:any = {
    r:0,
    g:1,
    b:2
}

export default class VideoPage extends Component {
    state: any = {
        width: 256,
        height: 256,
        rst:[]
    }
    timer:any = null;
    ctx:any = null;
    cs:any = null;
    imgdata:any = null;
    mem:any = null;
    wsInstance:any = null;
    cachearray:any = null;
    video:any = null;
    memory = new WebAssembly.Memory({ initial: 20})

    componentDidMount() {   
        
        let {width, height} = this.state;

        this.cs = document.querySelector('canvas') as HTMLCanvasElement
        this.ctx = this.cs.getContext('2d');

        let size = width*height*4;
        let init = 40;

        let importObject = { env: { memory: this.memory, abort: () => console.log("Abort!") } };
        instantiateStreaming(fetch("/wasm/untouched.wasm?d="+Date.now()), importObject)
            .then((obj: any) => {
                this.wsInstance = obj;
                // this.memory.grow(10);
                this.mem = new Uint8Array(this.memory.buffer);
                this.ctx.fillStyle = 'rgba(128,128,128,255)';
                this.ctx.fillRect(0,0,width,height);
                this.imgdata = this.ctx.getImageData(0,0,width,height);
                // this.cachearray = this.ctx.getImageData(0,0,width,height).data;
                }).catch((e)=>{
                console.log(e);
            });

        // fetch("/wasm/untouched.wasm?d="+Date.now()).then((res)=>{
        //     return res.arrayBuffer()
        // }).then((bf)=>{
        //     return WebAssembly.compile(bf);
        // }).then((module)=>{
        //     let instance = new WebAssembly.Instance(module);
        //     console.log('module',instance);
        // })
    }

    changeTestValue = (e:any) => {
        let arr = new Uint8Array(64*1024*2);
        this.mem.set(arr);
        this.wsInstance.changeTest(arr.byteLength, 3, e.target.value);
        let rst1 = this.mem.subarray(arr.byteLength, arr.byteLength*2);
        let rst0 = this.mem.subarray(0, arr.byteLength);
        arr.set(rst1);
    }

    changeValue =async (e:any) => {
        let {width, height} = this.state;
        let size = width*height*4;
        let attr:string = e.target.id;

        let imgdata = this.imgdata.data;
        if(this.cachearray){
            imgdata = this.cachearray;
        }
        this.mem.set(imgdata);
        console.log(size, Color[attr], e.target.value);
        this.wsInstance.change(size, Color[attr], e.target.value*1);
        // let rst0 = this.mem.subarray(0, size);
        let rst = this.mem.subarray(size, size*2);
        if(this.imgdata){
            this.imgdata.data.set(rst);
            // console.log(rst);
            this.ctx.clearRect(0,0, width,height);
            this.ctx.putImageData(this.imgdata,0,0);
            // console.log(rst[0],rst[4],rst[8], rst.length, e.target.id);
        }
    }

    updateImage = async () => {
        let {width, height} = this.state;
        console.log(this.video.videoWidth)
        this.ctx.drawImage(this.video, 0, 0, width, height);
        this.imgdata = this.ctx.getImageData(0,0,width,height);
        this.cachearray = this.ctx.getImageData(0,0,width,height);
        this.mem.set(this.imgdata.data);
    //    this.timer= requestAnimationFrame(this.updateImage);
      }
       
      change = async (e:any) =>{
        if(e.target.files.length){
           this.video = await showVideo(e.target.files[0]);
           console.log(this.video);
            this.video.ontimeupdate = ()=>{
                this.updateImage();
            }
           this.video.onend = ()=>{ 
               cancelAnimationFrame(this.timer);
           }
        }
      }

    render() {
        let { height, width, rst } = this.state;
        return (<section className="vcon">
            <header className="vd-header">
                <input type="file" accept="video/*" placeholder="选择" onChange={this.change} /> 
                <input type="range" min="0" max="255" defaultValue="128" id="r" onChange={this.changeValue} />
                <input type="range" min="0" max="255" defaultValue="128" id="g" onChange={this.changeValue} />
                <input type="range" min="0" max="255" defaultValue="128" id="b" onChange={this.changeValue} />

                {/* <input type="range" min="0" max="255" defaultValue="128"  onChange={this.changeTestValue} /> */}

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