import React from 'react';
import './style.css';
import Imagens from '../../image'


function Sidebar() {
    return(
    <div className="sidebar">
    <img src={Imagens.Logo_cubos} alt="Logo Cubos Academy"/>
    <div className="link"> 
    <a><img src={Imagens.Home_logo} alt="Home"/>HOME</a>
    <a><img src={Imagens.Cobrancas_logo} alt="Cobranças"/>COBRANÇAS</a>
    <a><img src={Imagens.Clientes_logo} alt="Clientes"/>CLIENTES</a>
    </div>
    <a href="/cobrancas/criar">Criar cobrança</a>
</div>
)};

export default Sidebar;