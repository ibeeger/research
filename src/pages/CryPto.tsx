import React,{Component,createRef} from 'react';
import {getInstance, str2ab, ab2str} from '../utils/util'

interface IState {
  width: number,
  height: number,
  name: string,
  result: string,
  arr: number[]
}

export default class CryPtoPage extends Component{
  state:IState
  media: any
  
  wsInstance: any
  txtref = createRef<HTMLInputElement>()
  constructor(props:any){
    super(props);
    this.state = {
      arr: [],
      result: '',
      name: '不聪明的丫头',
      width: window.innerWidth,
      height: window.innerHeight
    }
  }


  async componentDidMount() {
    const d = str2ab('不聪明的丫头');
    let earr = new Uint8Array(d);
    console.log('earr', earr);
    this.wsInstance = await getInstance(earr.length);
    this.wsInstance.mem.set(earr);
    this.wsInstance.crypto2(earr.length);
    let arr = this.wsInstance.mem.subarray(0,earr.length);
    let result = ab2str(arr)
    this.setState({arr,result})
    // this.wsInstance.decode(arr.length);
    // let _arr = this.wsInstance.mem.subarray(0,arr.length);
    // arr.set(_arr);
   
  }
   

  updateText = (e:any) => {
    if(this.txtref && this.txtref.current) {
      const abf = str2ab(this.txtref.current.value);
      let earr = new Uint8Array(abf);
      this.wsInstance.mem.set(earr);
      this.wsInstance.crypto2(earr.length);
      let arr = this.wsInstance.mem.subarray(0,earr.length);
      let result = ab2str(arr)
      this.setState({arr,result, name:this.txtref.current.value || '...'})
    }
  }

  render(){
    let {width,height,name,arr,result} = this.state;
    return(<section>
      <header>
        webAssembly 前端加解密应用
      </header>
      <div className="main">
        <p className="showname">{name}</p>
        <input type="text" ref={this.txtref} className="codeinput" onKeyUp={this.updateText} />
        <p className="showname">结果:<br />{result} <br/>[{arr.join(',')}]</p>
      </div>
      <canvas width={width} height={height}></canvas>
    </section>)
  }
}