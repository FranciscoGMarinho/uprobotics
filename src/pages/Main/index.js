import React from 'react';
import 'materialize-css';
import imagem from '../../assets/images/uprobotics/code-robo.svg';
import App from '../../containers/App';
import {  Link } from "react-router-dom"; 


export default function Home() {


    return (
        <>
            <App>
                <div  id="particles-js  login" className="primary-color-light">
                    {/* primary content */}
                    <section className="primary-section  valign-wrapper   imagem-backgroud">
                        <div className="row left-align ">
                            <div className="col s12 m6 l6  tema ">
                                <div className="">
                                    <h3 className="title primary-color-text">Programe um robô usando Blocos</h3>
                                    <p className=" primary-color-text "> Programe os movimentos de um robô real conectanto  <br />
                                    blocos arrastáveis, gere código-fonte automático e compartilhe com <br />
                                    amigos!
                                    </p>
                               
                                       <Link to="/editor" className="white-text btn btn-play z-depth-2 medium "> Criar Agora </Link> 
                                      
                              
                                </div>
                            </div>
                            {/* imagem */}
                            <div className="col s12 m6 l6  right-align">
                                <img className="responsive-img" src={imagem}   alt="img" />
                            </div>
                        </div>
                    </section>{/*End: primary content */}
                </div>
            </App>
        </>
    );

}








