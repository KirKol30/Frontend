
import Matrix from './Matrix';
import React, {useState} from "react";

  
const NLarge =()=>{ 
    const [row, setRow]=useState(3);
    const [colum, setColum]=useState(3);
    const id_matrix='1';
    const m1=[1];
    const onchangehandlermr=(event)=>{
      setRow(event.target.value)   
    }
    const onchangehandlermc=(event)=>{
      setColum(event.target.value);
    }
    
    const onsaveallm=(input)=>{
      m1[0]=input;
      console.log(m1);
    }
    
  
    return(
      <>
      <h1>р</h1>
      <div className='inputNlargeall'>
        
        <input className='inputNlarge' type="number" row={row} onChange={onchangehandlermr} />
        <input className='inputNlarge' type="number" colum={colum} onChange={onchangehandlermc} />
        <h1>{row},{colum}</h1>
      </div><Matrix str_size={row} colum_size={colum} onsaver={onsaveallm}/></>
   )
}
export default NLarge