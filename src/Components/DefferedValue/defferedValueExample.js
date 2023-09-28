import React, { useState } from "react";
import List from "./List";

export default function DefferedValueExample(props) {

    const [input,setInput]=useState("");

    console.log("input",input);

    

    return (
        <>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <List input={input}/>
        </>
    )
}
