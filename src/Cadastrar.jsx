import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function cadastrar() {
  const Lista = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState("");
  const [id, setId] = useState([]);
  const [url, seturl] = useState(1);
  const [nome, setnome] = useState(1);
  const [artista, setArtista] = useState(1);

  const salvar = (e) => {
    e.preventDefault();
    setLista([
      ...lista,
      {
        lista: lista,
        url: url,
        nome: nome,
        artista: artista,
      },
    ]);
    setId(id + 1);
    setLista("");
  };

  return (
    <div>
      <h1>Cadastrar vídeo</h1>
      <form onSubmit={salvar}>
        <p>Canal:</p>
        <input
          type="text"
          value={lista}
          onChange={(e) => {
            setLista(e.target.value);
          }}
        />

        <p>Nome do video:</p>
        <input
          type="text"
          value={url}
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
      
        <p>Artista:</p>
        <input
          type="text"
          value={nome}
          onChange={(e) => {
            setArtista(e.target.value);
          }}
        />
        <button>ADICIONAR</button>
      </form>
      {Lista.map((lista) => (
        <ul key={lista.id}>
          <li>
            <p>{lista.lista}</p>
            <p>gol:{url.lista}</p>
            <p>idade:{nome.lista}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}