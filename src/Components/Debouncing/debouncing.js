import axios from "axios";
import React, { useState,useEffect } from "react";
//import countries from "./Data";
//import axios from "axios";

const Debouncing=()=> {

    const [search,setSearch]=useState("x");

    useEffect(()=>{

        
    const getData=()=>{
        axios.get(`https://openlibrary.org/search.json?title=${search}`).then((res)=>console.log(res.data.docs));
    }
getData();
    },[search]);

    




    // const getData=()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>console.log(res.data));

    // }

    // const handleChange=(event)=>{
    //     setSearch(event.target.value);
    //     console.log(search);

    //     console.log(countries.filter((country)=>country.continent.toLowerCase().includes("Europ")));

    //     // if(search.length>0){
    //     //     countries.filter((item)=>{
    //     //         return item.name.match(search);

    //     //     })
    //     // }
    // }

    return (
        <>
         <h1> Debounce </h1> 

         <input type="text" name="search" placeholder="Enter something"
         className="search" onChange={(event)=>setSearch(event.target.value)} 
         />
{/* <ul>
         {countries.filter((item)=>(item.continent).toLowerCase().includes(search))
         .map((displayitem)=>(
            <li>
              {displayitem.name}--{displayitem.continent}
            </li>
         ))}
         </ul>
 */}

 {/* <table>
    <tbody>
        <tr>
            <th>Country</th>
            <th>Continent</th>
        </tr>
        {countries.filter((item)=>item.name.toLowerCase().includes(search)||item.continent.toLowerCase().includes(search)).map((ditem)=>(<tr>
            <td>{ditem.name}</td>
            <td>{ditem.continent}</td>
        </tr>))}
    </tbody>
 </table>

          */}
        </>
    )
}

export default Debouncing;