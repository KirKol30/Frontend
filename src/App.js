import React from 'react';
import NLarge from './UI/NLarge';
import Data from './UI/Data';
  

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      element_list:[]
    }
  }
  render(){ 
    return(
    <><NLarge />
    <Data element_list={this.state.addElement} /></> 
    )
  }
  
}
export default App 