import React from "react";
import Element from "./Element";
function Str(props){
console.log(props.str_size);
const str=[];
const el=[];
const saving=(input)=>{
    el.push(input);
}
for( let i=0; i<props.str_size; i++){
    let id=props.j+i*props.str_size;
    str.push(<Element id_el={id} onSaveDate={saving}/>)    
}
return(<div className="string_css">{str} {props.onSaveStr(el)}</div>);
}
export default Str
