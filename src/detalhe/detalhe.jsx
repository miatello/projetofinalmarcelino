import { useParams, Link } from "react-router-dom";
import React from 'react';
import Card from "../Componentes/Card";
import './detalhe.css';

export default function Detalhe() {
    const { id } = useParams();
    const videos = JSON.parse(localStorage.getItem('lista')) || [];
    const buscaId = videos.find((video) => video.id == id) || null;

    return (
        <div className="container">
            <div className="video-container">
                <Card ytb={buscaId} />
                <p className="description">{buscaId.descricao}</p>
                <Link to="/" className="link-back">Home</Link>
            </div>
        </div>
    );
}
