import React from "react";
import Str from "./str";
function Matrix(props) {
    const colum=[];
    const mass=[];
    for(let i=0; i<props.colum_size; i++){
        mass[i]=0
    }
    const savingstr=(elstr, id)=>
    {
        mass[id]=elstr;
        
    }
    const saver=()=>{
        props.onsaver(mass)
    }
    
    for( let i=0; i<props.colum_size; i++){
        colum.push(<Str str_size= {props.str_size} id_c={i} onSaveStr={savingstr} newsave={saver} />)    
    }
    if(props.colum_size<6 && props.str_size<6){
         return(
        <div className="strings">
            {colum}
            
        </div>
    )}
   
}
export default Matrix