import { useEffect, useState } from "react";
import useOnline from "./useOnline";


export default function Chat(){

    const isOnline=useOnline();

    return(<>
    {
        isOnline?"I am available ":"Not online"

    }
    </>)

}