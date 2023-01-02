import "./Banner.css";
import produto from "../../assets/config.svg";

const Banner = () => {
    return (
        <div className="container-banner">

            <div className="container-conteudo-escrito">
                <h1 className="titulo-banner-escrito">Tecnologia para sua <br></br> vida</h1>
                <div className="conteudo-escrito-descricao">
                    Para o seu conforto, estudo ou trabalho doméstico, <br></br> tudo o que você precisa está aqui
                </div>
                <button className="btn-comprar">Comprar agora</button>
            </div>

            <div className="container-da-imagem">
                <img className="produto-banner" src={ produto } alt="produto-em-estoque"/>
            </div>
        </div>
    );
};

export default Banner;