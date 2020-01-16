import React,{Component} from 'react';
import MusicMedia from '../utils/media' 
import {loadLocalFile} from '../utils/util'

interface IState {
  width: number,
  height: number
}

export default class IndexPage extends Component{
  state:IState
  media: any
  constructor(props:any){
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  componentDidMount() {
      const cs = document.querySelector('canvas') as HTMLCanvasElement
      this.media = new MusicMedia(cs)
  }

  change = (e:any) =>{
    loadLocalFile(e.target.files[0], this.media.decodeAudio)
  }

  render(){
    let {width,height} = this.state;
    return(<section>
      <header><input type="file" placeholder="选择" onChange={this.change} /> <p id="tips"></p></header>
      <canvas width={width} height={height}></canvas>
      <video id="mainvideo" muted loop autoPlay={true}>
        <source src='//localhost/file/1016279176-preview.mp4' />
      </video>
    </section>)
  }
}