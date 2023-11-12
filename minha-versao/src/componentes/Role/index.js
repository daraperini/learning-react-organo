import Jogador from "../Jogador";
import "./Role.css";

const Role = (props) => {
  const corDeFundo = { backgroundColor: props.corSecundaria };

  return (
    props.jogadores.length > 0 && (
      <section className="role" style={corDeFundo}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="jogadores">
          {props.jogadores.map((jogador) => (
            <Jogador
              corDeFundo={props.corPrimaria}
              key={jogador.nome}
              nome={jogador.nome}
              personagem={jogador.personagem}
              imagem={jogador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Role;
