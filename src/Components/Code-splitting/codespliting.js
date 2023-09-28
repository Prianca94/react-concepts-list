
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
const Home=React.lazy(()=>import('./Home'));

const About=React.lazy(()=>import('./About'));


export default function Codespliting(props) {
    

    return (
        
        // <Routes>
        //     <React.Suspense fallback={<p>Loading...</p>}>
        //     <Route path="/">
        //         <Home/>
        //     </Route> 
        //     <Route path="/about">
        //         <About/>
        //     </Route> 
        //     </React.Suspense>
            
        // </Routes>
        <>
        
        <React.Suspense fallback={<p>Loading...</p>}>
<Home/>
<About/>
        </React.Suspense>
            </>
        
    )
}
