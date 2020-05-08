import React from 'react';

const Qr = (props) => {
    return (
        <div className="section" id="provisioning">
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 ">
                        <h5 className="start text-primarycolor">QR</h5>
                        <p>La mejor forma de que tu puedas darle seguimiento a tu caso es mediante nuestro codigo de barras, ten encuenta que debes guardarlo y recuerda que puedes descargarlo o recibir un email</p>
                        <ul style={{
                            marginBottom: '16px',
                            paddingLeft: '16px'
                        }}>
                            <li style={{ margin: '5px 0', padding: '0', listStyle: 'initial', fontSize: '14px' }}>El codigo sirve para poderle dar seguimiento</li>
                            <li style={{ margin: '5px 0', padding: '0', listStyle: 'initial', fontSize: '14px' }}>Todos nuestros casos tienen un codigo QR</li>
                            <li style={{ margin: '5px 0', padding: '0', listStyle: 'initial', fontSize: '14px' }}>Puedes usar tu navegador chrome para escanear este codigo QR</li>
                        </ul>
                        <div className="center">
                            <a className="waves-effect waves-light btn" href="#/" style={{ marginBottom: '10px' }}>Más información</a>
                        </div>

                    </div>
                    <div className="col s6 offset-s3 m6 center">
                        <img alt="Icon" className="responsive-img" src="https://www.android-kiosk.com/wp-content/themes/androidkioskcom/images/ic_launcher_provisioning.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qr;