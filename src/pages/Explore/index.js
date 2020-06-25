import React, { Fragment } from 'react';

class Explore extends React.Component {

    render() {
        return (
            <Fragment>
                <nav class="breadcrumb-color">
                    <div class="nav-wrapper  container ">
                        <div class="col s12">
                            <a href="#!" class="breadcrumb">Home</a>
                            <a href="#!" class="breadcrumb">Explorar</a>
                        </div>
                    </div>
                </nav>

            <div class="primary-color-light-2">
                <section className="section  valign-wrapper  container">

                    {/* 1ª linha */}
                    <div className="row center-align ">
                        <div className="col s12 ">
                        <h5 class='primary-color-text'>texto..</h5>
                        </div>
                    </div>
                    {/* 2ª linha */}
                    <div className="row center-align ">
                        <div className="col s12 ">
                            texto
                        </div>
                    </div>

                </section>
            </div>
            </Fragment >
        );
    }


};
export default Explore;