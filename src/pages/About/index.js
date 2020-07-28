import React from 'react'
import App from '../../containers/App'
import Breadcrumb from '../../components/Breadcrumbs'

export default function About() {
    return (
        <>
            <App>
                <Breadcrumb/>

                {/* content */}
                <div className="primary-color-light-2">
                    <section className="second-section  valign-wrapper  container">

                        {/* 1ª linha */}
                        <div className="row center-align ">
                            <div className="col s12 ">
                                <h5 className='primary-color-text'>texto texto..</h5>
                            </div>
                        </div>
                        {/* 2ª linha */}
                        <div className="row center-align ">
                            <div className="col s12 ">
                                hhhh
                        </div>
                        </div>

                    </section>
                </div>
            </App>
        </>
    );
};
