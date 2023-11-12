import "./Jogador.css";

const Jogador = ({nome, imagem, personagem, corDeFundo}) => {
  return (
    <div className="jogador">
      <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
        <img src={imagem} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{personagem}</h5>
      </div>
    </div>
  );
};

export default Jogador;
