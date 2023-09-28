import React, { useDeferredValue, useEffect, useMemo } from 'react'

export default function List({input}) {


    useEffect(()=>{
        console.log("input-",input , "DefferedValue-",defferedValue);

    })
    const LIST_SIZE=2000;
    const defferedValue=useDeferredValue(input);

      
        const list=useMemo(()=>{

            const l=[];
            for(let i=0;i<LIST_SIZE;i++){
                l.push(<div key={i}>{defferedValue}</div>)
            }
            return l;

        },[input]);


        return list;

    }



