import React,{Component,createRef} from 'react';
import {getMemoryInstance} from '../utils/util'

interface IState {
  width: number,
  height: number,
  name: string,
  result: string,
  jsresult: string
}

export default class MemoryPage extends Component{
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
    this.wsInstance = await getMemoryInstance(num);
  }
   
  begin = async (e:any) => {
    let rdm = Math.floor(Math.random()*100000);
     await this.wsInstance.calculation(rdm);
        console.log(rdm, this.wsInstance.mem);
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
        webAssembly
      </header>
      <div className="main">
        <button onClick={this.begin}>点击</button>
      </div>
    </section>)
  }
}