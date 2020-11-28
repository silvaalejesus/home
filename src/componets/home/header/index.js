import * as React from "react";
import './style.css';
import Cifrao from '../../../image/cifrao.svg'
import usuario_logo from '../../../image/usuario.svg'

function Header (){
    const [valor, setValor] = React.useState(0);
    return(
        <div className="divBranca">
          {/*aqui tera os paddings */}
        <div className="saldoemconta">
          <div>
            <img src={Cifrao} alt= "valor"/><span>Saldo em conta</span>
          </div>
          <span className="saldoTotal">R$ {valor}</span>
        </div>
        <img src={usuario_logo} alt="perfil"/>
      </div>
    );
}

export default Header;