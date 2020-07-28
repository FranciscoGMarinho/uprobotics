import React from 'react'
import App from '../../containers/App'
import Breadcrumb from '../../components/Breadcrumbs'

// backgroud do card-exemplo
import Back from '../../assets/images/back-groud-2.png';


export default function Explore() {
    return (
        <>
            <App>
                <Breadcrumb />

                <div className="primary-color-light-2">
                    {/* 1 section */}
                    <section className="container">

                        {/* 1ª linha */}
                        <div className="row center-align ">
                            {/*Coluna da Esquerda  */}
                            <div className="col s12 m12 l12  left-align">
                                <h4 className='primary-color-text title '> What is Lorem Ipsum?</h4>
                                <p className="flow-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.
                                </p>

                                <div className="divider"></div>

                                <h5 className='header primary-color-text title '> 1. Veja um guia prático</h5>
                                <div className="row">
                                    <div className="col s12 m7 l7 ">
                                        <span className="flow-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book.
                                    </span>
                                    </div>
                                    <div classNameName="col s12 m5 l5 ">
                                        {/* video */}
                                        <div className="video-container">
                                            <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                        {/* FIM: video */}
                                    </div>
                                </div>

                                <div className="divider"></div>

                                <h5 className='primary-color-text title'> 2. Explore os tutoriais</h5>

                                <p className="flow-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.
                                </p>

                                {/* CARDS de exemplos */}
                                <div className="row">
                                    {/* col 1 - card 1 */}
                                    <div className="col s12 m6 l4 ">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src={Back} alt="img1"/>
                                                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">play_circle_filled</i></a>
                                            </div>
                                            <div className="card-content primary-color-text  card-backgroud ">
                                                <span className="card-title">Card Title</span>
                                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End: col 1 */}

                                    {/* col 2 - card 2*/}
                                    <div className="col s12 m6 l4  ">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src={Back}  alt="img2"/>
                                                <a className="btn-floating halfway-fab waves-effect waves-light "><i className="material-icons">play_circle_filled</i></a>
                                            </div>
                                            <div className="card-content primary-color-text card-backgroud">
                                                <span className="card-title">Card Title</span>
                                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End: col 2 */}

                                    {/* col 3 */}
                                    <div className="col s12 m6 l4 ">
                                        <div className="card">
                                            <div className="card-image">
                                                <img src={Back}  alt="img3"/>
                                                <a className="btn-floating halfway-fab waves-effect waves-light "><i className="material-icons">play_circle_filled</i></a>
                                            </div>
                                            <div className="card-content primary-color-text">
                                                <span className="card-title">Card Title</span>
                                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                            </div>
                                        </div>

                                    </div>
                                    {/*End: col 3 - card 3*/}

                                </div>
                                {/* FIM: CARDS de exemplos */}

                            </div>
                        </div>

                    </section>
                    {/*FIM: 1 section */}
                </div>
            </App>
        </>
    );
};
