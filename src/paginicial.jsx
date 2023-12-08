import { Link } from "react-router-dom"
import "../style/card.css"

function Cards ({ ListaVideos }) {

    return (

        const videos = JOSN.parse(localstorage.getId("Lista")) || [];

    ListaVideos.map((video) => 
    <div className="card">
        <iframe
        width="853"
        height="480"
        src={"https://youtu.be/zG5gWncAhls?si=z2uuT5meBgngCOnI" + video.url.slice(17)}
        frameborder="0"
        allow=""
></iframe>
</div>
))};

<div className="container">
    <Menu/>
    <NavBar nomeSite={"Nome do Site"} />
    <div className="card-container">
        <Cards ListaVideos={ListaVideos} />
    </div>
</div>