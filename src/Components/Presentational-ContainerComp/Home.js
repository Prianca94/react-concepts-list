import Button from "./Button"

export default function Home(props) {

   const onClick=()=>{
        alert("Hii Home");
    }
    

    return (
        <>
            <Button onClick={onClick} text="Home Button"></Button>
        </>
    )
}
