import React, {useState} from "react";
import NLarge from './UI/NLarge';
import Matrix from './UI/Matrix';
import Selector from "./UI/selector";

  

const App=()=>{
  const[row, setRow]=useState({
    row1:3,
    row2:0
  });
  const[colum, setColum]=useState({
    colum1:3,
    colum2:0
  });
  const[matrixs, setMatrixs]=useState({
    oper:0,
    m1:[],
    m2:[]

});


  const[id,setId]=useState(0);
  const onChangeLarge=(i,j, idm)=>
  { if(idm===0){
    setRow.row1(i);
    console.log('11')
    setColum.colum1(j);}
    if(idm===1){
      setRow.row2(i);
      console.log('22')
    setColum.colum2(j);
    }
    
  }
  const onsaveallm1=(mtr)=>
  {
    setMatrixs.m1(mtr);
    
  }
  const onsaveallm2=(mtr)=>
  {
    setMatrixs.m2(mtr);
    
  }
  const onFirst=()=>{
    setId(0);
  }
  const onSecond=()=>{
    setId(1);
  }
  const listM=
  [
  <Matrix id={0} str_size={row.row1} colum_size={colum.colum1} onsaver={onsaveallm1}/>,
  <Matrix id={1} str_size={row.row2} colum_size={colum.colum2} onsaver={onsaveallm2}/>
  ]
    return(
    <div>
    <form className="formNL">
      <NLarge id_m = {id} onsaverl={onChangeLarge} />
      <Selector/>
    </form>
    <div className="formM">
    <button onClick={onFirst}> A </button>
    <button onClick={onSecond}> B </button>
    {listM}
    </div>
    </div>

    )
  
  
}
export default App 