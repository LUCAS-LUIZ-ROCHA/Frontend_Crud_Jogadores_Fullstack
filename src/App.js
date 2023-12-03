import { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [jogadorList, setJogadorList] = useState([{}]);
  const [jogadorNome, setJogadorNome] = useState("");
  const [jogadorIdade, setJogadorIdade] = useState("");
  const [jogadorTime, setJogadorTime] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/jogadores")
      .then((resposta) => {
        console.log(resposta.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const adicionarJogador = () => {
    const jogador = {
      jogador_nome: jogadorNome,
      jogador_idade: jogadorIdade,
      jogador_time: jogadorTime,
    };
    axios
      .post("http://127.0.0.1:8000/jogadores", jogador)
      .then((resposta) => {
        alert(resposta);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div
        className="mt-3 justify-content-center align-items-center mx-auto"
        style={{
          width: "60vw",
          backgroundImagem: "#ffffff",
        }}
      >
        <h2 className="text-center text-white bg-success card mb-1">
          Gerenciamneto de Jogadores
        </h2>
        <h6 className="card text-center text-white bg-success mb-3 pb-2">
          Informações de Jogador
        </h6>
        <div className="card-body text-center">
          <h5 className="card text-center text-white bg-dark pd-3 mb-2">
            Cadastro de Jogador
          </h5>
          <span className="card-text">
            <input
              onChange={(evento) => setJogadorNome(evento.target.value)}
              className="mb-2 form-control"
              placeholder="Informe o nome"
            />

            <input
              onChange={(evento) => setJogadorIdade(evento.target.value)}
              className="mb-2 form-control"
              placeholder="Informe a idade"
            />

            <input
              onChange={(evento) => setJogadorTime(evento.target.value)}
              className="mb-2 form-control"
              placeholder="Informe o time"
            />

            <button
              onClick={adicionarJogador}
              className="btn btn-outline-success mb-4"
            >
              Cadastrar
            </button>
          </span>
          <h5 className="card text-center text-white bg-dark mb-4 pd-1">
            Lista de Jogadores
          </h5>
          <div></div>
          <h6 className="card text-center text-light bg-success py-1">
            &copy; Lucas Luiz Rocha - 2023
          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;
