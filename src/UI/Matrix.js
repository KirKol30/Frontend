import React from "react";
import Str from "./str";
function Matrix(props) {
    const colum=[];
    const mass=[];
    const savingstr=(elstr)=>
    {
        mass.push(elstr);
    }
    
    for( let i=0; i<props.colum_size; i++){
        colum.push(<Str str_size= {props.str_size} j={i} onSaveStr={savingstr} />)    
    }
    if(props.colum_size<6 && props.str_size<6){
         return(
        <div className="strings">
            {colum}
        </div>
    )}
   
}
export default Matrix