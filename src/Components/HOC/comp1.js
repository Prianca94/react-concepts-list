import { forwardRef } from "react";
import "../../App.css";
import withDimensions from "./WithDimensions";

const comp1=(props,fwdrefFromparent)=>{

    
    return(<div className="comp1" ref={fwdrefFromparent}>
        Hey I am comp 1 and my width is {props.width} .My random number is {props.randomnumber}
     
    </div>)
}

export default withDimensions(forwardRef(comp1));