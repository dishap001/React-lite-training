
import { useState,useMemo } from 'react';

function Hook3() {
     //useMemo
     const [add,setAdd] =useState(0);
     const [sub,setSub]=useState(100);
 
     const multiplication = useMemo(
         function multiply(){
             console.log('Number is being multiplied when add button is clicked');
             return add*10;
         },[add]);
  return (
    <>
     <h2>Using useMemo</h2>

      {multiplication}<br/>
      <button onClick={()=>setAdd(add+1)}>Addition</button>
      <span >{    add}</span><br/><br/>
      <button onClick={()=>setSub(sub-1)}>Subtraction</button>
      <span>{     sub}</span>
      </>
        )
      }

export default Hook3