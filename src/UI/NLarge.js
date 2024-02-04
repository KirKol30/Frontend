import React from 'react';
import Matrix from './Matrix';

  
class NLarge extends React.Component{ 
    constructor(props){
        super(props)
        this.state={row:3,colum:3}
        
    }
   
    
  render(){
    return(
      <><div><input type="number" row={this.state.row} onChange={event => this.setState({ row: event.target.value })} />
        <input type="number" colum={this.state.colum} onChange={event => this.setState({ colum: event.target.value })} />
        <h1>{this.state.row},{this.state.colum}</h1>
      </div><Matrix row={this.state.row} colum={this.state.colum} /></>
   )
  }
}
export default NLarge