import React from 'react';

const footer = (props) => {
    return (
        <footer className="page-footer purple" style={{ marginTop: '0px', paddingLeft: '0px' }} id="contact">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Contactanos</h5>
                        <div className="row">
                            <div className="col s12">
                                {/* <button className="btn waves-effect waves-light white light-green-text text-darken-2" >
                                    Chat with us
						            <i className="mdi mdi-message-text right text-darken-2"></i>
                                </button> */}
                            </div>
                        </div>
                        <form className="col s12" id="contactForm">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="mdi mdi-email prefix white-text"></i>
                                    <input id="email" name="email" type="email" className="validate white-text" />
                                    <label htmlFor="email" className="white-text">Correo</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="mdi mdi-pencil prefix white-text"></i>
                                    <textarea id="message" name="message" className="materialize-textarea white-text" style={{ paddingBottom: '0px' }}></textarea>
                                    <label htmlFor="message" className="white-text">Mensaje</label>
                                </div>
                                <div className="col offset-s7 s5">
                                    <button className="btn waves-effect waves-light white light-green-text text-darken-2 right" type="submit">Enviar
							            <i className="mdi mdi-send right text-darken-2"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col offset-l2 l4 s12" style={{ textAlign: 'right' }}>
                        <a href="#/"><h5 className="white-text">Denuncias</h5></a>
                        <ul>
                            <li><span className="white-text">Efren Carrillo<br />Lima - UTP Lima-Centro</span></li>
                            <li><a href="#/" className="white-text">u19303680@utp.edu.pe</a></li>
                            <li><a href="#/"><img alt="Get it on Google Play" src="https://www.android-kiosk.com/wp-content/themes/androidkioskcom/images/google-play-badge.png" width="128" /></a></li>
                        </ul>
                        <span className="white-text right" style={{ fontSize: '0.7em', clear: 'both' }}>Android, Google Play and the Google Play logo are trademarks of Google Inc.</span>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <span className="white-text">&copy; 2020 <a href="#/" className="white-text" target="_blank" rel="noopener noreferrer">Efren Carrillo</a></span>
                    <a href="#/" className="white-text right" title="Privacy Policy">Privacy &amp; Cookies Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default footer;
