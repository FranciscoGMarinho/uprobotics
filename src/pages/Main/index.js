import React from 'react';
import { Component, Fragment } from 'react';
import styles from '../../assets/css/robotics.css';
import color from '../../assets/css/colors.css';
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import 'materialize-css';
import '../../App.css';
import '../../assets/css/custom.css';
import Tips from '../Tips';
import Explore from '../Explore';
import About from '../About';
import Create from '../Create';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';



class Main extends React.Component {

  
    render() {

  
        return (

            <Fragment>
              
                    <div id="particles-js" class="primary-color-light">

                        {/* primary content */}
                        <section className="primary-section  valign-wrapper ">
                            <div className="row center-align ">
                                <div className="col s12  tema">
                                    <h3 class="title grey-text text-darken-3">Programe um robô usando Blocos</h3>
                                    <p className="grey-text text-darken-1"> Programe os movimentos de um robô real conectanto  <br />
                                    blocos arrastáveis, gere código-fonte automático e compartilhe com <br />
                                    amigos!
                                </p>

                                    {/* onClick={this.onClick} */}
                                    <button className="btn btn-play z-depth-2 medium  ">
                                        <a class="white-text">Criar Agora</a>
                                        
                                    </button>
                                </div>
                            </div>

                            {/* imagem svg do parte de baixo do main */}
                            <svg class="wave " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#4a148c" fill-opacity="0.2" d="M0,160L60,154.7C120,149,240,139,360,165.3C480,192,600,256,720,266.7C840,277,960,235,1080,213.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>

                            </svg>

                            
                        </section>{/*End: primary content */}
                    </div>

            </Fragment>
        );
    }
}

export default Main;







