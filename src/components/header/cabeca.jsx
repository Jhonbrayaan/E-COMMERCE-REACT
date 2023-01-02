import './cabeca.css'
import logo from '../../assets/desenvolvedor.png'
import lupa from '../../assets/lupa.png'
import Nav from '../Nav/Nav'

const cabeca = () => {
  return (
    <header>
      <div className="container-caixa-header">
        <div className="container-header-principal">
          <div className="container-logo">
            <h2 className="titulo-header">Purchasing Technologies</h2>
            <img src={logo} alt="logo-da-pagina" className="logo-da-pagina" />
          </div>

          <div className="container-pesquisar">
            <input
              className="input-pesquisar-header"
              type="text"
              placeholder="Search for your desired product..."
            />
            <div className="caixa-lupa-pesquisar">
              <img className="lupa-input" src={lupa} alt="lupa-pesquisar" />
            </div>
          </div>

          <div className="container-usuario">
            <button className="btn-login">Sign In</button>
            <button className="btn-cadastrar">Sign Up</button>
          </div>
        </div>

        <div>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default cabeca
