import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function cadastrar() {
  const [atividade, setAtividade] = useState("");
  const [lista, setLista] = useState([]);
  const [url, seturl] = useState(1);
  const [nome, setnome] = useState(1);
  const [artista, setartista] = useState(1);

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
      <Link to="/">home</Link>
      <h1>JCadastrar</h1>
      <form onSubmit={salvar}>
        <p>Nome:</p>
        <input
          type="text"
          value={lista}
          onChange={(e) => {
            setLista(e.target.value);
          }}
        />

        <p>Gol:</p>
        <input
          type="number"
          value={url}
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <p>Idade:</p>
        <input
          type="text"
          value={nome}
          onChange={(e) => {
            setnome(e.target.value);
          }}
        />
        <button>ADICIONAR</button>
      </form>
      {lista.map((lista) => (
        <ul key={lista.id}>
          <li>
            <p>{lista.lista}</p>
            <p>gol:{url.lista}</p>
            <p>idade:{nome.lista}</p>
            <button onClick={() => remover(lista.id)}>Remover</button>
          </li>
        </ul>
      ))}
    </div>
  );
}