import React from 'react';
import './Layer.css';

const Layer = (props) => {
    return (
        <div className="section white no-pad-top">
            <div className="section green accent-3 no-pad-bot z-depth-1 start-splash-section">
                <div className="container start-splash-container">
                    <div className="row">
                        <div className="col s12 l6 text-center">
                            <div className="white-text start-splash-header-content">
                                <h3 className="white-text start-header-paragraph-text text-left">
                                    Boton de Panico
                                </h3>
                                <p className="white-text start-header-paragraph-text text-left">Con este boton podrás alertar tu situación en tiempo real</p>
                                <br/>
                                <a href="/" className="waves-effect waves-light btn-floating btn-large green">
                                    <i className="material-icons">tap_and_play</i>
                                </a>
                            </div>
                        </div>
                        <div className="col s12 l6">
                            <div className="splash-image-container">
                                <img alt="Boton" src="https://www.android-kiosk.com/wp-content/themes/androidkioskcom/images/splash5.png" className="splash-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layer;
