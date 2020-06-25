import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <footer class="page-footer primary-color " >
                <div class="container" >
                    <div class="row">
                    <div class="col s12 m3 l3">
                        <h5 class="white-text">Apoio</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">CAPES</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">UFAM</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">iComp</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">PPGI</a></li>
                            </ul>
                        </div>
                        <div class="col s12 m3 l3">
                        <h5 class="white-text">Comunidades</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Fórum de discussão</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Wiki do UpRobotics</a></li>
        
                            </ul>
                        </div>  
                        <div class="col s12 m3 l3">
                        <h5 class="white-text">Sobre</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Acerca do UpRobotics</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Para Pais</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Para Educadores</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Para Indústria</a></li>
                            </ul>
                        </div>
                        <div class="col s12 m3 l3">
                        <h5 class="white-text">Legislação</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="#!">Termos de Uso</a></li>
                                <li><a class="grey-text text-lighten-3" href="#!">Políticas de Privacidade</a></li>
                            </ul>
                        </div>
                                             


                        
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2020 Copyright UpRobotics
              <a class="grey-text text-lighten-4 right" href="#!">Mais Links</a>
                    </div>
                </div>
            </footer>
        );
    };
};

export default Footer;

