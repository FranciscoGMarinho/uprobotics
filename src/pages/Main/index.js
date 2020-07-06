import React from 'react';
import { Component, Fragment } from 'react';
import styles from '../../assets/css/robotics.css';
import color from '../../assets/css/colors.css';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import 'materialize-css';
import '../../App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import imagem from '../../assets/images/uprobotics/code-robo.svg';



class Main extends React.Component {


    render() {
        return (
            <Fragment>
                <div id="particles-js" class="primary-color-light">

                    {/* primary content */}
                    <section className="primary-section  valign-wrapper   imagem-backgroud">
                        <div className="row left-align ">
                            <div className="col s12 m6 l6  tema ">
                                <div className="">
                                    <h3 class="title primary-color-text">Programe um robô usando Blocos</h3>
                                    <p className=" primary-color-text "> Programe os movimentos de um robô real conectanto  <br />
                                    blocos arrastáveis, gere código-fonte automático e compartilhe com <br />
                                    amigos!
                                    </p>                                    
                                    <button className="btn btn-play z-depth-2 medium  ">
                                        <a class="white-text">Criar Agora</a>
                                    </button>
                                </div>
                            </div>
                            {/* imagem */}
                            <div className="col s12 m6 l6  right-align">
                                <img className="responsive-img" src={imagem} />
                            </div>
                        </div>
                    </section>{/*End: primary content */}
                </div>

            </Fragment>
        );
    }
}

export default Main;







