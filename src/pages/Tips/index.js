import React from 'react';
import { Component, Fragment } from 'react';
import styles from '../../assets/css/robotics.css';
import color from '../../assets/css/colors.css';
import apresentacao from "../../assets/images/slide.png"
import { Button, Card, Row, Col } from 'react-materialize';
import M from 'materialize-css';
import '../../App.css';

import Back from '../../assets/images/back-groud-2.png';


class Tips extends React.Component {

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (

      <Fragment>
        <nav class="breadcrumb-color">
          <div class="nav-wrapper  container ">
            <div class="col s12">
              <a href="#!" class="breadcrumb">Home</a>
              <a href="#!" class="breadcrumb">Dicas</a>
            </div>
          </div>
        </nav>

        {/* second content está em um container*/}
        <div class="primary-color-light-2">
          <section className="section  valign-wrapper  container">

            {/* 1ª linha */}
            <div className="row center-align ">
              <div className="col s12 ">
                <h5 class='primary-color-text'>Veja alguns exemplos..</h5>
              </div>

              {/* 2ª linha */}
              <div class="row">

                {/* col 1 - card 1 */}
                <div className="col s12 m4 l4 ">
                  <div class="card">
                    <div class="card-image">
                      <img src={Back} />
                    </div>
                    <div class="card-content primary-color-text ">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                  </div>
                </div>
                {/*End: col 1 */}

                {/* col 2 - card 2*/}
                <div className="col s12 m4 l4  ">
                  <div class="card">
                    <div class="card-image">
                      <img src={Back} />
                      <a class="btn-floating halfway-fab waves-effect waves-light "><i class="material-icons">aspect_ratio</i></a>
                    </div>
                    <div class="card-content primary-color-text">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                  </div>
                </div>
                {/*End: col 2 */}

                {/* col 3 */}
                <div className="col s12 m4 l4 ">
                  <div class="card">
                    <div class="card-image">
                      <img src={Back} />
                      <a class="btn-floating halfway-fab waves-effect waves-light "><i class="material-icons">aspect_ratio</i></a>
                    </div>
                    <div class="card-content primary-color-text">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                  </div>

                </div>
                {/*End: col 3 - card 3*/}

              </div>
            </div>

            {/* imagem svg do parte de baixo do main */}
            <svg class="wave " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#4a148c" fill-opacity="0.2" d="M0,160L60,154.7C120,149,240,139,360,165.3C480,192,600,256,720,266.7C840,277,960,235,1080,213.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>

            </svg>
          </section>
          {/*End: second content */}
        </div>
      </Fragment>
    );
  }
}

export default Tips;