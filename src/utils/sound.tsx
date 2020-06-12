

export default class Sound {
  atx = new AudioContext();
  compressor = this.atx.createDynamicsCompressor()
  constructor(){
    this.compressor.connect(this.atx.destination);
  }
  play = () => {
    
  }
}