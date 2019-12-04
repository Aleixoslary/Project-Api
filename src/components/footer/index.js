import React from 'react';
import '../../assets/css/footer/footer.css';
import FacebookLogo from '../../assets/img/footer-fb.png';
import InstagramLogo from '../../assets/img/instagram.png';
import TwitterLogo from '../../assets/img/twitter.png';
import PinterestLogo from '../../assets/img/pinterest.png';

function index() {
    return(
        <div className="Footer"> 
            <div className="pai">
                <div className="tabela1">
                    <ul>
                        <li>Contato</li>
                        <li>Encontre uma Loja</li>
                        <li>Informação de Envio</li>
                        <li>Verifique o status de Ordem</li>
                        <li>FAQ</li>
                        <li>Cartões de Presente</li>
                    </ul>
                </div>
               
                <div className="tabela2">
                    <ul>
                        <li>Sobre Nós</li>
                        <li>Nosso Blog</li>
                        <li>Carreiras</li>
                        <li>Presentes Corporativos</li>
                        <li>Politica de Privacidade</li>
                    </ul>
                </div>
                </div>
                <div className="pai2">
                    <div className="tabela3">
                        <img src={FacebookLogo}/>
                        <img src={InstagramLogo}/>
                        <img src={TwitterLogo}/>
                        <img src={PinterestLogo}/>
                </div>      
                <div className="linha1">
                    <p>Precisa de ajuda? Ligue-nos:</p>
                    <p className="numero">11 960589940</p>
                </div>  
            </div>
    
        </div>
    );
}

export default index;