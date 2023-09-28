import React, { useState } from 'react'

export default function Immurabledatastructure(props) {

    const [bookInfo,setBookInfo]=useState({bookname:"A Old Book",noOfPages:"28"});
    

    const updateBookInfo=()=>{
        const newBookInfo={...bookInfo}
        newBookInfo.bookname="A Better Book";
        setBookInfo(newBookInfo);
    }
    

    return (
        <>
            <button onClick={updateBookInfo}>Click to update</button>
            <p>{bookInfo}</p>
        </>
    )
}
