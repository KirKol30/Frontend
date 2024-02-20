
import React, {useState} from "react";
// import Matrix from "./Matrix"; 

const Element=(props)=>{
    const id_el=props.id_el
    const [numb, setNumb]=useState('');
    const numbChangeHandler=(event)=>{
        setNumb(event.target.value)
       props.onSaveDate(event.target.value, id_el);
        props.onsavesaver();
       
    }
    
    return(
        <form >
            <input className="element" type='number'  onChange={numbChangeHandler} /*this.props.onAdd({
                el: this.state.el})*/ />
        </form>    
    )
}

export default Element