import React from 'react';
import Matrix from './Matrix';

  
class NLarge extends React.Component{ 
    constructor(props){
        super(props)
        this.state={row:3,colum:3,
        id_matrix:'1'}
        
    }
   
    
  render(){
    return(
      <>
      <h1>р</h1>
      <div className='inputNlargeall'>
        
        <input className='inputNlarge' type="number" row={this.state.row} onChange={event => this.setState({ row: event.target.value })} />
        <input className='inputNlarge' type="number" colum={this.state.colum} onChange={event => this.setState({ colum: event.target.value })} />
        <h1>{this.state.row},{this.state.colum}</h1>
      </div><Matrix str_size={this.state.row} colum_size={this.state.colum} /></>
   )
  }
}
export default NLarge