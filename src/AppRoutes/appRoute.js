import React from "react";
import { Route, Routes } from "react-router-dom";
import Debouncing from "../Components/Debouncing/debouncing";
import CallbackHell from "../Components/CallBackHell/callback";



export default function AppRoute(props) {
    
    return (
        <div>
            <Routes>
                <Route path="/Debouncing" element={<Debouncing/>}/>
                <Route path="/CallbackHell" element={<CallbackHell/>}/>
            
            </Routes>
        </div>
    )
}
