import React from "react";
import {  Link } from "react-router-dom";  
import '../assets/css/custom.css';
import 'materialize-css';
import M from 'materialize-css'
import logo from '../assets/images/uprobotics/logo-up.svg';


class Navbar extends React.Component {

  componentDidMount() {
    //inicia o materializeCSS
    M.AutoInit();
  }

  render() {
    return (
      <>
        {/* NAVBAR */}
        <div className="navbar-fixed">
          <nav className=" z-depth-0 ">
            <div className="nav-wrapper white  ">
              {/* logo */}
              <Link to="/" className="marginleft ">
                <a className="brand-logo "><Link to="/"  ><img src={logo} alt="UpRobotics" /> </Link></a>
              </Link>

              <ul id="nav-mobile" className="right hide-on-med-and-down ">
                {/* buttons de navegação */}
                <li><Link className="primary-color-text" to="/" exact>Home</Link></li>
                <li><Link className="primary-color-text" to="/editor">  Criar</Link></li>
                <li><Link className="primary-color-text" to="/tips">Dicas</Link></li>
                <li><Link className="primary-color-text" to="/explore">Explorar</Link></li>
                <li><Link className="primary-color-text" to="/about">Sobre Nós</Link></li>

                {/* button entar e Registar */}
                <li><Link className="primary-color-text btn btn-user" to="/signin" exact>Entrar
                     </Link>
                </li>
                <li><Link className="primary-color-text btn btn-user" to="/signup" exact>Registrar
                    </Link>
                </li>
              </ul>

              {/* menu sidnav invisivel para telas grandes  "hide-on-large-only"  */}
              <a href="#" data-target="slide-out" className="sidenav-trigger  primary-color-text">
                <i className="material-icons">menu</i>
              </a>
             

            </div>
          </nav>
        </div>
        {/*END: NAVBAR */}



        {/* SIDENAV */}
        <ul id="slide-out" className="sidenav  hide-on-large-only ">
          {/* icon sidnav */}
          <li className="user-view valign-wrapper center-icon ">
            <div className="white-text ">
              <a className="sidenav-close sidenav-trigger  ">
                <i className="material-icons">extension</i>
              </a>
            </div>
          </li>

          {/* buttons de navegação */}
          <li><Link className="white-text sidenav-close center" to="/" exact>Home</Link></li>
          <li><Link className="white-text sidenav-close center" to="/editor">Criar</Link></li>
          <li><Link className="white-text sidenav-close center" to="/tips">Dicas</Link></li>
          <li><Link className="white-text sidenav-close center" to="/explore">Explorar</Link></li>
          <li><Link className="white-text sidenav-close center" to="/about">Sobre Nós</Link></li>
          <li><Link className="white-text sidenav-close center" to="/signin">Entrar</Link></li>
          <li><Link className="white-text sidenav-close center" to="/signup">Registrar</Link></li>

          {/* icon close */}
          <li className="user-view valign-wrapper center-icon  ">
            <div className="white-text  ">
              <a href="#"  className="sidenav-close sidenav-trigger  ">
                <i className="material-icons">close</i>
              </a>
          
            </div>
          </li>
        </ul>
        {/*End: SIDNAVE */}

      </>
    );
  }
}

export default Navbar;



