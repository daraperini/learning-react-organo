import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Role from "./componentes/Role";
import Rodape from "./componentes/Rodape";

function App() {
  const roles = [
    {
      nome: "Controlador",
      corPrimaria: "#068DA9",
      corSecundaria: "#b4eff5",
    },
    {
      nome: "Duelista",
      corPrimaria: "#E55807",
      corSecundaria: "#f8be6d",
    },
    {
      nome: "Iniciador",
      corPrimaria: "#57C278",
      corSecundaria: "#aff7d5",
    },
    {
      nome: "Sentinela",
      corPrimaria: "#7E1717",
      corSecundaria: "#e2826a",
    },
  ];

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    debugger
    setJogadores([...jogadores, jogador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        roles={roles.map(role => role.nome)}
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdicionado(jogador)}
      />
      {roles.map((role) => (
        <Role
          key={role.nome}
          nome={role.nome}
          corPrimaria={role.corPrimaria}
          corSecundaria={role.corSecundaria}
          jogadores={jogadores.filter(jogador => jogador.role === role.nome)}
        />
      ))}
      <Rodape/>
    </div>
  );
}

export default App;
