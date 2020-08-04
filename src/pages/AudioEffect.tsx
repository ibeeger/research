import React,{Component} from 'react'

export default class AudioEffect extends Component {

  changeFile = () => {
    
  }

  render(){
    return<section>
       <input type="file" onChange={this.changeFile}/>
    </section>
  }
}