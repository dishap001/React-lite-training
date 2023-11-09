import {   useEffect,  useState } from "react";




const Hooks = () =>{
    //useState Hook
    const [counter1,setCounter1] = useState(0);

    const [counter2,setCounter2] = useState(0);

    const handleClick1=()=>{
        setCounter1(counter1+1)
    }

    const handleClick2 =()=>{
        setCounter2(counter2+1);
    }
    //useeffect Hook
    useEffect(()=>{
        console.log('Hello Trellis');
    },[counter1]);

 

    return(
        <>

            <h2>Using useState to update the count</h2>
            <button onClick={handleClick1} style={{marginTop:'50px'}}>Click me 1</button>
            <span  style={{marginTop:'50px'}}> Counter 1 is { counter1} </span>


            <h2>Using useEffect hook </h2>
            <button onClick={handleClick2} style={{marginTop:'50px'}}>Click me 2</button>
            <span  style={{marginTop:'50px'}}>Counter 2 is { counter2} </span>

          
           
        </>

    );
}

export default Hooks;
