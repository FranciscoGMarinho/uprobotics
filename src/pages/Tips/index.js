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
            <div className="row left-align ">
              <div className="col s12 ">
                <h4 class='primary-color-text'>Veja alguns exemplos..</h4>
                
              </div>

              {/* 2ª linha */}
              <div class="row">

                {/* col 1 - card 1 */}
                <div className="col s12 m4 l4 ">
                  <div class="card">
                    <div class="card-image">
                      <img src={Back} />                      
                      <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">play_circle_filled</i></a>
                    </div>
                    <div class="card-content primary-color-text  card-backgroud ">
                    <span class="card-title">Card Title</span>
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
                      <a class="btn-floating halfway-fab waves-effect waves-light "><i class="material-icons">play_circle_filled</i></a>
                    </div>
                    <div class="card-content primary-color-text card-backgroud">
                    <span class="card-title">Card Title</span>
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
                      <a class="btn-floating halfway-fab waves-effect waves-light "><i class="material-icons">play_circle_filled</i></a>
                    </div>
                    <div class="card-content primary-color-text">
                    <span class="card-title">Card Title</span>
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                  </div>

                </div>
                {/*End: col 3 - card 3*/}

              </div>
            </div>

            
          </section>
          {/*End: second content */}
        </div>
      </Fragment>
    );
  }
}

export default Tips;