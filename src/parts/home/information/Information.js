import React from 'react';

const Information = (props) => {
    return (
        <div className="section white" id="features">
            <div className="container">
                <div className="row">

                    <div className="col s12 m6">
                        <h5 className="start text-primarycolor">Denuncias</h5>
                        <p className="start-paragraph-text text-primarycolor">Nuestras denuncias están siendo atendidas en un 70%. La mayoría de los casos tienen soporte para un proceso penal</p>
                        <ul className="start-feature-list">
                            <li>Si tienes un problema de violencia familiar <a href="#/" target="_blank" rel="noopener noreferrer">denuncia</a> </li>
                            <li>No te quedes callado, podrias ser una victima</li>
                            <li>Recuerda que una ves puesta la denuncia puedes darle un <a href="#/" target="_blank" rel="noopener noreferrer">seguimiento</a> y si quieres saber más de nosotos puedes contactarnos!</li>
                            <li>Está prohibido poner denuncias falsas, podrías entrar a un proceso penal para más información puedes leer nuestros <a href="#/" target="_blank" rel="noopener noreferrer">terminos y condiciones</a></li>
                        </ul>


                    </div><div className="col s6 offset-s3 m6 center">
                        <img alt="lol" className="responsive-img" src="https://www.android-kiosk.com/wp-content/themes/androidkioskcom/images/licensed_green_illustration.png" />
                    </div>

                </div>
                <div className="row">

                    <div className="col s12 m6 center hide-on-small-and-down">
                        <img alt="lol" className="responsive-img" src="https://www.android-kiosk.com/wp-content/themes/androidkioskcom/images/brand_illustration.png" />
                    </div>
                    <div className="col s12 m6">
                        <h5 className="start text-primarycolor">Casos</h5>
                        <ul className="start-feature-list">
                            <li>Actualmente tenemos 1 caso registrado en nuestro sistema</li>
                            <li>1 de nuestos 1 casos han sido resultos</li>
                            <li>Recuerda que nuestos cuentan con protección de datos</li>
                            <li>Si tienes un problema de violencia familiar <a href="#/" target="_blank" rel="noopener noreferrer">denuncia</a> </li>
                        </ul>
                        <p className="start-paragraph-text text-primarycolor">Nosotros de damos las facilidades para que tu caso sea atendido por personas profesionales.</p>
                        <p><a href="#custom">MÁS INFORMACIÓN</a></p>

                    </div>
                    <div className="col s6 offset-s3 m6 center hide-on-med-and-up">
                        <img alt="lol" className="responsive-img" src="https://www.android-kiosk.com/wp-content/themes/androidkioskcom/images/brand_illustration.png" />
                    </div>
                </div>
                <div className="row" id="features-advanced">

                    <div className="col s12 m6">
                        <h5 className="start text-primarycolor">¿Como funciona?</h5>
                        <p className="start-paragraph-text text-primarycolor">Acontinuación te daremos estos tips para registrar tu caso en nuestra página.</p>
                        <ul className="start-feature-list">
                            <li>Registra tus datos personales</li>
                            <li>habilita la solicitud de geolocalización para poder saber tu ubicación</li>
                            <li>Rellena información en los campos correspondientes </li>
                            <li>Si tienes la posibilidad sube fotos</li> 
                            <li>Al finalizar guarda el codigo de barras ;)</li>
                        </ul>
                    </div>
                    <div className="col s6 offset-s3 m6 center">
                        <img alt="lol" className="responsive-img" src="https://www.android-kiosk.com/wp-content/themes/androidkioskcom/images/advanced_illustration.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;