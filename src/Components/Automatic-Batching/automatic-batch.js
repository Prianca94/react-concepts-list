import React, { useState } from 'react'
import Button from '../Presentational-ContainerComp/Button'

export default function AutomaticBatch(props) {

    console.log("Render Automatic Batching");


const [data,setData]=useState("");
const [istoggle,setToggle]=useState(false);
const [fetchData,setFectData]=useState([]);
const [value,setValue]=useState("123");

    const handleClick=()=>{

        setTimeout(()=>{

            
        setData("Priyanka");
        setToggle(true);
        setFectData([]);
        setValue("456");

        },1000);
    }
    

    return (
        <>
            <Button text="Automatic Batching" onClick={handleClick}/>
        </>
    )
}
