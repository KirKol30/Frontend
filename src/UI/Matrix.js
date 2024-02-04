import React from "react";
import Element from "./Element";
class Matrix extends React.Component{
       
    constructor(props){
        super(props)
        this.state={i:3,j:3, m:[]}

        
    } 
    
    render(){
       
            return(
                <div>
                    <Element /*id={str+stl} /*onAdd={this.addElement}*//>
                </div>  
            )
            }

    /*addElement(){
        console.log.user
      } */
}
export default Matrix