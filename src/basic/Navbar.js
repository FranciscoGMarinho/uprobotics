import React from "react";

// Import Materialize
import M from "materialize-css";//preciso do M para iniciar os componentes do materialize automaticamente dentro da classe
import 'materialize-css';
import { SideNav, SideNavItem, Icon, Button } from 'react-materialize';//itens que vou utilizar dentro do render
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; //itens relacionados as rotas 

import styles from '../assets/css/robotics.css';
//Aqui vou informar ao routes.js quem é que ele vai gerenciar
import Main from '../pages/Main';
import Explore from '../pages/Explore';
import Tips from '../pages/Tips';
import Create from '../pages/Create';
import About from '../pages/About';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';


class Navbar extends React.Component {

// Inicializa automaticamente todas as coisas do Materialize que estou utilizando!
  componentDidMount() {
    M.AutoInit();
  }
//-->fim  

  render() {
    return (
      <Router>
        {/*Esse trecho redimenciona o background da div do meu Sidebar*/}
        <style>
          {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
        </style>
        {/*-->fim*/}
        <nav>
          <div class="nav-wrapper teal lighten-2">
            <Link to="/" class="brand-logo marginleft">
              <b style={{ color: "#ffffff" }}>Up</b>
              <b style={{ color: "#006064" }}><i class="material-icons left">extension</i></b>
              <b style={{ color: "#006064" }}>Robotics</b></Link>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><Link to="/" exact>Home</Link></li> {/*Links para acessar minhas rotas via clique*/}
              <li><Link to="/editor">Criar</Link></li>
              <li><Link to="/tips">Dicas</Link></li>
              <li><Link to="/explore">Explore</Link></li>
              <li> <Link to="/about">Sobre Nós</Link></li>
              <li>
                <div> {/*Esse trecho é o meu SideBar dentro do NavBar, quando o user clica no ícone User ele aparece*/}
                  <SideNav
                    id="SideNav-10"
                    options={{
                      draggable: true
                    }}
                    trigger={<a href="mobile.html" node="button"><i class="material-icons">account_circle</i></a>}>
                    <SideNavItem
                      user={{
                        background: 'https://placeimg.com/640/480/tech',
                        email: 'jdandturk@gmail.com',
                        image: 'static/media/react-materialize-logo.824c6ea3.svg',
                        name: 'John Doe'
                      }}
                      userView
                    />
                    <SideNavItem
                      href="#!icon"
                      icon={<Icon>cloud</Icon>}
                    >
                      First Link With Icon
                    </SideNavItem>
                    <SideNavItem href="#!second">
                      Second Link
                    </SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>
                      Subheader
                    </SideNavItem>
                    <SideNavItem
                      href="#!third"
                      waves
                    >
                      Third Link With Waves
                    </SideNavItem>
                  </SideNav>
                </div> {/*fim do Sidebar*/}
              </li>
            </ul>
          </div>
        </nav>


        {/* Um <Switch> examina seus filhos <Route> e
            renderiza o primeiro que corresponde ao URL atual. */}
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/explore" component={Explore} />
          <Route path="/editor" component={Create} />
          <Route path="/tips" component={Tips} />
        </Switch>

      </Router>
    );
  }
}

export default Navbar;


