import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Componentes/Card';
import './destaque.css';

export default function Destaque() {
  const videos = JSON.parse(localStorage.getItem('lista')) || [];

  return (
    <div className="container">
      <div className="header">
        <h1>Let´s Vídeos</h1>
      </div>
      <div className="timeline">
        {videos.slice(-4).map((video, index) => (                           
          <Card key={index} ytb={video} />      
        ))}
      </div>
      <div className="links">
        <Link to="/" className="button-link">Home</Link>
      </div>
    </div>
    
  );
}
