import React from 'react';
import NLarge from './NLarge';

const Buttonfunction=()=>{

    const onnewmatrix=()=>{
        <div><NLarge id_m={2}/></div>
        console.log('1');
    }
    return(

        <button className="button"    onClick={onnewmatrix}> +

        </button>
    )

}
export default Buttonfunction