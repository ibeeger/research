import React,{Component,createRef} from 'react';
import {getInstance} from '../utils/util'

interface IState {
  width: number,
  height: number,
  name: string,
  result: string,
  jsresult: string
}

export default class Calculation extends Component{
  state:IState
  media: any
  
  wsInstance: any
  txtref = createRef<HTMLInputElement>()
  constructor(props:any){
    super(props);
    this.state = {
      jsresult:'-',
      result: '-',
      name: '1000000',
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  async componentDidMount() {
    let num = Number(this.state.name);
    this.wsInstance = await getInstance(num);
  }
   
  begin = (e:any) => {
    if(this.txtref && this.txtref.current) {
      let st = Date.now();
      let result = this.wsInstance.calculation(Number(this.txtref.current.value));
      console.log(result);
      this.setState({result: (Date.now() - st)+'ms' , name:this.txtref.current.value || '...'})
    }
  }

  beginjs = (e:any) => {
    if(this.txtref && this.txtref.current) {
      let t = 0;
      let tt = Date.now();
      console.time('ok')
      for(let i = Number(this.txtref.current.value); i>0; i--){
        t++;
      }
      console.timeEnd('ok')
      this.setState({jsresult: (Date.now() - tt)+'ms'})
    }
  }

  updateText = (e:any) => {
    if(this.txtref && this.txtref.current) {
      // let result = this.wsInstance.calculation(Number(this.txtref.current.value));
      // this.setState({result, name:this.txtref.current.value || '...'})
    }
  }

  render(){
    let {width,height,name,result,jsresult} = this.state;
    return(<section>
      <header>
        webAssembly 运算对比
      </header>
      <div className="main">
        <p className="showname">{name}</p>
        <input type="text" ref={this.txtref} defaultValue={name} className="codeinput" onKeyUp={this.updateText} />
        <input type='button' value="开始计算as" className="btn" onClick={this.begin} />
        <input type='button' value="开始计算js" className="btn" onClick={this.beginjs} />
        <p className="showname">结果:<br />
        assembly:{result} 
        <br/>
        jscore:{jsresult}
        </p>
      </div>
    </section>)
  }
}