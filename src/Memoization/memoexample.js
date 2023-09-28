import React, { useState } from 'react'

export default function Memoexample(props) {

    const [input,setInput]=useState("");
    const [count,setCount]=useState(0);

    

    return (
        <>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/><br/>
            <button onClick={(e)=>setCount(count+1)}>Increment</button><br/>
            Input is:{input}<br/>
            Count is:{count}<br/>
            <ChildComponent count={count}/>
        </>
    )
}

const ChildComponent=React.memo(function ChildComponent({count}){

    console.log("Child rendered");

    return(<>
    
    
    <h4>Child Count is:{count}</h4>
    </>)


});
