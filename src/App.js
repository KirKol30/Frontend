import React from 'react';
import NLarge from './UI/NLarge';


  

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      main_matrix:[]
    }
  }
  render(){ 
    return(
    <div><NLarge/></div>
    )
  }
  
}
export default App 