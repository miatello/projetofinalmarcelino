import { Link } from "react-router-dom"
import "../style/card.css"

export default function Home (){
    const videos = JOSN.parse(localstorage.getId("Lista")) || [];
    console.log(videos)

    return (

   Lista.map((video) => ( 
    <div className="card">
        <iframe
        width="853"
        height="480"
        src={"https://youtu.be/zG5gWncAhls?si=z2uuT5meBgngCOnI" + video.url.slice(17)}
        frameborder="0"
        allow=""
></iframe>
</div>
)))}

<div className="container">
    <Menu/>
    <NavBar nomeSite={"Nome do Site"} />
    <div className="card-container">
        <Cards Lista={Listavideos} />
    </div>
</div>