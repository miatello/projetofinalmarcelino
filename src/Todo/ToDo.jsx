import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function ToDo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem('lista')) || [];
  const [video, setVideo] = useState('');
  const [lista, setLista] = useState(listaLocalStorage || []);
  const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
  const [url, setUrl] = useState('');
  const [canal, setCanal] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    localStorage.setItem('lista', JSON.stringify(lista));
  }, [lista]);

  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      {
        video: video,
        id: id,
        url: url,
        descricao: descricao,
        canal: canal,
      },
    ]);
    setId(id + 1);
    setVideo('');
    setUrl('');
    setDescricao('');
    setCanal('');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>cadastrar</h1>
        <h2>cadastre alguns videos possiveis somentekkkkkkkk</h2>
        <form onSubmit={salvar}>
          <label>Nome do vídeo:</label>
          <input
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}  
          />
          <br></br>
          <br></br>
          <label>URL do vídeo:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Desc do vídeo:</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Nome do canal:</label>
          <input
            type="text"
            value={canal}
            onChange={(e) => setCanal(e.target.value)}
          />
          <button >cadastrar</button>
        </form>
      </div>
    </div>
  );
}
