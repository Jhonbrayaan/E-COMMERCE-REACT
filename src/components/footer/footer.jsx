import "./Footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/insta.png";
import linkedin from "../../assets/linkedln.png";

const Footer = () => {
  return (
    <>
      <footer>

        <div className="container-footer">

          <div className="container-conteudo-principal">
            <h2 className="titulo-principal-footer">WebSite E-COMMERCE REACT</h2>
          </div>

          <div>
             <div className="descricao-footer">
                <span> Website developed for an activity delivery by Programadores do Amanhã. </span>
             </div>
          </div>

          <div className="container-sociais">
            <div className="icons-sociais">
                <a href="https://github.com/Jhonbrayaan"> <img className="icon-github" src={ github } alt="icon-github" /> </a>
                <a href="https://www.instagram.com/jhonbrayanx/"> <img className="icon-instagram" src={ instagram } alt="icon-instagram" /> </a>
                <a href="https://www.linkedin.com/in/jhonatanbrayan/"> <img className="icon-linkedin" src={ linkedin } alt="icon-linkedin" /> </a>
            </div>
          </div>

          <div className="container-conteudo-secundario">
            <div>
            <a className="link-repository" href="https://github.com/Jhonbrayaan/E-COMMERCE-REACT">E-commerce React </a>
              <span>Copyright ©2023</span>
            </div>

            <div>

            </div>
          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;