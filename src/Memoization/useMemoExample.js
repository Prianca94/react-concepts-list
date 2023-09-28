import React, { useState } from 'react'

const expensiveFunc=(count)=>{
    for(let i=0;i<10000;i++){
         return count*3;
    }
    console.log("exp func");
}

export default function UseMemoExample(props) {
    const [input,setInput]=useState("");
    const [count,setCount]=useState(0);

    //const countF=React.useMemo(()=>{return expensiveFunc(count)},[count]);
    const countF=expensiveFunc(count);


    const incrementCount=React.useCallback(()=>setCount(count+1),[count])


    return (
        <>
                  <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/><br/>
            <button onClick={incrementCount}>Increment</button><br/>
            Input is:{input}<br/>
            Count*3 is :{countF}<br/>
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
