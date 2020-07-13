import React from 'react';
import App from '../../containers/App'
import Back from '../../assets/images/back-groud-2.png';
import Breadcrumb from '../../components/Breadcrumbs'
export default function Tips() {

  return (
    <>
      <App>
        <Breadcrumb/>

        {/* second content está em um container*/}
        <div className="primary-color-light-2">
          <section className="second-section  valign-wrapper  container">

            {/* 1ª linha */}
            <div className="row left-align ">
              <div className="col s12 ">
                <h4 className='primary-color-text'>Veja alguns exemplos..</h4>

              </div>

              {/* 2ª linha */}
              <div className="row">

                {/* col 1 - card 1 */}
                <div className="col s12 m4 l4 ">
                  <div className="card">
                    <div className="card-image">
                      <img src={Back} alt="img" />
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
                <div className="col s12 m4 l4  ">
                  <div className="card">
                    <div className="card-image">
                      <img src={Back} alt="img2"/>
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
                <div className="col s12 m4 l4 ">
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
            </div>


          </section>
          {/*End: second content */}
        </div>
      </App>
    </>
  );
}

