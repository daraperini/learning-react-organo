import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [personagem, setPersonagem] = useState("");
  const [imagem, setImagem] = useState("");
  const [role, setRole] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoJogadorCadastrado({
      nome,
      personagem,
      imagem,
      role,
    })
    setNome("")
    setPersonagem("");
    setImagem("");
    setRole("")
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Personagem"
          placeholder="Informe seu personagem de preferência"
          valor={personagem}
          aoAlterado={(valor) => setPersonagem(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Role"
          itens={props.roles}
          valor={role}
          aoAlterado={(valor) => setRole(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
