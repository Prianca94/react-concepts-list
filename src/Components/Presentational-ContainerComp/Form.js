import Button from "./Button"

export default function Form(props) {

   const onClick=()=>{
        alert("Hii Form");
    }
    

    return (
        <>
            <Button onClick={onClick} text="Form Button"></Button>
        </>
    )
}

