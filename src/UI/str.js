import React from "react";
import Element from "./Element";
function Str(props){
console.log(props.str_size);
const str=[];
const el=[];
for(let i=0; i<props.str_size; i++){
    el[i]=0;
}
const saving=(input,idl )=>{
    el[idl]=input;
    
}
const onSaveSave=()=>{
    props.onSaveStr(el,props.id_c);
    props.newsave();
}
for( let i=0; i<props.str_size; i++){
    let id=i;
    str.push(<Element id_el={id} onSaveDate={saving} onsavesaver={onSaveSave}/>)    
}
return(<div className="string_css">{str} </div>);
}
export default Str
