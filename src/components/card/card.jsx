import "./Card.css";
import produtoExemplo from "../../assets/computadordemesa.png";

const Card = () => {
  return (
    <>

      <div className="card">

        <div className="div-card-img">
            <img className="img-produto" src={produtoExemplo} alt="produto-do-card" />
        </div>
        
        <div className="div-card-body">

            <div className="container-titulo-escrito">
                <h3 className="titulo-produto">Notebook</h3>
                <h4 className="preco-produto">R$ 3.000</h4>
            </div>

            <div className="container-btn">
                <button className="btn-card-carrinho">Adicionar ao carrinho</button>
                <button className="btn-card-comprar">Comprar</button>
            </div>

        </div>

      </div>

    </>
  );
};

export default Card;