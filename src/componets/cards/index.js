import * as React from 'react';
import Clientes from '../../image/clientes.svg'

function SecaoPrincipal (){
    return(
         <div>
            <cardConteudo icon={Clientes} title='clientes'/>
            <span>conteudo</span>
        </div>
        )
};

export default SecaoPrincipal;