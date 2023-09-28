import { useEffect, useState } from "react";
import useOnline from "./useOnline";


export default function Home(){

    const isOnline=useOnline();
   // const getData=useOnline();
    

    return(<>
    {
        isOnline?"I am here to chat":"Offline"
        
    }
    {
       // getData
    }
    
    </>)

}