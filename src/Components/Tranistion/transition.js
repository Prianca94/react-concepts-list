import React, { useState, useTransition } from 'react';


export default function Transition(props) {
    const [list,setList]=useState([]);
    const [input,setInput]=useState([]);
    const [isPending,startTransition]=useTransition();  
    const List_Size=2000;
    const handleChange=(e)=>{
       setInput(e.target.value);
       startTransition(()=>{
        const l=[];
        for(let i=0;i<List_Size;i++){
            l.push(e.target.value);
        }
        setList(l);
       })
    console.log("list",list);
    }
    return (
        <>
           <input type="text" onChange={handleChange}/> 
           {isPending?"Loading...":
             list.map((item)=><div>{item}</div>)
           }
        </>
    )
}
