import React from 'react';
import { Component, Fragment } from 'react';
import styles from '../../assets/css/robotics.css';
import color from '../../assets/css/colors.css';
import apresentacao from "../../assets/images/slide.png"
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import 'materialize-css';
import '../../App.css';

class Main extends React.Component {

      render() {
        return (
        
        <Fragment>
    
            <div id="particles-js"> <div class="row marginup"  >
                <div class="col s6 back main_text_apresentation" >
                    <div class="flow-text font-qbook">
                        <h3>Programe um robô usando Blocos</h3>
                        <blockquote class="font-qlight font14" >Programe os movimentos de um robô real conectanto blocos arrastáveis, gere código-fonte automático e compartilhe com amigos! </blockquote>
                        <div class="center">
                            <a class="waves-effect waves-light btn-small"><i class="material-icons left">extension</i>Criar</a>
                            <a class="waves-effect waves-light btn-small marginleft"><i class="material-icons left">bookmark_border</i>Modelos de Projetos</a>
                        </div>
                    </div>
                </div>
                <div class="col s6">
                    <img src={apresentacao} width="80%" />
                </div>
            </div></div>
            
    
      </Fragment>
    );
  }
}

export default Main;




 
    
     
