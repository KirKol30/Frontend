import React, {useState} from "react";


const Selector=(props)=>{
    const [oper, setOper]=useState('');
    const onOperHandler=(event)=>{
        setOper(event.target.value)
    }
    
    return(
        <div>
           <select onChange={onOperHandler}>
            <option value='*'>*</option>
            <option value='T' >T</option>
            <option value='+' >+</option>
            <option value='-'>-</option>
           </select>
        </div>    
    )
}

export default Selector