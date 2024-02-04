import React, { useEffect, useState } from "react";
const Button =(props)=>{
    const [click, setClick]= useState(0)
    useEffect(()=>{
        document.title=`вы набрали ${click}`
    })
    return(
        <matrix
            onClick={()=> setClick(click+1)}>
        </matrix>
    )
}