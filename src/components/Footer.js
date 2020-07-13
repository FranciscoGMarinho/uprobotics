import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <footer className="page-footer primary-color " >
                <div className="container" >
                    <div className="row">
                    <div className="col s12 m3 l3">
                        <h5 className="white-text">Apoio</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">CAPES</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">UFAM</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">iComp</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">PPGI</a></li>
                            </ul>
                        </div>
                        <div className="col s12 m3 l3">
                        <h5 className="white-text">Comunidades</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Fórum de discussão</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Wiki do UpRobotics</a></li>
        
                            </ul>
                        </div>  
                        <div className="col s12 m3 l3">
                        <h5 className="white-text">Sobre</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Acerca do UpRobotics</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Para Pais</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Para Educadores</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Para Indústria</a></li>
                            </ul>
                        </div>
                        <div className="col s12 m3 l3">
                        <h5 className="white-text">Legislação</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Termos de Uso</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Políticas de Privacidade</a></li>
                            </ul>
                        </div>
                                             


                        
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2020 Copyright UpRobotics
              <a className="grey-text text-lighten-4 right" href="#!">Mais Links</a>
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;

