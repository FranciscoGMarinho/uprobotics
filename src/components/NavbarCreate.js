import React from "react";
import M from 'materialize-css'
import 'materialize-css';
import { Link } from "react-router-dom";
import '../assets/css/custom.css';
import logo from '../assets/images/uprobotics/logo-up.svg';

/*
 * NavBar da Página Create
 */

class NavbarCreate extends React.Component {


  componentDidMount() {
    //inicia o materializeCSS
    M.AutoInit();
}
 
  render() {
    return (
      <>
        {/* NAVBAR */}
        <div className="navbar-fixed">
          <nav classNameName="z-depth-0 ">
            <div className="nav-wrapper white  ">

              {/*Esquerda*/}
              <ul id="nav-mobile" className="left  ">
                {/* logo-link */}
                <li className="hover-0"><Link to="/"  ><img src={logo} alt="UpRobotics"/> </Link></li>
                {/* buttons de navegação */}                        
                <li><a className="dropdown-trigger primary-color-text"  data-target="dropdown-language"><i className="material-icons center">language</i></a></li>
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



