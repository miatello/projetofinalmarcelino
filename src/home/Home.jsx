import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Componentes/Card';
import './Home.css';

export default function Home() {
  const videos = JSON.parse(localStorage.getItem('lista')) || [];

  return (
    <div className="container">
      <div className="header">
        <h1>Let´s Vídeos</h1>
      </div>

      <div className="links">
        <Link to="/todo">cadastrar</Link>
        <Link to="/destaque">destaque</Link>
      </div>

      <div className="videos">
        {videos.map((video, index) => (
          <Card key={index} ytb={video} />
        ))}
      </div>
    </div>
  );
}
