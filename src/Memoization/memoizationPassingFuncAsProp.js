import React, { useState } from 'react'

export default function MemoizationPassingFuncAsProp(props) {
    
    const [input,setInput]=useState("");
    const [count,setCount]=useState(0);

    // const incrementCount=()=>{
    //     setCount(count+1);
    // }

    const incrementCount=React.useCallback(()=>setCount(count+1),[count])

    return (
        <>
               <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/><br/>
            <button onClick={incrementCount}>Increment</button><br/>
            Input is:{input}<br/>
            Count is:{count}<br/>
            <ChildComponent count={count} onClick={incrementCount}/>
        </>
    )
}


const ChildComponent=React.memo(function ChildComponent({count , onClick}){

    console.log("Child rendered");

    return(<>
    
    
    <h4>Child Count is:{count}</h4>
    <button onClick={onClick}>Child Button</button>
    </>)


});