import React from 'react';
import 'materialize-css';
import M from 'materialize-css'
import LoginContainer from '../../containers/LoginContainer'
import './Styles/index.css';
import { Link } from "react-router-dom";



class Login extends React.Component {

    componentDidMount() {
        //inicia o materializeCSS
        M.AutoInit();
    }

    constructor(props) {
        super(props);
        this.state = {
            sigin: props.signin,
            sigup: props.signup

        }
    }

    render() {
        return (
            <>
                <LoginContainer>

                    <section className=" section-login primary-color-light  login-background">



                        <div className="row size white">
                            {/* título */}
                            <div className="">
                                <Link to="/"> <h5 className="title primary-color-text  center-align">Bem Vindo ao <br />UpRobotcs</h5> </Link>
                            </div>
                            {/* tab */}
                            <div className="col s12">
                                <ul id="tabs-swipe-demo" className="tabs">
                                    <li className="tab col s6"><a className={this.state.sigup} href="#test-swipe-1">Registrar</a></li>
                                    <li className="tab col s6"><a className={this.state.sigin} href="#test-swipe-2">Entrar</a></li>
                                </ul>
                            </div>

                            {/* Registrar */}
                            <div className="container">
                                <div id="test-swipe-1" className="col s12">
                                    <form className="login-form">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input id="first_name" type="text" className="validate" />
                                                <label for="first_name">Nome de usuário</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input id="password" type="password" className="validate" />
                                                <label for="password">Senha</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input id="password2" type="password" className="validate" />
                                                <label for="password2">Confirmar Senha</label>
                                            </div>
                                        </div>

                                        <div className="section-btn ">
                                            <button className="btn btn-play z-depth-2 medium  " type="submit">
                                                <a className="white-text">Registrar</a>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* Fim: Cadastrar */}

                            {/* Entrar */}
                            <div className="container">
                                <div id="test-swipe-2" className="col s12 white">
                                    <form className="login-form">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input id="email" type="email" className="validate" />
                                                <label for="email">Email</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input id="password" type="password" className="validate" />
                                                <label for="password">Password</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className=" col s6">
                                                <p>
                                                    <label>
                                                    <input type="checkbox" className="filled-in" checked="checked"  />
                                                        <span>Relembrar</span>
                                                    </label>
                                                </p>
                                            </div>
                                            <div className=" col s6 ">
                                                <p className="right-align"><a href="#" >Esqueceu a senha?</a></p>
                                            </div>
                                        </div>
                                        <div className="section-btn ">
                                            <button className="btn btn-play z-depth-2 medium  " type="submit">
                                                <a className="white-text">Entrar</a>
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            {/* Fim: Entrar */}

                        </div>

                    </section>

                </LoginContainer>
            </>
        );
    }
}

export default Login;