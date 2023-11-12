import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <section>
        <ul className="listaDeLinks">
          <li>
            <a target="_blank" href="facebook.com"><img src="/imagens/fb.png" alt="Logo do Facebook"></img></a>
          </li>
          <li>
            <a target="_blank" href="twitter.com"><img src="/imagens/tw.png" alt="Logo do Twitter"></img></a>
          </li>
          <li>
            <a target="_blank" href="instagram.com"><img src="/imagens/ig.png" alt="Logo do Instagram"></img></a>
          </li>
        </ul>
      </section>
      <section className="logo">
        <img src="/imagens/logo.png" alt=""></img>
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
