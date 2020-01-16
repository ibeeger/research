import Shape from './shapes'

var AudioContext = window.AudioContext;
var audioContext = new AudioContext();
var audioBufferSourceNode:any;
const colors = ['#ea8798','#f29f82','#f7cd70','#fffe71','#deec5e', '#a9d16a','#00fc00','#ccff00']

export default class MusicMedia {
  _timer:any
  _ctx:any
  _cs:any
  _content:Array<any> = []
  _analyser:any
  _deg:number = 0
  constructor(cs:HTMLCanvasElement){
    this._cs = cs;
    const ctx = cs.getContext('2d');
    this._ctx = ctx;
  }

  start(buffer:any){
    cancelAnimationFrame(this._timer);
    if (audioBufferSourceNode) {
      audioBufferSourceNode.stop();
    }
    audioContext = new AudioContext();
    this._analyser = audioContext.createAnalyser();
    audioBufferSourceNode = audioContext.createBufferSource();
    audioBufferSourceNode.connect(this._analyser);
    this._analyser.connect(audioContext.destination);
    audioBufferSourceNode.buffer = buffer;
    audioBufferSourceNode.start(0);
    audioBufferSourceNode.onended = function() {
      this.isplay = false;
      cancelAnimationFrame(this._timer);
    };
    for(let i=0; i<3; i++) {
      this.appendShap(i*5+3, this._cs.width/2*(i+1), i);
    }
    this._update();
  }

  showBuffer(buffer:any, offset:number = 0){
    const lth = buffer.getChannelData(1).length;
    const arr = buffer.getChannelData(1);
    const ctx = this._ctx;
    const cs = this._cs;    
				let w = Math.floor(lth/cs.width);
				offset = Math.round(cs.width*offset);
				ctx.fillStyle = '#efefef'
				const list = []
				for(let i =0; i<cs.width; i++) {
					let _h = arr[i*w]*cs.height;
					list.push(_h);
					if(i<offset) {
						ctx.fillStyle = "#ccc";
						ctx.fillRect(i,(cs.height-_h)/2,1,_h);
					} else {
						ctx.fillStyle = "#efefef";
						ctx.fillRect(i,(cs.height-_h)/2,1,_h);
					}
					ctx.save();
				};
				ctx.save();
  }


  

  decodeAudio = (fileContent:any) => {
    let _this = this;
    audioContext.decodeAudioData(fileContent, (buffer) => {
      // _this.showBuffer(buffer);
      _this.start(buffer);
    },function(eee){
      console.log('eee',eee)
    });
  }

  appendShap(slid:number, r:number, i:number){
    let cs = this._cs;
    let _shap = new Shape(slid, {x:cs.width/2, y: cs.height/2} , r);
    _shap.color = colors[this._content.length%colors.length];
    _shap.step = (i+1)*0.23
    this._content.push(_shap);
  }

  drawShape(shape:any, i?:number) {
    let ctx = this._ctx;
    shape._update()
    let list = shape.getDrawPosition();
    ctx.strokeStyle = shape.color;
    ctx.lineWidth = 4
    ctx.beginPath();
    ctx.moveTo(list[0]['x'],list[0]['y']);
    for(let i=0; i<list.length; i++){
      ctx.lineTo(list[i]['x'], list[i]['y'])
    };
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 30;
    ctx.shadowColor = shape.color;
    ctx.closePath();
    ctx.stroke();
    ctx.save();
    // ctx.fill();
  } 

  _update=() => {
    let ctx = this._ctx, cs = this._cs;
    let analyser = this._analyser;
    let array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        ctx.clearRect(0,0,cs.width,cs.height);
        for(let i = 0; i<this._content.length; i++) {
          this._content[i] && (this._content[i].r = Math.max(this._content[i].r, array[i*25]));
          this.drawShape(this._content[i], i);
        }
        this._deg++
				if(this._deg>=360){
          this._deg=0;
        }
        
    this._timer = requestAnimationFrame(this._update);
  }
}