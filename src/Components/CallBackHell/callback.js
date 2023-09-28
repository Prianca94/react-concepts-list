import React from 'react'

export default function Callback(props) {

    const getRollNo=()=>{

        setTimeout(()=>{

            console.log("Call Api 1");
            let Rollno=[1,2,3,4,5];
            console.log(Rollno);

            setTimeout((rollno)=>{

                const biodata={
                    name:"Vinod",
                    age:20
                }

                console.log(`My roll no is ${rollno} . My name is ${biodata.name} and age is ${biodata.age}`);

                setTimeout((name)=>{

                    console.log(`My roll no is ${rollno} . My name is ${name} and age is ${biodata.age}`);

 

                },2000,biodata.name);


            },2000,Rollno[1]);



        },2000,);

    }
    

    return (
        <>
        <button onClick={getRollNo}>Click here</button>


            CallBack
        </>
    )
}
