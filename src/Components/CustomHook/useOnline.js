import { useEffect, useState } from "react";


export default function useOnline(){

    const [isOnline,setOnline]=useState(false);
  //  const [data,setData]=useState("PRiyanka");


    useEffect(()=>{

setTimeout(()=>{
setOnline(true);
//setData("Rahul");

},3000)

    },[]);

     return isOnline;

}