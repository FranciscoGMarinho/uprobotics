import React from "react";
import M from 'materialize-css'
import 'materialize-css';
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";
import '../assets/css/custom.css';
import logo from '../assets/images/uprobotics/logo-up.svg';
import $ from 'jquery'

/*
 * NavBar da Página Create
 */

class NavbarCreate extends React.Component {
  constructor(props) {
    super(props);
}

  componentDidMount() {
    //inicia o materializeCSS
    M.AutoInit();

    $(window).on('hashchange', function() {
      return window.location.href='/editor'
    });

  }

  close = () => { 
    const r = window.confirm("Ao sair seus blocos de códigos serão perdidos. Deseja continuar?")
    if(r){
     return window.location.href='/'
    }
  }




  render() {
    return (
      <>
        {/* NAVBAR */}
        <div className="navbar-fixed">
          <nav className="z-depth-0 ">
            <div className="nav-wrapper white  ">

              {/*Esquerda*/}
              <ul id="nav-mobile" className="left  ">
                {/* logo-link */}
                <li className="hover-0">
                  <Link onClick={this.close}><img src={logo} alt="UpRobotics" /> </Link>
                </li>
                {/* buttons de navegação */}
                <li><a className="dropdown-trigger primary-color-text" data-target="dropdown-language"><i className="material-icons center">language</i></a></li>
                <li><a className="dropdown-trigger primary-color-text" href="#" data-target="dropdown-arquivo">Arquivo</a></li>
                <li><a className="primary-color-text" >Tutoriais</a></li>
              </ul>

              {/*Direita*/}
              <ul id="nav-mobile" className="right hide-on-med-and-down ">
                {/* button entar e Registar */}
                <li><Link className="primary-color-text btn btn-user" to="/signin" exact>Entrar
                    </Link>
                </li>
                <li><Link className="primary-color-text btn btn-user" to="/signup" exact>Registrar
                  </Link>
                </li>

              </ul>


            </div>
          </nav>

          {/* dropdown-Arquivo*/}
          <ul id="dropdown-arquivo" className="dropdown-content">
            <li><a href="#!">Novo</a></li>
            <li><a href="#!">Importar</a></li>
          </ul>
          {/* dropdown-language */}
          <ul id="dropdown-language" className="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
          </ul>

        </div>
        {/*END: NAVBAR */}

      </>
    );
  }

}

export default NavbarCreate;



