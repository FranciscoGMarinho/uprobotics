import React from 'react';
import { Component, Fragment } from 'react';
import M from 'materialize-css';
import '../../App.css';


class Login extends React.Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    constructor(props) {
        super(props);
        this.state = {active: false};
    }

    render() {
        return (

            <Fragment>
                <section className=" primary-section primary-color-light valign-wrapper  login-background">
                    <div id="login-page" class="row">
                        <div class="col s12 z-depth-0 card-panel card-login">
                            <div class="section">
                                <h4 class="title primary-color-text  center-align">Bem Vindo ao <br />UpRobotcs</h4>
                            </div>

                            <div class="col s12">
                                <ul class="tabs ">
                                    <li    class="tab col s6"><a  href="#test1">Cadastrar</a></li>
                                    <li    class="tab col s6"><a class="active" href="#test2">Entrar</a></li>
                                </ul>
                            </div>
                            <div class="container">

                                {/* Cadastrar */}
                                <div id="test1" class="col s12">
                                    <form class="login-form">
                                        <div class="row">
                                            <div class="input-field col s6">
                                                <input  id="first_name" type="text" class="validate" />
                                                <label for="first_name">First Name</label>
                                            </div>
                                            <div class="input-field col s6">
                                                <input id="last_name" type="text" class="validate" />
                                                <label for="last_name">Last Name</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input id="password" type="password" class="validate" />
                                                <label for="password">Password</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input id="email" type="email" class="validate" />
                                                <label for="email">Email</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class=" col s6">
                                                <p>
                                                    <label>
                                                        <input type="checkbox" class="filled-in" checked="checked" />
                                                        <span>Relembrar</span>
                                                    </label>
                                                </p>
                                            </div>
                                            <div class=" col s6 ">
                                                <p class="right-align"><a href="#" >Esqueceu a senha?</a></p>
                                            </div>
                                        </div>                                      
                                                <div class="section-btn ">
                                                    <button  class="btn btn-play z-depth-2 medium  " type="submit">
                                                        <a class="white-text">Cadastrar</a>
                                                    </button>
                                                </div>
                                    </form>
                                </div>
                                {/*FIM: Cadastrar */}

                                {/* Entrar */}
                                <div id="test2" class="col s12">
                                    <form class="login-form">
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input id="email" type="email" class="validate" />
                                                <label for="email">Email</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <input id="password" type="password" class="validate" />
                                                <label for="password">Password</label>
                                            </div>
                                        </div>
                                        <div class="section-btn ">
                                            <button className="btn btn-play z-depth-2 medium  " type="submit">
                                                <a class="white-text">Entrar</a>
                                            </button>
                                        </div>

                                    </form>
                                </div>
                                 {/*FIM: Entrar */}
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment >
        );
    }
}

export default Login;