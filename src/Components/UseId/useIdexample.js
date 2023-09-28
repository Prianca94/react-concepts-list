import React, { useId } from 'react'

export default function UseIdexample(props) {

  const id=useId();

    return (
        <>
          <label htmlFor={id+'firstname'}>Firstname</label>
          <input type="text" id={id+'firstname'}  ></input>
        </>
    )
}
