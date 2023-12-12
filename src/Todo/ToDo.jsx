import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function ToDo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem('lista')) || [];
  const [video, setVideo] = useState('');
  const [lista, setLista] = useState(listaLocalStorage || []);
  const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
  const [url, setUrl] = useState('');
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
      },
    ]);
    setId(id + 1);
    setVideo('');
    setUrl('');
    setDescricao('');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>cadastrar</h1>
        <form onSubmit={salvar}>
          <label>Nome:</label>
          <input
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}  
          />
          <label>URL:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label>Desc:</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <button>cadastrar</button>
        </form>
      </div>
    </div>
  );
}
