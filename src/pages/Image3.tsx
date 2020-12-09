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
    let byteSize = cs.width*cs.height*4;
    this.wsInstance = await getInstance(byteSize);
    // console.log(this.wsInstance);
    // this.change(null);
  }

  updateImage = async (e:any) => {
    let img:any = await showImage(e);
    this.setState({
      width:img['path'][0]['width'],
      height:img['path'][0]['height']
    })
  }
   
  change = (e:any) =>{
    let was = this.wsInstance;
    fetch('http://localhost/file/sound.mp3',{
    }).then(res=>{
      return res.arrayBuffer();
      // return res.blob();
    }).then((r)=>{
      let rr = new Uint8Array(r);
      // let url = window.URL.createObjectURL(r);
      // let rs = window.URL.revokeObjectURL(url)
      // console.log(url, rs);


      // let bl = new Blob([r],{type: r.type});
      // console.log(bl);
      this.media.updateCanvas3(rr,  was.mem); 
    })
  }

  render(){
    let {width,height} = this.state;
    return(<section>
      <header></header>
      <canvas width={width} height={height}></canvas>
    </section>)
  }
}