import React,{Component} from 'react';
import ImageEdit from '../utils/image' 
import {loadLocalFile, getInstance, showImage} from '../utils/util'

interface IState {
  width: number,
  height: number
}

export default class ImagePage extends Component{
  state:IState
  media: any
  wsInstance: any
  constructor(props:any){
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  async componentDidMount() {
    const cs = document.querySelector('canvas') as HTMLCanvasElement
    this.media = new ImageEdit(cs);
    this.wsInstance = await getInstance(cs);
    console.log(this.wsInstance);
  }

  updateImage = async (e:any) => {
    let was = this.wsInstance;
    let img:any = await showImage(e);
    // this.media.updateCanvas(img.path[0], was.sortByte, was.mem);
    this.media.updateCanvas(img.path[0], was.sortColors, was.mem); 
  }
   
  change = (e:any) =>{
    if(e.target.files.length){
      loadLocalFile(e.target.files[0], this.updateImage)
    }
  }

  render(){
    let {width,height} = this.state;
    return(<section>
      <header><input type="file" placeholder="选择" onChange={this.change} /> <p id="tips"></p></header>
      <canvas width={width} height={height}></canvas>
    </section>)
  }
}