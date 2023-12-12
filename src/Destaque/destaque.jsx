import React from 'react';
import Card from '../Componentes/Card';
import './destaque.css';
import {  } from 'react-router-dom';

export default function Destaque() {
  const videos = JSON.parse(localStorage.getItem('lista')) || [];

  return (
    <div className="container">
      <div className="header">
        <h1>Let´s Vídeos</h1>
        <h2>Destaques</h2>
      </div>
      <div className="vi">
        {videos.slice(-4).map((video, index) => (                           
          <Card key={index} ytb={video} />      
        ))}
      </div>
    </div>
    
  );
}
