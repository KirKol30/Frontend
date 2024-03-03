
import React, {useState} from "react";
  
const NLarge =(props)=>{ 
    const [row, setRow]=useState(3);
    const id=props.id;
    const [colum, setColum]=useState(3);
    const onchangehandlermr=(event)=>{
      setRow(event.target.value)   
    }
    const onchangehandlermc=(event)=>{
      setColum(event.target.value);
    }
    const onNew=(event)=>{
      event.preventDefault();
      props.onsaverl(row,colum,id);
      setRow('');
      setColum('');
    }
    
  
  
    return(
      <form onSubmit={onNew}>
      <div className=''>
        <input className='inputNlarge' type="number" placeholder='кол-во строк' row={row}  value={row} onChange={onchangehandlermr} />
        <input className='inputNlarge' type="number"  placeholder='кол-во столбцов' colum={colum} value={colum} onChange={onchangehandlermc} />
        <button className="buttons"  type="submit"  >добавить матрицу </button>
        
        <h1>{row},{colum},{props.id}</h1>
        
      </div ></form>
      
   )
   
}
export default NLarge